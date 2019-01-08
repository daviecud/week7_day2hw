const InstrumentData = require('./models/instrument_families.js');
const InstrumentFamily = require('./data/instrument_family_data.js');
const InstrumentMenuView = require('./views/instrument_menu_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new InstrumentMenuView(selectElement);
  familyDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-family-info')
  const instrumentInfo = new InstrumentInfoView(infoDiv);
  instrumentInfo.bindEvents();

  const instrumentDataSource = new InstrumentData();
  instrumentDataSource.bindEvents();

});
