let texto = document.getElementById('texto');
let textoDecodificado = document.getElementById('texto__tratado');

function criptografar() {
    let texto = document.getElementById('texto').value.toLowerCase();
    let matrizCripto = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
    let textoCriptografado = '';

    if (/[^\u0000-\u007F]/.test(texto) || /[^\w\s]/.test(texto)) {
        textoCriptografado = 'Digite uma frase sem acentos ou caracteres especiais';
    } else {
        let vetorLetra = texto.split('');
        
        for (let i = 0; i < vetorLetra.length; i++) {
            for (let j = 0; j < matrizCripto.length; j++) {
                if (vetorLetra[i] === matrizCripto[j][0]){
                    vetorLetra[i] = matrizCripto[j][1];
                    break;
                }
            }
        }
        textoCriptografado = vetorLetra.join('');
    }
    
    document.getElementById('texto__tratado').innerHTML = `
        <div class="resultado">${textoCriptografado}</div>
        <button onclick="copiar()" class="botao">Copiar</button>`;
}

function descriptografar() {
    let textoCriptografado = document.getElementById('texto').value.toLowerCase();
    let matrizCripto = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
    let textoDescriptografado = textoCriptografado;

    for (let i = 0; i < matrizCripto.length; i++) {
        textoDescriptografado = textoDescriptografado.replaceAll(matrizCripto[i][1], matrizCripto[i][0]);
    }
    
    document.getElementById('texto__tratado').innerHTML = `
        <div class="resultado" style="box-sizing: border-box">${textoDescriptografado}</div>
        <button onclick="copiar()" class="botao">Copiar</button>`;
}

function copiar() {
    let textoTratado = document.getElementById('texto__tratado').getElementsByClassName('resultado')[0];
    let range = document.createRange();
    range.selectNode(textoTratado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Texto copiado para a área de transferência!');
}