function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.style.width = '250px';
        img.style.height = '250px';
        img.style.borderRadius = '125px';
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens.jpg/crianca-m.webp');
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'imagens.jpg/jovem-m.webp');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens.jpg/adulto-m.webp');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens.jpg/idoso.webp');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens.jpg/crianca-f.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens.jpg/jovem-f.jpg') ;
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens.jpg/adulta-f.webp');
            } else {
                // Idosa
                img.setAttribute('src', 'imagens.jpg/idosa.webp');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}