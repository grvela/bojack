function addTable(data){
    $('.main-table').append(
        '<tr>' + 
        '<td>' + data.name + '</td>' +
        '<td>' + data.date + '</td>' +
        '<td>' + data.cellphone + '</td>' +
        '<td>' + 'on' + '</td>' +
        '</tr>'
    );
  
    let tableScroll = document.querySelector('.table-body-scroll');
    tableScroll.scrollTop = tableScroll.scrollHeight;
}

function getInput(){
    event.preventDefault();
    let data = {
        "name": $('#name').val(),
        "date": $('#date').val(),
        "cellphone": $('#cellphone').val()
    } 
    addTable(data);
   $('form').trigger('reset');
}

//  esse code stiliza o padrão do validator 
jQuery.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element) {
        $(element).removeClass('is-invalid');
    }
});

$(document).ready(function(){

    $('#date').mask('00/00/0000');
    $('#cellphone').mask('+00(00)00000-0000')
  
    $('.form-inline').validate({
        submitHandler: function(){
            getInput();
        },
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            date: {
                required: true,
                minlength: 5
            },
            cellphone: {
                required: true,
                minlength: 15
            }
        },
        messages: {
            name: {
                required: "Preencha este campo!",
                minlength: "Insira um nome com no mínimo 3 letras"
            },
            date: {
                required: "Preencha este campo!",
                minlength: "Insira data completa"
            },
            cellphone: {
                required: "Preencha este campo!",
                minlength: "Insira com o número completo"
            }
        }
    });

  
});




