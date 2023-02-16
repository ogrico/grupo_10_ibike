$(document).ready(function () {
    console.log('Ready...')
    
    
    $('#dp').click(function(){
        $('#personales').css('display', 'block')
        $('#facturacion').css('display', 'none')
        $('#pedidos').css('display', 'none')
    })

    $('#df').click(function(){
        $('#personales').css('display', 'none')
        $('#facturacion').css('display', 'block')
        $('#pedidos').css('display', 'none')
    })

    $('#hp').click(function(){
        $('#personales').css('display', 'none')
        $('#facturacion').css('display', 'none')
        $('#pedidos').css('display', 'block')
    })
    
})