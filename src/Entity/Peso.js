const Peso = {
    MAGRICELA: 'Magricela',
    PANCINHA: 'Pancinha',
    CHEIO: 'Cheio',
    ATLETICO: 'Atletico',
    OBESO: 'Obeso',
  
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

export default Peso;