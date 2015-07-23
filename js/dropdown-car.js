$( document ).ready(function() {
    var modelMakeJsonList = {"modelMakeTable" : 
        [
                {"modelMakeID" : "1","modelMake" : "Honda"},
                {"modelMakeID" : "2","modelMake" : "Ford"},
                {"modelMakeID" : "3","modelMake" : "Mercedes"},
                {"modelMakeID" : "4","modelMake" : "Nissan"},
                
        ]};
var modelTypeJsonList = {"Honda" : 
        [
                {"modelTypeID" : "1","modelType" : "Accord"},
                {"modelTypeID" : "2","modelType" : "Civic"},
                {"modelTypeID" : "3","modelType" : "Civic Coupe"},
                {"modelTypeID" : "4","modelType" : "CR-V"},
                {"modelTypeID" : "5","modelType" : "Fit"},
                {"modelTypeID" : "6","modelType" : "Jazz"},
                {"modelTypeID" : "7","modelType" : "NSX"},
        ],
        "Ford" : 
        [
                {"modelTypeID" : "1","modelType" : "Fiesta"},
                {"modelTypeID" : "2","modelType" : "Focus"},
                {"modelTypeID" : "3","modelType" : "Fusion"},
                {"modelTypeID" : "4","modelType" : "Mustang"},
                {"modelTypeID" : "5","modelType" : "C-Max"},
                {"modelTypeID" : "6","modelType" : "Taurus"}
        ],
        "Nissan" : 
        [
                {"modelTypeID" : "1","modelType" : "GTR"},
                {"modelTypeID" : "2","modelType" : "Altima"},
                {"modelTypeID" : "3","modelType" : "370Z"},
                {"modelTypeID" : "4","modelType" : "Cube"},
                {"modelTypeID" : "5","modelType" : "Rogue"},
                {"modelTypeID" : "6","modelType" : "Versa"},
                {"modelTypeID" : "7","modelType" : "Primera"},
        ],

         "Mercedes" : 
        [
                {"modelTypeID" : "1","modelType" : "A-Class"},
                {"modelTypeID" : "2","modelType" : "B-Class"},
                {"modelTypeID" : "3","modelType" : "C-Class"},
                {"modelTypeID" : "4","modelType" : "CLA-Class"},
                {"modelTypeID" : "5","modelType" : "CLS-Class"},
                {"modelTypeID" : "6","modelType" : "E-Class"},
                {"modelTypeID" : "7","modelType" : "S-Class"},
        ],
                            };
    console.log( "ready!" );
//Now that the doc is fully ready - populate the lists   
//Next comes the make
      var ModelListItems= "";
      for (var i = 0; i < modelMakeJsonList.modelMakeTable.length; i++){
        ModelListItems+= "<option value='" + modelMakeJsonList.modelMakeTable[i].modelMakeID + "'>" + modelMakeJsonList.modelMakeTable[i].modelMake + "</option>";
      }
      $("#makeSelectionBox").html(ModelListItems);
    
    var updateSelectVehicleBox = function(make) {
        console.log('updating with',make);
        var listItems= "";
        for (var i = 0; i < modelTypeJsonList[make].length; i++){
            listItems+= "<option value='" + modelTypeJsonList[make][i].modelTypeID + "'>" + modelTypeJsonList[make][i].modelType + "</option>";
        }
        $("select#modelSelectionBox").html(listItems);
    }
   
    $("select#makeSelectionBox").on('change',function(){
        var selectedMake = $('#makeSelectionBox option:selected').text();
        updateSelectVehicleBox(selectedMake);
    });     



        
});