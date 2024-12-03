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

  calculaIMC() {}

  calculaMediaValida() {}

  obtemNomeAtleta() {}

  obtemIdadeAtleta() {}

  obtemPesoAtleta() {}

  obtemNotasAtleta() {}

  obtemCategoria() {}

  obtemIMC() {}

  obtemMediaValida() {}
}
