var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_Course_pied_du_miditracks_1 = new ol.format.GeoJSON();
var features_Course_pied_du_miditracks_1 = format_Course_pied_du_miditracks_1.readFeatures(json_Course_pied_du_miditracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Course_pied_du_miditracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Course_pied_du_miditracks_1.addFeatures(features_Course_pied_du_miditracks_1);
var lyr_Course_pied_du_miditracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Course_pied_du_miditracks_1, 
                style: style_Course_pied_du_miditracks_1,
                interactive: true,
                title: '<img src="styles/legend/Course_pied_du_miditracks_1.png" /> Course_pied_du_midi, tracks'
            });
var format_Ndezone_2 = new ol.format.GeoJSON();
var features_Ndezone_2 = format_Ndezone_2.readFeatures(json_Ndezone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ndezone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ndezone_2.addFeatures(features_Ndezone_2);
var lyr_Ndezone_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ndezone_2, 
                style: style_Ndezone_2,
                interactive: true,
                title: '<img src="styles/legend/Ndezone_2.png" /> N de zone'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_Course_pied_du_miditracks_1.setVisible(true);lyr_Ndezone_2.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_Course_pied_du_miditracks_1,lyr_Ndezone_2];
lyr_Course_pied_du_miditracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Ndezone_2.set('fieldAliases', {'N de zone': 'N de zone', 'Notes': 'Notes', 'Haie': 'Haie', 'Arbres/BM': 'Arbres/BM', 'Z d\'herbe': 'Z d\'herbe', 'Talus/foss': 'Talus/foss', 'Fleur': 'Fleur', });
lyr_Course_pied_du_miditracks_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Ndezone_2.set('fieldImages', {'N de zone': '', 'Notes': '', 'Haie': '', 'Arbres/BM': '', 'Z d\'herbe': '', 'Talus/foss': '', 'Fleur': '', });
lyr_Course_pied_du_miditracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Ndezone_2.set('fieldLabels', {'N de zone': 'inline label', 'Notes': 'inline label', 'Haie': 'inline label', 'Arbres/BM': 'inline label', 'Z d\'herbe': 'inline label', 'Talus/foss': 'inline label', 'Fleur': 'inline label', });
lyr_Ndezone_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});