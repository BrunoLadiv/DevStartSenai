class AtletaDados {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calcularCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    const notasOrdenadas = this.notas.sort((a, b) => a - b);
    const notasValidas = notasOrdenadas.slice(1, -1);
    const media =
      notasValidas.reduce((acc, nota) => acc + nota, 0) / notasValidas.length;
    return media;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }
  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calcularCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

const atleta1 = new AtletaDados(
  "Cesar Abascal",
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88],
);

console.log(`Nome: ${atleta1.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta1.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta1.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta1.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta1.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta1.obtemCategoria()}`);
console.log(`IMC: ${atleta1.obtemIMC()}`);
console.log(`Média válida: ${atleta1.obtemMediaValida()}\n`);
