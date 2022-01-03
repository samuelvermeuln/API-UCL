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

  dados_api = [];

  const valueNota = await page.evaluate(() => {
    DadosUser = [];
    const Numerocoluna = document.querySelector(
      "#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody"
    ).rows.length;

    for (let i = 1; i < Numerocoluna + 1; i++) {
      const NumeroLinhaColuna = document.querySelector(
        `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i})`
      ).cells.length;
      // count.push({ numero: NumeroLinhaDaColuna });

      const Grupo = document
        .querySelector(
          `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(1)`
        )
        .innerText.replace(/\s/g, "");

      const Data = document
        .querySelector(
          `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`
        )
        .innerText.replace(/\s/g, "");

      const Avaliacao = document
        .querySelector(
          `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(3)`
        )
        .innerText.replace(/\s/g, "");

      const Peso = document
        .querySelector(
          `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(4)`
        )
        .innerText.replace(/\s/g, "");

      const Nota = document
        .querySelector(
          `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(5)`
        )
        .innerText.replace(/\s/g, "");

      const Faltou = document
        .querySelector(
          `#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody > tr:nth-child(${i}) > td:nth-child(7)`
        )
        .innerText.replace(/\s/g, "");

      DadosUser.push(
        (NOTAS = {
          Grupo: Grupo,
          Data: Data,
          Avaliacao: Avaliacao,
          Peso: Peso,
          Nota: Nota,
          Faltou: Faltou,
        })
      );

      const ano = [
        document.querySelector("#aluno_notas > div > div:nth-child(1) > ul"),
      ]
        .map((element) => element.innerText)
        .join("\n");

      DadosUser.push({ Ano: ano.split(/[\n,]+/) });
    }

    return notas;
  });
  dados_api.push((Notas = { valueNota }));

  console.log("=>>> valueNota =>> ", dados_api);

  await browser.close();
})();
