const Raca = {
    BRANCO: 'Branco',
    PARDO: 'Pardo',
    PRETO: 'Preto',
    AMARELO: 'Amarelo',
  
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

export default Raca;