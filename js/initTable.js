var tab = new Tabulator("#tab", {
    columns: [
        {
            title: "Name", field: "name"
        },
        {
            title: "Food type", field: "foodtype"
        },
        {
            title: "Travel time", field: "time", sorter: "number", align: "right", formatter: function (cell, formatterParams, onRendered) {
                return cell.getValue() + " Min";
            }
        },
        {
            title: "Vegetarian", field: "vega", formatter: "tickCross"
        },
        {
            title: "Location", field: "location", formatter: function (cell, formatterParams, onRendered) {
                if (cell.getValue() == null)
                    return "-";
                return "<span class='plink' onclick='updateMap(\"" + cell.getValue() + "\")'>location</span>";
            }
        },
        {
            title: "Rating", field: "rating", sorter: "number", formatter: "star"
        },
        {
            title: "Menu", field: "menu", formatter: function (cell, formatterParams, onRendered) {
                if (cell.getValue() == null)
                    return "-";
                return "<span class='plink' onclick='updateMenu(\"" + cell.getValue() + "\")'>menu</span>"
                    + '&nbsp;&nbsp;<a target="_blank" href="' + cell.getValue() + '"><img src="img/external.svg" alt="" height="15" width="15"></a>';
            }
        },
    ],
    initialSort: [
        { column: "name", dir: "asc" }
    ]
});
tab.setData("json/data.json");
function updateMap(url) {
    document.getElementById("map").src = url;
}
function updateMenu(url) {
    document.getElementById("menu").src = url;
}
var names = [];
($).get("json/data.json", function (data) {
    for (let index = 0; index < data.length; index++) {
        names[index] = data[index].name;
    }
});