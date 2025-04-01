
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('sexo')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'imagens/bebe-menino.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'imagens/jovem-menino.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/adulto.png')
        } else {
            //idoso
            img.setAttribute('src', 'imagens/idoso.png')
        }
       } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'imagens/bebe-menina.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'imagens/jovem-menina.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imagens/adulta.png')
        } else {
            //idoso
            img.setAttribute('src', 'imagens/idosa.png')
        }
       }
       res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
       res.style.textAlign = 'Center'
       res.appendChild(img)
    }
}
