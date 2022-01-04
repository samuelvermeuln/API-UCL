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

  await page.waitForTimeout(2000);
  
  await page.click('[class="collapsible-header active"]');

  await page.waitForTimeout(1500);

    const notas_user = await page.evaluate(() => {
       DadosUser = [];
      
      try {
        const quantidade_de_materias =
          document.querySelector("#\\32 021-2 > ul").innerText
          .split(/[\n,]+/)
          .filter((v) => v !== "keyboard_arrow_right")
          .filter((v) => v !== "").length;

        // const Numerocoluna = document.querySelector(
        // "#\\32 021-2 > ul > li.active > div.collapsible-body > table > tbody"
        // ).rows.length;

        for (let i = 1; i < quantidade_de_materias + 1 ; i++) {

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
            
            DadosUser.push({
              dados: {
                nome_Materia: nome_Materia,
                nome_Professor: nome_Professor,
                NOTAS: {
                  grupo: grupo,
                  data: data,
                  avalicao: avalicao,
                  peso: peso,
                  nota: nota,
                  faltouSemestral: faltouSemestral,
                },
              },
            });
            
          }
        }
        

        // var reduced = [];

        // DadosUser.forEach((element) => {
        //   var duplicated =
        //     reduced.findIndex((redItem) => {
        //       return (
        //         element.dados.nome_Professor.NOTAS ==
        //         redItem.dados.nome_Professor.NOTAS
        //       );
        //     }) > -1;

        //   if (!duplicated) {
        //     reduced.push(element);
        //   }
        // });

        return DadosUser;

      } catch (error) {
        return error.message;
      }
    });



  console.log("=>>> valueNota =>> ", JSON.stringify(notas_user));

  await browser.close();
})();
