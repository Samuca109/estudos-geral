exibirAsteristicos(10)
function exibirAsteristicos(linha) {
    let cliente = "";
    for(let padrao = 1; padrao <= linha;padrao++ ) {
        cliente +='*'
        console.log(cliente)
    }
}