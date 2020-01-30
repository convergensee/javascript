function myFunction() {
  var matchTypes = ["Exact"]; // What Match Types?
  var pasteSheet = "Keyword Export"; // name the sheet you want to export to.
  var startCol = 2; // what column # does the first keyword start on?
  var startRow = 4; // what row # does the first keyword start on?
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var sheetCount = sheets.length;
  Logger.log("Sheets: " + sheetCount);
  
// Create Export Sheet - if doesn't exist
    for(m = 0; m < matchTypes.length; m++){
      var matchSheet = pasteSheet + " - " + matchTypes[m];
      Logger.log(matchSheet);
      var newSheet = ss.getSheetByName(matchSheet);
      
      Logger.log(newSheet);
      if(newSheet == null){
        var newSheet = ss.insertSheet(matchSheet);
        newSheet.getRange(1,1,1,4).setValues([["Campaign", "Ad Group", "Keyword", "Match Type"]]);
      };
      
// Loop through all Sheets
      for(s = 0; s < sheetCount; s++){
        var sheet = sheets[s];
        var sheetName = sheet.getSheetName();
        var lastColumn = sheet.getLastColumn();
        
        // Look for Sheets with the Word "Build:"
        if(/Build:/.test(sheetName)){
          Logger.log(sheetName);
          export();
        }
      }
    }
  
// Function to Parse Sheets
  function export(){
    Logger.log(startRow + " " + startCol);
    var k = 1; 
    for (i = startCol; i < lastColumn+startCol-1; i++) {
      k+1;
     // Logger.log(i);
      var lastRow = sheet.getLastRow();
      var range = sheet.getRange(startRow, i, lastRow);
      var newLastRow = newSheet.getLastRow();
      
      Logger.log("Last Row: " + lastRow)
      
     // Logger.log(k);
      
      for(j = startRow; j < lastRow+startRow-1; j++){
        var keyword = sheet.getRange(j, i).getValue();
        
        if(matchTypes[m] == "Broad"){
          if(keyword != ""){var keyword = " +" + keyword.split(' ').join(' +');}
        }
        var adgroup = sheet.getRange(3, i).getValue() + " (" + matchTypes[m] + ")" ;
        var campaign = sheet.getRange(2, i).getValue() + " (" + matchTypes[m] + ")" ;
        var matchType = matchTypes[m];
        
        var row = [[campaign, adgroup, keyword, matchType]];
        
        if(keyword != ""){
          k++;
          var writeRow = newSheet.getLastRow();
          writeRow++;
          Logger.log(writeRow);
          var writeRange = newSheet.getRange(writeRow, 1, 1, 4);
          writeRange.setValues(row);
        }
      }
    }
  }
}
