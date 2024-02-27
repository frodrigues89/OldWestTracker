const Altura = {
    BAIXO: 'Baixo',
    BAIXO_MEDIO: 'Baixo-Médio',
    MEDIO: 'Medio',
    MEDIO_ALTO: 'Médio-Alto',
    ALTO: 'Alto',
  
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

export default Altura;