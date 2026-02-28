const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1179, height: 2556 },
    deviceScaleFactor: 2
  });

  await page.goto("file://" + process.cwd() + "/index.html", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);

  fs.mkdirSync("output", { recursive: true });
  await page.screenshot({ path: "output/wallpaper.png", fullPage: false });

  await browser.close();
})();