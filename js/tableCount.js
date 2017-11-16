$( document ).ready(function() {
  $.getJSON( "data.json", function( data ) {

  console.log(data);
  //addJson();
  $.each(data, function(key, item){ //Each table in the json object

  createTable(item); //Create table and fill with data
});

function addJson(){
  $.extend(data,{
    switches:{
      id: "switches",
      name: "Switches",
      minStock: "5", //Percentage of stock
      titles: { //Table titles
        id0: "Switch type",
        id1: "Quanity",
        id2: "Date Checked"
      },
      rows: {
        x440: {
          id: "x440",
          date: "11/9/17",
          qty: "4",
          reqStock: "0"
        }
    }
  }
});


var out = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));

$('<a href="data:' + out + '" download="data.json">download JSON</a>').appendTo('.thing');
}

function createTable(data){
  //Create tables and retrun id
  var tbl = $("#tmpTable").html();
  var $tbl = $('<div>').append($.parseHTML(tbl));

  //Set table id
  $tbl.find('#tmpid').attr('id', ('tbl'+data.id));
  //Set heading
  $tbl.find("h3").append(data.name);
  //Set table column headings
  $.each(data.titles, function(key, item){
    var markup = "<th>"+item+"</th>";
    $tbl.find("thead tr").append(markup);

    //Edit button data attribute set to table ID
    $tbl.find('#edtbtn').attr('data-table-id', ('tbl'+data.id));
  });

  //Append html to document
  $("#invTables").append($tbl.html());

  //Set row data
  fillRows(data, ('#tbl'+data.id));
}

function fillRows(data, id){
  var minPer = data.minStock;
  //console.log(item.rows);
  $.each(data.rows, function(key1, item1){ //Each row in the json object
      // console.log(item1.id);
      // console.log(item1.date);
      // console.log(item1.qty);
      // console.log(item1.reqStock);
        var stockPer = (item1.qty / item1.reqStock);
        if (stockPer >= 1){
          //Stock above recommended
          var title = "100% Stocked - "+item1.qty+"/"+item1.reqStock;
          var cls = "";
        }else{
          var per = stockPer*100;
          if (per <= minPer){
            //Stock to low
            var cls = "danger";
            var title = "Quanity Low!"
          }else{
            //Stock above min
            var title = per + "% Stocked - "+item1.qty+"/"+item1.reqStock;
            var cls = "";
          }
        }

      //Add to table
      var markup = "  <tr title='"+title+"' class='"+cls+"'><td>"+ item1.id +"</td><td>"+item1.qty+"</td><td>"+item1.date+"</td></tr>";
      $(id+" tbody").append(markup);
  });
}
  });
});
