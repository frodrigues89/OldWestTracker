const FaixaEtaria = {
    CRIANCA_JOVEM: 'Criança-Jovem',
    JOVEM: 'Jovem',
    ADULTO: 'Adulto',
    ADULTO_IDOSO: 'Adulto-Idoso',
    IDOSO: 'Idoso',
  
    getAllValues: function () {
      const values = [];
      for (const key in this) {
        if (typeof this[key] !== 'function') {
          values.push({ label: this[key], value: this[key] });
        }
      }
      return values;
    },
};

export default FaixaEtaria;