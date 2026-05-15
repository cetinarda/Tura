import { useTuraStore } from '../store/useStore';
import { t, TranslationKey, Lang } from './index';

export function useI18n() {
  const { language } = useTuraStore();
  const lang: Lang = language ?? 'tr';
  return {
    t: (key: TranslationKey) => t(key, lang),
    lang,
  };
}
