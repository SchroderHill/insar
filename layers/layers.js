ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2193").setExtent([1678500.387648, 5414363.475468, 1679827.120005, 5415110.681718]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.399000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_merged_DEM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'merged_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/merged_DEM_1.png",
                                attributions: ' ',
                                projection: 'EPSG:2193',
                                alwaysInRange: true,
                                imageExtent: [1676759.000000, 5413132.000000, 1680685.000000, 5418825.000000]
                            })
                        });
var lyr_20240302_20240314_Asc_Disp_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '20240302_20240314_Asc_Disp',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/20240302_20240314_Asc_Disp_2.png",
                                attributions: ' ',
                                projection: 'EPSG:2193',
                                alwaysInRange: true,
                                imageExtent: [1677826.752941, 5414058.198968, 1680599.052260, 5417266.731610]
                            })
                        });
var format_webexportpoints_3 = new ol.format.GeoJSON();
var features_webexportpoints_3 = format_webexportpoints_3.readFeatures(json_webexportpoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_webexportpoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_webexportpoints_3.addFeatures(features_webexportpoints_3);
var lyr_webexportpoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_webexportpoints_3, 
                style: style_webexportpoints_3,
                popuplayertitle: 'webexportpoints',
                interactive: true,
    title: 'webexportpoints<br />\
    <img src="styles/legend/webexportpoints_3_0.png" /> high<br />\
    <img src="styles/legend/webexportpoints_3_1.png" /> medium<br />\
    <img src="styles/legend/webexportpoints_3_2.png" /> low<br />'
        });
var format_nzprimaryparcels_4 = new ol.format.GeoJSON();
var features_nzprimaryparcels_4 = format_nzprimaryparcels_4.readFeatures(json_nzprimaryparcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_nzprimaryparcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzprimaryparcels_4.addFeatures(features_nzprimaryparcels_4);
var lyr_nzprimaryparcels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzprimaryparcels_4, 
                style: style_nzprimaryparcels_4,
                popuplayertitle: 'nz-primary-parcels',
                interactive: true,
                title: '<img src="styles/legend/nzprimaryparcels_4.png" /> nz-primary-parcels'
            });
var group_Dispfromjulytopresent = new ol.layer.Group({
                                layers: [lyr_20240302_20240314_Asc_Disp_2,],
                                fold: "open",
                                title: 'Disp from july to present'});
var group_UNCLIPPED = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'UNCLIPPED'});

lyr_GoogleSatellite_0.setVisible(true);lyr_merged_DEM_1.setVisible(true);lyr_20240302_20240314_Asc_Disp_2.setVisible(true);lyr_webexportpoints_3.setVisible(true);lyr_nzprimaryparcels_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_merged_DEM_1,group_Dispfromjulytopresent,lyr_webexportpoints_3,lyr_nzprimaryparcels_4];
lyr_webexportpoints_3.set('fieldAliases', {'id': 'id', 'Priority': 'Priority', 'type': 'type', });
lyr_nzprimaryparcels_4.set('fieldAliases', {'id': 'id', 'appellatio': 'appellatio', 'affected_s': 'affected_s', 'parcel_int': 'parcel_int', 'topology_t': 'topology_t', 'statutory_': 'statutory_', 'land_distr': 'land_distr', 'titles': 'titles', 'survey_are': 'survey_are', 'calc_area': 'calc_area', });
lyr_webexportpoints_3.set('fieldImages', {'id': 'TextEdit', 'Priority': 'TextEdit', 'type': '', });
lyr_nzprimaryparcels_4.set('fieldImages', {'id': 'Range', 'appellatio': 'TextEdit', 'affected_s': 'TextEdit', 'parcel_int': 'TextEdit', 'topology_t': 'TextEdit', 'statutory_': 'TextEdit', 'land_distr': 'TextEdit', 'titles': 'TextEdit', 'survey_are': 'TextEdit', 'calc_area': 'TextEdit', });
lyr_webexportpoints_3.set('fieldLabels', {'id': 'no label', 'Priority': 'no label', 'type': 'no label', });
lyr_nzprimaryparcels_4.set('fieldLabels', {'id': 'no label', 'appellatio': 'no label', 'affected_s': 'no label', 'parcel_int': 'no label', 'topology_t': 'no label', 'statutory_': 'no label', 'land_distr': 'no label', 'titles': 'no label', 'survey_are': 'no label', 'calc_area': 'no label', });
lyr_nzprimaryparcels_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});