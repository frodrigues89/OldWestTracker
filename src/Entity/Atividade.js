const Altura = {
    PUNGA: 'Punga',
    AB_COVER: 'AB-Cover',
    LADRAO: 'Ladrão',
  
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