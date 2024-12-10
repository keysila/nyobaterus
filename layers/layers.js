var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm41_IDN1ADM_ADM_4_1 = new ol.format.GeoJSON();
var features_gadm41_IDN1ADM_ADM_4_1 = format_gadm41_IDN1ADM_ADM_4_1.readFeatures(json_gadm41_IDN1ADM_ADM_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN1ADM_ADM_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN1ADM_ADM_4_1.addFeatures(features_gadm41_IDN1ADM_ADM_4_1);
var lyr_gadm41_IDN1ADM_ADM_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN1ADM_ADM_4_1, 
                style: style_gadm41_IDN1ADM_ADM_4_1,
                popuplayertitle: "gadm41_IDN (1) — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN1ADM_ADM_4_1.png" /> gadm41_IDN (1) — ADM_ADM_4'
            });
var format_desapat_2 = new ol.format.GeoJSON();
var features_desapat_2 = format_desapat_2.readFeatures(json_desapat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desapat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desapat_2.addFeatures(features_desapat_2);
var lyr_desapat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desapat_2, 
                style: style_desapat_2,
                popuplayertitle: "desapat",
                interactive: true,
    title: 'desapat<br />\
    <img src="styles/legend/desapat_2_0.png" /> RW 01<br />\
    <img src="styles/legend/desapat_2_1.png" /> RW 02<br />\
    <img src="styles/legend/desapat_2_2.png" /> RW 03<br />\
    <img src="styles/legend/desapat_2_3.png" /> RW 04<br />\
    <img src="styles/legend/desapat_2_4.png" /> RW 05<br />\
    <img src="styles/legend/desapat_2_5.png" /> RW 06<br />\
    <img src="styles/legend/desapat_2_6.png" /> RW 07<br />\
    <img src="styles/legend/desapat_2_7.png" /> RW 08<br />\
    <img src="styles/legend/desapat_2_8.png" /> RW 09<br />\
    <img src="styles/legend/desapat_2_9.png" /> RW 10<br />\
    <img src="styles/legend/desapat_2_10.png" /> RW 11<br />\
    <img src="styles/legend/desapat_2_11.png" /> RW 12<br />\
    <img src="styles/legend/desapat_2_12.png" /> RW 13<br />\
    <img src="styles/legend/desapat_2_13.png" /> RW 14<br />\
    <img src="styles/legend/desapat_2_14.png" /> <br />'
        });
var format_kebunptm_3 = new ol.format.GeoJSON();
var features_kebunptm_3 = format_kebunptm_3.readFeatures(json_kebunptm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebunptm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebunptm_3.addFeatures(features_kebunptm_3);
var lyr_kebunptm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebunptm_3, 
                style: style_kebunptm_3,
                popuplayertitle: "kebunptm",
                interactive: true,
                title: '<img src="styles/legend/kebunptm_3.png" /> kebunptm'
            });
var format_sawahptm_4 = new ol.format.GeoJSON();
var features_sawahptm_4 = format_sawahptm_4.readFeatures(json_sawahptm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawahptm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawahptm_4.addFeatures(features_sawahptm_4);
var lyr_sawahptm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawahptm_4, 
                style: style_sawahptm_4,
                popuplayertitle: "sawahptm",
                interactive: true,
                title: '<img src="styles/legend/sawahptm_4.png" /> sawahptm'
            });
var format_sungaiptm_5 = new ol.format.GeoJSON();
var features_sungaiptm_5 = format_sungaiptm_5.readFeatures(json_sungaiptm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaiptm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaiptm_5.addFeatures(features_sungaiptm_5);
var lyr_sungaiptm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaiptm_5, 
                style: style_sungaiptm_5,
                popuplayertitle: "sungaiptm",
                interactive: true,
                title: '<img src="styles/legend/sungaiptm_5.png" /> sungaiptm'
            });
var format_irigasipat_6 = new ol.format.GeoJSON();
var features_irigasipat_6 = format_irigasipat_6.readFeatures(json_irigasipat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_irigasipat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_irigasipat_6.addFeatures(features_irigasipat_6);
var lyr_irigasipat_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_irigasipat_6, 
                style: style_irigasipat_6,
                popuplayertitle: "irigasipat",
                interactive: true,
                title: '<img src="styles/legend/irigasipat_6.png" /> irigasipat'
            });
var format_jalanpatimuan_7 = new ol.format.GeoJSON();
var features_jalanpatimuan_7 = format_jalanpatimuan_7.readFeatures(json_jalanpatimuan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanpatimuan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanpatimuan_7.addFeatures(features_jalanpatimuan_7);
var lyr_jalanpatimuan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanpatimuan_7,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_jalanpatimuan_7,
                popuplayertitle: "jalanpatimuan",
                interactive: true,
    title: 'jalanpatimuan<br />\
    <img src="styles/legend/jalanpatimuan_7_0.png" /> 2<br />\
    <img src="styles/legend/jalanpatimuan_7_1.png" /> 3<br />\
    <img src="styles/legend/jalanpatimuan_7_2.png" /> 4<br />\
    <img src="styles/legend/jalanpatimuan_7_3.png" /> 8<br />\
    <img src="styles/legend/jalanpatimuan_7_4.png" /> <br />'
        });
var format_polygonpatimuan_8 = new ol.format.GeoJSON();
var features_polygonpatimuan_8 = format_polygonpatimuan_8.readFeatures(json_polygonpatimuan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonpatimuan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonpatimuan_8.addFeatures(features_polygonpatimuan_8);
var lyr_polygonpatimuan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonpatimuan_8, 
                style: style_polygonpatimuan_8,
                popuplayertitle: "polygonpatimuan",
                interactive: true,
                title: '<img src="styles/legend/polygonpatimuan_8.png" /> polygonpatimuan'
            });
var format_pointbaldesptm_9 = new ol.format.GeoJSON();
var features_pointbaldesptm_9 = format_pointbaldesptm_9.readFeatures(json_pointbaldesptm_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointbaldesptm_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointbaldesptm_9.addFeatures(features_pointbaldesptm_9);
var lyr_pointbaldesptm_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointbaldesptm_9,
maxResolution:28.00446615226196,
 minResolution:0.14002233076130982,

                style: style_pointbaldesptm_9,
                popuplayertitle: "pointbaldesptm",
                interactive: true,
                title: '<img src="styles/legend/pointbaldesptm_9.png" /> pointbaldesptm'
            });
var format_point_10 = new ol.format.GeoJSON();
var features_point_10 = format_point_10.readFeatures(json_point_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_10.addFeatures(features_point_10);
var lyr_point_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_10,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_point_10,
                popuplayertitle: "point",
                interactive: true,
    title: 'point<br />\
    <img src="styles/legend/point_10_0.png" /> bengkel<br />\
    <img src="styles/legend/point_10_1.png" /> cafe<br />\
    <img src="styles/legend/point_10_2.png" /> gereja<br />\
    <img src="styles/legend/point_10_3.png" /> instansi<br />\
    <img src="styles/legend/point_10_4.png" /> kepemilikan<br />\
    <img src="styles/legend/point_10_5.png" /> kesehatan<br />\
    <img src="styles/legend/point_10_6.png" /> mart<br />\
    <img src="styles/legend/point_10_7.png" /> mushola/masjid<br />\
    <img src="styles/legend/point_10_8.png" /> pendidikan<br />\
    <img src="styles/legend/point_10_9.png" /> pom<br />\
    <img src="styles/legend/point_10_10.png" /> RM<br />\
    <img src="styles/legend/point_10_11.png" /> Tb<br />\
    <img src="styles/legend/point_10_12.png" /> wirausaha<br />\
    <img src="styles/legend/point_10_13.png" /> <br />'
        });
var format_gadm41_IDN1ADM_ADM_4_11 = new ol.format.GeoJSON();
var features_gadm41_IDN1ADM_ADM_4_11 = format_gadm41_IDN1ADM_ADM_4_11.readFeatures(json_gadm41_IDN1ADM_ADM_4_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN1ADM_ADM_4_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN1ADM_ADM_4_11.addFeatures(features_gadm41_IDN1ADM_ADM_4_11);
var lyr_gadm41_IDN1ADM_ADM_4_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN1ADM_ADM_4_11, 
                style: style_gadm41_IDN1ADM_ADM_4_11,
                popuplayertitle: "gadm41_IDN (1) — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN1ADM_ADM_4_11.png" /> gadm41_IDN (1) — ADM_ADM_4'
            });
var format_desapur_12 = new ol.format.GeoJSON();
var features_desapur_12 = format_desapur_12.readFeatures(json_desapur_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desapur_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desapur_12.addFeatures(features_desapur_12);
var lyr_desapur_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desapur_12, 
                style: style_desapur_12,
                popuplayertitle: "desapur",
                interactive: true,
                title: '<img src="styles/legend/desapur_12.png" /> desapur'
            });
var format_kebunpwd_13 = new ol.format.GeoJSON();
var features_kebunpwd_13 = format_kebunpwd_13.readFeatures(json_kebunpwd_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebunpwd_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebunpwd_13.addFeatures(features_kebunpwd_13);
var lyr_kebunpwd_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebunpwd_13, 
                style: style_kebunpwd_13,
                popuplayertitle: "kebunpwd",
                interactive: true,
                title: '<img src="styles/legend/kebunpwd_13.png" /> kebunpwd'
            });
var format_sawahpwd_14 = new ol.format.GeoJSON();
var features_sawahpwd_14 = format_sawahpwd_14.readFeatures(json_sawahpwd_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawahpwd_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawahpwd_14.addFeatures(features_sawahpwd_14);
var lyr_sawahpwd_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawahpwd_14, 
                style: style_sawahpwd_14,
                popuplayertitle: "sawahpwd",
                interactive: true,
                title: '<img src="styles/legend/sawahpwd_14.png" /> sawahpwd'
            });
var format_irigasipurwo_15 = new ol.format.GeoJSON();
var features_irigasipurwo_15 = format_irigasipurwo_15.readFeatures(json_irigasipurwo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_irigasipurwo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_irigasipurwo_15.addFeatures(features_irigasipurwo_15);
var lyr_irigasipurwo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_irigasipurwo_15, 
                style: style_irigasipurwo_15,
                popuplayertitle: "irigasipurwo",
                interactive: true,
                title: '<img src="styles/legend/irigasipurwo_15.png" /> irigasipurwo'
            });
var format_sungaipwd_16 = new ol.format.GeoJSON();
var features_sungaipwd_16 = format_sungaipwd_16.readFeatures(json_sungaipwd_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaipwd_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaipwd_16.addFeatures(features_sungaipwd_16);
var lyr_sungaipwd_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaipwd_16, 
                style: style_sungaipwd_16,
                popuplayertitle: "sungaipwd",
                interactive: true,
                title: '<img src="styles/legend/sungaipwd_16.png" /> sungaipwd'
            });
var format_jalanpurwodadi_17 = new ol.format.GeoJSON();
var features_jalanpurwodadi_17 = format_jalanpurwodadi_17.readFeatures(json_jalanpurwodadi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanpurwodadi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanpurwodadi_17.addFeatures(features_jalanpurwodadi_17);
var lyr_jalanpurwodadi_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanpurwodadi_17,
maxResolution:28004.466152261964,
 
                style: style_jalanpurwodadi_17,
                popuplayertitle: "jalanpurwodadi",
                interactive: true,
    title: 'jalanpurwodadi<br />\
    <img src="styles/legend/jalanpurwodadi_17_0.png" /> 2<br />\
    <img src="styles/legend/jalanpurwodadi_17_1.png" /> 3<br />\
    <img src="styles/legend/jalanpurwodadi_17_2.png" /> 4<br />\
    <img src="styles/legend/jalanpurwodadi_17_3.png" /> 8<br />\
    <img src="styles/legend/jalanpurwodadi_17_4.png" /> <br />'
        });
var format_polygonpurwodadi_18 = new ol.format.GeoJSON();
var features_polygonpurwodadi_18 = format_polygonpurwodadi_18.readFeatures(json_polygonpurwodadi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonpurwodadi_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonpurwodadi_18.addFeatures(features_polygonpurwodadi_18);
var lyr_polygonpurwodadi_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonpurwodadi_18,
maxResolution:14.00223307613098,
 
                style: style_polygonpurwodadi_18,
                popuplayertitle: "polygonpurwodadi",
                interactive: true,
                title: '<img src="styles/legend/polygonpurwodadi_18.png" /> polygonpurwodadi'
            });
var format_pointpendpwd_19 = new ol.format.GeoJSON();
var features_pointpendpwd_19 = format_pointpendpwd_19.readFeatures(json_pointpendpwd_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointpendpwd_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointpendpwd_19.addFeatures(features_pointpendpwd_19);
var lyr_pointpendpwd_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointpendpwd_19,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointpendpwd_19,
                popuplayertitle: "pointpendpwd",
                interactive: true,
                title: '<img src="styles/legend/pointpendpwd_19.png" /> pointpendpwd'
            });
var format_pointkespwd_20 = new ol.format.GeoJSON();
var features_pointkespwd_20 = format_pointkespwd_20.readFeatures(json_pointkespwd_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointkespwd_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointkespwd_20.addFeatures(features_pointkespwd_20);
var lyr_pointkespwd_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointkespwd_20,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointkespwd_20,
                popuplayertitle: "pointkespwd",
                interactive: true,
                title: '<img src="styles/legend/pointkespwd_20.png" /> pointkespwd'
            });
var format_pointpompwd_21 = new ol.format.GeoJSON();
var features_pointpompwd_21 = format_pointpompwd_21.readFeatures(json_pointpompwd_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointpompwd_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointpompwd_21.addFeatures(features_pointpompwd_21);
var lyr_pointpompwd_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointpompwd_21,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointpompwd_21,
                popuplayertitle: "pointpompwd",
                interactive: true,
                title: '<img src="styles/legend/pointpompwd_21.png" /> pointpompwd'
            });
var format_musormaspwd_22 = new ol.format.GeoJSON();
var features_musormaspwd_22 = format_musormaspwd_22.readFeatures(json_musormaspwd_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_musormaspwd_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_musormaspwd_22.addFeatures(features_musormaspwd_22);
var lyr_musormaspwd_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_musormaspwd_22,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_musormaspwd_22,
                popuplayertitle: "musormaspwd",
                interactive: true,
                title: '<img src="styles/legend/musormaspwd_22.png" /> musormaspwd'
            });
var format_pointinstansipwd_23 = new ol.format.GeoJSON();
var features_pointinstansipwd_23 = format_pointinstansipwd_23.readFeatures(json_pointinstansipwd_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointinstansipwd_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointinstansipwd_23.addFeatures(features_pointinstansipwd_23);
var lyr_pointinstansipwd_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointinstansipwd_23,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_pointinstansipwd_23,
                popuplayertitle: "pointinstansipwd",
                interactive: true,
                title: '<img src="styles/legend/pointinstansipwd_23.png" /> pointinstansipwd'
            });
var format_pointusahapwd_24 = new ol.format.GeoJSON();
var features_pointusahapwd_24 = format_pointusahapwd_24.readFeatures(json_pointusahapwd_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointusahapwd_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointusahapwd_24.addFeatures(features_pointusahapwd_24);
var lyr_pointusahapwd_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointusahapwd_24,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointusahapwd_24,
                popuplayertitle: "pointusahapwd",
                interactive: true,
                title: '<img src="styles/legend/pointusahapwd_24.png" /> pointusahapwd'
            });
var format_pointRMpwd_25 = new ol.format.GeoJSON();
var features_pointRMpwd_25 = format_pointRMpwd_25.readFeatures(json_pointRMpwd_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointRMpwd_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointRMpwd_25.addFeatures(features_pointRMpwd_25);
var lyr_pointRMpwd_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointRMpwd_25,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointRMpwd_25,
                popuplayertitle: "pointRMpwd",
                interactive: true,
                title: '<img src="styles/legend/pointRMpwd_25.png" /> pointRMpwd'
            });
var format_pointmartpwd_26 = new ol.format.GeoJSON();
var features_pointmartpwd_26 = format_pointmartpwd_26.readFeatures(json_pointmartpwd_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointmartpwd_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointmartpwd_26.addFeatures(features_pointmartpwd_26);
var lyr_pointmartpwd_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointmartpwd_26,
maxResolution:2.8004466152261966,
 minResolution:0.14002233076130982,

                style: style_pointmartpwd_26,
                popuplayertitle: "pointmartpwd",
                interactive: true,
                title: '<img src="styles/legend/pointmartpwd_26.png" /> pointmartpwd'
            });
var format_gadm41_IDN1ADM_ADM_3_27 = new ol.format.GeoJSON();
var features_gadm41_IDN1ADM_ADM_3_27 = format_gadm41_IDN1ADM_ADM_3_27.readFeatures(json_gadm41_IDN1ADM_ADM_3_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN1ADM_ADM_3_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN1ADM_ADM_3_27.addFeatures(features_gadm41_IDN1ADM_ADM_3_27);
var lyr_gadm41_IDN1ADM_ADM_3_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN1ADM_ADM_3_27, 
                style: style_gadm41_IDN1ADM_ADM_3_27,
                popuplayertitle: "gadm41_IDN (1) — ADM_ADM_3",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN1ADM_ADM_3_27.png" /> gadm41_IDN (1) — ADM_ADM_3'
            });
var group_KecPatimuan = new ol.layer.Group({
                                layers: [lyr_gadm41_IDN1ADM_ADM_3_27,],
                                fold: "open",
                                title: "KecPatimuan"});
var group_Point = new ol.layer.Group({
                                layers: [lyr_pointpendpwd_19,lyr_pointkespwd_20,lyr_pointpompwd_21,lyr_musormaspwd_22,lyr_pointinstansipwd_23,lyr_pointusahapwd_24,lyr_pointRMpwd_25,lyr_pointmartpwd_26,],
                                fold: "open",
                                title: "Point"});
var group_PURWODADI = new ol.layer.Group({
                                layers: [lyr_gadm41_IDN1ADM_ADM_4_11,lyr_desapur_12,lyr_kebunpwd_13,lyr_sawahpwd_14,lyr_irigasipurwo_15,lyr_sungaipwd_16,lyr_jalanpurwodadi_17,lyr_polygonpurwodadi_18,],
                                fold: "open",
                                title: "PURWODADI"});
var group_PATIMUAN = new ol.layer.Group({
                                layers: [lyr_gadm41_IDN1ADM_ADM_4_1,lyr_desapat_2,lyr_kebunptm_3,lyr_sawahptm_4,lyr_sungaiptm_5,lyr_irigasipat_6,lyr_jalanpatimuan_7,lyr_polygonpatimuan_8,lyr_pointbaldesptm_9,lyr_point_10,],
                                fold: "open",
                                title: "PATIMUAN"});

lyr_OpenStreetMap_0.setVisible(true);lyr_gadm41_IDN1ADM_ADM_4_1.setVisible(true);lyr_desapat_2.setVisible(true);lyr_kebunptm_3.setVisible(true);lyr_sawahptm_4.setVisible(true);lyr_sungaiptm_5.setVisible(true);lyr_irigasipat_6.setVisible(true);lyr_jalanpatimuan_7.setVisible(true);lyr_polygonpatimuan_8.setVisible(true);lyr_pointbaldesptm_9.setVisible(true);lyr_point_10.setVisible(true);lyr_gadm41_IDN1ADM_ADM_4_11.setVisible(true);lyr_desapur_12.setVisible(true);lyr_kebunpwd_13.setVisible(true);lyr_sawahpwd_14.setVisible(true);lyr_irigasipurwo_15.setVisible(true);lyr_sungaipwd_16.setVisible(true);lyr_jalanpurwodadi_17.setVisible(true);lyr_polygonpurwodadi_18.setVisible(true);lyr_pointpendpwd_19.setVisible(true);lyr_pointkespwd_20.setVisible(true);lyr_pointpompwd_21.setVisible(true);lyr_musormaspwd_22.setVisible(true);lyr_pointinstansipwd_23.setVisible(true);lyr_pointusahapwd_24.setVisible(true);lyr_pointRMpwd_25.setVisible(true);lyr_pointmartpwd_26.setVisible(true);lyr_gadm41_IDN1ADM_ADM_3_27.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_PATIMUAN,group_PURWODADI,group_Point,group_KecPatimuan];
lyr_gadm41_IDN1ADM_ADM_4_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'desa_search': 'desa_search', });
lyr_desapat_2.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', });
lyr_kebunptm_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sawahptm_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sungaiptm_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_irigasipat_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalanpatimuan_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'width': 'width', 'diameter': 'diameter', 'blockage': 'blockage', 'bridge': 'bridge', 'landuse': 'landuse', 'water': 'water', 'smoothness': 'smoothness', 'highway': 'highway', 'parking': 'parking', 'name': 'name', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'oneway': 'oneway', 'building': 'building', 'man_made': 'man_made', 'tunnel': 'tunnel', 'operator': 'operator', 'waterway': 'waterway', 'aeroway': 'aeroway', 'railway': 'railway', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'capacity': 'capacity', 'lbr': 'lbr', 'Nama': 'Nama', });
lyr_polygonpatimuan_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'health_fac': 'health_fac', 'width': 'width', 'staff_coun': 'staff_coun', 'diameter': 'diameter', 'access_roo': 'access_roo', 'government': 'government', 'blockage': 'blockage', 'bridge': 'bridge', 'healthcare': 'healthcare', 'health_f_1': 'health_f_1', 'operator_t': 'operator_t', 'landuse': 'landuse', 'emergency': 'emergency', 'water': 'water', 'smoothness': 'smoothness', 'office': 'office', 'isced_leve': 'isced_leve', 'highway': 'highway', 'name': 'name', 'parking': 'parking', 'toilets_di': 'toilets_di', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'health_f_2': 'health_f_2', 'staff_co_1': 'staff_co_1', 'addr_stree': 'addr_stree', 'oneway': 'oneway', 'building': 'building', 'opening_ho': 'opening_ho', 'addr_house': 'addr_house', 'man_made': 'man_made', 'building_m': 'building_m', 'operator': 'operator', 'access': 'access', 'shop': 'shop', 'tunnel': 'tunnel', 'waterway': 'waterway', 'aeroway': 'aeroway', 'military': 'military', 'toilets_ha': 'toilets_ha', 'railway': 'railway', 'roof_mater': 'roof_mater', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'medical_sy': 'medical_sy', 'capacity': 'capacity', 'status': 'status', });
lyr_pointbaldesptm_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_point_10.set('fieldAliases', {'id': 'id', 'Kelompok': 'Kelompok', 'Nama': 'Nama', });
lyr_gadm41_IDN1ADM_ADM_4_11.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'desa_search': 'desa_search', });
lyr_desapur_12.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', });
lyr_kebunpwd_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sawahpwd_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_irigasipurwo_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sungaipwd_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalanpurwodadi_17.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'width': 'width', 'diameter': 'diameter', 'blockage': 'blockage', 'bridge': 'bridge', 'landuse': 'landuse', 'water': 'water', 'smoothness': 'smoothness', 'highway': 'highway', 'parking': 'parking', 'name': 'name', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'oneway': 'oneway', 'building': 'building', 'man_made': 'man_made', 'tunnel': 'tunnel', 'operator': 'operator', 'waterway': 'waterway', 'aeroway': 'aeroway', 'railway': 'railway', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'capacity': 'capacity', 'lbr': 'lbr', 'Nama': 'Nama', });
lyr_polygonpurwodadi_18.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'health_fac': 'health_fac', 'width': 'width', 'staff_coun': 'staff_coun', 'diameter': 'diameter', 'access_roo': 'access_roo', 'government': 'government', 'blockage': 'blockage', 'bridge': 'bridge', 'healthcare': 'healthcare', 'health_f_1': 'health_f_1', 'operator_t': 'operator_t', 'landuse': 'landuse', 'emergency': 'emergency', 'water': 'water', 'smoothness': 'smoothness', 'office': 'office', 'isced_leve': 'isced_leve', 'highway': 'highway', 'name': 'name', 'parking': 'parking', 'toilets_di': 'toilets_di', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'health_f_2': 'health_f_2', 'staff_co_1': 'staff_co_1', 'addr_stree': 'addr_stree', 'oneway': 'oneway', 'building': 'building', 'opening_ho': 'opening_ho', 'addr_house': 'addr_house', 'man_made': 'man_made', 'building_m': 'building_m', 'operator': 'operator', 'access': 'access', 'shop': 'shop', 'tunnel': 'tunnel', 'waterway': 'waterway', 'aeroway': 'aeroway', 'military': 'military', 'toilets_ha': 'toilets_ha', 'railway': 'railway', 'roof_mater': 'roof_mater', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'medical_sy': 'medical_sy', 'capacity': 'capacity', 'status': 'status', });
lyr_pointpendpwd_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointkespwd_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointpompwd_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_musormaspwd_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointinstansipwd_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointusahapwd_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointRMpwd_25.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_pointmartpwd_26.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_gadm41_IDN1ADM_ADM_3_27.set('fieldAliases', {'fid': 'fid', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_gadm41_IDN1ADM_ADM_4_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'desa_search': 'TextEdit', });
lyr_desapat_2.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_kebunptm_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sawahptm_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sungaiptm_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_irigasipat_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalanpatimuan_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'width': 'TextEdit', 'diameter': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'landuse': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'highway': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'man_made': 'TextEdit', 'tunnel': 'TextEdit', 'operator': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'capacity': 'TextEdit', 'lbr': 'TextEdit', 'Nama': 'TextEdit', });
lyr_polygonpatimuan_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'health_fac': 'TextEdit', 'width': 'TextEdit', 'staff_coun': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'government': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'healthcare': 'TextEdit', 'health_f_1': 'TextEdit', 'operator_t': 'TextEdit', 'landuse': 'TextEdit', 'emergency': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'office': 'TextEdit', 'isced_leve': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'parking': 'TextEdit', 'toilets_di': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'health_f_2': 'TextEdit', 'staff_co_1': 'TextEdit', 'addr_stree': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_house': 'TextEdit', 'man_made': 'TextEdit', 'building_m': 'TextEdit', 'operator': 'TextEdit', 'access': 'TextEdit', 'shop': 'TextEdit', 'tunnel': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'military': 'TextEdit', 'toilets_ha': 'TextEdit', 'railway': 'TextEdit', 'roof_mater': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'medical_sy': 'TextEdit', 'capacity': 'TextEdit', 'status': 'TextEdit', });
lyr_pointbaldesptm_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_point_10.set('fieldImages', {'id': 'TextEdit', 'Kelompok': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDN1ADM_ADM_4_11.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'desa_search': 'TextEdit', });
lyr_desapur_12.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_kebunpwd_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sawahpwd_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_irigasipurwo_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_sungaipwd_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalanpurwodadi_17.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'width': 'TextEdit', 'diameter': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'landuse': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'highway': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'man_made': 'TextEdit', 'tunnel': 'TextEdit', 'operator': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'capacity': 'TextEdit', 'lbr': 'TextEdit', 'Nama': 'TextEdit', });
lyr_polygonpurwodadi_18.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'health_fac': 'TextEdit', 'width': 'TextEdit', 'staff_coun': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'government': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'healthcare': 'TextEdit', 'health_f_1': 'TextEdit', 'operator_t': 'TextEdit', 'landuse': 'TextEdit', 'emergency': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'office': 'TextEdit', 'isced_leve': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'parking': 'TextEdit', 'toilets_di': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'health_f_2': 'TextEdit', 'staff_co_1': 'TextEdit', 'addr_stree': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_house': 'TextEdit', 'man_made': 'TextEdit', 'building_m': 'TextEdit', 'operator': 'TextEdit', 'access': 'TextEdit', 'shop': 'TextEdit', 'tunnel': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'military': 'TextEdit', 'toilets_ha': 'TextEdit', 'railway': 'TextEdit', 'roof_mater': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'medical_sy': 'TextEdit', 'capacity': 'TextEdit', 'status': 'TextEdit', });
lyr_pointpendpwd_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointkespwd_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointpompwd_21.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_musormaspwd_22.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointinstansipwd_23.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointusahapwd_24.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointRMpwd_25.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_pointmartpwd_26.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDN1ADM_ADM_3_27.set('fieldImages', {'fid': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_gadm41_IDN1ADM_ADM_4_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'desa_search': 'no label', });
lyr_desapat_2.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_kebunptm_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sawahptm_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sungaiptm_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_irigasipat_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalanpatimuan_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'width': 'no label', 'diameter': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'landuse': 'no label', 'water': 'no label', 'smoothness': 'no label', 'highway': 'no label', 'parking': 'no label', 'name': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'oneway': 'no label', 'building': 'no label', 'man_made': 'no label', 'tunnel': 'no label', 'operator': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'railway': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'capacity': 'no label', 'lbr': 'no label', 'Nama': 'no label', });
lyr_polygonpatimuan_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'health_fac': 'no label', 'width': 'no label', 'staff_coun': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'government': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'healthcare': 'no label', 'health_f_1': 'no label', 'operator_t': 'no label', 'landuse': 'no label', 'emergency': 'no label', 'water': 'no label', 'smoothness': 'no label', 'office': 'no label', 'isced_leve': 'no label', 'highway': 'no label', 'name': 'no label', 'parking': 'no label', 'toilets_di': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'health_f_2': 'no label', 'staff_co_1': 'no label', 'addr_stree': 'no label', 'oneway': 'no label', 'building': 'no label', 'opening_ho': 'no label', 'addr_house': 'no label', 'man_made': 'no label', 'building_m': 'no label', 'operator': 'no label', 'access': 'no label', 'shop': 'no label', 'tunnel': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'military': 'no label', 'toilets_ha': 'no label', 'railway': 'no label', 'roof_mater': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'medical_sy': 'no label', 'capacity': 'no label', 'status': 'no label', });
lyr_pointbaldesptm_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_point_10.set('fieldLabels', {'id': 'no label', 'Kelompok': 'no label', 'Nama': 'no label', });
lyr_gadm41_IDN1ADM_ADM_4_11.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'desa_search': 'no label', });
lyr_desapur_12.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_kebunpwd_13.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sawahpwd_14.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_irigasipurwo_15.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_sungaipwd_16.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalanpurwodadi_17.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'width': 'no label', 'diameter': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'landuse': 'no label', 'water': 'no label', 'smoothness': 'no label', 'highway': 'no label', 'parking': 'no label', 'name': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'oneway': 'no label', 'building': 'no label', 'man_made': 'no label', 'tunnel': 'no label', 'operator': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'railway': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'capacity': 'no label', 'lbr': 'no label', 'Nama': 'no label', });
lyr_polygonpurwodadi_18.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'health_fac': 'no label', 'width': 'no label', 'staff_coun': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'government': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'healthcare': 'no label', 'health_f_1': 'no label', 'operator_t': 'no label', 'landuse': 'no label', 'emergency': 'no label', 'water': 'no label', 'smoothness': 'no label', 'office': 'no label', 'isced_leve': 'no label', 'highway': 'no label', 'name': 'no label', 'parking': 'no label', 'toilets_di': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'health_f_2': 'no label', 'staff_co_1': 'no label', 'addr_stree': 'no label', 'oneway': 'no label', 'building': 'no label', 'opening_ho': 'no label', 'addr_house': 'no label', 'man_made': 'no label', 'building_m': 'no label', 'operator': 'no label', 'access': 'no label', 'shop': 'no label', 'tunnel': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'military': 'no label', 'toilets_ha': 'no label', 'railway': 'no label', 'roof_mater': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'medical_sy': 'no label', 'capacity': 'no label', 'status': 'no label', });
lyr_pointpendpwd_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointkespwd_20.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointpompwd_21.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_musormaspwd_22.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointinstansipwd_23.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointusahapwd_24.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointRMpwd_25.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_pointmartpwd_26.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_gadm41_IDN1ADM_ADM_3_27.set('fieldLabels', {'fid': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_gadm41_IDN1ADM_ADM_3_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});