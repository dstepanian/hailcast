const translations = {
  hy: {
    appLang: "hy",
    switchLang: "EN",
    switchLangAria: "Switch to English",
    refreshAria: "Թարմացնել կանխատեսումը",
    locateAria: "Օգտագործել սարքի տեղանքը",
    unitAria: "Փոխել ջերմաստիճանի միավորը",
    locationLabel: "Տեղանք",
    locationAria: "Ընտրել կանխատեսման տեղանքը",
    eyebrow: "Կարկտային ռիսկի կանխատեսում",
    riskLabel: "Կարկտի ռիսկ",
    riskTitle: "Ընթացիկ կարկտային ռիսկ",
    riskDesc: "Շրջանաձեւ ցուցիչ, որը ցույց է տալիս կարկտի հավանականությունը",
    dashboardAria: "Կանխատեսման վահանակ",
    hourlyTitle: "Ժամային կարկտի հավանականություն",
    trackerTitle: "Ամպրոպների քարտեզ",
    radarAria: "Ամպրոպների կենդանի քարտեզ",
    legendRain: "Անձրեւ",
    legendCore: "Ուժեղ գոտի",
    legendHail: "Կարկուտ",
    mapInfoLabel: "Ինչպես կարդալ քարտեզը",
    mapInfoText:
      "Քարտեզը ցույց է տալիս մոտակա ամպրոպային գոտիների շարժը։ Կանաչը թույլ անձրեւ է, դեղինը՝ ուժեղ միջուկ, կարմիրը՝ կարկտի առավել հավանական գոտի։ Գոտիների տեղաշարժը օգնում է հասկանալ՝ ռիսկը մոտենո՞ւմ է ձեր տեղանքին։",
    ingredientsTitle: "Ավտոմատ եղանակային տվյալներ",
    ingredientsInfoLabel: "Ինչ է սա",
    ingredientsInfoText:
      "Այս բաժինը ցույց է տալիս այն եղանակային տվյալները, որոնցով հավելվածը գնահատում է կարկտի ռիսկը։ Ավտո ռեժիմում դրանք թարմացվում են կանխատեսումից․ չափման սարքեր պետք չեն։ Ձեռքով ռեժիմը միայն փորձարկման համար է։",
    liveModel: "Չափում պետք չէ",
    liveForecast: "Կենդանի կանխատեսում",
    loadingForecast: "Ուսումնասիրվում է կանխատեսումը",
    forecastUnavailable: "Կանխատեսումը հասանելի չէ",
    updatedNow: "Թարմացվել է",
    autoMode: "Ավտո",
    manualMode: "Ձեռքով",
    locating: "Որոշվում է տեղանքը",
    locationReady: "Տեղանքը կիրառվեց",
    locationDenied: "Տեղանքի թույլտվությունը մերժվեց",
    locationUnavailable: "Տեղանքը հասանելի չէ",
    capeLabel: "Անկայունություն",
    shearLabel: "Քամու շերտային կտրում",
    freezingLabel: "Սառեցման մակարդակ",
    reflectivityLabel: "Ռադարային անդրադարձ",
    riskFactorsTitle: "Ռիսկի գործոններ",
    riskFactorsInfoLabel: "Ինչպես կարդալ",
    riskFactorsInfoText:
      "Այս գծերը ցույց են տալիս, թե որ պայմաններն են հիմա ամենաշատը ազդում կարկտի ռիսկի վրա։ Որքան երկար է գիծը, այնքան տվյալ գործոնը ուժեղ է։ Կանաչը թույլ ազդանշան է, դեղինը՝ միջին, կարմիրը՝ բարձր։",
    dailyTitle: "5-օրյա կանխատեսում",
    dailySubtitle: "Կարկտի պոտենցիալ",
    peak: "Պիկը",
    confidence: "վստահություն",
    days: ["Այսօր", "Շբթ", "Կիր", "Երկ", "Երք"],
    labels: {
      severe: "Ուժեղ կարկտային միջավայր",
      elevated: "Բարձր կարկտային միջավայր",
      marginal: "Սահմանային կարկտային միջավայր",
      low: "Ցածր կարկտային միջավայր"
    },
    narrative(location, label, hour, risk) {
      if (risk < 34) {
        return `${location} կարկտի հավանականությունը ցածր է։ Առավել նկատելի աճը սպասվում է մոտ ${hour}:00-ին, բայց տվյալ պահին վտանգավոր ազդանշան չկա։`;
      }
      if (risk < 55) {
        return `${location} կա կարկտի թույլից միջին ռիսկ։ Ամենաակտիվ ժամանակահատվածը մոտ ${hour}:00-ն է։ Հետեւեք եղանակի արագ փոփոխություններին։`;
      }
      if (risk < 75) {
        return `${location} կարկտի ռիսկը բարձր է։ Ամենաուժեղ ամպրոպային ազդանշանը սպասվում է մոտ ${hour}:00-ին։ Խորհուրդ է տրվում ուշադիր հետեւել թարմացումներին։`;
      }
      return `${location} կարկտի վտանգը շատ բարձր է։ Ամենավտանգավոր ժամանակահատվածը մոտ ${hour}:00-ն է։ Պահպանեք զգուշություն եւ հետեւեք պաշտոնական զգուշացումներին։`;
    },
    riskWords: {
      high: "Բարձր",
      moderate: "Միջին",
      low: "Ցածր"
    },
    units: {
      cape: "Ջ/կգ",
      shear: "մ/վ",
      freezing: "կմ"
    },
    factorNames: ["Անկայունություն", "Խոր շերտի քամու կտրում", "Ռադարային միջուկի ուժ", "Կարկտի աճի գոտի"],
    locations: {
      vanadzor: { name: "Վանաձոր", locative: "Վանաձորում", option: "Վանաձոր, Հայաստան", motion: "Շարժը՝ դեպի հյուսիս-արեւելք, 24 կմ/ժ" },
      aparan: { name: "Ապարան", locative: "Ապարանում", option: "Ապարան, Հայաստան", motion: "Շարժը՝ դեպի արեւելք, 22 կմ/ժ" },
      yerevan: { name: "Երեւան", locative: "Երեւանում", option: "Երեւան, Հայաստան", motion: "Շարժը՝ դեպի հյուսիս-արեւելք, 28 կմ/ժ" },
      gyumri: { name: "Գյումրի", locative: "Գյումրիում", option: "Գյումրի, Հայաստան", motion: "Շարժը՝ դեպի հարավ-արեւելք, 26 կմ/ժ" },
      spitak: { name: "Սպիտակ", locative: "Սպիտակում", option: "Սպիտակ, Հայաստան", motion: "Շարժը՝ դեպի արեւելք-հյուսիս-արեւելք, 25 կմ/ժ" },
      device: { name: "Իմ տեղանքը", locative: "Ձեր տեղանքում", option: "Իմ տեղանքը", motion: "Տեղանքի հիման վրա" }
    }
  },
  en: {
    appLang: "en",
    switchLang: "HY",
    switchLangAria: "Փոխել հայերենի",
    refreshAria: "Refresh forecast",
    locateAria: "Use device location",
    unitAria: "Toggle units",
    locationLabel: "Location",
    locationAria: "Select forecast location",
    eyebrow: "Convective hail outlook",
    riskLabel: "Hail risk",
    riskTitle: "Current hail risk",
    riskDesc: "Circular gauge showing current hail probability",
    dashboardAria: "Forecast dashboard",
    hourlyTitle: "Hourly hail probability",
    trackerTitle: "Storm cell tracker",
    radarAria: "Animated radar map",
    legendRain: "Rain",
    legendCore: "Core",
    legendHail: "Hail",
    mapInfoLabel: "How to read the map",
    mapInfoText:
      "The map shows nearby storm areas and their movement. Green is lighter rain, yellow is a stronger storm core, and red marks the area where hail is more likely. The motion helps show whether risk is moving toward your location.",
    ingredientsTitle: "Automatic weather data",
    ingredientsInfoLabel: "What is this?",
    ingredientsInfoText:
      "This section shows the weather ingredients the app uses to estimate hail risk. In Auto mode they update from the forecast, so you do not need measuring instruments. Manual mode is only for testing scenarios.",
    liveModel: "No instruments needed",
    liveForecast: "Live forecast",
    loadingForecast: "Researching forecast",
    forecastUnavailable: "Forecast unavailable",
    updatedNow: "Updated now",
    autoMode: "Auto",
    manualMode: "Manual",
    locating: "Locating",
    locationReady: "Location applied",
    locationDenied: "Location permission denied",
    locationUnavailable: "Location unavailable",
    capeLabel: "Instability",
    shearLabel: "Wind shear",
    freezingLabel: "Freezing level",
    reflectivityLabel: "Reflectivity",
    riskFactorsTitle: "Risk factors",
    riskFactorsInfoLabel: "How to read this",
    riskFactorsInfoText:
      "These bars show which conditions are contributing most to hail risk right now. A longer bar means a stronger signal. Green is weak, yellow is moderate, and red is high.",
    dailyTitle: "5-day outlook",
    dailySubtitle: "Hail potential",
    peak: "Peak",
    confidence: "confidence",
    days: ["Today", "Sat", "Sun", "Mon", "Tue"],
    labels: {
      severe: "Severe hail environment",
      elevated: "Elevated hail environment",
      marginal: "Marginal hail environment",
      low: "Low hail environment"
    },
    narrative(location, label, hour, risk) {
      if (risk < 34) {
        return `${location} has a low hail risk. The signal may increase around ${hour}:00, but there is no strong warning sign right now.`;
      }
      if (risk < 55) {
        return `${location} has a low to moderate hail risk. The most active window is near ${hour}:00. Watch for quick weather changes.`;
      }
      if (risk < 75) {
        return `${location} has an elevated hail risk. The strongest storm signal is expected near ${hour}:00. Keep an eye on updates.`;
      }
      return `${location} has a very high hail risk. The most dangerous window is near ${hour}:00. Stay cautious and follow official warnings.`;
    },
    riskWords: {
      high: "High",
      moderate: "Moderate",
      low: "Low"
    },
    units: {
      cape: "J/kg",
      shear: "m/s",
      freezing: "km"
    },
    factorNames: ["Instability", "Deep-layer shear", "Radar core strength", "Hail growth zone"],
    locations: {
      vanadzor: { name: "Vanadzor", option: "Vanadzor, Armenia", motion: "Moving NE 24 km/h" },
      aparan: { name: "Aparan", option: "Aparan, Armenia", motion: "Moving E 22 km/h" },
      yerevan: { name: "Yerevan", option: "Yerevan, Armenia", motion: "Moving NE 28 km/h" },
      gyumri: { name: "Gyumri", option: "Gyumri, Armenia", motion: "Moving SE 26 km/h" },
      spitak: { name: "Spitak", option: "Spitak, Armenia", motion: "Moving ENE 25 km/h" },
      device: { name: "My location", option: "My location", motion: "Based on device location" }
    }
  }
};

const locations = {
  vanadzor: {
    latitude: 40.8128,
    longitude: 44.4883,
    tempC: 16,
    cape: 1250,
    shear: 19,
    freezing: 2.9,
    reflectivity: 48,
    seed: 5
  },
  aparan: {
    latitude: 40.5932,
    longitude: 44.3589,
    tempC: 14,
    cape: 1100,
    shear: 18,
    freezing: 2.7,
    reflectivity: 46,
    seed: 9
  },
  yerevan: {
    latitude: 40.1792,
    longitude: 44.4991,
    tempC: 18,
    cape: 1800,
    shear: 22,
    freezing: 3.1,
    reflectivity: 58,
    seed: 3
  },
  gyumri: {
    latitude: 40.7894,
    longitude: 43.8475,
    tempC: 15,
    cape: 1200,
    shear: 20,
    freezing: 2.8,
    reflectivity: 47,
    seed: 12
  },
  spitak: {
    latitude: 40.8322,
    longitude: 44.2673,
    tempC: 15,
    cape: 1180,
    shear: 21,
    freezing: 2.8,
    reflectivity: 49,
    seed: 17
  }
};

const state = {
  lang: "hy",
  units: "c",
  locationKey: "yerevan",
  manualMode: false,
  tick: 0
};

const els = {
  locationSelect: document.querySelector("#locationSelect"),
  locationLabel: document.querySelector("#locationLabel"),
  unitBtn: document.querySelector("#unitBtn"),
  unitLabel: document.querySelector("#unitLabel"),
  langBtn: document.querySelector("#langBtn"),
  langLabel: document.querySelector("#langLabel"),
  refreshBtn: document.querySelector("#refreshBtn"),
  locateBtn: document.querySelector("#locateBtn"),
  currentTemp: document.querySelector("#currentTemp"),
  conditionText: document.querySelector("#conditionText"),
  riskNarrative: document.querySelector("#riskNarrative"),
  riskOrb: document.querySelector("#riskOrb"),
  riskTitle: document.querySelector("#riskTitle"),
  riskDesc: document.querySelector("#riskDesc"),
  riskLabelText: document.querySelector("#riskLabelText"),
  riskValue: document.querySelector("#riskValue"),
  riskGauge: document.querySelector("#riskGauge"),
  peakTime: document.querySelector("#peakTime"),
  stormMotion: document.querySelector("#stormMotion"),
  hourlyStrip: document.querySelector("#hourlyStrip"),
  factorList: document.querySelector("#factorList"),
  dailyList: document.querySelector("#dailyList"),
  confidenceValue: document.querySelector("#confidenceValue"),
  modelStatus: document.querySelector("#modelStatus"),
  modeBtn: document.querySelector("#modeBtn"),
  controlsCard: document.querySelector("#controlsCard"),
  forecastDashboard: document.querySelector("#forecastDashboard"),
  radarCanvas: document.querySelector("#radarCanvas"),
  eyebrowText: document.querySelector("#eyebrowText"),
  hourlyTitle: document.querySelector("#hourlyTitle"),
  trackerTitle: document.querySelector("#trackerTitle"),
  legendRain: document.querySelector("#legendRain"),
  legendCore: document.querySelector("#legendCore"),
  legendHail: document.querySelector("#legendHail"),
  mapInfoLabel: document.querySelector("#mapInfoLabel"),
  mapInfoText: document.querySelector("#mapInfoText"),
  ingredientsTitle: document.querySelector("#ingredientsTitle"),
  ingredientsInfoLabel: document.querySelector("#ingredientsInfoLabel"),
  ingredientsInfoText: document.querySelector("#ingredientsInfoText"),
  capeLabel: document.querySelector("#capeLabel"),
  shearLabel: document.querySelector("#shearLabel"),
  freezingLabel: document.querySelector("#freezingLabel"),
  reflectivityLabel: document.querySelector("#reflectivityLabel"),
  riskFactorsTitle: document.querySelector("#riskFactorsTitle"),
  riskFactorsInfoLabel: document.querySelector("#riskFactorsInfoLabel"),
  riskFactorsInfoText: document.querySelector("#riskFactorsInfoText"),
  dailyTitle: document.querySelector("#dailyTitle"),
  dailySubtitle: document.querySelector("#dailySubtitle"),
  capeInput: document.querySelector("#capeInput"),
  shearInput: document.querySelector("#shearInput"),
  freezingInput: document.querySelector("#freezingInput"),
  reflectivityInput: document.querySelector("#reflectivityInput"),
  capeValue: document.querySelector("#capeValue"),
  shearValue: document.querySelector("#shearValue"),
  freezingValue: document.querySelector("#freezingValue"),
  reflectivityValue: document.querySelector("#reflectivityValue")
};

const ctx = els.radarCanvas.getContext("2d");
const wallpaperCanvas = document.querySelector("#weatherWallpaper");
const weatherCtx = wallpaperCanvas.getContext("2d");
const heroCanvas = document.querySelector("#heroWeather");
const heroCtx = heroCanvas.getContext("2d");
const weatherState = {
  width: 0,
  height: 0,
  rainDrops: [],
  hailStones: [],
  mist: [],
  clouds: [],
  gusts: [],
  impacts: [],
  lightning: 0,
  lightningCooldown: 80,
  target: {
    rain: 0.45,
    hail: 0.32,
    wind: 0.48,
    glow: 0.5,
    lightning: 0.25
  }
};
const heroState = {
  width: 0,
  height: 0,
  clouds: [],
  rain: [],
  hail: [],
  shine: 0
};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function t() {
  return translations[state.lang];
}

function localLocation(key = state.locationKey) {
  return t().locations[key];
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function normalize(value, min, max) {
  return clamp((value - min) / (max - min), 0, 1);
}

function calculateRisk(inputs) {
  const instability = normalize(inputs.cape, 300, 3600);
  const shear = normalize(inputs.shear, 5, 42);
  const reflectivity = normalize(inputs.reflectivity, 25, 72);
  const freezingSweetSpot = 1 - Math.min(Math.abs(inputs.freezing - 3.1) / 2.1, 1);
  const score = instability * 0.32 + shear * 0.22 + reflectivity * 0.31 + freezingSweetSpot * 0.15;
  return Math.round(clamp(score * 100, 3, 97));
}

function resizeWeatherWallpaper() {
  const ratio = window.devicePixelRatio || 1;
  weatherState.width = window.innerWidth;
  weatherState.height = window.innerHeight;
  wallpaperCanvas.width = Math.floor(weatherState.width * ratio);
  wallpaperCanvas.height = Math.floor(weatherState.height * ratio);
  weatherCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function createRainDrop(resetTop = false) {
  const width = weatherState.width || window.innerWidth;
  const height = weatherState.height || window.innerHeight;
  return {
    x: Math.random() * width,
    y: resetTop ? -40 - Math.random() * height * 0.35 : Math.random() * height,
    length: 18 + Math.random() * 34,
    speed: 8 + Math.random() * 10,
    alpha: 0.16 + Math.random() * 0.32,
    thickness: 0.6 + Math.random() * 0.9
  };
}

function createHailStone(resetTop = false) {
  const width = weatherState.width || window.innerWidth;
  const height = weatherState.height || window.innerHeight;
  return {
    x: Math.random() * width,
    y: resetTop ? -50 - Math.random() * height * 0.45 : Math.random() * height,
    radius: 1.8 + Math.random() * 3.8,
    speed: 5 + Math.random() * 8,
    drift: -1 + Math.random() * 2,
    alpha: 0.24 + Math.random() * 0.44,
    spin: Math.random() * Math.PI * 2
  };
}

function createMist() {
  const width = weatherState.width || window.innerWidth;
  const height = weatherState.height || window.innerHeight;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 80 + Math.random() * 160,
    speed: 0.08 + Math.random() * 0.22,
    alpha: 0.02 + Math.random() * 0.045
  };
}

function createCloudBand() {
  const width = weatherState.width || window.innerWidth;
  const height = weatherState.height || window.innerHeight;
  return {
    x: Math.random() * width,
    y: Math.random() * height * 0.52,
    width: 220 + Math.random() * 360,
    height: 60 + Math.random() * 130,
    speed: 0.12 + Math.random() * 0.32,
    alpha: 0.04 + Math.random() * 0.07
  };
}

function createGust(resetLeft = false) {
  const width = weatherState.width || window.innerWidth;
  const height = weatherState.height || window.innerHeight;
  return {
    x: resetLeft ? -120 - Math.random() * width * 0.4 : Math.random() * width,
    y: Math.random() * height,
    length: 80 + Math.random() * 190,
    speed: 4 + Math.random() * 8,
    alpha: 0.035 + Math.random() * 0.08
  };
}

function createImpact(x, y, strength) {
  weatherState.impacts.push({
    x,
    y,
    radius: 3 + Math.random() * 7,
    life: 1,
    strength
  });
  if (weatherState.impacts.length > 38) {
    weatherState.impacts.shift();
  }
}

function seedWeatherWallpaper() {
  weatherState.rainDrops = Array.from({ length: 190 }, () => createRainDrop());
  weatherState.hailStones = Array.from({ length: 120 }, () => createHailStone());
  weatherState.mist = Array.from({ length: 16 }, () => createMist());
  weatherState.clouds = Array.from({ length: 9 }, () => createCloudBand());
  weatherState.gusts = Array.from({ length: 24 }, () => createGust());
  weatherState.impacts = [];
}

function updateWallpaperTarget(risk, inputs) {
  weatherState.target = {
    rain: clamp(normalize(inputs.reflectivity, 28, 68) * 0.85 + normalize(risk, 28, 80) * 0.25, 0.08, 1),
    hail: clamp(normalize(risk, 44, 86), 0, 1),
    wind: clamp(normalize(inputs.shear, 5, 42), 0.1, 1),
    glow: clamp(normalize(inputs.cape, 300, 3600), 0.15, 1),
    lightning: clamp(normalize(inputs.cape, 900, 3000) * 0.55 + normalize(risk, 45, 88) * 0.45, 0, 1)
  };
}

function resizeHeroWeather() {
  const ratio = window.devicePixelRatio || 1;
  const bounds = heroCanvas.parentElement.getBoundingClientRect();
  heroState.width = bounds.width;
  heroState.height = bounds.height;
  heroCanvas.width = Math.floor(heroState.width * ratio);
  heroCanvas.height = Math.floor(heroState.height * ratio);
  heroCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function createHeroCloud(resetLeft = false) {
  const width = heroState.width || heroCanvas.clientWidth || 700;
  const height = heroState.height || heroCanvas.clientHeight || 640;
  const cloudWidth = 180 + Math.random() * 280;
  return {
    x: resetLeft ? -cloudWidth - Math.random() * width * 0.3 : Math.random() * width,
    y: 46 + Math.random() * height * 0.38,
    width: cloudWidth,
    height: 54 + Math.random() * 90,
    speed: 0.12 + Math.random() * 0.28,
    alpha: 0.12 + Math.random() * 0.16,
    swell: Math.random() * Math.PI * 2
  };
}

function createHeroRain(resetTop = false) {
  const width = heroState.width || heroCanvas.clientWidth || 700;
  const height = heroState.height || heroCanvas.clientHeight || 640;
  return {
    x: Math.random() * width,
    y: resetTop ? -30 - Math.random() * height * 0.35 : Math.random() * height,
    length: 16 + Math.random() * 30,
    speed: 5.5 + Math.random() * 7,
    alpha: 0.2 + Math.random() * 0.28
  };
}

function createHeroHail(resetTop = false) {
  const width = heroState.width || heroCanvas.clientWidth || 700;
  const height = heroState.height || heroCanvas.clientHeight || 640;
  return {
    x: Math.random() * width,
    y: resetTop ? -36 - Math.random() * height * 0.45 : Math.random() * height,
    radius: 1.8 + Math.random() * 3.6,
    speed: 4.2 + Math.random() * 6.8,
    drift: -0.8 + Math.random() * 1.6,
    alpha: 0.34 + Math.random() * 0.42
  };
}

function seedHeroWeather() {
  heroState.clouds = Array.from({ length: 8 }, () => createHeroCloud());
  heroState.rain = Array.from({ length: 110 }, () => createHeroRain());
  heroState.hail = Array.from({ length: 70 }, () => createHeroHail());
}

function openMeteoUrl(location) {
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    current: "temperature_2m,precipitation,rain,showers,weather_code,wind_speed_10m,wind_gusts_10m",
    hourly: "temperature_2m,precipitation_probability,rain,showers,cape,wind_speed_10m,wind_gusts_10m,freezing_level_height",
    daily: "weather_code,precipitation_probability_max,cape_max",
    timezone: "auto",
    forecast_days: "5",
    wind_speed_unit: "ms"
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

function hourlyIndexFromCurrent(data) {
  const times = data.hourly?.time || [];
  const currentTime = data.current?.time;
  if (!times.length || !currentTime) {
    return 0;
  }
  const index = times.findIndex((time) => time >= currentTime.slice(0, 13));
  return index >= 0 ? index : 0;
}

function ingredientsFromHour(data, index) {
  const hourly = data.hourly || {};
  const cape = Number(hourly.cape?.[index] ?? 0);
  const wind = Number(hourly.wind_speed_10m?.[index] ?? 0);
  const gust = Number(hourly.wind_gusts_10m?.[index] ?? wind);
  const freezingMeters = Number(hourly.freezing_level_height?.[index] ?? 3100);
  const rain = Number(hourly.rain?.[index] ?? 0);
  const showers = Number(hourly.showers?.[index] ?? 0);
  const probability = Number(hourly.precipitation_probability?.[index] ?? 0);
  const precipSignal = clamp(probability * 0.55 + (rain + showers) * 18, 0, 100);

  return {
    cape: Math.round(clamp(cape, 300, 3600) / 50) * 50,
    shear: Math.round(clamp(gust - wind + wind * 0.45, 5, 42)),
    freezing: Number(clamp(freezingMeters / 1000, 1.8, 5.2).toFixed(1)),
    reflectivity: Math.round(clamp(25 + precipSignal * 0.47, 25, 72))
  };
}

function buildLiveHourlyForecast(data) {
  const start = hourlyIndexFromCurrent(data);
  const hourly = data.hourly || {};
  return Array.from({ length: 12 }, (_, offset) => {
    const index = Math.min(start + offset, (hourly.time?.length || 1) - 1);
    const ingredients = ingredientsFromHour(data, index);
    const time = hourly.time?.[index] || "";
    const hour = time.slice(11, 13) || String(12 + offset).padStart(2, "0");
    return {
      hour: Number(hour),
      displayHour: `${hour}:00`,
      risk: calculateRisk(ingredients),
      tempC: Math.round(Number(hourly.temperature_2m?.[index] ?? data.current?.temperature_2m ?? 18))
    };
  });
}

function buildLiveDailyForecast(data) {
  const daily = data.daily || {};
  return (daily.time || []).slice(0, 5).map((date, index) => {
    const cape = Number(daily.cape_max?.[index] ?? 0);
    const probability = Number(daily.precipitation_probability_max?.[index] ?? 0);
    const weatherCode = Number(daily.weather_code?.[index] ?? 0);
    const stormBonus = weatherCode >= 95 ? 20 : weatherCode >= 80 ? 10 : 0;
    const ingredients = {
      cape: Math.round(clamp(cape, 300, 3600) / 50) * 50,
      shear: 20 + stormBonus / 2,
      freezing: 3.1,
      reflectivity: Math.round(clamp(25 + probability * 0.42 + stormBonus, 25, 72))
    };
    return {
      date,
      risk: calculateRisk(ingredients)
    };
  });
}

function applyLiveForecast(locationKey, data) {
  const location = locations[locationKey];
  const start = hourlyIndexFromCurrent(data);
  const liveInputs = ingredientsFromHour(data, start);
  location.tempC = Math.round(Number(data.current?.temperature_2m ?? data.hourly?.temperature_2m?.[start] ?? location.tempC));
  location.cape = liveInputs.cape;
  location.shear = liveInputs.shear;
  location.freezing = liveInputs.freezing;
  location.reflectivity = liveInputs.reflectivity;
  location.liveHourly = buildLiveHourlyForecast(data);
  location.liveDaily = buildLiveDailyForecast(data);
  location.liveSource = "Open-Meteo";
  location.lastUpdated = data.current?.time || new Date().toISOString();
}

async function fetchLiveForecast(locationKey) {
  const location = locations[locationKey];
  if (!location?.latitude || !location?.longitude) {
    return false;
  }

  els.modelStatus.textContent = t().loadingForecast;
  try {
    const response = await fetch(openMeteoUrl(location));
    if (!response.ok) {
      throw new Error(`Forecast request failed: ${response.status}`);
    }
    const data = await response.json();
    applyLiveForecast(locationKey, data);
    if (state.locationKey === locationKey) {
      state.manualMode = false;
      setInputs(locations[locationKey]);
      render();
      els.modelStatus.textContent = t().liveForecast;
    }
    return true;
  } catch (error) {
    console.warn(error);
    if (state.locationKey === locationKey) {
      els.modelStatus.textContent = t().forecastUnavailable;
      window.setTimeout(() => {
        els.modelStatus.textContent = t().liveModel;
      }, 2200);
    }
    return false;
  }
}

function getInputs() {
  return {
    cape: Number(els.capeInput.value),
    shear: Number(els.shearInput.value),
    freezing: Number(els.freezingInput.value),
    reflectivity: Number(els.reflectivityInput.value)
  };
}

function setInputs(location) {
  els.capeInput.value = location.cape;
  els.shearInput.value = location.shear;
  els.freezingInput.value = location.freezing;
  els.reflectivityInput.value = location.reflectivity;
}

function ensureDeviceOption() {
  if (els.locationSelect.querySelector('option[value="device"]')) {
    return;
  }
  const option = document.createElement("option");
  option.value = "device";
  els.locationSelect.prepend(option);
}

function estimateDeviceForecast(coords) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  const month = new Date().getMonth();
  const northernSeason = Math.cos(((month - 6) / 6) * Math.PI);
  const hemisphereSeason = lat >= 0 ? northernSeason : -northernSeason;
  const latitudeCooling = Math.min(Math.abs(lat) * 0.22, 14);
  const tempC = Math.round(clamp(20 + hemisphereSeason * 9 - latitudeCooling + Math.sin(lon / 18) * 3, -12, 38));
  const terrainLift = Math.abs(Math.sin((lat + lon) / 12));
  const moistureSignal = Math.abs(Math.cos(lon / 22)) * 0.6 + Math.abs(Math.sin(lat / 18)) * 0.4;
  const cape = Math.round(clamp(700 + Math.max(tempC, 0) * 58 + terrainLift * 700, 300, 3600) / 50) * 50;
  const shear = Math.round(clamp(12 + Math.abs(Math.sin((lat - lon) / 24)) * 24, 5, 42));
  const freezing = Number(clamp(2.1 + Math.max(tempC, 0) * 0.045 + Math.abs(lat) * 0.01, 1.8, 5.2).toFixed(1));
  const reflectivity = Math.round(clamp(34 + moistureSignal * 24 + terrainLift * 12, 25, 72));
  const seed = Math.round(Math.abs(lat * 7 + lon * 3)) % 30;

  return {
    tempC,
    cape,
    shear,
    freezing,
    reflectivity,
    seed,
    coords: {
      lat: Number(lat.toFixed(3)),
      lon: Number(lon.toFixed(3))
    }
  };
}

function riskLabel(risk) {
  const labels = t().labels;
  if (risk >= 75) return labels.severe;
  if (risk >= 55) return labels.elevated;
  if (risk >= 34) return labels.marginal;
  return labels.low;
}

function riskColor(risk) {
  if (risk >= 75) return "#ff6b6b";
  if (risk >= 55) return "#ffd166";
  if (risk >= 34) return "#7cc7ff";
  return "#5ee0a0";
}

function buildHourlyForecast(baseRisk, tempC, seed) {
  const start = 12;
  return Array.from({ length: 12 }, (_, index) => {
    const hour = start + index;
    const peakCurve = Math.exp(-Math.pow((hour - 17) / 3.2, 2));
    const ripple = Math.sin(index * 1.35 + seed) * 5;
    const risk = Math.round(clamp(baseRisk * (0.42 + peakCurve * 0.68) + ripple, 2, 98));
    return {
      hour,
      risk,
      tempC: Math.round(tempC + Math.sin(index / 2.2) * 3 - index * 0.18)
    };
  });
}

function renderStaticText() {
  const copy = t();
  document.documentElement.lang = copy.appLang;
  els.refreshBtn.setAttribute("aria-label", copy.refreshAria);
  els.locateBtn.setAttribute("aria-label", copy.locateAria);
  els.unitBtn.setAttribute("aria-label", copy.unitAria);
  els.langBtn.setAttribute("aria-label", copy.switchLangAria);
  els.locationSelect.setAttribute("aria-label", copy.locationAria);
  els.forecastDashboard.setAttribute("aria-label", copy.dashboardAria);
  els.radarCanvas.setAttribute("aria-label", copy.radarAria);
  els.riskOrb.setAttribute("aria-label", copy.riskTitle);
  els.riskTitle.textContent = copy.riskTitle;
  els.riskDesc.textContent = copy.riskDesc;
  els.langLabel.textContent = copy.switchLang;
  els.locationLabel.textContent = copy.locationLabel;
  els.eyebrowText.textContent = copy.eyebrow;
  els.riskLabelText.textContent = copy.riskLabel;
  els.hourlyTitle.textContent = copy.hourlyTitle;
  els.trackerTitle.textContent = copy.trackerTitle;
  els.legendRain.textContent = copy.legendRain;
  els.legendCore.textContent = copy.legendCore;
  els.legendHail.textContent = copy.legendHail;
  els.mapInfoLabel.textContent = copy.mapInfoLabel;
  els.mapInfoText.textContent = copy.mapInfoText;
  els.ingredientsTitle.textContent = copy.ingredientsTitle;
  els.ingredientsInfoLabel.textContent = copy.ingredientsInfoLabel;
  els.ingredientsInfoText.textContent = copy.ingredientsInfoText;
  els.capeLabel.textContent = copy.capeLabel;
  els.shearLabel.textContent = copy.shearLabel;
  els.freezingLabel.textContent = copy.freezingLabel;
  els.reflectivityLabel.textContent = copy.reflectivityLabel;
  els.riskFactorsTitle.textContent = copy.riskFactorsTitle;
  els.riskFactorsInfoLabel.textContent = copy.riskFactorsInfoLabel;
  els.riskFactorsInfoText.textContent = copy.riskFactorsInfoText;
  els.dailyTitle.textContent = copy.dailyTitle;
  els.dailySubtitle.textContent = copy.dailySubtitle;
  els.modeBtn.textContent = state.manualMode ? copy.manualMode : copy.autoMode;
  els.controlsCard.classList.toggle("is-auto", !state.manualMode);
  els.controlsCard.classList.toggle("is-manual", state.manualMode);
  [els.capeInput, els.shearInput, els.freezingInput, els.reflectivityInput].forEach((input) => {
    input.disabled = !state.manualMode;
  });

  Array.from(els.locationSelect.options).forEach((option) => {
    option.textContent = copy.locations[option.value]?.option || option.textContent;
  });
}

function renderHourly(forecast) {
  const maxRisk = Math.max(...forecast.map((item) => item.risk));
  const peak = forecast.find((item) => item.risk === maxRisk);
  els.peakTime.textContent = `${t().peak} ${String(peak.hour).padStart(2, "0")}:00`;
  els.hourlyStrip.innerHTML = forecast
    .map((item) => {
      const temp = state.units === "c" ? item.tempC : toFahrenheit(item.tempC);
      const isPeak = item.risk === maxRisk ? " is-peak" : "";
      const time = item.displayHour || `${String(item.hour).padStart(2, "0")}:00`;
      return `
        <div class="hour-cell${isPeak}">
          <span class="hour-time">${time}</span>
          <span class="hail-mark" style="opacity:${0.42 + item.risk / 120}"></span>
          <strong class="hour-risk">${item.risk}%</strong>
          <span class="hour-temp">${temp}°</span>
        </div>
      `;
    })
    .join("");
}

function renderFactors(inputs) {
  const copy = t();
  const factors = [
    [copy.factorNames[0], normalize(inputs.cape, 300, 3600), `${inputs.cape} ${copy.units.cape}`],
    [copy.factorNames[1], normalize(inputs.shear, 5, 42), `${inputs.shear} ${copy.units.shear}`],
    [copy.factorNames[2], normalize(inputs.reflectivity, 25, 72), `${inputs.reflectivity} dBZ`],
    [
      copy.factorNames[3],
      1 - Math.min(Math.abs(inputs.freezing - 3.1) / 2.1, 1),
      `${inputs.freezing.toFixed(1)} ${copy.units.freezing}`
    ]
  ];

  els.factorList.innerHTML = factors
    .map(([name, value, label]) => {
      const percent = Math.round(value * 100);
      return `
        <div class="factor">
          <span>${name}</span>
          <strong>${label}</strong>
          <div class="meter"><i style="width:${percent}%"></i></div>
        </div>
      `;
    })
    .join("");
}

function renderDaily(baseRisk, seed, liveDaily = null) {
  const copy = t();
  const dailyItems = liveDaily?.length
    ? liveDaily.map((item, index) => ({
        day: copy.days[index] || item.date,
        risk: item.risk
      }))
    : copy.days.map((day, index) => {
        const trend = Math.sin(seed + index * 1.1) * 16 - index * 4;
        return {
          day,
          risk: Math.round(clamp(baseRisk + trend, 4, 96))
        };
      });

  els.dailyList.innerHTML = dailyItems
    .map((item) => {
      const risk = item.risk;
      const label = risk >= 70 ? copy.riskWords.high : risk >= 45 ? copy.riskWords.moderate : copy.riskWords.low;
      return `
        <div class="daily-row">
          <span class="daily-day">${item.day}</span>
          <div class="daily-bar" aria-label="${item.day} ${risk}% ${label}"><i style="width:${risk}%"></i></div>
          <strong class="daily-meta">${risk}%</strong>
        </div>
      `;
    })
    .join("");
}

function updateGauge(risk) {
  const circumference = 2 * Math.PI * 92;
  els.riskGauge.style.strokeDasharray = `${circumference}`;
  els.riskGauge.style.strokeDashoffset = `${circumference - (risk / 100) * circumference}`;
  els.riskGauge.style.stroke = riskColor(risk);
}

function updateText(location, risk, forecast) {
  const copy = t();
  const local = localLocation();
  const temp = state.units === "c" ? location.tempC : toFahrenheit(location.tempC);
  const unit = state.units === "c" ? "°C" : "°F";
  const peak = forecast.reduce((best, item) => (item.risk > best.risk ? item : best), forecast[0]);
  const peakHour = String(peak.hour).padStart(2, "0");
  const label = riskLabel(risk);

  els.currentTemp.textContent = `${temp}°`;
  els.unitLabel.textContent = unit;
  els.conditionText.textContent = label;
  els.riskValue.textContent = `${risk}%`;
  els.stormMotion.textContent = local.motion;
  els.confidenceValue.textContent = `${Math.round(clamp(64 + risk * 0.28, 68, 93))}% ${copy.confidence}`;
  els.riskNarrative.textContent = copy.narrative(local.locative || local.name, label, peakHour, risk);
}

function updateControlLabels(inputs) {
  const copy = t();
  els.capeValue.textContent = `${inputs.cape} ${copy.units.cape}`;
  els.shearValue.textContent = `${inputs.shear} ${copy.units.shear}`;
  els.freezingValue.textContent = `${inputs.freezing.toFixed(1)} ${copy.units.freezing}`;
  els.reflectivityValue.textContent = `${inputs.reflectivity} dBZ`;
}

function renderRadar(risk, inputs, location) {
  const canvas = els.radarCanvas;
  const width = canvas.width;
  const height = canvas.height;
  const tValue = state.tick;

  ctx.clearRect(0, 0, width, height);
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "rgba(8, 19, 30, 0.78)");
  bg.addColorStop(1, "rgba(21, 35, 48, 0.36)");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  for (let x = 40; x < width; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 40; y < height; y += 80) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  const cells = [
    { x: 260, y: 250, size: 160, strength: risk / 100, drift: 1 },
    { x: 500, y: 190, size: 118, strength: normalize(inputs.reflectivity, 25, 72), drift: -0.7 },
    { x: 390, y: 360, size: 90, strength: normalize(inputs.cape, 300, 3600), drift: 0.4 }
  ];

  cells.forEach((cell, index) => {
    const wobbleX = Math.sin(tValue / 34 + location.seed + index) * 18 * cell.drift;
    const wobbleY = Math.cos(tValue / 42 + index) * 12;
    drawCell(cell.x + wobbleX, cell.y + wobbleY, cell.size, cell.strength);
  });

  ctx.fillStyle = "rgba(255,255,255,0.72)";
  ctx.font = "600 18px system-ui, sans-serif";
  ctx.fillText(localLocation().name, 34, 48);
}

function drawCell(x, y, size, strength) {
  const levels = [
    ["rgba(94, 224, 160, 0.42)", size * 1.05],
    ["rgba(124, 199, 255, 0.36)", size * 0.74],
    ["rgba(255, 209, 102, 0.48)", size * 0.46],
    ["rgba(255, 107, 107, 0.58)", size * 0.23 * clamp(strength * 1.4, 0.3, 1)]
  ];

  levels.forEach(([color, radius]) => {
    const gradient = ctx.createRadialGradient(x, y, radius * 0.12, x, y, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 1.2, radius * 0.72, -0.38, 0, Math.PI * 2);
    ctx.fill();
  });
}

function render() {
  const location = locations[state.locationKey];
  const inputs = getInputs();
  const risk = calculateRisk(inputs);
  const forecast = location.liveHourly?.length ? location.liveHourly : buildHourlyForecast(risk, location.tempC, location.seed);

  renderStaticText();
  updateControlLabels(inputs);
  updateGauge(risk);
  updateText(location, risk, forecast);
  renderHourly(forecast);
  renderFactors(inputs);
  renderDaily(risk, location.seed, location.liveDaily);
  renderRadar(risk, inputs, location);
  updateWallpaperTarget(risk, inputs);
}

function animateRadar() {
  state.tick += 1;
  const location = locations[state.locationKey];
  renderRadar(calculateRisk(getInputs()), getInputs(), location);
  requestAnimationFrame(animateRadar);
}

function animateWeatherWallpaper() {
  const width = weatherState.width;
  const height = weatherState.height;
  const { rain, hail, wind, glow, lightning } = weatherState.target;
  const windPush = -2 + wind * 7;

  weatherCtx.clearRect(0, 0, width, height);

  weatherState.lightningCooldown -= 1;
  if (weatherState.lightningCooldown <= 0 && Math.random() < lightning * 0.045) {
    weatherState.lightning = 1;
    weatherState.lightningCooldown = 80 + Math.random() * 170;
  }
  weatherState.lightning *= 0.86;

  if (weatherState.lightning > 0.02) {
    weatherCtx.fillStyle = `rgba(210, 235, 255, ${weatherState.lightning * 0.22})`;
    weatherCtx.fillRect(0, 0, width, height);
  }

  const glowGradient = weatherCtx.createRadialGradient(width * 0.72, height * 0.18, 0, width * 0.72, height * 0.18, width * 0.7);
  glowGradient.addColorStop(0, `rgba(124, 199, 255, ${0.05 + glow * 0.1 + weatherState.lightning * 0.12})`);
  glowGradient.addColorStop(0.45, `rgba(255, 209, 102, ${hail * 0.045})`);
  glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  weatherCtx.fillStyle = glowGradient;
  weatherCtx.fillRect(0, 0, width, height);

  weatherState.clouds.forEach((cloud) => {
    cloud.x += cloud.speed * (0.8 + wind);
    if (cloud.x - cloud.width > width) {
      Object.assign(cloud, createCloudBand());
      cloud.x = -cloud.width;
    }
    const cloudGradient = weatherCtx.createRadialGradient(
      cloud.x + cloud.width * 0.5,
      cloud.y + cloud.height * 0.5,
      0,
      cloud.x + cloud.width * 0.5,
      cloud.y + cloud.height * 0.5,
      cloud.width * 0.62
    );
    cloudGradient.addColorStop(0, `rgba(185, 214, 232, ${cloud.alpha + rain * 0.04 + weatherState.lightning * 0.08})`);
    cloudGradient.addColorStop(1, "rgba(185, 214, 232, 0)");
    weatherCtx.fillStyle = cloudGradient;
    weatherCtx.beginPath();
    weatherCtx.ellipse(cloud.x + cloud.width * 0.5, cloud.y + cloud.height * 0.5, cloud.width * 0.55, cloud.height, -0.08, 0, Math.PI * 2);
    weatherCtx.fill();
  });

  weatherState.mist.forEach((puff) => {
    puff.x += puff.speed + wind * 0.16;
    if (puff.x - puff.radius > width) {
      puff.x = -puff.radius;
      puff.y = Math.random() * height;
    }
    const mistGradient = weatherCtx.createRadialGradient(puff.x, puff.y, 0, puff.x, puff.y, puff.radius);
    mistGradient.addColorStop(0, `rgba(190, 220, 242, ${puff.alpha * (0.75 + rain * 0.6)})`);
    mistGradient.addColorStop(1, "rgba(190, 220, 242, 0)");
    weatherCtx.fillStyle = mistGradient;
    weatherCtx.beginPath();
    weatherCtx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
    weatherCtx.fill();
  });

  const gustVisible = Math.floor(weatherState.gusts.length * clamp(wind * 0.9 + rain * 0.35, 0.15, 1));
  weatherCtx.lineCap = "round";
  for (let index = 0; index < gustVisible; index += 1) {
    const gust = weatherState.gusts[index];
    gust.x += gust.speed * (0.8 + wind);
    gust.y += Math.sin((gust.x + index) / 80) * 0.35;
    if (gust.x - gust.length > width) {
      Object.assign(gust, createGust(true));
    }
    weatherCtx.strokeStyle = `rgba(220, 242, 255, ${gust.alpha * (0.6 + wind)})`;
    weatherCtx.lineWidth = 1;
    weatherCtx.beginPath();
    weatherCtx.moveTo(gust.x, gust.y);
    weatherCtx.lineTo(gust.x + gust.length, gust.y - windPush * 2);
    weatherCtx.stroke();
  }

  const rainVisible = Math.floor(weatherState.rainDrops.length * rain);
  for (let index = 0; index < rainVisible; index += 1) {
    const drop = weatherState.rainDrops[index];
    drop.x += windPush;
    drop.y += drop.speed * (0.55 + rain * 0.7);
    if (drop.y - drop.length > height || drop.x > width + 80 || drop.x < -80) {
      Object.assign(drop, createRainDrop(true));
    }

    weatherCtx.strokeStyle = `rgba(185, 226, 255, ${drop.alpha * rain})`;
    weatherCtx.lineWidth = drop.thickness;
    weatherCtx.beginPath();
    weatherCtx.moveTo(drop.x, drop.y);
    weatherCtx.lineTo(drop.x - windPush * 1.6, drop.y + drop.length);
    weatherCtx.stroke();
  }

  const hailVisible = Math.floor(weatherState.hailStones.length * hail);
  for (let index = 0; index < hailVisible; index += 1) {
    const stone = weatherState.hailStones[index];
    stone.spin += 0.08;
    stone.x += windPush * 0.45 + stone.drift;
    stone.y += stone.speed * (0.7 + hail * 0.75);
    if (stone.y - stone.radius > height || stone.x > width + 60 || stone.x < -60) {
      if (hail > 0.35 && stone.y > height) {
        createImpact(clamp(stone.x, 0, width), height - 16 - Math.random() * 50, hail);
      }
      Object.assign(stone, createHailStone(true));
    }

    const stoneGradient = weatherCtx.createRadialGradient(
      stone.x - stone.radius * 0.35,
      stone.y - stone.radius * 0.45,
      stone.radius * 0.1,
      stone.x,
      stone.y,
      stone.radius * 1.4
    );
    stoneGradient.addColorStop(0, `rgba(255, 255, 255, ${stone.alpha})`);
    stoneGradient.addColorStop(0.55, `rgba(193, 236, 255, ${stone.alpha * 0.78})`);
    stoneGradient.addColorStop(1, "rgba(124, 199, 255, 0)");
    weatherCtx.fillStyle = stoneGradient;
    weatherCtx.beginPath();
    weatherCtx.arc(stone.x, stone.y, stone.radius, 0, Math.PI * 2);
    weatherCtx.fill();
  }

  weatherState.impacts.forEach((impact) => {
    impact.life -= 0.045;
    const alpha = Math.max(impact.life, 0) * 0.18 * impact.strength;
    weatherCtx.strokeStyle = `rgba(235, 250, 255, ${alpha})`;
    weatherCtx.lineWidth = 1;
    weatherCtx.beginPath();
    weatherCtx.ellipse(impact.x, impact.y, impact.radius * (1.2 - impact.life + 0.4), impact.radius * 0.35, 0, 0, Math.PI * 2);
    weatherCtx.stroke();
  });
  weatherState.impacts = weatherState.impacts.filter((impact) => impact.life > 0);

  requestAnimationFrame(animateWeatherWallpaper);
}

function paintHeroWeather(advance = true) {
  const width = heroState.width;
  const height = heroState.height;
  if (!width || !height) {
    return;
  }

  const { rain, hail, wind, glow } = weatherState.target;
  const storm = clamp(rain * 0.72 + hail * 0.58, 0, 1);
  const sun = clamp(1 - storm * 0.95 + glow * 0.18, 0, 1);
  const windPush = -1.6 + wind * 3.8;

  if (advance) {
    heroState.shine += 0.008 + sun * 0.004;
  }

  heroCtx.clearRect(0, 0, width, height);

  const sky = heroCtx.createLinearGradient(0, 0, width, height);
  sky.addColorStop(0, `rgba(83, 139, 185, ${0.16 + sun * 0.1})`);
  sky.addColorStop(0.45, `rgba(32, 72, 112, ${0.22 + storm * 0.18})`);
  sky.addColorStop(1, `rgba(9, 20, 36, ${0.28 + storm * 0.25})`);
  heroCtx.fillStyle = sky;
  heroCtx.fillRect(0, 0, width, height);

  const sunX = width * 0.76;
  const sunY = height * 0.18;
  const sunRadius = width * (0.16 + sun * 0.18);
  const sunGlow = heroCtx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius);
  sunGlow.addColorStop(0, `rgba(255, 232, 156, ${0.34 * sun})`);
  sunGlow.addColorStop(0.38, `rgba(255, 202, 101, ${0.13 * sun})`);
  sunGlow.addColorStop(1, "rgba(255, 232, 156, 0)");
  heroCtx.fillStyle = sunGlow;
  heroCtx.fillRect(0, 0, width, height);

  if (sun > 0.18) {
    heroCtx.save();
    heroCtx.translate(sunX, sunY);
    heroCtx.rotate(heroState.shine);
    heroCtx.strokeStyle = `rgba(255, 236, 170, ${0.06 + sun * 0.08})`;
    heroCtx.lineWidth = 1;
    for (let index = 0; index < 14; index += 1) {
      const angle = (Math.PI * 2 * index) / 14;
      const inner = 34 + sun * 20;
      const outer = 120 + sun * 90;
      heroCtx.beginPath();
      heroCtx.moveTo(Math.cos(angle) * inner, Math.sin(angle) * inner);
      heroCtx.lineTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
      heroCtx.stroke();
    }
    heroCtx.restore();
  }

  heroState.clouds.forEach((cloud, index) => {
    if (advance) {
      cloud.x += cloud.speed * (0.8 + wind * 1.25);
      cloud.swell += 0.01;
    }
    if (cloud.x - cloud.width * 0.2 > width) {
      Object.assign(cloud, createHeroCloud(true));
    }

    const centerX = cloud.x + cloud.width * 0.5;
    const centerY = cloud.y + Math.sin(cloud.swell + index) * 7;
    const alpha = cloud.alpha * (0.7 + storm * 1.05);
    const cloudGradient = heroCtx.createRadialGradient(centerX, centerY, 0, centerX, centerY, cloud.width * 0.72);
    cloudGradient.addColorStop(0, `rgba(224, 242, 255, ${alpha})`);
    cloudGradient.addColorStop(0.46, `rgba(150, 185, 212, ${alpha * 0.74})`);
    cloudGradient.addColorStop(1, "rgba(150, 185, 212, 0)");
    heroCtx.fillStyle = cloudGradient;
    heroCtx.beginPath();
    heroCtx.ellipse(centerX, centerY, cloud.width * 0.58, cloud.height, -0.08, 0, Math.PI * 2);
    heroCtx.fill();
  });

  if (weatherState.lightning > 0.03) {
    heroCtx.fillStyle = `rgba(220, 240, 255, ${weatherState.lightning * 0.18})`;
    heroCtx.fillRect(0, 0, width, height);
  }

  const rainVisible = Math.floor(heroState.rain.length * clamp((rain - 0.08) / 0.92, 0, 1));
  heroCtx.lineCap = "round";
  for (let index = 0; index < rainVisible; index += 1) {
    const drop = heroState.rain[index];
    if (advance) {
      drop.x += windPush;
      drop.y += drop.speed * (0.65 + rain * 0.58);
    }
    if (drop.y - drop.length > height || drop.x > width + 50 || drop.x < -50) {
      Object.assign(drop, createHeroRain(true));
    }
    heroCtx.strokeStyle = `rgba(190, 228, 255, ${drop.alpha * rain})`;
    heroCtx.lineWidth = 1;
    heroCtx.beginPath();
    heroCtx.moveTo(drop.x, drop.y);
    heroCtx.lineTo(drop.x - windPush * 1.6, drop.y + drop.length);
    heroCtx.stroke();
  }

  const hailVisible = Math.floor(heroState.hail.length * clamp((hail - 0.06) / 0.94, 0, 1));
  for (let index = 0; index < hailVisible; index += 1) {
    const stone = heroState.hail[index];
    if (advance) {
      stone.x += windPush * 0.42 + stone.drift;
      stone.y += stone.speed * (0.7 + hail * 0.55);
    }
    if (stone.y - stone.radius > height || stone.x > width + 40 || stone.x < -40) {
      Object.assign(stone, createHeroHail(true));
    }

    const hailGradient = heroCtx.createRadialGradient(
      stone.x - stone.radius * 0.4,
      stone.y - stone.radius * 0.5,
      0,
      stone.x,
      stone.y,
      stone.radius * 1.6
    );
    hailGradient.addColorStop(0, `rgba(255, 255, 255, ${stone.alpha})`);
    hailGradient.addColorStop(0.58, `rgba(198, 239, 255, ${stone.alpha * 0.74})`);
    hailGradient.addColorStop(1, "rgba(198, 239, 255, 0)");
    heroCtx.fillStyle = hailGradient;
    heroCtx.beginPath();
    heroCtx.arc(stone.x, stone.y, stone.radius, 0, Math.PI * 2);
    heroCtx.fill();
  }
}

function animateHeroWeather() {
  paintHeroWeather(true);
  requestAnimationFrame(animateHeroWeather);
}

els.locationSelect.addEventListener("change", (event) => {
  state.locationKey = event.target.value;
  setInputs(locations[state.locationKey]);
  render();
  fetchLiveForecast(state.locationKey);
});

els.unitBtn.addEventListener("click", () => {
  state.units = state.units === "c" ? "f" : "c";
  render();
});

els.langBtn.addEventListener("click", () => {
  state.lang = state.lang === "hy" ? "en" : "hy";
  render();
});

els.modeBtn.addEventListener("click", () => {
  state.manualMode = !state.manualMode;
  if (!state.manualMode) {
    setInputs(locations[state.locationKey]);
  }
  render();
});

els.locateBtn.addEventListener("click", () => {
  const copy = t();
  if (!navigator.geolocation) {
    els.modelStatus.textContent = copy.locationUnavailable;
    return;
  }

  els.locateBtn.disabled = true;
  els.modelStatus.textContent = copy.locating;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      ensureDeviceOption();
      locations.device = {
        ...estimateDeviceForecast(position.coords),
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      state.locationKey = "device";
      els.locationSelect.value = "device";
      setInputs(locations.device);
      render();
      els.modelStatus.textContent = t().locationReady;
      fetchLiveForecast("device");
      els.locateBtn.disabled = false;
    },
    (error) => {
      els.modelStatus.textContent = error.code === error.PERMISSION_DENIED ? t().locationDenied : t().locationUnavailable;
      window.setTimeout(() => {
        els.modelStatus.textContent = t().liveModel;
      }, 2200);
      els.locateBtn.disabled = false;
    },
    {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 300000
    }
  );
});

els.refreshBtn.addEventListener("click", async () => {
  const inputs = getInputs();
  els.modelStatus.textContent = t().updatedNow;
  const refreshed = await fetchLiveForecast(state.locationKey);
  if (!refreshed) {
    els.reflectivityInput.value = clamp(inputs.reflectivity + Math.round(Math.sin(Date.now()) * 4), 25, 72);
    render();
  }
  window.setTimeout(() => {
    els.modelStatus.textContent = locations[state.locationKey].liveSource ? t().liveForecast : t().liveModel;
  }, 1400);
});

[els.capeInput, els.shearInput, els.freezingInput, els.reflectivityInput].forEach((input) => {
  input.addEventListener("input", render);
});

window.addEventListener("resize", () => {
  resizeWeatherWallpaper();
  seedWeatherWallpaper();
  resizeHeroWeather();
  seedHeroWeather();
  paintHeroWeather(false);
});

resizeWeatherWallpaper();
seedWeatherWallpaper();
resizeHeroWeather();
seedHeroWeather();
setInputs(locations[state.locationKey]);
render();
paintHeroWeather(false);
fetchLiveForecast(state.locationKey);
animateRadar();
if (!reduceMotion) {
  animateWeatherWallpaper();
  animateHeroWeather();
}
