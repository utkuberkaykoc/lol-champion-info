const fetch = require("node-fetch");

const apiUrl = "https://utku.berkaykoc.net/api/lol/champ";

// Simple in-memory cache
const _cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function _getCached(key) {
  const entry = _cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) return entry.data;
  _cache.delete(key);
  return null;
}

function _setCache(key, data) {
  _cache.set(key, { data, timestamp: Date.now() });
}

/**
 * Fetch champion details from the API.
 * @param {string} championName - The name of the champion.
 * @param {string} [language='en'] - Language ('en', 'tr', etc.).
 * @param {Object} [options] - Additional options.
 * @param {boolean} [options.cache=true] - Use cache.
 * @returns {Promise<Object>} Champion data.
 */
async function getChampionInfo(championName, language = "en", options = {}) {
  if (!championName || typeof championName !== "string") {
    throw new Error("Champion name is required and must be a string.");
  }

  const useCache = options.cache !== false;
  const cacheKey = `champ:${championName.toLowerCase()}:${language}`;

  if (useCache) {
    const cached = _getCached(cacheKey);
    if (cached) return cached;
  }

  try {
    const response = await fetch(`${apiUrl}?name=${encodeURIComponent(championName)}&lang=${language}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (useCache) _setCache(cacheKey, data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Fetch a random champion.
 * @param {string} [language='en'] - Language.
 * @returns {Promise<Object>} Random champion data.
 */
async function getRandomChampion(language = "en") {
  const champions = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie",
    "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Belveth", "Blitzcrank",
    "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Chogath",
    "Corki", "Darius", "Diana", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal",
    "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
    "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia",
    "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa",
    "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn",
    "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "Lee Sin",
    "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite",
    "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser",
    "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee",
    "Nilah", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon",
    "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell",
    "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira",
    "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana",
    "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas",
    "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh",
    "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr",
    "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vex", "Vi", "Viego",
    "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath",
    "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri",
    "Ziggs", "Zilean", "Zoe", "Zyra"
  ];
  const random = champions[Math.floor(Math.random() * champions.length)];
  return getChampionInfo(random, language);
}

/**
 * Compare two champions side by side.
 * @param {string} champ1 - First champion name.
 * @param {string} champ2 - Second champion name.
 * @param {string} [language='en'] - Language.
 * @returns {Promise<Object>} Comparison object.
 */
async function compareChampions(champ1, champ2, language = "en") {
  if (!champ1 || !champ2) throw new Error("Two champion names are required.");

  const [data1, data2] = await Promise.all([
    getChampionInfo(champ1, language),
    getChampionInfo(champ2, language),
  ]);

  return {
    champion1: data1,
    champion2: data2,
    comparison: {
      names: [data1.name || champ1, data2.name || champ2],
    },
  };
}

/**
 * Clears the champion cache.
 */
function clearCache() {
  _cache.clear();
}

module.exports = { getChampionInfo, getRandomChampion, compareChampions, clearCache };
