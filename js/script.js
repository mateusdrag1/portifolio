function mostrarAtivo1(tag){
  var tag_li = document.getElementById('listmenu');
  var tag_a = tag_li.getElementsByTagName('a');
  for (i=0; i<tag_a.length; i++ )
  {
    tag_a[i].style.color = "";
  }
    tag.style.color = "#C79921";
};
function mostrarAtivo(tag){
  var tag_li = document.getElementById('list');
  var tag_a = tag_li.getElementsByTagName('a');
  for (i=0; i<tag_a.length; i++ )
  {
    tag_a[i].style.color = "";
  }
    tag.style.color = "#C79921";
};

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    $('#blah')
      .attr('src', e.target.result)
      .width(95)
      .height(95);
    };
    reader.readAsDataURL(input.files[0]);
  }
};