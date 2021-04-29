$(document).ready(function(){
  var imgu = $(".imgu");
  var boton1 = $("#boton1");
  var imgc = $("#imgc");
  var resultado =$("#resultado");
  var titulo = $("#titulo");
  imgu.mouseenter(function(){
    $(".imgu").css("background-color","red");
  });
  imgu.mouseleave(function(){
    $(".imgu").css("background-color","#ADB1DE");
  });
  boton1.click(function(){
    $("#imgc").fadeTo("fast", 0)
  });
  boton1.click(function(){
    $("#imgc").fadeTo("fast", 1)
  });
  resultado.click(function(){
    $("#titulo").text("CC 1-0 UCH")
  });

});
