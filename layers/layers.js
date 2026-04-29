var wms_layers = [];

var format_usodosolo_0 = new ol.format.GeoJSON();
var features_usodosolo_0 = format_usodosolo_0.readFeatures(json_usodosolo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_usodosolo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usodosolo_0.addFeatures(features_usodosolo_0);
var lyr_usodosolo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_usodosolo_0, 
                style: style_usodosolo_0,
                popuplayertitle: 'uso do solo',
                interactive: true,
    title: 'uso do solo<br />\
    <img src="styles/legend/usodosolo_0_0.png" /> AFLORAMENTO ROCHOSO<br />\
    <img src="styles/legend/usodosolo_0_1.png" /> AGRICULTURA<br />\
    <img src="styles/legend/usodosolo_0_2.png" /> AGUA<br />\
    <img src="styles/legend/usodosolo_0_3.png" /> AREA UMIDA<br />\
    <img src="styles/legend/usodosolo_0_4.png" /> CAMPO/PASTAGEM<br />\
    <img src="styles/legend/usodosolo_0_5.png" /> DINAMICA FLUVIAL/LAGUNAR<br />\
    <img src="styles/legend/usodosolo_0_6.png" /> MANGUE<br />\
    <img src="styles/legend/usodosolo_0_7.png" /> REFLORESTAMENTO<br />\
    <img src="styles/legend/usodosolo_0_8.png" /> URBANO<br />\
    <img src="styles/legend/usodosolo_0_9.png" /> VEGETACAO SECUNDARIA EM ESTAGIO INICIAL<br />\
    <img src="styles/legend/usodosolo_0_10.png" /> VEGETACAO SECUNDARIA EM ESTAGIO MEDIO E AVANCADO<br />\
    <img src="styles/legend/usodosolo_0_11.png" /> <br />' });
var format_ESTACOESHIDROMETEOROLOGICAS_1 = new ol.format.GeoJSON();
var features_ESTACOESHIDROMETEOROLOGICAS_1 = format_ESTACOESHIDROMETEOROLOGICAS_1.readFeatures(json_ESTACOESHIDROMETEOROLOGICAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACOESHIDROMETEOROLOGICAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACOESHIDROMETEOROLOGICAS_1.addFeatures(features_ESTACOESHIDROMETEOROLOGICAS_1);
var lyr_ESTACOESHIDROMETEOROLOGICAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACOESHIDROMETEOROLOGICAS_1, 
                style: style_ESTACOESHIDROMETEOROLOGICAS_1,
                popuplayertitle: 'ESTACOES HIDROMETEOROLOGICAS',
                interactive: true,
    title: 'ESTACOES HIDROMETEOROLOGICAS<br />\
    <img src="styles/legend/ESTACOESHIDROMETEOROLOGICAS_1_0.png" /> Fluviométrica<br />\
    <img src="styles/legend/ESTACOESHIDROMETEOROLOGICAS_1_1.png" /> Pluviométrica<br />' });

lyr_usodosolo_0.setVisible(true);lyr_ESTACOESHIDROMETEOROLOGICAS_1.setVisible(true);
var layersList = [lyr_usodosolo_0,lyr_ESTACOESHIDROMETEOROLOGICAS_1];
lyr_usodosolo_0.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'gridcode': 'gridcode', 'classe': 'classe', 'area_ha': 'area_ha', 'area_m2': 'area_m2', });
lyr_ESTACOESHIDROMETEOROLOGICAS_1.set('fieldAliases', {'Codigo': 'Codigo', 'Nome': 'Nome', 'BaciaCodig': 'BaciaCodig', 'SubBaciaCo': 'SubBaciaCo', 'Rio': 'Rio', 'UF': 'UF', 'Bacia': 'Bacia', 'SubBacia': 'SubBacia', 'Municipio': 'Municipio', 'Operadora': 'Operadora', 'Pluviometr': 'Pluviometr', 'Registrado': 'Registrado', 'Operando': 'Operando', 'Descricao': 'Descricao', 'TipoEstaca': 'TipoEstaca', 'TipoEsta_1': 'TipoEsta_1', 'CodigoAdic': 'CodigoAdic', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude': 'Altitude', 'AreaDrenag': 'AreaDrenag', 'RioCodigo': 'RioCodigo', 'UFCodigo': 'UFCodigo', 'MunicipioC': 'MunicipioC', 'Responsave': 'Responsave', 'Responsa_1': 'Responsa_1', 'Responsa_2': 'Responsa_2', 'Responsa_3': 'Responsa_3', 'OperadoraS': 'OperadoraS', 'OperadoraC': 'OperadoraC', 'OperadoraU': 'OperadoraU', 'OperadoraR': 'OperadoraR', 'EscalaNive': 'EscalaNive', 'EscalaNi_1': 'EscalaNi_1', 'EscalaNi_2': 'EscalaNi_2', 'Registra_1': 'Registra_1', 'Registra_2': 'Registra_2', 'Registra_3': 'Registra_3', 'MedicaoDes': 'MedicaoDes', 'MedicaoD_1': 'MedicaoD_1', 'MedicaoD_2': 'MedicaoD_2', 'MedicaoD_3': 'MedicaoD_3', 'MedicaoD_4': 'MedicaoD_4', 'MedicaoD_5': 'MedicaoD_5', 'MedicaoQA': 'MedicaoQA', 'MedicaoQAI': 'MedicaoQAI', 'MedicaoQAF': 'MedicaoQAF', 'Pluviome_1': 'Pluviome_1', 'Pluviome_2': 'Pluviome_2', 'Registra_4': 'Registra_4', 'Registra_5': 'Registra_5', 'TanqueEvap': 'TanqueEvap', 'TanqueEv_1': 'TanqueEv_1', 'TanqueEv_2': 'TanqueEv_2', 'EstacaoCli': 'EstacaoCli', 'EstacaoC_1': 'EstacaoC_1', 'EstacaoC_2': 'EstacaoC_2', 'EstacaoPie': 'EstacaoPie', 'EstacaoP_1': 'EstacaoP_1', 'EstacaoP_2': 'EstacaoP_2', 'EstacaoTel': 'EstacaoTel', 'EstacaoT_1': 'EstacaoT_1', 'EstacaoT_2': 'EstacaoT_2', 'RedeBasica': 'RedeBasica', 'RedeEnerge': 'RedeEnerge', 'RedeNavega': 'RedeNavega', 'RedeCursoD': 'RedeCursoD', 'RedeEstrat': 'RedeEstrat', 'RedeCaptac': 'RedeCaptac', 'RedeRHNR': 'RedeRHNR', 'RedeQA': 'RedeQA', 'RedeClasse': 'RedeClasse', 'x': 'x', 'y': 'y', });
lyr_usodosolo_0.set('fieldImages', {'ogc_fid': 'Range', 'gridcode': 'TextEdit', 'classe': 'TextEdit', 'area_ha': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_ESTACOESHIDROMETEOROLOGICAS_1.set('fieldImages', {'Codigo': 'TextEdit', 'Nome': 'TextEdit', 'BaciaCodig': 'TextEdit', 'SubBaciaCo': 'TextEdit', 'Rio': 'TextEdit', 'UF': 'TextEdit', 'Bacia': 'TextEdit', 'SubBacia': 'TextEdit', 'Municipio': 'TextEdit', 'Operadora': 'TextEdit', 'Pluviometr': 'TextEdit', 'Registrado': 'TextEdit', 'Operando': 'TextEdit', 'Descricao': 'TextEdit', 'TipoEstaca': 'TextEdit', 'TipoEsta_1': 'TextEdit', 'CodigoAdic': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude': 'TextEdit', 'AreaDrenag': 'TextEdit', 'RioCodigo': 'TextEdit', 'UFCodigo': 'TextEdit', 'MunicipioC': 'TextEdit', 'Responsave': 'TextEdit', 'Responsa_1': 'TextEdit', 'Responsa_2': 'TextEdit', 'Responsa_3': 'TextEdit', 'OperadoraS': 'TextEdit', 'OperadoraC': 'TextEdit', 'OperadoraU': 'TextEdit', 'OperadoraR': 'CheckBox', 'EscalaNive': 'TextEdit', 'EscalaNi_1': 'TextEdit', 'EscalaNi_2': 'TextEdit', 'Registra_1': 'TextEdit', 'Registra_2': 'TextEdit', 'Registra_3': 'TextEdit', 'MedicaoDes': 'TextEdit', 'MedicaoD_1': 'TextEdit', 'MedicaoD_2': 'TextEdit', 'MedicaoD_3': 'TextEdit', 'MedicaoD_4': 'TextEdit', 'MedicaoD_5': 'TextEdit', 'MedicaoQA': 'TextEdit', 'MedicaoQAI': 'TextEdit', 'MedicaoQAF': 'TextEdit', 'Pluviome_1': 'TextEdit', 'Pluviome_2': 'TextEdit', 'Registra_4': 'TextEdit', 'Registra_5': 'TextEdit', 'TanqueEvap': 'TextEdit', 'TanqueEv_1': 'TextEdit', 'TanqueEv_2': 'TextEdit', 'EstacaoCli': 'TextEdit', 'EstacaoC_1': 'TextEdit', 'EstacaoC_2': 'TextEdit', 'EstacaoPie': 'TextEdit', 'EstacaoP_1': 'TextEdit', 'EstacaoP_2': 'TextEdit', 'EstacaoTel': 'TextEdit', 'EstacaoT_1': 'TextEdit', 'EstacaoT_2': 'TextEdit', 'RedeBasica': 'TextEdit', 'RedeEnerge': 'TextEdit', 'RedeNavega': 'TextEdit', 'RedeCursoD': 'TextEdit', 'RedeEstrat': 'TextEdit', 'RedeCaptac': 'TextEdit', 'RedeRHNR': 'TextEdit', 'RedeQA': 'TextEdit', 'RedeClasse': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_usodosolo_0.set('fieldLabels', {'ogc_fid': 'no label', 'gridcode': 'no label', 'classe': 'no label', 'area_ha': 'no label', 'area_m2': 'no label', });
lyr_ESTACOESHIDROMETEOROLOGICAS_1.set('fieldLabels', {'Codigo': 'no label', 'Nome': 'no label', 'BaciaCodig': 'no label', 'SubBaciaCo': 'no label', 'Rio': 'no label', 'UF': 'no label', 'Bacia': 'no label', 'SubBacia': 'no label', 'Municipio': 'no label', 'Operadora': 'no label', 'Pluviometr': 'no label', 'Registrado': 'no label', 'Operando': 'no label', 'Descricao': 'no label', 'TipoEstaca': 'no label', 'TipoEsta_1': 'no label', 'CodigoAdic': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Altitude': 'no label', 'AreaDrenag': 'no label', 'RioCodigo': 'no label', 'UFCodigo': 'no label', 'MunicipioC': 'no label', 'Responsave': 'no label', 'Responsa_1': 'no label', 'Responsa_2': 'no label', 'Responsa_3': 'no label', 'OperadoraS': 'no label', 'OperadoraC': 'no label', 'OperadoraU': 'no label', 'OperadoraR': 'no label', 'EscalaNive': 'no label', 'EscalaNi_1': 'no label', 'EscalaNi_2': 'no label', 'Registra_1': 'no label', 'Registra_2': 'no label', 'Registra_3': 'no label', 'MedicaoDes': 'no label', 'MedicaoD_1': 'no label', 'MedicaoD_2': 'no label', 'MedicaoD_3': 'no label', 'MedicaoD_4': 'no label', 'MedicaoD_5': 'no label', 'MedicaoQA': 'no label', 'MedicaoQAI': 'no label', 'MedicaoQAF': 'no label', 'Pluviome_1': 'no label', 'Pluviome_2': 'no label', 'Registra_4': 'no label', 'Registra_5': 'no label', 'TanqueEvap': 'no label', 'TanqueEv_1': 'no label', 'TanqueEv_2': 'no label', 'EstacaoCli': 'no label', 'EstacaoC_1': 'no label', 'EstacaoC_2': 'no label', 'EstacaoPie': 'no label', 'EstacaoP_1': 'no label', 'EstacaoP_2': 'no label', 'EstacaoTel': 'no label', 'EstacaoT_1': 'no label', 'EstacaoT_2': 'no label', 'RedeBasica': 'no label', 'RedeEnerge': 'no label', 'RedeNavega': 'no label', 'RedeCursoD': 'no label', 'RedeEstrat': 'no label', 'RedeCaptac': 'no label', 'RedeRHNR': 'no label', 'RedeQA': 'no label', 'RedeClasse': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_ESTACOESHIDROMETEOROLOGICAS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});