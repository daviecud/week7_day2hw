const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:family-ready', (event) => {
    const familyObject = event.detail;
    this.render(familyObject);
  });
};

InstrumentInfoView.prototype.render = function(family) {
  this.container.innerHTML = '';

  const heading = this.createHeading(family);
  const infoList = this.createInfoList(family);

  this.container.appendChild(heading);
  this.container.appendChild(infoList);

};

InstrumentInfoView.prototype.createHeading = function(family) {
  const heading = document.createElement('h2');
  heading.textContent = family.name;
  return heading;
};

InstrumentInfoView.prototype.createInfoList = function(family) {
  const infoList = document.createElement('ul');

  const liDescription = this.createLi(`Description: ${family.description}`, infoList);
  const liInstrument = this.createLi(`Instruments in family: ${family.instruments}`, infoList);
  return infoList;
};

InstrumentInfoView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appnedChild(li);
};

module.exports = InstrumentInfoView;
