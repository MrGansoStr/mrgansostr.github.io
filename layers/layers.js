var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_facultadesPrueba_2 = new ol.format.GeoJSON();
var features_facultadesPrueba_2 = format_facultadesPrueba_2.readFeatures(json_facultadesPrueba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_facultadesPrueba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_facultadesPrueba_2.addFeatures(features_facultadesPrueba_2);
var lyr_facultadesPrueba_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_facultadesPrueba_2, 
                style: style_facultadesPrueba_2,
                interactive: true,
                title: '<img src="styles/legend/facultadesPrueba_2.png" /> facultadesPrueba'
            });
var format_poligonosFacultades_3 = new ol.format.GeoJSON();
var features_poligonosFacultades_3 = format_poligonosFacultades_3.readFeatures(json_poligonosFacultades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonosFacultades_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonosFacultades_3.addFeatures(features_poligonosFacultades_3);
var lyr_poligonosFacultades_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligonosFacultades_3, 
                style: style_poligonosFacultades_3,
                interactive: true,
                title: '<img src="styles/legend/poligonosFacultades_3.png" /> poligonosFacultades'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_facultadesPrueba_2.setVisible(true);lyr_poligonosFacultades_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_facultadesPrueba_2,lyr_poligonosFacultades_3];
lyr_facultadesPrueba_2.set('fieldAliases', {'id': 'id', 'nameFacu': 'nameFacu', });
lyr_poligonosFacultades_3.set('fieldAliases', {'id': 'id', 'nameFacu': 'nameFacu', });
lyr_facultadesPrueba_2.set('fieldImages', {'id': '', 'nameFacu': '', });
lyr_poligonosFacultades_3.set('fieldImages', {'id': 'TextEdit', 'nameFacu': 'TextEdit', });
lyr_facultadesPrueba_2.set('fieldLabels', {'id': 'no label', 'nameFacu': 'no label', });
lyr_poligonosFacultades_3.set('fieldLabels', {'id': 'no label', 'nameFacu': 'no label', });
lyr_poligonosFacultades_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});