$( document ).ready(function() {
  //console.log(data);
  $.each(data, function(key, item)
{
  var minPer = item.minStock;
  //console.log(item.lengths);
  $.each(item.lengths, function(key1, item1){
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
      $("#countTable tbody").append(markup);


  });
});
});
