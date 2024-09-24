$(document).ready(function(){
    $('#caroussel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 0 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira um endereço de e-mail válido.',
            telefone: 'Por favor, insira o seu número de telefone.'
        },
        submitHandler: function(form) {
            // Lógica para enviar os dados do formulário (AJAX ou envio tradicional)
            console.log("Formulário enviado com sucesso!"); 
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            // Lógica para fornecer feedback visual ao usuário sobre os campos inválidos
            console.log("Formulário inválido. Número de campos incorretos:", camposIncorretos); 
        }
    });

    // Vincula a validação ao evento de envio do formulário
    $('form').on('submit', function(event) {
        event.preventDefault(); 
    });

    $('.lista-veiculos button').click(function(){ 
        const destino = $("#contato"); 
        const nomeVeiculo = $(this).closest('li').find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);
        $('html, body').animate({ 
            scrollTop: destino.offset().top 
        }, 1000); 
    });
});