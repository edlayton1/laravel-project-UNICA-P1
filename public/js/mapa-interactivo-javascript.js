docObjeto= new ObjetoAjax();
docObjeto.cargaXML("xml/xml-mapa-interactivo.xml",recogeDatos); 
function recogeDatos(xmlDoc) {
      respuesta=document.getElementById("imagen");
      respuesta.innerHTML="<img src='images/cuadrados-prueba.png' alt='Mapa de imagenes' usemap='#enlaces'>";
      
      //escribimos el resultado en la página
      var raiz = xmlDoc.getElementsByTagName("mapa")[0];
      var tope = raiz.getElementsByTagName("elemento").length;
      var texto_mapa=' ';
      for (var i =0; i < tope; i++) {
            coord_x1 = raiz.getElementsByTagName("coord_x1")[i].childNodes[0].nodeValue;
            coord_x2 = raiz.getElementsByTagName("coord_x2")[i].childNodes[0].nodeValue;
            coord_y1 = raiz.getElementsByTagName("coord_y1")[i].childNodes[0].nodeValue;
            coord_y2 = raiz.getElementsByTagName("coord_y2")[i].childNodes[0].nodeValue;
            url = "pdf/";
            url += raiz.getElementsByTagName("url")[i].childNodes[0].nodeValue;
            
            title= raiz.getElementsByTagName("tittle")[i].childNodes[0].nodeValue;
            texto_mapa+="<area shape='rect'"+ "target='_blank' "+" title='" +title+"' coords='"+coord_x1 +"," + coord_y1 + "," + coord_x2 +","+ coord_y2 +"' " + "href='" +url+"'>";
      }
      respuesta.innerHTML+="<map name='enlaces'>"+texto_mapa+"</map>";
      
}