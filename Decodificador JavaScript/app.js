let texto = document.getElementById('texto');
let textoDecodificado = document.getElementById('texto__tratado')


function criptografar() {
    const substituicoes = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    texto = substituicoes;
    resultado();
}

function decriptografar() {
    const substituicoes = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
}

function resultado() {
    document.getElementById('texto__tratado').innerHTML = `
        <div class="texto__codificado" id="texto__tratado">
            <div class="resultado">${texto.value}</div>
            <button onclick="copiar()" class="botao">Copiar</button>;
        </div>`
}
