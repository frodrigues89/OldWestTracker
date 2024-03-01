const FaixaEtaria = {
    CRIANCA: 'Criança (14-)',
    CRIANCA_JOVEM: 'Criança-Jovem (15 a 22)',
    JOVEM: 'Jovem (22 a 30)',
    ADULTO: 'Adulto (30 a 45)',
    ADULTO_IDOSO: 'Adulto-Idoso (45 a 60)',
    IDOSO: 'Idoso (60+)',
    
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