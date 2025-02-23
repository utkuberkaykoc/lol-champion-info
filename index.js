const fetch = require("node-fetch");

const apiUrl = "https://utku.berkaykoc.net/api/lol/champ";

/**
 * Fetch champion details from the API.
 * @param {string} championName - The name of the champion.
 * @param {string} [language='en'] - Language ('en' or 'tr').
 * @returns {Promise<Object>} Champion data.
 */
async function getChampionInfo(championName, language = "en") {
  try {
    const response = await fetch(`${apiUrl}?name=${encodeURIComponent(championName)}&lang=${language}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { getChampionInfo };
