var size = 0;
var placement = 'point';

var style_CENTROSCEREMONIALES_28 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Berlin Sans FB Demi\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#55fff7";
    var bufferWidth = 1.5000000000000002;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("cent_huar") !== null) {
        labelText = String(feature.get("cent_huar"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(57,196,161,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(157,255,231,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
