var asset_list = document.getElementById("asset-list")
var asset_map = document.getElementById("asset-map")
var button_list = document.getElementById("option1")
var button_map = document.getElementById("option2")

button_list.onclick = function() {
    if (asset_list.style.display == 'none') {
        asset_list.style.display = 'block';
        asset_map.style.display = 'none';
    }
}

button_map.onclick = function() {
    if (asset_map.style.display == 'none') {
        asset_map.style.display = 'block';
        asset_list.style.display = 'none';
    }
}

$(document).ready(function() {
    asset_list.style.display = 'block'
    asset_map.style.display = 'none'
})