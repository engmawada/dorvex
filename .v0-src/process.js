const sharp = require("/tmp/tools/node_modules/sharp");
const out = "/vercel/share/v0-project/public/images";
const gen = "/vercel/share/v0-project/.v0-src";

async function logoAlpha(region, file) {
  const { data, info } = await sharp("logo-wall.jpg")
    .extract(region)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const m = Math.max(data[i], data[i + 1], data[i + 2]);
    const a = Math.min(1, Math.max(0, (m - 78) / 70));
    data[i + 3] = Math.round(a * 255);
  }
  await sharp(data, { raw: info }).trim({ threshold: 1 }).png().toFile(file);
}

(async () => {
  const jpg = { quality: 82, mozjpeg: true };

  await sharp("shutters.png").extract({ left: 0, top: 0, width: 762, height: 504 }).jpeg(jpg).toFile(`${out}/shutter-shop.jpg`);
  await sharp("shutters.png").extract({ left: 776, top: 0, width: 760, height: 504 }).jpeg(jpg).toFile(`${out}/shutter-factory.jpg`);
  await sharp("shutters.png").extract({ left: 776, top: 520, width: 760, height: 504 }).jpeg(jpg).toFile(`${out}/shutter-warehouse.jpg`);
  await sharp(`${gen}/gen-garage.png`).resize(1100).jpeg(jpg).toFile(`${out}/shutter-garage.jpg`);

  await sharp("wrought.jpg").extract({ left: 0, top: 120, width: 736, height: 780 }).jpeg(jpg).toFile(`${out}/gate-wrought.jpg`);
  await sharp("double.jpg").extract({ left: 112, top: 100, width: 512, height: 614 }).jpeg(jpg).toFile(`${out}/gate-double.jpg`);
  await sharp("sliding-clean.jpg").jpeg(jpg).toFile(`${out}/gate-sliding.jpg`);

  await sharp("motor-side.jpg").resize(1000).jpeg(jpg).toFile(`${out}/motor-side.jpg`);
  await sharp("central-frame.jpg").jpeg(jpg).toFile(`${out}/motor-central.jpg`);
  await sharp(`${gen}/gen-twoarm.png`).resize(1000).jpeg(jpg).toFile(`${out}/motor-two-arm.jpg`);

  await sharp(`${gen}/gen-hero.png`).jpeg({ quality: 84, mozjpeg: true }).toFile(`${out}/hero.jpg`);

  await logoAlpha({ left: 190, top: 210, width: 880, height: 740 }, `${out}/dorvex-logo-full.png`);
  await logoAlpha({ left: 420, top: 210, width: 440, height: 440 }, `${out}/dorvex-mark.png`);
  await logoAlpha({ left: 190, top: 680, width: 880, height: 200 }, `${out}/dorvex-wordmark.png`);
  await sharp("logo-wall.jpg").resize(1000).jpeg(jpg).toFile(`${out}/dorvex-sign.jpg`);

  for (const f of ["dorvex-logo-full.png", "dorvex-mark.png", "dorvex-wordmark.png"]) {
    const m = await sharp(`${out}/${f}`).metadata();
    console.log(f, m.width, m.height);
  }
})();
