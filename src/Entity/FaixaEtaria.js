const FaixaEtaria = {
    PIVETE: 'Pivete',
    JOVEM: 'Jovem',
    MARMANJO: 'Marmanjo',
    ADULTO: 'Adulto',
    TIOZAO: 'Tiozão',
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