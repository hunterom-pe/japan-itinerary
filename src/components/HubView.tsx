import { Link } from "react-router-dom";
import "../styles/hub.css";

export default function HubView() {
  return (
    <div className="page page--hub">
      <nav className="topbar">
        <Link to="/" className="back">← Home</Link>
        <span className="topbar__theme">Safety & Transit</span>
      </nav>

      <header className="hub-head">
        <h1 className="hub-head__title">The Hub</h1>
        <p className="hub-head__sub">Essential resources for navigating Japan.</p>
      </header>

      <section className="hub-section">
        <h2 className="hub-section__title">🚨 Emergency Contacts</h2>
        
        <div className="hub-card hub-card--danger">
          <h3 className="hub-card__title">Police (Crime / Accident)</h3>
          <div className="hub-card__body">
            <span className="hub-number">110</span>
            Call this number for police assistance. English speakers are usually available.
          </div>
        </div>

        <div className="hub-card hub-card--danger">
          <h3 className="hub-card__title">Fire / Ambulance (Medical)</h3>
          <div className="hub-card__body">
            <span className="hub-number">119</span>
            Call this number for fire or sudden illness/injury. State clearly whether you need "Fire" (Kaji) or "Ambulance" (Kyukyusha).
          </div>
        </div>

        <div className="hub-card hub-card--danger">
          <h3 className="hub-card__title">Travel Insurance</h3>
          <div className="hub-card__body">
            <p><strong>Provider:</strong> [Insert Provider Here]</p>
            <p><strong>Policy #:</strong> [Insert Policy # Here]</p>
            <p>Keep your passport and policy details handy when visiting a hospital or clinic.</p>
          </div>
        </div>
      </section>

      <section className="hub-section">
        <h2 className="hub-section__title">🚇 Transit & Navigation</h2>
        
        <div className="hub-card">
          <h3 className="hub-card__title">Suica / Pasmo Top-up</h3>
          <div className="hub-card__body">
            <p>If you are using a digital Suica or Pasmo on your iPhone (Apple Wallet), you can top it up directly using a <strong>Mastercard or AMEX</strong> (Visa often fails for foreign cards).</p>
            <p>Alternatively, you can top up your digital card with physical cash at most convenience stores (7-Eleven, Lawson, FamilyMart) or at 7-Bank ATMs.</p>
          </div>
        </div>

        <div className="hub-card">
          <h3 className="hub-card__title">Tokyo Metro Maps</h3>
          <div className="hub-card__body">
            <p>Google Maps is your best friend, but it helps to have the official PDF map saved offline.</p>
            <a href="https://www.tokyometro.jp/en/subwaymap/pdf/routemap_en.pdf" target="_blank" rel="noreferrer" className="hub-link">
              📄 Download Tokyo Metro PDF
            </a>
          </div>
        </div>

        <div className="hub-card">
          <h3 className="hub-card__title">Japan Rail (JR) Pass</h3>
          <div className="hub-card__body">
            <p>When riding the Shinkansen (bullet train) or local JR lines, show your physical JR Pass at the manned ticket gate if you have the older paper version, or use the magnetic gate if you have the newer ticket.</p>
            <a href="https://japanrailpass.net/en/" target="_blank" rel="noreferrer" className="hub-link">
              🌐 Official JR Pass Info
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
