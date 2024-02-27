const Sexualidade = {
    HETERO: 'Hetero',
    GAY: 'Gay',
    TRANS: 'Trans',
    LESBICA: 'Lésbica',
    OUTROS: 'Outros',
  
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

export default Sexualidade;