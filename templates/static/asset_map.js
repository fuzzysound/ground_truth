var container = document.getElementById('asset-map');
var options = {
    center: new kakao.maps.LatLng(37.55429313252955, 126.9199084559128),
    draggable: false,
    level: 4
};
x_coords = [37.5539674529366, 37.551987869159134, 37.55312363263257, 37.55519803158409]
y_coords = [126.91798489589222, 126.92183478053565, 126.92260314911441, 126.92588301951608]
var map = new kakao.maps.Map(container, options);
var positions = [
    {
        title: 'asset1',
        latlng: new kakao.maps.LatLng(x_coords[0], y_coords[0])
    },
    {
        title: 'asset2',
        latlng: new kakao.maps.LatLng(x_coords[1], y_coords[1])
    },
    {
        title: 'asset3',
        latlng: new kakao.maps.LatLng(x_coords[2], y_coords[2])
    },
    {
        title: 'asset4',
        latlng: new kakao.maps.LatLng(x_coords[3], y_coords[3])
    }
];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
var content = `
    <div style="border-radius: 5px; background-image: URL('/static/asset_bg.png'); background-size: cover; background-color: #CCCCCC; width:300px; height:150px; color:#FFFFFF; font-family: 'Nanum Gothic', sans-serif;">
        <div style="display: inline-block; position: absolute; left: 0; top: 0; width: auto; height: 100px; margin-top: 10px; margin-left: 10px;">24억<br>68% 달성</div>
        <div style="display: inline-block; position: absolute; right: 0; top: 0; width: auto; height: 100px; text-align: right; margin-top: 10px; margin-right: 15px;">12개월<br>연 15% 수익 예상</div>
        <div style="display: inline-block; position: absolute; right: 0; bottom: 0; width: auto; height: 50px; text-align: right; margin-right: 10px; font-size: 10px;">서울 마포구 홍익로</div>
    </div>
`;

for (var i = 0; i < positions.length; i++) {
    var imageSize = new kakao.maps.Size(24, 35);
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        image: markerImage,
    });
    var customOverlay = new kakao.maps.CustomOverlay({
        position: positions[i].latlng,
        content: content,
        xAnchor: 0,
        yAnchor: 0
    })
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, customOverlay))
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(customOverlay));
}

function makeOverListener(map, customOverlay) {
    return function() {
        customOverlay.setMap(map)
    };
}

function makeOutListener(customOverlay) {
    return function() {
        customOverlay.setMap(null)
    };
}
