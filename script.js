document.addEventListener("DOMContentLoaded", function() {
    // Cria uma instância do Compress
    const compress = new Compress();

    // Seleciona a imagem do header
    const imgElement = new Image();
    imgElement.src = '/assets/fundo.png';
    imgElement.onload = function() {
        compress.compress([imgElement], {
            size: 4, // o tamanho máximo do arquivo de saída em MB
            quality: 0.75, // qualidade da imagem comprimida
            maxWidth: 1920, // largura máxima da imagem
            maxHeight: 1080, // altura máxima da imagem
            resize: true, // permite redimensionamento
        }).then((data) => {
            // 'data' é um array de imagens comprimidas
            const compressedImage = data[0];
            // Obtém o base64 da imagem comprimida
            const compressedDataUrl = compressedImage.prefix + compressedImage.data;
            // Atualiza o background image com a imagem comprimida
            document.querySelector('.header').style.backgroundImage = `url(${compressedDataUrl})`;
        });
    };
});
