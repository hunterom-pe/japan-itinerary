import { useState, useEffect } from "react";
import "../styles/phrasebook.css";

type Category = "Dining" | "Navigation" | "Etiquette" | "Shopping";

type Phrase = {
  eng: string;
  jp: string;
  rom: string;
};

const phrases: Record<Category, Phrase[]> = {
  Dining: [
    { eng: "Do you have an English menu?", jp: "英語のメニューはありますか？", rom: "Eigo no menyū wa arimasu ka?" },
    { eng: "I'll have this please.", jp: "これをお願いします。", rom: "Kore o onegaishimasu." },
    { eng: "Check, please.", jp: "お会計をお願いします。", rom: "Okaikei o onegaishimasu." },
    { eng: "It was delicious.", jp: "美味しかったです。", rom: "Oishikatta desu." },
  ],
  Navigation: [
    { eng: "Where is the station?", jp: "駅はどこですか？", rom: "Eki wa doko desu ka?" },
    { eng: "Does this train go to [Tokyo]?", jp: "この電車は[東京]に行きますか？", rom: "Kono densha wa [Tōkyō] ni ikimasu ka?" },
    { eng: "Excuse me (to pass).", jp: "すみません。", rom: "Sumimasen." },
    { eng: "I'm lost.", jp: "道に迷いました。", rom: "Michi ni mayoimashita." },
  ],
  Etiquette: [
    { eng: "Thank you very much.", jp: "ありがとうございます。", rom: "Arigatō gozaimasu." },
    { eng: "Excuse me / I'm sorry.", jp: "すみません。", rom: "Sumimasen." },
    { eng: "Hello / Good afternoon.", jp: "こんにちは。", rom: "Konnichiwa." },
    { eng: "Nice to meet you.", jp: "よろしくお願いします。", rom: "Yoroshiku onegaishimasu." },
  ],
  Shopping: [
    { eng: "How much is this?", jp: "これはいくらですか？", rom: "Kore wa ikura desu ka?" },
    { eng: "Can I use a credit card?", jp: "クレジットカードは使えますか？", rom: "Kurejitto kādo wa tsukaemasu ka?" },
    { eng: "I'll take this.", jp: "これを買います。", rom: "Kore o kaimasu." },
    { eng: "Just looking, thanks.", jp: "見ているだけです。", rom: "Mite iru dake desu." },
  ]
};

const categories = Object.keys(phrases) as Category[];

export default function Phrasebook() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Category>("Dining");

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className="pb-fab" 
        onClick={() => setIsOpen(true)}
        aria-label="Open Phrasebook"
      >
        💬
      </button>

      <div className={`pb-overlay ${isOpen ? "is-open" : ""}`} onClick={() => setIsOpen(false)}>
        <div className="pb-panel" onClick={(e) => e.stopPropagation()}>
          <header className="pb-header">
            <h2>Phrasebook</h2>
            <button className="pb-close" onClick={() => setIsOpen(false)} aria-label="Close Phrasebook">
              &times;
            </button>
          </header>

          <nav className="pb-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pb-tab ${activeTab === cat ? "is-active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="pb-content">
            {phrases[activeTab].map((p, idx) => (
              <div key={idx} className="pb-phrase">
                <p className="pb-phrase__eng">{p.eng}</p>
                <p className="pb-phrase__jp">{p.jp}</p>
                <p className="pb-phrase__rom">{p.rom}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
