// for (let i = 1; i < quantidade_de_materias + 1; i++) {

// const nome_Materia = document.querySelector(
//   `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-header`
// );
// const nome_Professor = document
//   .querySelector(
//     `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > ul > li.collection-item.dismissable > div`
//   )
//   .innerText.replace(/\s/g, "");

// const numeroNotas = document.querySelector(
//   `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody`
// ).rows.length;

// for (let j = 1; j < numeroNotas + 1; j++) {
// const grupo = document
//   .querySelector(
//     `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(1)`
//   )
//   .innerText.replace(/\s/g, "");

// const data = document
//   .querySelector(
//     `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(2)`
//   )
//   .innerText.replace(/\s/g, "");

// const avalicao = document
//   .querySelector(
//     `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(3)`
//   )
//   .innerText.replace(/\s/g, "");

// const peso = document
//   .querySelector(
//     `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(4)`
//   )
//   .innerText.replace(/\s/g, "");

// const nota = document
//   .querySelector(
//     `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(5)`
//   )
//   .innerText.replace(/\s/g, "");

// const faltouSemestral = document
//   .querySelector(
//     `#\\32 021-2 > ul > li:nth-child(${i}) > div.collapsible-body > table > tbody > tr:nth-child(${j}) > td:nth-child(7)`
//   )
//   .innerText.replace(/\s/g, "");

// DadosUser.push(
//   (dados = {
//     nome_Materia: nome_Materia,
//     nome_Professor: nome_Professor,
//     NOTAS: {
//       grupo: grupo,
//       data: data,
//       avalicao: avalicao,
//       peso: peso,
//       nota: nota,
//       faltouSemestral: faltouSemestral,
//     },
//   })
// );
// }
// }
