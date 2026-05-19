import { useWeather } from "../hooks/useWeather";
import "../styles/weather.css";

type Props = {
  city: string;
};

export default function WeatherWidget({ city }: Props) {
  // Extract main city name if it has commas (e.g., "Tokyo, Japan" -> "Tokyo")
  const searchCity = city.split(",")[0].trim();
  const { data, loading } = useWeather(searchCity);

  if (loading) {
    return (
      <div className="weather-widget weather-widget--loading" aria-busy="true">
        <span className="weather-widget__spinner">⟳</span> Loading...
      </div>
    );
  }

  if (!data) {
    return null; // Don't show if fetch failed or no data
  }

  return (
    <div className="weather-widget" title={`${data.condition}`}>
      <span className="weather-widget__icon">{data.condition.split(" ")[0]}</span>
      <span className="weather-widget__temp">{data.tempC}°C</span>
      <span className="weather-widget__sep">/</span>
      <span className="weather-widget__tempf">{data.tempF}°F</span>
    </div>
  );
}
