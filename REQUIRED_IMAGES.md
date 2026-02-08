# Required Images for SEO

Image generation quota exhausted. Please create the following images manually:

## 1. icon-192.png
- **Size**: 192x192 pixels
- **Format**: PNG with transparency
- **Content**: DK-OctoBot logo icon only (no text)
- **Location**: Save to `d:\OctoBot Site\client\public\icon-192.png`
- **Design**: Use the logo-compact.svg as reference, rasterize to PNG
- **Purpose**: PWA app icon, manifest.json reference

## 2. icon-512.png
- **Size**: 512x512 pixels
- **Format**: PNG with transparency
- **Content**: DK-OctoBot logo icon only (no text)
- **Location**: Save to `d:\OctoBot Site\client\public\icon-512.png`
- **Design**: Use the logo-compact.svg as reference, rasterize to PNG
- **Purpose**: PWA app icon, manifest.json reference

## 3. logo.png
- **Size**: High resolution (recommend 1000x300 or similar)
- **Format**: PNG with transparency
- **Content**: Full DK-OctoBot logo with text
- **Location**: Save to `d:\OctoBot Site\client\public\logo.png`
- **Design**: Use the logo-full.svg as reference, rasterize to PNG
- **Purpose**: Schema.org structured data, footer, general branding

## 4. og-image.png
- **Size**: 1200x630 pixels (Open Graph standard)
- **Format**: PNG or JPG
- **Content**: Social media preview card
- **Location**: Save to `d:\OctoBot Site\client\public\og-image.png`
- **Design Suggestions**:
  - Dark navy background (#001524)
  - Centered DK-OctoBot logo
  - Optionally add tagline: "AI-Powered Customer Service & Sales Automation"
  - Modern tech aesthetic with subtle gradients or glow effects
- **Purpose**: Social media sharing (Facebook, Twitter, LinkedIn)

## Quick Command to Convert SVG to PNG (if you have ImageMagick or Inkscape):

```bash
# Using ImageMagick
magick convert -density 300 -background none logo-compact.svg -resize 192x192 icon-192.png
magick convert -density 300 -background none logo-compact.svg -resize 512x512 icon-512.png
magick convert -density 300 -background none logo-full.svg -resize 1000x300 logo.png

# Using Inkscape
inkscape logo-compact.svg --export-filename=icon-192.png --export-width=192 --export-height=192
inkscape logo-compact.svg --export-filename=icon-512.png --export-width=512 --export-height=512
inkscape logo-full.svg --export-filename=logo.png --export-width=1000
```

## Online Tools (if no local tools available):
- https://cloudconvert.com/svg-to-png
- https://www.freeconvert.com/svg-to-png
- https://www.canva.com/ (for creating og-image.png)
