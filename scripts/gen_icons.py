#!/usr/bin/env python3
"""Generate Tura app icon assets.
Design: dark cosmic background, golden 8-point star center, kilim-band ring."""

import math
import os
from PIL import Image, ImageDraw, ImageFilter

ASSETS = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'assets')
os.makedirs(ASSETS, exist_ok=True)

# Brand palette
BG_DEEP   = (13, 11, 20)      # #0D0B14
BG_MID    = (28, 23, 48)      # subtle purple
BG_GLOW   = (46, 37, 64)      # #2e2540
GOLD      = (218, 175, 92)    # warm gold
GOLD_DIM  = (140, 105, 50)
TEAL      = (87, 167, 167)
LAVENDER  = (160, 140, 200)


def radial_bg(size, center_color, edge_color):
    """Soft radial gradient (cosmic mist)."""
    img = Image.new('RGB', (size, size), edge_color)
    px = img.load()
    cx = cy = size / 2
    max_r = math.sqrt(2) * size / 2
    for y in range(size):
        for x in range(size):
            d = math.sqrt((x - cx) ** 2 + (y - cy) ** 2) / max_r
            d = min(1.0, d)
            r = int(center_color[0] * (1 - d) + edge_color[0] * d)
            g = int(center_color[1] * (1 - d) + edge_color[1] * d)
            b = int(center_color[2] * (1 - d) + edge_color[2] * d)
            px[x, y] = (r, g, b)
    return img


def draw_eight_star(draw, cx, cy, r_outer, r_inner, color):
    """8-point sharp star (Anadolu kilim yıldızı / Selçuklu yıldızı)."""
    pts = []
    for i in range(16):
        angle = math.pi / 2 + i * (math.pi / 8)
        r = r_outer if i % 2 == 0 else r_inner
        pts.append((cx + r * math.cos(angle), cy - r * math.sin(angle)))
    draw.polygon(pts, fill=color)


def draw_kilim_ring(draw, cx, cy, radius, count, color, dim_color):
    """Diamond+triangle motif ring around center."""
    for i in range(count):
        a = 2 * math.pi * i / count
        x = cx + radius * math.cos(a)
        y = cy + radius * math.sin(a)
        s = 18  # marker size
        # Alternate diamond / small triangle
        if i % 2 == 0:
            pts = [(x, y - s), (x + s, y), (x, y + s), (x - s, y)]
            draw.polygon(pts, fill=color)
        else:
            pts = [(x, y - s * 0.7), (x + s * 0.7, y + s * 0.5), (x - s * 0.7, y + s * 0.5)]
            draw.polygon(pts, fill=dim_color)


def make_icon(size, with_ring=True, with_glow=True):
    base = radial_bg(size, BG_GLOW, BG_DEEP)
    img = base.convert('RGBA')
    draw = ImageDraw.Draw(img)
    cx, cy = size / 2, size / 2

    # Subtle outer halo (golden glow)
    if with_glow:
        halo = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        hd = ImageDraw.Draw(halo)
        hd.ellipse(
            [cx - size * 0.42, cy - size * 0.42, cx + size * 0.42, cy + size * 0.42],
            outline=(*GOLD, 60), width=int(size * 0.012),
        )
        halo = halo.filter(ImageFilter.GaussianBlur(size * 0.02))
        img = Image.alpha_composite(img, halo)
        draw = ImageDraw.Draw(img)

    # Outer thin ring
    if with_ring:
        draw.ellipse(
            [cx - size * 0.40, cy - size * 0.40, cx + size * 0.40, cy + size * 0.40],
            outline=(*GOLD, 180), width=max(2, int(size * 0.005)),
        )
        # Kilim diamond ring
        draw_kilim_ring(draw, cx, cy, size * 0.40, 12,
                        (*GOLD, 220), (*LAVENDER, 200))

    # Inner ring (teal)
    draw.ellipse(
        [cx - size * 0.30, cy - size * 0.30, cx + size * 0.30, cy + size * 0.30],
        outline=(*TEAL, 130), width=max(1, int(size * 0.003)),
    )

    # Center 8-point star
    draw_eight_star(draw, cx, cy, size * 0.22, size * 0.085, (*GOLD, 255))
    # Smaller inner star (lavender) for depth
    draw_eight_star(draw, cx, cy, size * 0.08, size * 0.03, (*LAVENDER, 230))

    return img.convert('RGB')


# ─── 1024 master icon ─────────────────────────────────────────────────────
icon = make_icon(1024)
icon.save(os.path.join(ASSETS, 'icon.png'), 'PNG', optimize=True)
print(f'icon.png 1024x1024')

# ─── Adaptive (Android) — transparent bg, design in safe zone (~66% center) ──
def make_adaptive(size=1024):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    cx, cy = size / 2, size / 2
    # Safe zone: inner ~66% (Android may mask to circle/squircle)
    # Use smaller relative sizes so design stays inside circle mask
    draw.ellipse(
        [cx - size * 0.28, cy - size * 0.28, cx + size * 0.28, cy + size * 0.28],
        outline=(*GOLD, 180), width=max(2, int(size * 0.005)),
    )
    draw_kilim_ring(draw, cx, cy, size * 0.28, 12, (*GOLD, 220), (*LAVENDER, 200))
    draw.ellipse(
        [cx - size * 0.21, cy - size * 0.21, cx + size * 0.21, cy + size * 0.21],
        outline=(*TEAL, 130), width=max(1, int(size * 0.003)),
    )
    draw_eight_star(draw, cx, cy, size * 0.16, size * 0.06, (*GOLD, 255))
    draw_eight_star(draw, cx, cy, size * 0.06, size * 0.022, (*LAVENDER, 230))
    return img

adaptive = make_adaptive(1024)
adaptive.save(os.path.join(ASSETS, 'adaptive-icon.png'), 'PNG', optimize=True)
print(f'adaptive-icon.png 1024x1024 (transparent bg)')

# ─── Splash — centered star on dark bg, sparse design ─────────────────────
def make_splash(size=2048):
    img = radial_bg(size, BG_MID, BG_DEEP).convert('RGBA')
    draw = ImageDraw.Draw(img)
    cx, cy = size / 2, size / 2
    # Thin gold ring
    draw.ellipse(
        [cx - size * 0.22, cy - size * 0.22, cx + size * 0.22, cy + size * 0.22],
        outline=(*GOLD, 200), width=max(2, int(size * 0.004)),
    )
    draw_eight_star(draw, cx, cy, size * 0.16, size * 0.06, (*GOLD, 255))
    draw_eight_star(draw, cx, cy, size * 0.06, size * 0.022, (*LAVENDER, 220))
    return img.convert('RGB')

splash = make_splash(2048)
splash.save(os.path.join(ASSETS, 'splash-icon.png'), 'PNG', optimize=True)
print(f'splash-icon.png 2048x2048')

# ─── Favicon (web) ────────────────────────────────────────────────────────
fav = make_icon(96, with_ring=False, with_glow=False)
fav.save(os.path.join(ASSETS, 'favicon.png'), 'PNG', optimize=True)
print(f'favicon.png 96x96')

print('\nAll assets generated.')
