# LOL Champion Info 🏆

✅ **Free to use!**
🎮 A simple Node.js wrapper to fetch **League of Legends** champion details. **Multi-language** support included!

![NPM Version](https://img.shields.io/npm/v/lol-champion-info?color=blue&style=flat-square)
![Downloads](https://img.shields.io/npm/dt/lol-champion-info?color=green&style=flat-square)
![License](https://img.shields.io/npm/l/lol-champion-info?style=flat-square)

---

## 📦 Installation

Install the package using npm:

```sh
npm install lol-champion-info
```

---

## 🚀 Features

- ✅ Fetches League of Legends champion details.
- ✅ Supports multiple languages (`en`, `tr`, and many more!).
- ✅ Lightweight and easy to use.
- ✅ Works seamlessly with Node.js.

---

## 🔥 Quick Start

Here's a quick example to get you started:

```js
const { getChampionInfo } = require("lol-champion-info");

async function main() {
  const champion = await getChampionInfo("lux", "en");
  console.log(champion);
}

main();
```

---

## 📌 API Method

### `getChampionInfo(championName, language)`

Fetches details about a League of Legends champion.

**Parameters:**

- `championName` _(string)_: The name of the champion.
- `language` _(string, optional)_: The language (`en`, `tr`, or any other languages). Defaults to `en`.

**Returns:**

- A JSON object with champion details including name, abilities, stats, and skins.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🌟 Support & Contact

- **GitHub Issues:** [Report Bugs or Request Features](https://github.com/utkuberkaykoc/lol-champion-info/issues)
- **Give a Star:** ⭐ If you love this package, show some support!

🚀 **Now go dominate the Rift!** 🔥