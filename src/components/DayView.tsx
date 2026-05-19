import { Link, useParams } from "react-router-dom";
import { itinerary } from "../data/itinerary";
import { themes } from "../data/themes";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { compressImage } from "../utils/imageCompressor";
import WeatherWidget from "./WeatherWidget";
import "../styles/day.css";
import "../styles/photo.css";

const mapHref = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export default function DayView() {
  const { num } = useParams();
  const day = itinerary.find((d) => String(d.num) === num);
  const [done, setDone] = useLocalStorage<Record<string, boolean>>("jc:done", {});
  const [notes, setNotes] = useLocalStorage<Record<string, string>>("jc:notes", {});
  const [photos, setPhotos] = useLocalStorage<Record<string, string>>("jc:photos", {});

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImage(file);
      setPhotos({ ...photos, [day.num]: compressed });
    } catch (err) {
      console.error("Failed to compress image", err);
      alert("Failed to attach photo.");
    }
  };

  if (!day) {
    return (
      <div className="page">
        <p>Day not found.</p>
        <Link to="/" className="back">← Back</Link>
      </div>
    );
  }

  const theme = themes[day.themeId];
  const prev = itinerary.find((d) => d.num === day.num - 1);
  const next = itinerary.find((d) => d.num === day.num + 1);
  const noteKey = String(day.num);

  return (
    <div
      className="page page--day"
      data-pattern={theme.pattern}
      data-vibe={theme.vibe}
      style={
        {
          "--accent": theme.accent,
          "--accent-soft": theme.accentSoft,
          "--ink": theme.ink,
          "--paper": theme.paper,
          "--glow": theme.glow ?? "none",
        } as React.CSSProperties
      }
    >
      <nav className="topbar">
        <Link to="/" className="back">← Itinerary</Link>
        <span className="topbar__theme">{theme.label}</span>
      </nav>

      <header className="dayhead">
        <div className="dayhead__num">
          <span className="dayhead__label">Day</span>
          <span className="dayhead__big">{day.num}</span>
          <span className="dayhead__of">of 14</span>
        </div>
        <div className="dayhead__main">
          <div className="dayhead__kanji" aria-hidden="true">
            {day.kanji}
          </div>
          <div className="dayhead__romaji">{day.romaji}</div>
          <h1 className="dayhead__title">{day.title}</h1>
          <div className="dayhead__meta">
            <p className="dayhead__city">{day.city}</p>
            <WeatherWidget city={day.city} />
          </div>
          <p className="dayhead__tagline">{day.tagline}</p>
        </div>
      </header>

      <section className="block">
        <h2 className="block__title">
          <span className="block__mark">荷</span> Logistics &amp; Luggage
        </h2>
        <p className="block__body">{day.logistics}</p>
      </section>

      <section className="block">
        <h2 className="block__title">
          <span className="block__mark">行</span> Activity &amp; Exploration
        </h2>
        <p className="block__body">{day.activity}</p>
      </section>

      <section className="block">
        <h2 className="block__title">
          <span className="block__mark">食</span> Food
        </h2>
        <ul className="meals">
          {day.food.map((m) => (
            <li key={m.slot} className="meal">
              <span className="meal__slot">{m.slot}</span>
              <span className="meal__text">{m.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {day.locations.length > 0 && (
        <section className="block">
          <h2 className="block__title">
            <span className="block__mark">地</span> Locations
          </h2>
          <ul className="locs">
            {day.locations.map((loc) => (
              <li key={loc.name}>
                <a
                  className="loc"
                  href={mapHref(loc.query)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="loc__pin" aria-hidden="true">⌖</span>
                  <span className="loc__name">{loc.name}</span>
                  <span className="loc__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="block">
        <h2 className="block__title">
          <span className="block__mark">済</span> Checklist
        </h2>
        <ul className="checks">
          {day.checklist.map((c) => {
            const key = `${day.num}:${c}`;
            const checked = !!done[key];
            return (
              <li key={c}>
                <label className={`check ${checked ? "check--on" : ""}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) =>
                      setDone({ ...done, [key]: e.target.checked })
                    }
                  />
                  <span className="check__box" aria-hidden="true">
                    {checked ? "✓" : ""}
                  </span>
                  <span className="check__text">{c}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="block">
        <h2 className="block__title">
          <span className="block__mark">記</span> Notes
        </h2>
        <textarea
          className="notes"
          rows={8}
          value={notes[noteKey] ?? ""}
          onChange={(e) => setNotes({ ...notes, [noteKey]: e.target.value })}
          placeholder={`What actually happened on Day ${day.num}?`}
        />
        <div className="photo-attachment">
          {photos[day.num] ? (
            <div className="photo-preview">
              <img src={photos[day.num]} alt={`Memory from Day ${day.num}`} />
              <button
                className="photo-preview__del"
                onClick={() => {
                  const newPhotos = { ...photos };
                  delete newPhotos[day.num];
                  setPhotos(newPhotos);
                }}
                aria-label="Remove photo"
              >
                &times;
              </button>
            </div>
          ) : (
            <label className="photo-upload-btn">
              <span>📷 Attach Memory</span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>
      </section>

      <nav className="prevnext">
        {prev ? (
          <Link to={`/day/${prev.num}`} className="prevnext__btn prevnext__btn--prev">
            ← Day {prev.num}
            <small>{prev.title}</small>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/day/${next.num}`} className="prevnext__btn prevnext__btn--next">
            Day {next.num} →
            <small>{next.title}</small>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
