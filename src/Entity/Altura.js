const Altura = {
    BAIXO: 'Baixo (1,50m-)',
    BAIXO_MEDIO: 'Baixo-Médio (1,50-1,65)',
    MEDIO: 'Médio (1,65-1,80)',
    MEDIO_ALTO: 'Médio-Alto (1,81-1,90)',
    ALTO: 'Alto (1,90+)',
  
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