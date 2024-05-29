let atletas = [
    {
   
      nome: "Cesar Abascal",
   
      notas: [10, 9.34, 8.42, 10, 7.88]
   
    },
   
    {
   
      nome: "Fernando Puntel",
   
      notas:  [8, 10, 10, 7, 9.33]
   
    },
   
    {
   
      nome: "Daiane Jelinsky",
   
      notas: [7, 10, 9.5, 9.5, 8]
   
    },
   
    {
   
      nome: "Bruno Castro",
   
      notas: [10, 10, 10, 9, 9.5]
   
    }
   ];
   
   // Usando a função callback forEach e manipulando os dados usando os métodos sort, slice e reduce.
   atletas.forEach(function(atleta) {
     // Organizando as notas em ordem crescente com o .sort
     let notas = atleta.notas.sort(function(a, b) {
       return a - b;
     })
     
     // Com as notas organizada, sendo a primeira nota a menor e a última nota a maior, fatio usando o .slice, selecionando as posiçóes
     let notasCortadas = notas.slice(1, notas.length - 1);
   
     // Somando as notas restantes usando o método .reduce
     let soma = notasCortadas.reduce(function(total, atual) {
       return total + atual;
     }, 0);
     
     // Fazendo a média das notas
     let media = soma / notasCortadas.length;
     
     // Mostrando no console o resultado final
     console.log(`Nome: ${atleta.nome}`);
     console.log(`Notas obtidas: ${notas.join(", ")}`);
     console.log(`Media das notas: ${media}`);
     console.log("----");
   })
   