// class="collapsible-header"

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true, devtools: false });
  const page = await browser.newPage();
  await page.goto("https://eies.ucl.br/webaluno/login/");

  // await page.click('[href="/login"]')

  await page.type("#user", "vermeuln@ucl.br");
  await page.type("#password", "civil4545");

  await page.click('[type="submit"]');

  await page.waitForNavigation();

  await page.goto("https://eies.ucl.br/webaluno/quadrodenotas/");

  // await page.click('[href="#2021-1"]');

  const valueNota = await page.evaluate(() => {
    // count = []
    data = [];

    const Numerocoluna = document.querySelector(
      "#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody"
    ).rows.length;

    const NumeroLinhaDaColuna = document.querySelector(
      "#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(1)"
    ).cells.length;

    // const elemento = document.querySelector(
    //   "#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(1) > td:nth-child(1)"
    // ).innerText;

    for (let i = 1; i < Numerocoluna + 1; i++) {
      const NumeroLinhaColuna = document.querySelector(
        `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i})`
      ).cells.length;
      // count.push({ numero: NumeroLinhaDaColuna });

      for (let j = 1; j < NumeroLinhaColuna + 1; j++) {
        const Grupo = document
          .querySelector(
            `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(${j})`
          )
          .innerText.replace(/\s/g, "");

        const titleObjeto = document.querySelector(
          `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(1)`
        ).innerText;

        data.push({
          Grupo: Grupo,
        });
      }
    }

    return data;
  });
  // objeto: titleObjeto,

  console.log("=>>> valueNota =>> ", valueNota);

  await browser.close();
})();
