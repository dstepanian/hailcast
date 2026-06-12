# HailCast

HailCast is a mobile-friendly hail forecasting web app with an Apple Weather-inspired interface. It opens directly in the browser, fetches live forecast data, estimates hail risk, and shows animated weather wallpaper for rain, hail, wind, storm clouds, and lightning.

The default interface language is Armenian, with English available from the `EN` toggle.

## Features

- Live current and upcoming forecast loading with Open-Meteo
- Device-location forecast after browser permission is granted
- Armenian-first UI with English as a secondary language
- Hourly hail probability and 5-day hail potential
- Automatic model readings, so users do not need weather instruments
- Optional manual mode for what-if adjustments
- Animated weather wallpaper that reacts to forecast intensity
- Mobile-first responsive layout
- No API key required

## How It Works

HailCast fetches forecast data from Open-Meteo and estimates hail risk in the browser from ingredients such as CAPE, freezing level, wind speed, wind gusts, rain/showers, and precipitation probability.

This is an experimental forecast aid, not an official weather warning system. For safety-critical decisions, use official meteorological alerts and local emergency guidance.

## Run Locally

Because the app uses browser geolocation and live API requests, run it through a local server instead of opening the file directly.

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

If your system uses the Python launcher on Windows:

```powershell
py -m http.server 4173 --bind 127.0.0.1
```

## Deploy To GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/root`.
6. Save.

The app is static, so no build command is required.

## Project Structure

```text
.
├── assets/
│   └── storm-backdrop.png
├── app.js
├── index.html
├── styles.css
├── package.json
└── README.md
```

## Data Source

Forecast data is provided by [Open-Meteo](https://open-meteo.com/).

## License

MIT
