var size = 0;
var placement = 'point';

var style_CENTROCHAVINDEHUANTAR_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Berlin Sans FB Demi\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#b2df8a";
    var bufferWidth = 0.7000000000000001;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("CHAV_HUANT") !== null) {
        labelText = String(feature.get("CHAV_HUANT"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(84,176,74,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
