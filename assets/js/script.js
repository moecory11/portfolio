$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();