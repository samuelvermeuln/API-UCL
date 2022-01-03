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

    const notas_user = await page.evaluate(() => {
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

        }

        return DadosUser;
    });

    const ano_user = await page.evaluate(() => {
        date = []

        const ano = [document.querySelector("#aluno_notas > div > div:nth-child(1) > ul")]
            .map((element) => element.innerText)
            .join("\n");

        date.push({ Ano: ano.split(/[\n,]+/) });

        return date;  
    });

    const head_user = await page.evaluate(() => {
        Materias_professor = []

        const quantidade_de_materias = document
          .querySelector("#\\32 021-2")
          .innerText.split(/[\n,]+/)
          .filter((v) => v !== "keyboard_arrow_right")
          .filter((v) => v !== "").length;

        for (let index = 1; index < quantidade_de_materias; index++) {
          try {
            const nome_Professor = document
              .querySelector(
                `#\\32 021-2 > ul > li:nth-child(${index}) > div.collapsible-body > ul > li.collection-item.dismissable > div`
              )
              .innerText.replace(/\s/g, "");

            const nome_Materia = document
              .querySelector(
                `#\\32 021-2 > ul > li:nth-child(${index}) > div.collapsible-header`
              )
              .innerText.replace(/\s/g, "");

            Materias_professor.push({
              nome_Professor: nome_Professor,
              nome_Materia: nome_Materia,
            });
          } catch (error) {
            console.log(error);
          }
        }


        return Materias_professor;
    });

  dados_api.push({ notas: notas_user, ano: ano_user, head_user: head_user });

  console.log("=>>> valueNota =>> ", JSON.stringify(dados_api));

  await browser.close();
})();
