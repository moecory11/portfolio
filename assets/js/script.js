console.log("hello");
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })