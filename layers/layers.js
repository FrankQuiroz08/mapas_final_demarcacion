var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DEPARTAMENTOS_1 = new ol.format.GeoJSON();
var features_DEPARTAMENTOS_1 = format_DEPARTAMENTOS_1.readFeatures(json_DEPARTAMENTOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOS_1.addFeatures(features_DEPARTAMENTOS_1);
var lyr_DEPARTAMENTOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTOS_1, 
                style: style_DEPARTAMENTOS_1,
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTOS_1.png" /> DEPARTAMENTOS'
            });
var format_CULTURACARAL_2 = new ol.format.GeoJSON();
var features_CULTURACARAL_2 = format_CULTURACARAL_2.readFeatures(json_CULTURACARAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CULTURACARAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULTURACARAL_2.addFeatures(features_CULTURACARAL_2);
var lyr_CULTURACARAL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CULTURACARAL_2, 
                style: style_CULTURACARAL_2,
                interactive: true,
                title: '<img src="styles/legend/CULTURACARAL_2.png" /> CULTURA CARAL'
            });
var format_MARCADORCARAL_3 = new ol.format.GeoJSON();
var features_MARCADORCARAL_3 = format_MARCADORCARAL_3.readFeatures(json_MARCADORCARAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORCARAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORCARAL_3.addFeatures(features_MARCADORCARAL_3);
var lyr_MARCADORCARAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORCARAL_3, 
                style: style_MARCADORCARAL_3,
                interactive: true,
                title: '<img src="styles/legend/MARCADORCARAL_3.png" /> MARCADOR CARAL'
            });
var format_CHAVIN_4 = new ol.format.GeoJSON();
var features_CHAVIN_4 = format_CHAVIN_4.readFeatures(json_CHAVIN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHAVIN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAVIN_4.addFeatures(features_CHAVIN_4);
var lyr_CHAVIN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHAVIN_4, 
                style: style_CHAVIN_4,
                interactive: true,
                title: '<img src="styles/legend/CHAVIN_4.png" /> CHAVIN'
            });
var format_CENTROCHAVINDEHUANTAR_5 = new ol.format.GeoJSON();
var features_CENTROCHAVINDEHUANTAR_5 = format_CENTROCHAVINDEHUANTAR_5.readFeatures(json_CENTROCHAVINDEHUANTAR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROCHAVINDEHUANTAR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROCHAVINDEHUANTAR_5.addFeatures(features_CENTROCHAVINDEHUANTAR_5);
var lyr_CENTROCHAVINDEHUANTAR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROCHAVINDEHUANTAR_5, 
                style: style_CENTROCHAVINDEHUANTAR_5,
                interactive: true,
                title: '<img src="styles/legend/CENTROCHAVINDEHUANTAR_5.png" /> CENTRO CHAVIN DE HUANTAR'
            });
var format_CENTROSCEREMONIALES_6 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_6 = format_CENTROSCEREMONIALES_6.readFeatures(json_CENTROSCEREMONIALES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_6.addFeatures(features_CENTROSCEREMONIALES_6);
var lyr_CENTROSCEREMONIALES_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_6, 
                style: style_CENTROSCEREMONIALES_6,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_6.png" /> CENTROS CEREMONIALES'
            });
var format_MARCADORCHAVIN_7 = new ol.format.GeoJSON();
var features_MARCADORCHAVIN_7 = format_MARCADORCHAVIN_7.readFeatures(json_MARCADORCHAVIN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORCHAVIN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORCHAVIN_7.addFeatures(features_MARCADORCHAVIN_7);
var lyr_MARCADORCHAVIN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORCHAVIN_7, 
                style: style_MARCADORCHAVIN_7,
                interactive: true,
                title: '<img src="styles/legend/MARCADORCHAVIN_7.png" /> MARCADOR CHAVIN'
            });
var format_PARACAS_8 = new ol.format.GeoJSON();
var features_PARACAS_8 = format_PARACAS_8.readFeatures(json_PARACAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARACAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARACAS_8.addFeatures(features_PARACAS_8);
var lyr_PARACAS_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARACAS_8, 
                style: style_PARACAS_8,
                interactive: true,
                title: '<img src="styles/legend/PARACAS_8.png" /> PARACAS'
            });
var format_CENTROSCEREMONIALES_9 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_9 = format_CENTROSCEREMONIALES_9.readFeatures(json_CENTROSCEREMONIALES_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_9.addFeatures(features_CENTROSCEREMONIALES_9);
var lyr_CENTROSCEREMONIALES_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_9, 
                style: style_CENTROSCEREMONIALES_9,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_9.png" /> CENTROS CEREMONIALES'
            });
var format_CULTURAPARACAS_10 = new ol.format.GeoJSON();
var features_CULTURAPARACAS_10 = format_CULTURAPARACAS_10.readFeatures(json_CULTURAPARACAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CULTURAPARACAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULTURAPARACAS_10.addFeatures(features_CULTURAPARACAS_10);
var lyr_CULTURAPARACAS_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CULTURAPARACAS_10, 
                style: style_CULTURAPARACAS_10,
                interactive: true,
                title: '<img src="styles/legend/CULTURAPARACAS_10.png" /> CULTURA PARACAS'
            });
var format_VICUS_11 = new ol.format.GeoJSON();
var features_VICUS_11 = format_VICUS_11.readFeatures(json_VICUS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VICUS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VICUS_11.addFeatures(features_VICUS_11);
var lyr_VICUS_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VICUS_11, 
                style: style_VICUS_11,
                interactive: true,
                title: '<img src="styles/legend/VICUS_11.png" /> VICUS'
            });
var format_CENTROSCEREMONIALES_12 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_12 = format_CENTROSCEREMONIALES_12.readFeatures(json_CENTROSCEREMONIALES_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_12.addFeatures(features_CENTROSCEREMONIALES_12);
var lyr_CENTROSCEREMONIALES_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_12, 
                style: style_CENTROSCEREMONIALES_12,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_12.png" /> CENTROS CEREMONIALES'
            });
var format_MARCADOR__VICUS_13 = new ol.format.GeoJSON();
var features_MARCADOR__VICUS_13 = format_MARCADOR__VICUS_13.readFeatures(json_MARCADOR__VICUS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADOR__VICUS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADOR__VICUS_13.addFeatures(features_MARCADOR__VICUS_13);
var lyr_MARCADOR__VICUS_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADOR__VICUS_13, 
                style: style_MARCADOR__VICUS_13,
                interactive: true,
                title: '<img src="styles/legend/MARCADOR__VICUS_13.png" /> MARCADOR__VICUS'
            });
var format_LIMA_14 = new ol.format.GeoJSON();
var features_LIMA_14 = format_LIMA_14.readFeatures(json_LIMA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMA_14.addFeatures(features_LIMA_14);
var lyr_LIMA_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMA_14, 
                style: style_LIMA_14,
                interactive: true,
                title: '<img src="styles/legend/LIMA_14.png" /> LIMA'
            });
var format_CENTROSCEREMONIALES_15 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_15 = format_CENTROSCEREMONIALES_15.readFeatures(json_CENTROSCEREMONIALES_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_15.addFeatures(features_CENTROSCEREMONIALES_15);
var lyr_CENTROSCEREMONIALES_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_15, 
                style: style_CENTROSCEREMONIALES_15,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_15.png" /> CENTROS CEREMONIALES'
            });
var format_MARCADORLIMA_16 = new ol.format.GeoJSON();
var features_MARCADORLIMA_16 = format_MARCADORLIMA_16.readFeatures(json_MARCADORLIMA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORLIMA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORLIMA_16.addFeatures(features_MARCADORLIMA_16);
var lyr_MARCADORLIMA_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORLIMA_16, 
                style: style_MARCADORLIMA_16,
                interactive: true,
                title: '<img src="styles/legend/MARCADORLIMA_16.png" /> MARCADOR LIMA'
            });
var format_CAJAMARCA_17 = new ol.format.GeoJSON();
var features_CAJAMARCA_17 = format_CAJAMARCA_17.readFeatures(json_CAJAMARCA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAJAMARCA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAJAMARCA_17.addFeatures(features_CAJAMARCA_17);
var lyr_CAJAMARCA_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAJAMARCA_17, 
                style: style_CAJAMARCA_17,
                interactive: true,
                title: '<img src="styles/legend/CAJAMARCA_17.png" /> CAJAMARCA'
            });
var format_MARCADORCAJAMARCA_18 = new ol.format.GeoJSON();
var features_MARCADORCAJAMARCA_18 = format_MARCADORCAJAMARCA_18.readFeatures(json_MARCADORCAJAMARCA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORCAJAMARCA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORCAJAMARCA_18.addFeatures(features_MARCADORCAJAMARCA_18);
var lyr_MARCADORCAJAMARCA_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORCAJAMARCA_18, 
                style: style_MARCADORCAJAMARCA_18,
                interactive: true,
                title: '<img src="styles/legend/MARCADORCAJAMARCA_18.png" /> MARCADOR CAJAMARCA'
            });
var format_NAZCA_19 = new ol.format.GeoJSON();
var features_NAZCA_19 = format_NAZCA_19.readFeatures(json_NAZCA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAZCA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAZCA_19.addFeatures(features_NAZCA_19);
var lyr_NAZCA_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAZCA_19, 
                style: style_NAZCA_19,
                interactive: true,
                title: '<img src="styles/legend/NAZCA_19.png" /> NAZCA'
            });
var format_CENTROSCEREMONIALES_20 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_20 = format_CENTROSCEREMONIALES_20.readFeatures(json_CENTROSCEREMONIALES_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_20.addFeatures(features_CENTROSCEREMONIALES_20);
var lyr_CENTROSCEREMONIALES_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_20, 
                style: style_CENTROSCEREMONIALES_20,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_20.png" /> CENTROS CEREMONIALES'
            });
var format_AREADELASLINEASDENAZCA_21 = new ol.format.GeoJSON();
var features_AREADELASLINEASDENAZCA_21 = format_AREADELASLINEASDENAZCA_21.readFeatures(json_AREADELASLINEASDENAZCA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREADELASLINEASDENAZCA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREADELASLINEASDENAZCA_21.addFeatures(features_AREADELASLINEASDENAZCA_21);
var lyr_AREADELASLINEASDENAZCA_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREADELASLINEASDENAZCA_21, 
                style: style_AREADELASLINEASDENAZCA_21,
                interactive: true,
                title: '<img src="styles/legend/AREADELASLINEASDENAZCA_21.png" /> AREA DE LAS LINEAS DE NAZCA'
            });
var format_MARCADORLINEASDENAZCA_22 = new ol.format.GeoJSON();
var features_MARCADORLINEASDENAZCA_22 = format_MARCADORLINEASDENAZCA_22.readFeatures(json_MARCADORLINEASDENAZCA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORLINEASDENAZCA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORLINEASDENAZCA_22.addFeatures(features_MARCADORLINEASDENAZCA_22);
var lyr_MARCADORLINEASDENAZCA_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORLINEASDENAZCA_22, 
                style: style_MARCADORLINEASDENAZCA_22,
                interactive: true,
                title: '<img src="styles/legend/MARCADORLINEASDENAZCA_22.png" /> MARCADOR LINEAS DE NAZCA'
            });
var format_MARCADORNAZCA_23 = new ol.format.GeoJSON();
var features_MARCADORNAZCA_23 = format_MARCADORNAZCA_23.readFeatures(json_MARCADORNAZCA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORNAZCA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORNAZCA_23.addFeatures(features_MARCADORNAZCA_23);
var lyr_MARCADORNAZCA_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORNAZCA_23, 
                style: style_MARCADORNAZCA_23,
                interactive: true,
                title: '<img src="styles/legend/MARCADORNAZCA_23.png" /> MARCADOR NAZCA'
            });
var format_MOCHICA_24 = new ol.format.GeoJSON();
var features_MOCHICA_24 = format_MOCHICA_24.readFeatures(json_MOCHICA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOCHICA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOCHICA_24.addFeatures(features_MOCHICA_24);
var lyr_MOCHICA_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MOCHICA_24, 
                style: style_MOCHICA_24,
                interactive: true,
                title: '<img src="styles/legend/MOCHICA_24.png" /> MOCHICA'
            });
var format_CENTROSCEREMONIALES_25 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_25 = format_CENTROSCEREMONIALES_25.readFeatures(json_CENTROSCEREMONIALES_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_25.addFeatures(features_CENTROSCEREMONIALES_25);
var lyr_CENTROSCEREMONIALES_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_25, 
                style: style_CENTROSCEREMONIALES_25,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_25.png" /> CENTROS CEREMONIALES'
            });
var format_MARCADORMOCHICA_26 = new ol.format.GeoJSON();
var features_MARCADORMOCHICA_26 = format_MARCADORMOCHICA_26.readFeatures(json_MARCADORMOCHICA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORMOCHICA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORMOCHICA_26.addFeatures(features_MARCADORMOCHICA_26);
var lyr_MARCADORMOCHICA_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORMOCHICA_26, 
                style: style_MARCADORMOCHICA_26,
                interactive: true,
                title: '<img src="styles/legend/MARCADORMOCHICA_26.png" /> MARCADOR MOCHICA'
            });
var format_HAURI_27 = new ol.format.GeoJSON();
var features_HAURI_27 = format_HAURI_27.readFeatures(json_HAURI_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAURI_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAURI_27.addFeatures(features_HAURI_27);
var lyr_HAURI_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HAURI_27, 
                style: style_HAURI_27,
                interactive: true,
                title: '<img src="styles/legend/HAURI_27.png" /> HAURI'
            });
var format_CENTROSCEREMONIALES_28 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_28 = format_CENTROSCEREMONIALES_28.readFeatures(json_CENTROSCEREMONIALES_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_28.addFeatures(features_CENTROSCEREMONIALES_28);
var lyr_CENTROSCEREMONIALES_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_28, 
                style: style_CENTROSCEREMONIALES_28,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_28.png" /> CENTROS CEREMONIALES'
            });
var format_MARCADORHUARI_29 = new ol.format.GeoJSON();
var features_MARCADORHUARI_29 = format_MARCADORHUARI_29.readFeatures(json_MARCADORHUARI_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORHUARI_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORHUARI_29.addFeatures(features_MARCADORHUARI_29);
var lyr_MARCADORHUARI_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORHUARI_29, 
                style: style_MARCADORHUARI_29,
                interactive: true,
                title: '<img src="styles/legend/MARCADORHUARI_29.png" /> MARCADOR HUARI'
            });
var format_CHACHAPOYAS_30 = new ol.format.GeoJSON();
var features_CHACHAPOYAS_30 = format_CHACHAPOYAS_30.readFeatures(json_CHACHAPOYAS_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHACHAPOYAS_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHACHAPOYAS_30.addFeatures(features_CHACHAPOYAS_30);
var lyr_CHACHAPOYAS_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHACHAPOYAS_30, 
                style: style_CHACHAPOYAS_30,
                interactive: true,
                title: '<img src="styles/legend/CHACHAPOYAS_30.png" /> CHACHAPOYAS '
            });
var format_CENTROSCEREMONIALES_31 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_31 = format_CENTROSCEREMONIALES_31.readFeatures(json_CENTROSCEREMONIALES_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_31.addFeatures(features_CENTROSCEREMONIALES_31);
var lyr_CENTROSCEREMONIALES_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_31, 
                style: style_CENTROSCEREMONIALES_31,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_31.png" /> CENTROS CEREMONIALES'
            });
var format_MARCADORCHACHAPOYAS_32 = new ol.format.GeoJSON();
var features_MARCADORCHACHAPOYAS_32 = format_MARCADORCHACHAPOYAS_32.readFeatures(json_MARCADORCHACHAPOYAS_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORCHACHAPOYAS_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORCHACHAPOYAS_32.addFeatures(features_MARCADORCHACHAPOYAS_32);
var lyr_MARCADORCHACHAPOYAS_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORCHACHAPOYAS_32, 
                style: style_MARCADORCHACHAPOYAS_32,
                interactive: true,
                title: '<img src="styles/legend/MARCADORCHACHAPOYAS_32.png" /> MARCADOR CHACHAPOYAS'
            });
var format_TIAHUANACO_33 = new ol.format.GeoJSON();
var features_TIAHUANACO_33 = format_TIAHUANACO_33.readFeatures(json_TIAHUANACO_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIAHUANACO_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIAHUANACO_33.addFeatures(features_TIAHUANACO_33);
var lyr_TIAHUANACO_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIAHUANACO_33, 
                style: style_TIAHUANACO_33,
                interactive: true,
                title: '<img src="styles/legend/TIAHUANACO_33.png" /> TIAHUANACO '
            });
var format_MARCADORTIAHUANACO_34 = new ol.format.GeoJSON();
var features_MARCADORTIAHUANACO_34 = format_MARCADORTIAHUANACO_34.readFeatures(json_MARCADORTIAHUANACO_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORTIAHUANACO_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORTIAHUANACO_34.addFeatures(features_MARCADORTIAHUANACO_34);
var lyr_MARCADORTIAHUANACO_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORTIAHUANACO_34, 
                style: style_MARCADORTIAHUANACO_34,
                interactive: true,
                title: '<img src="styles/legend/MARCADORTIAHUANACO_34.png" /> MARCADOR TIAHUANACO'
            });
var format_CENTROSCEREMONIALES_35 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_35 = format_CENTROSCEREMONIALES_35.readFeatures(json_CENTROSCEREMONIALES_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_35.addFeatures(features_CENTROSCEREMONIALES_35);
var lyr_CENTROSCEREMONIALES_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_35, 
                style: style_CENTROSCEREMONIALES_35,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_35.png" /> CENTROS CEREMONIALES'
            });
var format_CHIMU_36 = new ol.format.GeoJSON();
var features_CHIMU_36 = format_CHIMU_36.readFeatures(json_CHIMU_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHIMU_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHIMU_36.addFeatures(features_CHIMU_36);
var lyr_CHIMU_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHIMU_36, 
                style: style_CHIMU_36,
                interactive: true,
                title: '<img src="styles/legend/CHIMU_36.png" /> CHIMU'
            });
var format_CENTROSCEREMONIALES_37 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_37 = format_CENTROSCEREMONIALES_37.readFeatures(json_CENTROSCEREMONIALES_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_37.addFeatures(features_CENTROSCEREMONIALES_37);
var lyr_CENTROSCEREMONIALES_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_37, 
                style: style_CENTROSCEREMONIALES_37,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_37.png" /> CENTROS CEREMONIALES'
            });
var format_MARCADORCHIMU_38 = new ol.format.GeoJSON();
var features_MARCADORCHIMU_38 = format_MARCADORCHIMU_38.readFeatures(json_MARCADORCHIMU_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORCHIMU_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORCHIMU_38.addFeatures(features_MARCADORCHIMU_38);
var lyr_MARCADORCHIMU_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORCHIMU_38, 
                style: style_MARCADORCHIMU_38,
                interactive: true,
                title: '<img src="styles/legend/MARCADORCHIMU_38.png" /> MARCADOR  CHIMU'
            });
var format_LAMBAYEQUE_39 = new ol.format.GeoJSON();
var features_LAMBAYEQUE_39 = format_LAMBAYEQUE_39.readFeatures(json_LAMBAYEQUE_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAMBAYEQUE_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMBAYEQUE_39.addFeatures(features_LAMBAYEQUE_39);
var lyr_LAMBAYEQUE_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAMBAYEQUE_39, 
                style: style_LAMBAYEQUE_39,
                interactive: true,
                title: '<img src="styles/legend/LAMBAYEQUE_39.png" /> LAMBAYEQUE'
            });
var format_MARCADORLAMBAYEQUE_40 = new ol.format.GeoJSON();
var features_MARCADORLAMBAYEQUE_40 = format_MARCADORLAMBAYEQUE_40.readFeatures(json_MARCADORLAMBAYEQUE_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORLAMBAYEQUE_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORLAMBAYEQUE_40.addFeatures(features_MARCADORLAMBAYEQUE_40);
var lyr_MARCADORLAMBAYEQUE_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORLAMBAYEQUE_40, 
                style: style_MARCADORLAMBAYEQUE_40,
                interactive: true,
                title: '<img src="styles/legend/MARCADORLAMBAYEQUE_40.png" /> MARCADOR LAMBAYEQUE'
            });
var format_CENTROSCEREMONIALES_41 = new ol.format.GeoJSON();
var features_CENTROSCEREMONIALES_41 = format_CENTROSCEREMONIALES_41.readFeatures(json_CENTROSCEREMONIALES_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSCEREMONIALES_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCEREMONIALES_41.addFeatures(features_CENTROSCEREMONIALES_41);
var lyr_CENTROSCEREMONIALES_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSCEREMONIALES_41, 
                style: style_CENTROSCEREMONIALES_41,
                interactive: true,
                title: '<img src="styles/legend/CENTROSCEREMONIALES_41.png" /> CENTROS CEREMONIALES'
            });
var group_CULTURALAMBAYEQUE = new ol.layer.Group({
                                layers: [lyr_LAMBAYEQUE_39,lyr_MARCADORLAMBAYEQUE_40,lyr_CENTROSCEREMONIALES_41,],
                                title: "CULTURA LAMBAYEQUE"});
var group_CULTURACHIMU = new ol.layer.Group({
                                layers: [lyr_CHIMU_36,lyr_CENTROSCEREMONIALES_37,lyr_MARCADORCHIMU_38,],
                                title: "CULTURA CHIMU"});
var group_CULTURATIAHUANACO = new ol.layer.Group({
                                layers: [lyr_TIAHUANACO_33,lyr_MARCADORTIAHUANACO_34,lyr_CENTROSCEREMONIALES_35,],
                                title: "CULTURA TIAHUANACO"});
var group_CULTURACHACHAPOYAS = new ol.layer.Group({
                                layers: [lyr_CHACHAPOYAS_30,lyr_CENTROSCEREMONIALES_31,lyr_MARCADORCHACHAPOYAS_32,],
                                title: "CULTURA CHACHAPOYAS"});
var group_CULTURAHUARI = new ol.layer.Group({
                                layers: [lyr_HAURI_27,lyr_CENTROSCEREMONIALES_28,lyr_MARCADORHUARI_29,],
                                title: "CULTURA HUARI"});
var group_CULTURAMOCHICA = new ol.layer.Group({
                                layers: [lyr_MOCHICA_24,lyr_CENTROSCEREMONIALES_25,lyr_MARCADORMOCHICA_26,],
                                title: "CULTURA MOCHICA"});
var group_CULTURANAZCA = new ol.layer.Group({
                                layers: [lyr_NAZCA_19,lyr_CENTROSCEREMONIALES_20,lyr_AREADELASLINEASDENAZCA_21,lyr_MARCADORLINEASDENAZCA_22,lyr_MARCADORNAZCA_23,],
                                title: "CULTURA NAZCA"});
var group_CULTURACAJAMARCA = new ol.layer.Group({
                                layers: [lyr_CAJAMARCA_17,lyr_MARCADORCAJAMARCA_18,],
                                title: "CULTURA CAJAMARCA"});
var group_CULTURALIMA = new ol.layer.Group({
                                layers: [lyr_LIMA_14,lyr_CENTROSCEREMONIALES_15,lyr_MARCADORLIMA_16,],
                                title: "CULTURA LIMA"});
var group_CULTURAVICUS = new ol.layer.Group({
                                layers: [lyr_VICUS_11,lyr_CENTROSCEREMONIALES_12,lyr_MARCADOR__VICUS_13,],
                                title: "CULTURA VICUS"});
var group_CULTURAPARACAS = new ol.layer.Group({
                                layers: [lyr_PARACAS_8,lyr_CENTROSCEREMONIALES_9,lyr_CULTURAPARACAS_10,],
                                title: "CULTURA PARACAS"});
var group_CULTURACHAVIN = new ol.layer.Group({
                                layers: [lyr_CHAVIN_4,lyr_CENTROCHAVINDEHUANTAR_5,lyr_CENTROSCEREMONIALES_6,lyr_MARCADORCHAVIN_7,],
                                title: "CULTURA CHAVIN"});
var group_CULTURACARAL = new ol.layer.Group({
                                layers: [lyr_CULTURACARAL_2,lyr_MARCADORCARAL_3,],
                                title: "CULTURA CARAL"});
var group_DEPARTAMENTOS = new ol.layer.Group({
                                layers: [lyr_DEPARTAMENTOS_1,],
                                title: "DEPARTAMENTOS"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,],
                                title: "MAPA BASE"});

lyr_ESRISatellite_0.setVisible(true);lyr_DEPARTAMENTOS_1.setVisible(true);lyr_CULTURACARAL_2.setVisible(false);lyr_MARCADORCARAL_3.setVisible(false);lyr_CHAVIN_4.setVisible(false);lyr_CENTROCHAVINDEHUANTAR_5.setVisible(false);lyr_CENTROSCEREMONIALES_6.setVisible(false);lyr_MARCADORCHAVIN_7.setVisible(false);lyr_PARACAS_8.setVisible(false);lyr_CENTROSCEREMONIALES_9.setVisible(false);lyr_CULTURAPARACAS_10.setVisible(false);lyr_VICUS_11.setVisible(false);lyr_CENTROSCEREMONIALES_12.setVisible(false);lyr_MARCADOR__VICUS_13.setVisible(false);lyr_LIMA_14.setVisible(false);lyr_CENTROSCEREMONIALES_15.setVisible(false);lyr_MARCADORLIMA_16.setVisible(false);lyr_CAJAMARCA_17.setVisible(false);lyr_MARCADORCAJAMARCA_18.setVisible(false);lyr_NAZCA_19.setVisible(false);lyr_CENTROSCEREMONIALES_20.setVisible(false);lyr_AREADELASLINEASDENAZCA_21.setVisible(false);lyr_MARCADORLINEASDENAZCA_22.setVisible(false);lyr_MARCADORNAZCA_23.setVisible(false);lyr_MOCHICA_24.setVisible(false);lyr_CENTROSCEREMONIALES_25.setVisible(false);lyr_MARCADORMOCHICA_26.setVisible(false);lyr_HAURI_27.setVisible(false);lyr_CENTROSCEREMONIALES_28.setVisible(false);lyr_MARCADORHUARI_29.setVisible(false);lyr_CHACHAPOYAS_30.setVisible(false);lyr_CENTROSCEREMONIALES_31.setVisible(false);lyr_MARCADORCHACHAPOYAS_32.setVisible(false);lyr_TIAHUANACO_33.setVisible(false);lyr_MARCADORTIAHUANACO_34.setVisible(false);lyr_CENTROSCEREMONIALES_35.setVisible(false);lyr_CHIMU_36.setVisible(false);lyr_CENTROSCEREMONIALES_37.setVisible(false);lyr_MARCADORCHIMU_38.setVisible(false);lyr_LAMBAYEQUE_39.setVisible(false);lyr_MARCADORLAMBAYEQUE_40.setVisible(false);lyr_CENTROSCEREMONIALES_41.setVisible(false);
var layersList = [group_MAPABASE,group_DEPARTAMENTOS,group_CULTURACARAL,group_CULTURACHAVIN,group_CULTURAPARACAS,group_CULTURAVICUS,group_CULTURALIMA,group_CULTURACAJAMARCA,group_CULTURANAZCA,group_CULTURAMOCHICA,group_CULTURAHUARI,group_CULTURACHACHAPOYAS,group_CULTURATIAHUANACO,group_CULTURACHIMU,group_CULTURALAMBAYEQUE];
lyr_DEPARTAMENTOS_1.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_CULTURACARAL_2.set('fieldAliases', {'CARAL': 'CARAL', });
lyr_MARCADORCARAL_3.set('fieldAliases', {'MARCADOR': 'MARCADOR', });
lyr_CHAVIN_4.set('fieldAliases', {'FID': 'FID', });
lyr_CENTROCHAVINDEHUANTAR_5.set('fieldAliases', {'CHAV_HUANT': 'CHAV_HUANT', });
lyr_CENTROSCEREMONIALES_6.set('fieldAliases', {'CENTROS': 'CENTROS', });
lyr_MARCADORCHAVIN_7.set('fieldAliases', {'CHAV': 'CHAV', });
lyr_PARACAS_8.set('fieldAliases', {'FID': 'FID', });
lyr_CENTROSCEREMONIALES_9.set('fieldAliases', {'cent_par': 'cent_par', });
lyr_CULTURAPARACAS_10.set('fieldAliases', {'cul_par': 'cul_par', });
lyr_VICUS_11.set('fieldAliases', {});
lyr_CENTROSCEREMONIALES_12.set('fieldAliases', {'cen': 'cen', });
lyr_MARCADOR__VICUS_13.set('fieldAliases', {'MAR_VIC': 'MAR_VIC', });
lyr_LIMA_14.set('fieldAliases', {});
lyr_CENTROSCEREMONIALES_15.set('fieldAliases', {'cen_cere': 'cen_cere', });
lyr_MARCADORLIMA_16.set('fieldAliases', {'MARCADOR': 'MARCADOR', });
lyr_CAJAMARCA_17.set('fieldAliases', {});
lyr_MARCADORCAJAMARCA_18.set('fieldAliases', {'caja': 'caja', });
lyr_NAZCA_19.set('fieldAliases', {'FID': 'FID', });
lyr_CENTROSCEREMONIALES_20.set('fieldAliases', {'NAZCA': 'NAZCA', });
lyr_AREADELASLINEASDENAZCA_21.set('fieldAliases', {'lin': 'lin', });
lyr_MARCADORLINEASDENAZCA_22.set('fieldAliases', {'nazca': 'nazca', });
lyr_MARCADORNAZCA_23.set('fieldAliases', {'nazca': 'nazca', });
lyr_MOCHICA_24.set('fieldAliases', {'id': 'id', });
lyr_CENTROSCEREMONIALES_25.set('fieldAliases', {'cen_moch': 'cen_moch', });
lyr_MARCADORMOCHICA_26.set('fieldAliases', {'moc': 'moc', });
lyr_HAURI_27.set('fieldAliases', {'HUARI': 'HUARI', });
lyr_CENTROSCEREMONIALES_28.set('fieldAliases', {'cent_huar': 'cent_huar', });
lyr_MARCADORHUARI_29.set('fieldAliases', {'nombre2': 'nombre2', });
lyr_CHACHAPOYAS_30.set('fieldAliases', {});
lyr_CENTROSCEREMONIALES_31.set('fieldAliases', {'chacha': 'chacha', });
lyr_MARCADORCHACHAPOYAS_32.set('fieldAliases', {'chacha2': 'chacha2', });
lyr_TIAHUANACO_33.set('fieldAliases', {});
lyr_MARCADORTIAHUANACO_34.set('fieldAliases', {'tiahu': 'tiahu', });
lyr_CENTROSCEREMONIALES_35.set('fieldAliases', {'tiahu': 'tiahu', });
lyr_CHIMU_36.set('fieldAliases', {});
lyr_CENTROSCEREMONIALES_37.set('fieldAliases', {'CHIMU': 'CHIMU', });
lyr_MARCADORCHIMU_38.set('fieldAliases', {'nombre4': 'nombre4', });
lyr_LAMBAYEQUE_39.set('fieldAliases', {'FID': 'FID', });
lyr_MARCADORLAMBAYEQUE_40.set('fieldAliases', {'nombre5': 'nombre5', });
lyr_CENTROSCEREMONIALES_41.set('fieldAliases', {'CENTROS': 'CENTROS', });
lyr_DEPARTAMENTOS_1.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_CULTURACARAL_2.set('fieldImages', {'CARAL': '', });
lyr_MARCADORCARAL_3.set('fieldImages', {'MARCADOR': 'TextEdit', });
lyr_CHAVIN_4.set('fieldImages', {'FID': 'TextEdit', });
lyr_CENTROCHAVINDEHUANTAR_5.set('fieldImages', {'CHAV_HUANT': 'TextEdit', });
lyr_CENTROSCEREMONIALES_6.set('fieldImages', {'CENTROS': 'TextEdit', });
lyr_MARCADORCHAVIN_7.set('fieldImages', {'CHAV': 'TextEdit', });
lyr_PARACAS_8.set('fieldImages', {'FID': 'TextEdit', });
lyr_CENTROSCEREMONIALES_9.set('fieldImages', {'cent_par': 'TextEdit', });
lyr_CULTURAPARACAS_10.set('fieldImages', {'cul_par': 'TextEdit', });
lyr_VICUS_11.set('fieldImages', {});
lyr_CENTROSCEREMONIALES_12.set('fieldImages', {'cen': 'TextEdit', });
lyr_MARCADOR__VICUS_13.set('fieldImages', {'MAR_VIC': 'TextEdit', });
lyr_LIMA_14.set('fieldImages', {});
lyr_CENTROSCEREMONIALES_15.set('fieldImages', {'cen_cere': 'TextEdit', });
lyr_MARCADORLIMA_16.set('fieldImages', {'MARCADOR': 'TextEdit', });
lyr_CAJAMARCA_17.set('fieldImages', {});
lyr_MARCADORCAJAMARCA_18.set('fieldImages', {'caja': 'TextEdit', });
lyr_NAZCA_19.set('fieldImages', {'FID': 'TextEdit', });
lyr_CENTROSCEREMONIALES_20.set('fieldImages', {'NAZCA': 'TextEdit', });
lyr_AREADELASLINEASDENAZCA_21.set('fieldImages', {'lin': 'TextEdit', });
lyr_MARCADORLINEASDENAZCA_22.set('fieldImages', {'nazca': 'TextEdit', });
lyr_MARCADORNAZCA_23.set('fieldImages', {'nazca': 'TextEdit', });
lyr_MOCHICA_24.set('fieldImages', {'id': 'TextEdit', });
lyr_CENTROSCEREMONIALES_25.set('fieldImages', {'cen_moch': 'TextEdit', });
lyr_MARCADORMOCHICA_26.set('fieldImages', {'moc': 'TextEdit', });
lyr_HAURI_27.set('fieldImages', {'HUARI': 'TextEdit', });
lyr_CENTROSCEREMONIALES_28.set('fieldImages', {'cent_huar': 'TextEdit', });
lyr_MARCADORHUARI_29.set('fieldImages', {'nombre2': 'TextEdit', });
lyr_CHACHAPOYAS_30.set('fieldImages', {});
lyr_CENTROSCEREMONIALES_31.set('fieldImages', {'chacha': 'TextEdit', });
lyr_MARCADORCHACHAPOYAS_32.set('fieldImages', {'chacha2': 'TextEdit', });
lyr_TIAHUANACO_33.set('fieldImages', {});
lyr_MARCADORTIAHUANACO_34.set('fieldImages', {'tiahu': 'TextEdit', });
lyr_CENTROSCEREMONIALES_35.set('fieldImages', {'tiahu': 'TextEdit', });
lyr_CHIMU_36.set('fieldImages', {});
lyr_CENTROSCEREMONIALES_37.set('fieldImages', {'CHIMU': 'TextEdit', });
lyr_MARCADORCHIMU_38.set('fieldImages', {'nombre4': 'TextEdit', });
lyr_LAMBAYEQUE_39.set('fieldImages', {'FID': 'TextEdit', });
lyr_MARCADORLAMBAYEQUE_40.set('fieldImages', {'nombre5': 'TextEdit', });
lyr_CENTROSCEREMONIALES_41.set('fieldImages', {'CENTROS': 'TextEdit', });
lyr_DEPARTAMENTOS_1.set('fieldLabels', {});
lyr_CULTURACARAL_2.set('fieldLabels', {});
lyr_MARCADORCARAL_3.set('fieldLabels', {});
lyr_CHAVIN_4.set('fieldLabels', {});
lyr_CENTROCHAVINDEHUANTAR_5.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_6.set('fieldLabels', {});
lyr_MARCADORCHAVIN_7.set('fieldLabels', {});
lyr_PARACAS_8.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_9.set('fieldLabels', {});
lyr_CULTURAPARACAS_10.set('fieldLabels', {});
lyr_VICUS_11.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_12.set('fieldLabels', {});
lyr_MARCADOR__VICUS_13.set('fieldLabels', {});
lyr_LIMA_14.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_15.set('fieldLabels', {});
lyr_MARCADORLIMA_16.set('fieldLabels', {});
lyr_CAJAMARCA_17.set('fieldLabels', {});
lyr_MARCADORCAJAMARCA_18.set('fieldLabels', {});
lyr_NAZCA_19.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_20.set('fieldLabels', {});
lyr_AREADELASLINEASDENAZCA_21.set('fieldLabels', {});
lyr_MARCADORLINEASDENAZCA_22.set('fieldLabels', {});
lyr_MARCADORNAZCA_23.set('fieldLabels', {});
lyr_MOCHICA_24.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_25.set('fieldLabels', {});
lyr_MARCADORMOCHICA_26.set('fieldLabels', {});
lyr_HAURI_27.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_28.set('fieldLabels', {});
lyr_MARCADORHUARI_29.set('fieldLabels', {});
lyr_CHACHAPOYAS_30.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_31.set('fieldLabels', {});
lyr_MARCADORCHACHAPOYAS_32.set('fieldLabels', {});
lyr_TIAHUANACO_33.set('fieldLabels', {});
lyr_MARCADORTIAHUANACO_34.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_35.set('fieldLabels', {});
lyr_CHIMU_36.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_37.set('fieldLabels', {});
lyr_MARCADORCHIMU_38.set('fieldLabels', {});
lyr_LAMBAYEQUE_39.set('fieldLabels', {});
lyr_MARCADORLAMBAYEQUE_40.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_41.set('fieldLabels', {});
lyr_CENTROSCEREMONIALES_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});