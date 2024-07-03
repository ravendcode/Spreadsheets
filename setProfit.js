//K -> D and M -> E
function setProfit() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var count = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i][2] != "" && data[i][2] == data[i][9]) {
      sheet.getRange(i + 1, 4).setValue(data[i][10]);
      sheet.getRange(i + 1, 5).setValue(data[i][12]);
      count++;
    }
  }
  if (count > 0) {
    Logger.log("Changed %d cells", count);
  } else {
    Logger.log("No changes");
  }
}

function setProfitByUrl() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var sheet2 = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1M-cA-p-8eqP-HCDPmW6EHvkiJV-DVIVoSW4nF1HSvgo/edit?gid=0#gid=0");
  var data2 = sheet2.getDataRange().getValues();
  for (var i = 0; i < data2.length; i++) {
    Logger.log(data2[i]);
    // if (data[i][2] == data[i][9]) {
    //   sheet.getRange(i+1, 4).setValue(data[i][10])
    // }
  }
}
