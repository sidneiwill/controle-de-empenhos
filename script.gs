function openPopup() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('Popup')
      .setWidth(500)
      .setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Novo Empenho');
}

function insertData(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Geral")
  sheet.appendRow(data);
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Adicionar')
      .addItem('Empenho', 'openPopup')
      .addItem('Menu Lateral', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  let html = HtmlService.createHtmlOutputFromFile('Popup')
  .setTitle("Controle de Empenhos")
  SpreadsheetApp.getUi().showSidebar(html)
}