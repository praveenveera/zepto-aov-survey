/** Backend for the Basket Stories survey app. Deploy as a Google Sheets Web App. */
var SHEET_NAME = "Responses";
var COLUMNS = [
  "timestamp","language","consent","methods","primary","drivers","recentMethod","trigger","story","need","items","spend","categories","expansion","considered","stop","threshold","zeptoWhy","zeptoStop","altWhy","usedBefore","considerZepto","prevent","follow","contact","rawJson"
];
function doPost(e) {
  var lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    var sheet = getOrCreateSheet();
    var data = JSON.parse(e.postData.contents);
    var row = COLUMNS.map(function(key) { return key === "rawJson" ? e.postData.contents : (data[key] === undefined || data[key] === null ? "" : data[key]); });
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({status:"ok"})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status:"error",message:err.message})).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}
function getOrCreateSheet() { var ss=SpreadsheetApp.getActiveSpreadsheet(); var sheet=ss.getSheetByName(SHEET_NAME); if(!sheet){sheet=ss.insertSheet(SHEET_NAME);sheet.appendRow(COLUMNS);sheet.setFrozenRows(1);} return sheet; }
function setupCheck() { getOrCreateSheet(); }
