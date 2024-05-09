// Obtenha o elemento h1
var colorfulText = document.getElementById("colorful-text");

// Separe cada letra do texto
var letters = colorfulText.textContent.split("");

// Crie uma string com cada letra envolvida em uma tag span com uma cor diferente
var coloredText = letters.map(function(letter, index) {
    var color = getRandomColor(); // Função para obter uma cor aleatória
    return '<span style="color:' + color + ';">' + letter + '</span>';
}).join("");

// Defina o conteúdo do elemento h1 como a string com letras coloridas
colorfulText.innerHTML = coloredText;

// Função para obter uma cor aleatória
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
