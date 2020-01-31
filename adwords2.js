function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var copySheet = "Keyword Build"; // what's the name of the sheet that has all the keywords?
  var pasteSheet = "Keyword Export"; // name the sheet you want to export to.
  var startCol = 2; // what column # does the first keyword start on?
  var startRow = 5; // what row # does the first keyword start on?
  var matchTypes = ["Broad", "Exact"];
  
  var sheet = ss.getSheetByName(copySheet);
  var newSheet = ss.getSheetByName(pasteSheet);
  var lastColumn = sheet.getLastColumn();
    
  for(m = 0; m < matchTypes.length; m++){
    var matchSheet = pasteSheet + " - " + matchTypes[m];
    Logger.log(matchSheet);
    var newSheet = ss.getSheetByName(matchSheet);
    
    Logger.log(newSheet);
    if(newSheet == null){
      var newSheet = ss.insertSheet(matchSheet);
      newSheet.getRange(1,1,1,4).setValues([["Campaign", "Ad Group", "Keyword", "Match Type"]]);
    };
    
      function export(){
    Logger.log(startRow + " " + startCol);
    var k = 1; 
    for (i = startCol; i < lastColumn+startCol-1; i++) {
      k+1;
      Logger.log(i);
      var lastRow = sheet.getLastRow();
      var range = sheet.getRange(startRow, i, lastRow);
      var newLastRow = newSheet.getLastRow();
      
      Logger.log(k);
      
      for(j = startRow; j < lastRow+startRow-1; j++){
        var keyword = sheet.getRange(j, i).getValue();

        if(matchTypes[m] == "Broad"){
          if(keyword != ""){var keyword = " +" + keyword.split(' ').join(' +');}
        }
        var adgroup = sheet.getRange(4, i).getValue() + " (" + matchTypes[m] + ")" ;
        var campaign = sheet.getRange(3, i).getValue() + " (" + matchTypes[m] + ")" ;
        var matchType = matchTypes[m];
               
        var row = [[campaign, adgroup, keyword, matchType]];
        
        if(keyword != ""){
          k++;
          Logger.log(k);
            var writeRange = newSheet.getRange(k, 1, 1, 4);
          writeRange.setValues(row);
        }
      }
    }
  }
    export();
}
  
  
  
  /*
  
  if(newSheet == null){
    ss.insertSheet(pasteSheet);
  }
  
  newSheet.getRange(1,1,1,4).setValues([["Campaign", "Ad Group", "Keyword", "Match Type"]]);

  export();

  function export(){
    Logger.log(startRow + " " + startCol);
    var k = 1; 
    for (i = startCol; i < lastColumn+startCol-1; i++) {
      k+1;
      Logger.log(i);
      var lastRow = sheet.getLastRow();
      var range = sheet.getRange(startRow, i, lastRow);
      var newLastRow = newSheet.getLastRow();
      
      Logger.log(k);
      
      for(j = startRow; j < lastRow+startRow-1; j++){
        var keyword = sheet.getRange(j, i).getValue();
        var adgroup = sheet.getRange(4, i).getValue();
        var campaign = sheet.getRange(3, i).getValue();
        var matchType = "Exact";
               
        var row = [[campaign, adgroup, keyword, matchType]];
        
        if(keyword != ""){
          k++;
          Logger.log(k);
            var writeRange = newSheet.getRange(k, 1, 1, 4);
          writeRange.setValues(row);
        }
      }
    }
  }
  */
}
