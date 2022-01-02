  const valueNota = await page.evaluate(() => {
        try {
             
            return document.querySelector(
            `#\\32 021-2 > ul > li:nth-child(1) > div.collapsible-body > table > tbody > tr:nth-child(1) > td:nth-child(1)`
            ).textContent;

         } catch (error) {
            console.log(error.message);
         }
    })


                document
              .getElementById("2021-2")
               .getElementsByClassName("collapsible-body").item(0).querySelector('td').innerHTML


var elemento = document
.getElementById("2021-2")
.getElementsByClassName("collapsible-body")

const grabFromRow = (row) =>
row
.querySelector(`${row}`) // grab the TD
.innerText // grab the text
.trim();  

const retornaDados = (interador) => {
const teste = document
    .getElementById("2021-2")
    .getElementsByClassName("collapsible-body")
    .item(interador)
    .querySelector("td").innerHTML;
return teste
}

for (let i = 1; i < 10; i++) {
dados.push({
name: retornaDados(i),
});
}

return dados;