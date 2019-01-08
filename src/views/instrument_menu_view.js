const PubSub = require('../helpers/pub_sub.js');

const InstrumentMenuView = function (menu) {
  this.menu = menu;
};

InstrumentMenuView.prototype.bindEvents = function() {
  PubSub.subscribe('Instrument:all-instruments', (event) => {
    console.log(event.detail);
    this.populate(event.detail);

  });

  this.menu.addEventListener('click', (event) => {
    const selectedInstrument = event.target.id;
    PubSub.publish('InstrumentMenuView:selected', selectedInstrument);

  });
}

InstrumentMenuView.prototype.populate = function(instruments){
  instruments.forEach((instrument) => {
    const instrumentLink = document.createElement('a');
    instrumentLink.id = instrument.name;
    instrumentLink.classList.add('instrument-menu-item');
    instrumentLink.innerText = instrument.name;
    this.menu.appendChild(instrumentLink);

  })
}

module.exports = InstrumentMenuView;
