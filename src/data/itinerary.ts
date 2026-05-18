export type Location = {
  name: string;
  query: string;
};

export type Meal = {
  slot: "Breakfast" | "Lunch" | "Dinner";
  text: string;
};

export type Day = {
  num: number;
  title: string;
  city: string;
  kanji: string;
  romaji: string;
  themeId: ThemeId;
  tagline: string;
  logistics: string;
  activity: string;
  food: Meal[];
  locations: Location[];
  checklist: string[];
};

export type ThemeId =
  | "neon-tokyo"
  | "mecha-noir"
  | "ghibli-whimsy"
  | "alpine-wood"
  | "thatch-mountain"
  | "crimson-shrine"
  | "moss-stone"
  | "ink-cedar"
  | "dotonbori-glow"
  | "crt-retro"
  | "peace-white"
  | "vermillion-tide"
  | "muted-gold"
  | "quiet-grey";

const mapQuery = (s: string) => s;

export const itinerary: Day[] = [
  {
    num: 1,
    title: "The Adrenaline Drop",
    city: "Tokyo",
    kanji: "東京",
    romaji: "Tōkyō",
    themeId: "neon-tokyo",
    tagline: "Sensory overload, neon, and yakitori at Memory Lane.",
    logistics:
      "Arrive at Narita/Haneda. Withdraw Yen at the airport 7-Eleven. Transit to Shinjuku and drop your duffel in your capsule hotel locker.",
    activity:
      "Dive headfirst into the sensory overload. Roam the labyrinth of Kabukicho and the narrow drinking alleys of Golden Gai.",
    food: [
      { slot: "Breakfast", text: "Post-flight Konbini run — fluffy egg sandwich, iced green tea." },
      { slot: "Lunch", text: "Standing ramen near the train station." },
      {
        slot: "Dinner",
        text: "Omoide Yokocho (Memory Lane). Adventurous yakitori — chicken hearts (hatsu), liver (reba), crispy cartilage (nankotsu) with a cold beer.",
      },
    ],
    locations: [
      { name: "Shinjuku Capsule (drop-off)", query: mapQuery("Shinjuku capsule hotel") },
      { name: "Kabukicho", query: mapQuery("Kabukicho, Shinjuku, Tokyo") },
      { name: "Golden Gai", query: mapQuery("Golden Gai, Shinjuku, Tokyo") },
      { name: "Omoide Yokocho", query: mapQuery("Omoide Yokocho, Shinjuku, Tokyo") },
    ],
    checklist: [
      "Withdraw Yen at airport 7-Eleven",
      "Drop duffel at capsule locker",
      "Roam Kabukicho",
      "Drink in Golden Gai",
      "Yakitori at Omoide Yokocho",
    ],
  },
  {
    num: 2,
    title: "Mecha & Neo-Noir",
    city: "Tokyo",
    kanji: "お台場",
    romaji: "Odaiba",
    themeId: "mecha-noir",
    tagline: "Sixty-five feet of Gundam, then Cowboy Bebop in Nakano.",
    logistics: "Duffel stays at the capsule. Rely on MagSafe batteries for heavy map use.",
    activity:
      "Morning in Odaiba to stand beneath the 65-foot transforming RX-0 Unicorn Gundam. Afternoon in Nakano Broadway hunting vintage 90s animation cels and soaking in the Cowboy Bebop neo-noir aesthetic.",
    food: [
      { slot: "Breakfast", text: "Lawson Karaage-kun (fried chicken) and a coffee." },
      { slot: "Lunch", text: "Tsukemen (thick dipping ramen) in Tokyo Station." },
      { slot: "Dinner", text: "High-end Tonkatsu (thick, breaded pork cutlet)." },
    ],
    locations: [
      { name: "Unicorn Gundam Statue, Odaiba", query: mapQuery("Unicorn Gundam Statue Odaiba") },
      { name: "Nakano Broadway", query: mapQuery("Nakano Broadway, Tokyo") },
      { name: "Tokyo Station", query: mapQuery("Tokyo Station") },
    ],
    checklist: [
      "Visit Unicorn Gundam, Odaiba",
      "Hunt animation cels in Nakano Broadway",
      "Tsukemen at Tokyo Station",
      "Tonkatsu dinner",
    ],
  },
  {
    num: 3,
    title: "Whimsy & The Original 151",
    city: "Tokyo",
    kanji: "三鷹",
    romaji: "Mitaka",
    themeId: "ghibli-whimsy",
    tagline: "Ghibli Museum, Pokémon Center, late-night Shibuya izakaya.",
    logistics: "Duffel stays at the capsule.",
    activity:
      "Morning trip to Mitaka for the Ghibli Museum (tickets must be booked exactly one month in advance). Afternoon in Ikebukuro for Pokémon Center Mega Tokyo — Gen 1 merchandise hunt.",
    food: [
      { slot: "Breakfast", text: "Pastries from a local Japanese bakery." },
      { slot: "Lunch", text: "Conveyor belt sushi (Kura Sushi or Sushiro) in Ikebukuro." },
      { slot: "Dinner", text: "Late-night Izakaya hopping in Shibuya." },
    ],
    locations: [
      { name: "Ghibli Museum, Mitaka", query: mapQuery("Ghibli Museum, Mitaka") },
      { name: "Pokémon Center Mega Tokyo, Ikebukuro", query: mapQuery("Pokémon Center Mega Tokyo Ikebukuro") },
      { name: "Shibuya", query: mapQuery("Shibuya, Tokyo") },
    ],
    checklist: [
      "Ghibli Museum (ticket booked!)",
      "Hunt Gen 1 merch at Pokémon Center Mega Tokyo",
      "Conveyor-belt sushi",
      "Izakaya hop in Shibuya",
    ],
  },
  {
    num: 4,
    title: "Into the Mountains",
    city: "Takayama",
    kanji: "高山",
    romaji: "Takayama",
    themeId: "alpine-wood",
    tagline: "Wooden merchant streets, Hida beef, and a private onsen.",
    logistics:
      "Use Takuhaibin to ship your duffel from Tokyo straight to your Kyoto hotel. Travel today with only your daypack. Shinkansen + Hida Express to Takayama.",
    activity:
      "Explore the beautifully preserved wooden merchant streets of Takayama. Check into your Ryokan and reserve the private Kashikiri bath to soak without tattoo restrictions.",
    food: [
      { slot: "Breakfast", text: "Shinkansen Ekiben (highly curated train station bento)." },
      { slot: "Lunch", text: "Hida beef croquettes from street vendors." },
      { slot: "Dinner", text: "Yakiniku (Japanese BBQ) featuring premium local Hida Beef." },
    ],
    locations: [
      { name: "Takayama Old Town (Sanmachi)", query: mapQuery("Sanmachi Suji Takayama") },
      { name: "Ryokan in Takayama", query: mapQuery("Takayama ryokan") },
    ],
    checklist: [
      "Ship duffel via Takuhaibin → Kyoto hotel",
      "Wander Sanmachi merchant streets",
      "Reserve Kashikiri private bath",
      "Hida beef yakiniku dinner",
    ],
  },
  {
    num: 5,
    title: "Thatched Roofs & The Old Capital",
    city: "Kyoto",
    kanji: "白川郷",
    romaji: "Shirakawa-gō",
    themeId: "thatch-mountain",
    tagline: "UNESCO farmhouses, then down to Kyoto.",
    logistics:
      "Morning bus to Shirakawa-go. Afternoon train down to Kyoto. Check into your business hotel and retrieve your forwarded duffel from the front desk.",
    activity:
      "Wander the UNESCO World Heritage farmhouses of Shirakawa-go. Evening arrival in Kyoto.",
    food: [
      { slot: "Breakfast", text: "Traditional Ryokan breakfast — fish, rice, miso, tamagoyaki." },
      { slot: "Lunch", text: "Soba noodles in the mountain village." },
      { slot: "Dinner", text: "Kyoto-style udon near your hotel." },
    ],
    locations: [
      { name: "Shirakawa-go", query: mapQuery("Shirakawa-go") },
      { name: "Kyoto Station", query: mapQuery("Kyoto Station") },
    ],
    checklist: [
      "Bus to Shirakawa-go",
      "Photograph the gassho-zukuri farmhouses",
      "Retrieve forwarded duffel at Kyoto hotel",
    ],
  },
  {
    num: 6,
    title: "Evangelion & Eerie Atmospheres",
    city: "Kyoto",
    kanji: "伏見稲荷",
    romaji: "Fushimi Inari",
    themeId: "crimson-shrine",
    tagline: "Climb Unit-01 by day, climb a thousand torii by midnight.",
    logistics: "Keep the duffel at the hotel.",
    activity:
      "Morning at Toei Kyoto Studio Park to climb the massive Evangelion Unit-01 at the Kyoto Base. After 9:00 PM, hike Fushimi Inari — ascending through thousands of red Torii gates in pitch black is surreal and intensely atmospheric. Capture cinematic low-light shots with the iPhone 16 Pro Max.",
    food: [
      { slot: "Breakfast", text: "Konbini run — onigiri and coffee." },
      { slot: "Lunch", text: "Okonomiyaki near the studio park." },
      { slot: "Dinner", text: "Late-night street food after descending the dark mountain." },
    ],
    locations: [
      { name: "Toei Kyoto Studio Park", query: mapQuery("Toei Kyoto Studio Park") },
      { name: "Fushimi Inari-taisha", query: mapQuery("Fushimi Inari Taisha Kyoto") },
    ],
    checklist: [
      "Climb Evangelion Unit-01 at Toei Studio Park",
      "Hike Fushimi Inari after 9pm",
      "Long-exposure torii shots",
    ],
  },
  {
    num: 7,
    title: "Hidden Stone Faces",
    city: "Kyoto & Nara",
    kanji: "奈良",
    romaji: "Nara",
    themeId: "moss-stone",
    tagline: "1,200 moss-covered statues, then the bowing deer.",
    logistics: "Short local train to Nara in the afternoon.",
    activity:
      "Hike up to Otagi Nenbutsu-ji to see the 1,200 moss-covered, expressive stone statues slowly being reclaimed by the forest. Afternoon trip to Nara to see the colossal wooden Todai-ji Temple and the bowing deer.",
    food: [
      { slot: "Breakfast", text: "Fresh matcha and traditional sweets." },
      { slot: "Lunch", text: "Katsu curry." },
      { slot: "Dinner", text: "Shabu-Shabu — thinly sliced meat boiled in broth." },
    ],
    locations: [
      { name: "Otagi Nenbutsu-ji", query: mapQuery("Otagi Nenbutsu-ji Kyoto") },
      { name: "Tōdai-ji Temple", query: mapQuery("Todai-ji Nara") },
      { name: "Nara Park (deer)", query: mapQuery("Nara Park") },
    ],
    checklist: [
      "Find the 1,200 moss statues at Otagi Nenbutsu-ji",
      "See the Great Buddha at Tōdai-ji",
      "Feed the bowing deer",
    ],
  },
  {
    num: 8,
    title: "The Folk-Horror Tension",
    city: "Mount Kōya",
    kanji: "高野山",
    romaji: "Kōyasan",
    themeId: "ink-cedar",
    tagline: "Cedar lanterns, monk cuisine, and a cemetery in the dark.",
    logistics:
      "Forward your duffel from Kyoto to your Osaka hotel. Travel with your daypack. Cable car up to Koyasan.",
    activity:
      "Check into your Shukubo (temple lodging). At night, walk through Okunoin — Japan's largest cemetery, nestled in an ancient cedar forest and lit only by stone lanterns. Quiet, isolated, incredibly unsettling.",
    food: [
      { slot: "Breakfast", text: "Bakery stop before leaving Kyoto." },
      { slot: "Lunch", text: "Mountain vegetables and rice." },
      { slot: "Dinner", text: "Shojin Ryori — intricate, multi-course vegan cuisine prepared by the monks." },
    ],
    locations: [
      { name: "Koyasan (Kōyasan)", query: mapQuery("Koyasan") },
      { name: "Okunoin Cemetery", query: mapQuery("Okunoin Koyasan") },
      { name: "Shukubo (temple lodging)", query: mapQuery("Koyasan shukubo temple lodging") },
    ],
    checklist: [
      "Ship duffel → Osaka hotel",
      "Check into shukubo",
      "Walk Okunoin after dark",
      "Shojin Ryori dinner",
    ],
  },
  {
    num: 9,
    title: "The Gritty Food Capital",
    city: "Osaka",
    kanji: "道頓堀",
    romaji: "Dōtonbori",
    themeId: "dotonbori-glow",
    tagline: "Dawn fire ritual, then neon and fugu.",
    logistics: "Train down from the mountain to Osaka. Check into a capsule hotel and retrieve your duffel.",
    activity:
      "Wake before dawn for the temple fire ritual. Arrive in Osaka and get swallowed by the neon chaos of Dotonbori.",
    food: [
      { slot: "Breakfast", text: "Temple breakfast." },
      { slot: "Lunch", text: "Takoyaki (octopus balls) from a Dotonbori street vendor." },
      { slot: "Dinner", text: "Fugu (Pufferfish). The licensed delicacy." },
    ],
    locations: [
      { name: "Temple morning ritual", query: mapQuery("Koyasan goma fire ritual") },
      { name: "Dōtonbori", query: mapQuery("Dotonbori Osaka") },
    ],
    checklist: [
      "Pre-dawn fire ritual at temple",
      "Retrieve duffel at Osaka capsule",
      "Takoyaki in Dotonbori",
      "Fugu dinner (licensed shop)",
    ],
  },
  {
    num: 10,
    title: "Retro Hunting & Raw Chicken",
    city: "Osaka",
    kanji: "日本橋",
    romaji: "Nipponbashi",
    themeId: "crt-retro",
    tagline: "Vintage card hunt, then smoky standing bars and torisashi.",
    logistics: "Duffel stays at the capsule.",
    activity:
      "Spend the day in Den Den Town digging through multi-story hobby shops for vintage Pokémon base set cards and retro GBA games. At night, explore the smoky, standing bars of Ura-Namba.",
    food: [
      { slot: "Breakfast", text: "Konbini feast." },
      { slot: "Lunch", text: "Kushikatsu — deep-fried skewers." },
      { slot: "Dinner", text: "Highly-rated specialty shop for Torisashi (seared raw chicken). Buttery, clean, entirely unique." },
    ],
    locations: [
      { name: "Den Den Town", query: mapQuery("Den Den Town Osaka") },
      { name: "Ura-Namba", query: mapQuery("Ura Namba Osaka") },
    ],
    checklist: [
      "Hunt vintage Pokémon base set in Den Den Town",
      "GBA games sweep",
      "Kushikatsu lunch",
      "Torisashi dinner",
      "Standing bars in Ura-Namba",
    ],
  },
  {
    num: 11,
    title: "History & Reflection",
    city: "Hiroshima",
    kanji: "広島",
    romaji: "Hiroshima",
    themeId: "peace-white",
    tagline: "Peace Park, the museum, and your grandfather's footsteps.",
    logistics:
      "Shinkansen west to Hiroshima with your duffel. Drop it at your hotel or in a station coin locker.",
    activity:
      "Visit the Peace Memorial Park and Museum. Spend time reflecting on the city's history, the aftermath, and the personal connection to your grandfather's post-war presence in the region.",
    food: [
      { slot: "Breakfast", text: "Ekiben on the bullet train." },
      { slot: "Lunch", text: "Quick curry rice." },
      { slot: "Dinner", text: "Hiroshima-style Okonomiyaki — layered with yakisoba noodles." },
    ],
    locations: [
      { name: "Peace Memorial Park", query: mapQuery("Hiroshima Peace Memorial Park") },
      { name: "Peace Memorial Museum", query: mapQuery("Hiroshima Peace Memorial Museum") },
      { name: "Atomic Bomb Dome", query: mapQuery("Atomic Bomb Dome Hiroshima") },
    ],
    checklist: [
      "Peace Memorial Park",
      "Peace Memorial Museum",
      "Hiroshima-style okonomiyaki",
    ],
  },
  {
    num: 12,
    title: "The Floating Shrine",
    city: "Miyajima",
    kanji: "宮島",
    romaji: "Miyajima",
    themeId: "vermillion-tide",
    tagline: "The torii in the tide, oysters, and Mount Misen.",
    logistics: "Short local train and ferry from Hiroshima to Miyajima Island.",
    activity:
      "Explore the coastal island. See the massive Torii gate floating in the ocean at high tide, and hike the densely forested Mount Misen.",
    food: [
      { slot: "Breakfast", text: "Hotel breakfast or local bakery." },
      { slot: "Lunch", text: "Grilled oysters (local specialty) and Momiji Manju (maple-leaf cakes)." },
      { slot: "Dinner", text: "Fresh seafood back in Hiroshima." },
    ],
    locations: [
      { name: "Itsukushima Floating Torii", query: mapQuery("Itsukushima Shrine torii") },
      { name: "Mount Misen", query: mapQuery("Mount Misen Miyajima") },
    ],
    checklist: [
      "Floating torii at high tide",
      "Grilled oysters",
      "Momiji manju",
      "Hike Mount Misen",
    ],
  },
  {
    num: 13,
    title: "The Return",
    city: "Tokyo",
    kanji: "明治神宮",
    romaji: "Meiji Jingū",
    themeId: "muted-gold",
    tagline: "Final souvenirs, timber gates, and an omakase blowout.",
    logistics:
      "Long Shinkansen ride back to Tokyo. Store your duffel in a station coin locker while doing final activities, then check into your final hotel.",
    activity:
      "Final souvenir sweep in Shibuya. Walk through the massive, silent timber gates of Meiji Jingu to decompress from the city noise.",
    food: [
      { slot: "Breakfast", text: "Bullet train snacks." },
      { slot: "Lunch", text: "Gyudon at Yoshinoya or Matsuya." },
      { slot: "Dinner", text: "Blow whatever is left of the budget on a high-end omakase sushi experience." },
    ],
    locations: [
      { name: "Shibuya (souvenirs)", query: mapQuery("Shibuya shopping Tokyo") },
      { name: "Meiji Jingū", query: mapQuery("Meiji Jingu Tokyo") },
    ],
    checklist: [
      "Souvenir sweep in Shibuya",
      "Walk Meiji Jingu timber gates",
      "Omakase sushi finale",
    ],
  },
  {
    num: 14,
    title: "Departure",
    city: "Tokyo",
    kanji: "さようなら",
    romaji: "Sayōnara",
    themeId: "quiet-grey",
    tagline: "One last konbini haul, then home.",
    logistics: "Pack up the duffel. Train to Narita or Haneda airport.",
    activity: "Final walk through the neighborhood.",
    food: [
      { slot: "Breakfast", text: "One last ultimate Konbini haul." },
      { slot: "Lunch", text: "Airport ramen." },
      { slot: "Dinner", text: "Fly home." },
    ],
    locations: [
      { name: "Narita Airport", query: mapQuery("Narita Airport") },
      { name: "Haneda Airport", query: mapQuery("Haneda Airport") },
    ],
    checklist: [
      "Last konbini haul",
      "Airport ramen",
      "Window seat for the goodbye view",
    ],
  },
];

export const tripMeta = {
  title: "14-Day Japan Solo Expedition",
  subtitle: "The Blueprint",
  blurb:
    "A meticulously paced, atmospheric journey designed for a single duffel bag. Neon-drenched cities, esoteric anime touchstones, lingering folk-horror, and an uncompromising culinary run.",
  prep: [
    { label: "Target budget", value: "~$4,500 USD (Revolut savings vault)" },
    { label: "Luggage system", value: "1 carry-on duffel · coin lockers · Takuhaibin forwarding" },
    { label: "Bathing", value: "Kashikiri (private reservable baths) to bypass tattoo bans" },
    { label: "Tech", value: "iPhone 16 Pro Max + 2× MagSafe batteries" },
    { label: "Finance", value: "Revolut physical card + 7-Eleven ATMs for Yen" },
  ],
};
