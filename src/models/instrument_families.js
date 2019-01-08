const Data = require('../data/instrument_family_data.js');
const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(family) {
  this.family = family;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('InstrumentFamilies:instrument-ready', this.family);

  PubSub.subscribe('InstrumentMenuView:selected', (event) => {
    const chosenFamilyName = event.detail;
    const selectedFamilyObject = this.findByName(chosenFamilyName);
    PubSub.publish('InstrumentFamilies:family-ready', selectedFamilyObject);
  });

  }

  InstrumentFamilies.prototype.findByName = function(searchName) {

    const foundFamily = this.family.find((currentFamily) => {
      return currentFamily.name === searchName;
    });
  return foundFamily;

};

module.exports = InstrumentFamilies;
