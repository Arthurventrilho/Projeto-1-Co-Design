document.addEventListener('DOMContentLoaded', function() {
    /*
        Inicializa uma medição de tempo, que será gravada no
        banco de dados cujo endereço é passado como parâmetro.
        Altere o endereço abaixo para seu próprio banco de dados.
    */
    let ab = start('https://co-design-aps-4.firebaseio.com/')

    /*
        Seleciona o elemento que, quando clicado, finalizahttps://co-design-aps-4.firebaseio.com/ a
        medição de tempo e envia o resultado para o banco.
        Altere o seletor abaixo para o do elemento desejado.
    */
    let element = document.querySelector('.continue')

    /*
        A princípio, o restante do código não precisa mudar.
    */

    element.addEventListener('click', function() {
        ab.finish()
    })

    let as = document.querySelectorAll('a')

    for(let a of as) {
        a.addEventListener('click', function(event) {
            event.preventDefault()
            setTimeout(function() {
                window.location.assign(a.href)
            }, 5000)
        })
    }
})
