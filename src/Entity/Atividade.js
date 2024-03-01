const Atividade = {
    PUNGA: 'Punga',
    AB_COVER: 'ABCover',
    ARREBATADOR: 'Arrebatador',
    ENCOXADOR: "Encoxador",
    ESTELIONATARIO: "Estelionatário",
    PULA_CATRACA: "Pula catraca",
    MARRETEIRO: "Marreteiro",
    PEDINTE: "Pedinte",
    PIXADOR: "Pixador",
    TRAFICANTE: "Traficante",
  
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

export default Atividade;