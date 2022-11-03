const HOJA = SpreadsheetApp.openById('17r_KychvQCz1saw_wh-czk-hgHNYZV3DDV_pP2uF624').getActiveSheet();

function doGet(datos) 
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos)
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre) 
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() 
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo)
{
    HOJA.appendRow([nombre,correo]);
}