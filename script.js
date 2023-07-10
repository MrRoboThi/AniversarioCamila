const imagem = document.querySelector('img');
let textoVisivel = false;

imagem.addEventListener('click', function() {
  if (textoVisivel) {
    const paragrafo = document.querySelector('p');
    if (paragrafo) {
      paragrafo.remove();
    }
    textoVisivel = false;
  } else {
    const paragrafo = document.createElement('p');
    paragrafo.textContent = 'Já fazem 9 anos desde que tive a honra de ter te conhecido, e em todo esse tempo você foi uma pessoa muito especial pra mim, assim como esse dia é, pois é o seu dia. Quero te desejar muitas felicidades não só hoje, como sempre, pois todos os dias de sua vida eu quero que você seja muito feliz, e quero dizer que tenho muito orgulho de você por ser essa pessoa boa, batalhadora e incrível que sempre foi. Eu poderia citar mil qualidades suas, porém bem provavelmente faria o site entrar em sobrecarga de informações, e espero que esse pequeno texto, mesmo que não sendo o suficiente, possa demonstrar o carinho que tenho por você. Vou torcer para que seja tranquilo no trabalho, e farei questão de estar com você mesmo que poucos minutos para aproveitar que você está aqui. Obrigado de coração, por tudo. Feliz aniversário, Camila.';

    imagem.insertAdjacentElement('afterend', paragrafo);
    textoVisivel = true;
  }
});
