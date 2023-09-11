const inputField = document.getElementById('textToConvert');
const outputText = document.getElementById('textCount');
const outputWord = document.getElementById('wordCount');

inputField.addEventListener('input', function(){
    outputText.innerHTML = inputField.value.length + ' Characters';
    outputWord.innerHTML = inputField.value.trim().split(' ').length + ' Words';
});