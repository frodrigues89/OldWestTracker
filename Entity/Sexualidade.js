const Sexualidade = {
    HETERO: 'Hetero',
    CHUSKA: 'Chuska',
    TRAVESTI: 'Travesti',
    SAPATAO: 'Sapatao',
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