 // debugger;
       try {
           let data = [];

        //    let elements = document.getElementById("2021-2").getElementsByClassName("collapsible-body");
           
            let elements = document
              .getElementById("2021-2")
              .getElementsByClassName("collapsible-body");


            for (var element of elements) {
                // data.push(element.textContent)
                data.push(element.textContent);
            }
           

            return data;
        
       } catch (error) {
           console.log(error.menssage)
       }













         let parser = new DOMParser();
        // let coverter = parser.parseFromString(stringContendoHTML, "text/html");
        // let subtabelas = coverter.getElementsByClassName("subtabela");

        data = [];
        // dadosEmstring = [];
        dadosEmHtml = [];

        var elemento = document
            .getElementById("2021-2")
            .getElementsByClassName("collapsible-body")
        
        
    
        for (let i = 0; i < elemento.length; i++) {
            data.push({ objeto: elemento[i].innerHTML.replace(/\s/g, "") });
        }
   
        for (let index = 0; index < data.length; index++) {
            const coverter = parser.parseFromString(data[index], "text/html");
            const tabela = coverter.getElementsByClassName("striped responsive-table");
            const dados = tabela.map((ev) => ev.innerHTML);
            // const subtabelas = tabela.querySelectorAll("tbody");

            //   .getElementsByTagName("tr");

          dadosEmHtml.push({ obj: dados });
        }

        
        return dadosEmHtml;


const valueNota = await page.evaluate(() => {
    // dados = [];
    return [...document.body.querySelectorAll("td")]
    .map((element) => element.innerText)
    .join("\n");
});