var size = 0;
var placement = 'point';

var style_MARCADORCHAVIN_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Berlin Sans FB Demi\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fe0000";
    var bufferWidth = 1.5000000000000002;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("CHAV") !== null) {
        labelText = String(feature.get("CHAV"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
