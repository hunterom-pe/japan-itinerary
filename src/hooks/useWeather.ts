import { useState, useEffect } from "react";

export type WeatherData = {
  tempC: string;
  tempF: string;
  condition: string;
};

const weatherMap: Record<string, string> = {
  "Sunny": "☀️",
  "Clear": "🌙",
  "Partly cloudy": "⛅",
  "Cloudy": "☁️",
  "Overcast": "☁️",
  "Mist": "🌫️",
  "Patchy rain possible": "🌦️",
  "Patchy rain nearby": "🌦️",
  "Light drizzle": "🌧️",
  "Light rain": "🌧️",
  "Moderate rain": "🌧️",
  "Heavy rain": "🌧️",
  "Thunderstorm": "⛈️",
  "Snow": "❄️",
};

function getEmoji(condition: string) {
  for (const key in weatherMap) {
    if (condition.toLowerCase().includes(key.toLowerCase())) {
      return weatherMap[key];
    }
  }
  return "🌤️";
}

export function useWeather(city: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!city) return;

    const cacheKey = `jc:weather:${city}`;
    const cached = sessionStorage.getItem(cacheKey);
    
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
      return;
    }

    setLoading(true);
    // Use wttr.in JSON format. Note: sometimes it can be slow or blocked by CORS if not careful, 
    // but wttr.in allows CORS for format=j1
    fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch weather");
        return res.json();
      })
      .then((json) => {
        const current = json.current_condition?.[0];
        if (current) {
          const desc = current.weatherDesc?.[0]?.value || "Clear";
          const weather: WeatherData = {
            tempC: current.temp_C,
            tempF: current.temp_F,
            condition: `${getEmoji(desc)} ${desc}`,
          };
          sessionStorage.setItem(cacheKey, JSON.stringify(weather));
          setData(weather);
        }
      })
      .catch((err) => {
        console.warn("Weather fetch error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return { data, loading };
}
