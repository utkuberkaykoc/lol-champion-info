# LOL Champion Info 🏆

✅ **Free to use!**  
🎮 A powerful Node.js wrapper for **League of Legends** champion data. Includes **random champion picker**, **champion comparison**, **smart caching**, and **multi-language** support!

![NPM Version](https://img.shields.io/npm/v/lol-champion-info?color=blue&style=flat-square)
![Downloads](https://img.shields.io/npm/dt/lol-champion-info?color=green&style=flat-square)
![License](https://img.shields.io/npm/l/lol-champion-info?style=flat-square)

---

## 🆕 What's New in v2.0.0

🔥 **Random Champion** – Get a random champion for your next game  
🔥 **Champion Comparison** – Compare two champions side by side  
🔥 **Smart Caching** – Built-in 5-minute cache for faster responses  
🔥 **Input Validation** – Better error messages for invalid inputs  
🔥 **Full Champion Roster** – 160+ champions in the random pool  

---

## 📦 Installation

```sh
npm install lol-champion-info
```

---

## 🚀 Quick Start

```js
const { getChampionInfo, getRandomChampion, compareChampions } = require("lol-champion-info");

// Get champion details
const lux = await getChampionInfo("lux", "en");
console.log(lux);

// Random champion for your next game 🎲
const random = await getRandomChampion("en");
console.log(`Play: ${random.name}!`);

// Compare two champions 🤼
const vs = await compareChampions("yasuo", "yone", "en");
console.log(vs);
```

---

## 📌 API Methods

### `getChampionInfo(name, language?, options?)`
Fetch champion details.
- `name` _(string)_: Champion name
- `language` _(string)_: `"en"`, `"tr"`, etc. Default: `"en"`
- `options.cache` _(boolean)_: Use cache. Default: `true`

### `getRandomChampion(language?)`
Get a random champion from 160+ champions.

### `compareChampions(champ1, champ2, language?)`
Compare two champions side by side.

### `clearCache()`
Clear the built-in cache.

---

## 🌍 Language Support

Supports `en`, `tr`, and many more languages!

```js
const champ = await getChampionInfo("lux", "tr");
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🌟 Support & Contact
- **GitHub Issues:** [Report Bugs or Request Features](https://github.com/utkuberkaykoc/lol-champion-info/issues)
- **Give a Star:** ⭐ If you love this package, show some support!

🚀 **Now go dominate the Rift!** 🔥