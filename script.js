const button = document.querySelector('#container-botao');
const container = document.querySelector('.container');
const descricao_cor = document.querySelector('#descricao-cor')


let verificador = 1;
button.addEventListener('click', () => {
    if (verificador === 1) {
        container.style.backgroundColor = '#C7C7C7'
        descricao_cor.firstChild.nodeValue = 'Background: #C7C7C7'
        verificador = 2;
    }
    else if (verificador === 2) {
        container.style.backgroundColor = '#F2F2F2'
        descricao_cor.firstChild.nodeValue = 'Background: #F2F2F2'
        verificador = 3;
    }
    else if (verificador === 3) {
        container.style.backgroundColor = '#292929'
        descricao_cor.firstChild.nodeValue = 'Background: #292929'
        verificador = 1;
    }
})