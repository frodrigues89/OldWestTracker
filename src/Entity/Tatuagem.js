const Tatuagem = {
    ROSTO: 'Rosto',
    PESCOÇO: 'Pescoço',
    BRAÇO_D: 'Braço Direito',
    BRAÇO_E: 'Braço Esquerdo',
    PERNA_D: 'Perna Direita',
    PERNA_E: 'Perna Esquerda',
  
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

export default Tatuagem;