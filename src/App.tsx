import { Link } from "react-router-dom";
import { itinerary, tripMeta } from "./data/itinerary";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./styles/app.css";

export default function App() {
  const [ideas, setIdeas] = useLocalStorage<string>("jc:ideas", "");
  const [done] = useLocalStorage<Record<string, boolean>>("jc:done", {});

  const totalChecks = itinerary.reduce((n, d) => n + d.checklist.length, 0);
  const doneCount = Object.values(done).filter(Boolean).length;
  const pct = totalChecks ? Math.round((doneCount / totalChecks) * 100) : 0;

  return (
    <div className="page page--home">
      <header className="hero">
        <div className="hero__mark" aria-hidden="true">
          <span className="hero__sun" />
          <span className="hero__brush">日本</span>
        </div>
        <h1 className="hero__title">{tripMeta.title}</h1>
        <p className="hero__sub">— {tripMeta.subtitle} —</p>
        <p className="hero__blurb">{tripMeta.blurb}</p>
        <div style={{ marginTop: 24 }}>
          <Link to="/hub" className="hub-link" style={{ display: "inline-flex", background: "var(--paper-grain)", textDecoration: "none", color: "var(--ink-base)", border: "1px solid var(--rule)", padding: "12px 24px", borderRadius: 999, fontWeight: 600, fontSize: 15, transition: "all 0.2s" }}>
            🚇 Transit & Emergency Hub
          </Link>
        </div>
      </header>

      <section className="prep">
        <h2 className="section-title">
          <span className="section-title__mark">前</span> Pre-trip systems
        </h2>
        <dl className="prep__list">
          {tripMeta.prep.map((p) => (
            <div key={p.label} className="prep__row">
              <dt>{p.label}</dt>
              <dd>{p.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="progress">
        <div className="progress__bar" aria-hidden="true">
          <div className="progress__fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="progress__label">
          {doneCount} / {totalChecks} ticked · {pct}%
        </div>
      </section>

      <section className="grid">
        <h2 className="section-title">
          <span className="section-title__mark">行</span> The fourteen days
        </h2>
        <nav className="jumper jumper--standalone" aria-label="Jump to day">
          <ol className="jumper__row">
            {itinerary.map((day) => {
              const allDone =
                day.checklist.length > 0 &&
                day.checklist.every((c) => done[`${day.num}:${c}`]);
              return (
                <li key={day.num}>
                  <Link
                    to={`/day/${day.num}`}
                    className={`jumper__chip ${allDone ? "jumper__chip--done" : ""}`}
                  >
                    {day.num}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </section>

      <section className="ideas">
        <h2 className="section-title">
          <span className="section-title__mark">案</span> Ideas pad
        </h2>
        <p className="ideas__hint">
          A scratchpad that follows you the whole trip. Saved locally on this device.
        </p>
        <textarea
          className="ideas__pad"
          value={ideas}
          onChange={(e) => setIdeas(e.target.value)}
          placeholder="That bar someone mentioned in Shimokitazawa. The bookshop in Jimbocho. Anything you don't want to lose..."
          rows={10}
        />
      </section>

      <footer className="foot">
        <div className="foot__rule" />
        <p>
          いってらっしゃい — <em>Itterasshai</em>. Have a good trip.
        </p>
      </footer>
    </div>
  );
}
