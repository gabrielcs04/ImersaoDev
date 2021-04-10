function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme');
    var filmeFavorito = campoFilmeFavorito.value;
    
    if (filmeFavorito != '') {
        if (filmeFavorito.indexOf('youtu.be') !== -1) {
            var filmeFavoritoFormatado = filmeFavorito.split('/')[3]
        } else {
            var filmeFavoritoFormatado = filmeFavorito.split('?')
            filmeFavoritoFormatado = filmeFavoritoFormatado[1].split('v=')
            filmeFavoritoFormatado = filmeFavoritoFormatado[1].split('&')
            filmeFavoritoFormatado = filmeFavoritoFormatado[0]
        }
        listarFilmesFavoritos(filmeFavoritoFormatado);
    } else {
        alert('Insira um link!')
    }

    campoFilmeFavorito.value = ''
}

function listarFilmesFavoritos(urlFilme) {
    var listaFilmes = document.querySelector('#listaFilmes');
    var elementoFilme = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${urlFilme}" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

    listaFilmes.innerHTML += elementoFilme;
}

// Links exemplos:
// https://youtu.be/NnDGWyfP7q4?t=4
// https://www.youtube.com/watch?v=aaGIPZZqjiA&ab_channel=TrailersBR
// https://www.youtube.com/watch?v=MUAaQJA5YkE