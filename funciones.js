function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('17r_KychvQCz1saw_wh-czk-hgHNYZV3DDV_pP2uF624').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;    
}