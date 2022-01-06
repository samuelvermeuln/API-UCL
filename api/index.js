// class="collapsible-header"

const puppeteer = require("puppeteer");

async function BuscaDados(login, senha) {

  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();

  await page.goto("https://eies.ucl.br/webaluno/login/");

  await page.type("#user", `${login}`);
  await page.type("#password", `${senha}`);

  await page.click('[type="submit"]');

  await page.waitForNavigation();

  await page.goto("https://eies.ucl.br/webaluno/quadrodenotas/");

  await page.waitForTimeout(2000);

  await page.click('[class="collapsible-header active"]');

  await page.waitForTimeout(1500);

  const notas_user = await page.evaluate(() => {
    DadosUser = [];
    DadosNotas = [];
    json = [];

    try {
      const quantidade_de_materias = document
        .querySelector("#\\32 021-2 > ul")
        .innerText.split(/[\n,]+/)
        .filter((v) => v !== "keyboard_arrow_right")
        .filter((v) => v !== "").length;

      // const Numerocoluna = document.querySelector(
      // "#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody"
      // ).rows.length;

      for (let i = 1; i < quantidade_de_materias + 1; i++) {
        const nome_Materia = document
          .querySelector(
            `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-header`
          )
          .innerText.split(/\s/g)
          .filter((v) => v !== "keyboard_arrow_right");

        const nome_Professor = document
          .querySelector(
            `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > ul > li.collection-item.dismissable > div`
          )
          .innerText.replace(/\s/g, "");

        const numeroNotas = document.querySelector(
          `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody`
        ).rows.length;

        DadosUser.push({
          dados: {
            nome_Materia: nome_Materia,
            nome_Professor: nome_Professor,
          },
        });

        for (let j = 1; j < numeroNotas + 1; j++) {
          const grupo = document
            .querySelector(
              `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(1)`
            )
            .innerText.replace(/\s/g, "");

          const data = document
            .querySelector(
              `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(2)`
            )
            .innerText.replace(/\s/g, "");

          const avalicao = document
            .querySelector(
              `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(3)`
            )
            .innerText.replace(/\s/g, "");

          const peso = document
            .querySelector(
              `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(4)`
            )
            .innerText.replace(/\s/g, "");

          const nota = document
            .querySelector(
              `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(5)`
            )
            .innerText.replace(/\s/g, "");

          const faltouSemestral = document
            .querySelector(
              `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(7)`
            )
            .innerText.replace(/\s/g, "");

          DadosNotas.push({
            notas: {
              grupo: grupo,
              data: data,
              avalicao: avalicao,
              peso: peso,
              nota: nota,
              faltouSemestral: faltouSemestral,
            },
          });
        }

        const array1 = DadosUser.concat(DadosNotas);

        json.push({ obj: array1 });

        DadosUser.splice(0, DadosUser.length);
        DadosNotas.splice(0, DadosNotas.length);
      }

      return json;
    } catch (error) {
      return error.message;
    }
  });

  await browser.close();

  return JSON.stringify(notas_user);
}




