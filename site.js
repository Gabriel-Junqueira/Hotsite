// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function(){
    $("#meuFormulario").on("submit", function(event){
        event.preventDefault();

        var formData = $(this).serialize();
        $.ajax({
            url: '/Home/Cadastrar',
            type: 'POST',
            data: formData,
            success: function(data) {
                // Limpa o formulário após a operação, independentemente do resultado
                $("#meuFormulario")[0].reset();
                if (data.success) {
                    alert("Cadastro bem sucedido!");
                } else {
                    // Exibe a mensagem de erro personalizada do controlador
                    alert(data.message);
                }
            },
            error: function(data) {
                // Aqui também, exibe a mensagem de erro personalizada do controlador
                alert(data.responseJSON.message);
            }
        });
    });
});


  // POPUPS CONTEUDO
    // Função para abrir o pop-up
    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    // Função para fechar o pop-up
    function closePopup(popupId) {
        document.getElementById(popupId).style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    // Adiciona eventos de clique aos links com a classe 'open-popup'
    document.addEventListener('DOMContentLoaded', function() {
        var popupLinks = document.getElementsByClassName('open-popup');
        for (var i = 0; i < popupLinks.length; i++) {
            popupLinks[i].addEventListener('click', function(event) {
                event.preventDefault();
                var popupId = this.getAttribute('data-popup-target');
                openPopup(popupId);
            });
        }
    });

