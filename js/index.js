var jsonFile = "./js/db.json";

// Function to search for items
function searchItems(searchTerm, data) {
    console.log(searchTerm, "it");
    // Clear previous search results
    $('#search-result table tbody').empty();
    

    // Iterate through vegetables
    $.each(data.vegetables, function (index, vegetable) {
        if (vegetable.item.toLowerCase().includes(searchTerm.toLowerCase())) {
            var html = '<tr>';
            html += '<td style="width: 10%; height: 20px;"><img src="images/' + vegetable.image + '" alt="'+ vegetable.item +'" style="height: 35px; padding-left: 10px;"></td>'
            html += '<td style="width: 30%;"> <div style="padding-left: 17%;"> <span><b>'+vegetable.item+' </b></span><br><span style="font-size: x-small;">1kg</span> </div> </td>'
            html += '<td style="width: 20%;"><b>Rs. '+ vegetable.price +'</b></td>';
            html += '<td style="width: 25%;"> <div style="display: inline-block; background-color: #ddd; padding: 0px 5px;"> Qty </div> <input type="number" width="30%"> </td>';
            html += '<td style="width: 15%; padding-right: 10px;"> <div id="button" style="background-color: #4eb060; padding: 3px 6px; color: #fff; text-align: center; font-size: small;"> ADD <i class="fas fa-shopping-bag"></i> </div> </td>';
            html += '</tr>';
            
            $('#search-result table tbody').append(html);
        }
    });
    
    // Iterate through vegetables
    $.each(data.fruits, function (index, fruits) {
        if (fruits.item.toLowerCase().includes(searchTerm.toLowerCase())) {
            var html = '<tr>';
            html += '<td style="width: 10%; height: 20px;"><img src="images/' + fruits.image + '" alt="'+ fruits.item +'" style="height: 35px; padding-left: 10px;"></td>'
            html += '<td style="width: 30%;"> <div style="padding-left: 17%;"> <span><b>'+fruits.item+' </b></span><br><span style="font-size: x-small;">1kg</span> </div> </td>'
            html += '<td style="width: 20%;"><b>Rs. '+ fruits.price +'</b></td>';
            html += '<td style="width: 25%;"> <div style="display: inline-block; background-color: #ddd; padding: 0px 5px;"> Qty </div> <input type="number" width="30%"> </td>';
            html += '<td style="width: 15%; padding-right: 10px;"> <div id="button" style="background-color: #4eb060; padding: 3px 6px; color: #fff; text-align: center; font-size: small;"> ADD <i class="fas fa-shopping-bag"></i> </div> </td>';
            html += '</tr>';
            
            $('#search-result table tbody').append(html);
        }
    });

    if (searchTerm == "") {
        $('#search-result table tbody').empty();
    }
}

$.getJSON(jsonFile, function (data) {
    // Event listener for the search input
    $('.search-input').on('input', function () {
        var searchTerm = $(this).val();
        searchItems(searchTerm, data);
    });
});