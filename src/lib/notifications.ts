import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function requestNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

const MORNING_MESSAGES = [
  'Bugünün kartı seni bekliyor. ✦',
  'Yunus Emre bugün sana ne söyleyecek?',
  'Sufi meclisin açıldı. Telefonu salla.',
  'Gün başlamadan rehberini al.',
  'Bugünün taşı, hayvanı ve sözü hazır.',
];

function pickMessage(): string {
  return MORNING_MESSAGES[Math.floor(Math.random() * MORNING_MESSAGES.length)];
}

export async function scheduleDailyReminder(hour = 8, minute = 0): Promise<void> {
  if (Platform.OS === 'web') return;
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'TURA',
      body: pickMessage(),
      sound: 'default',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
      hour,
      minute,
      repeats: true,
    },
  });
}

export async function cancelDailyReminder(): Promise<void> {
  if (Platform.OS === 'web') return;
  await Notifications.cancelAllScheduledNotificationsAsync();
}
