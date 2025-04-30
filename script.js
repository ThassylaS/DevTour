const imagens = document.getElementById('imagens');
const btnEsquerda = document.querySelector ('.btn-esquerda');
const btnDireita = document.querySelector ('.btn-direita');

let index = 0;

btnEsquerda.addEventListener ('click', () => {
    index = Math.max (index - 1, 0);
    imagens.style.transform = `translateX(${-300 * index}px)`;
});

btnDireita.addEventListener ('click', () => {
    const maxIndex = imagens.children.length - 1;
    index = Math.min (index + 1, maxIndex);
    imagens.style.transform = `translateX(${-300 * index}px)`;
});

