document.getElementById('depositButton').addEventListener('click', function(){
    const depositField = document.getElementById('depositInput');
    const depositInput = depositField.value;
    
    const depositOutputField = document.getElementById('depositOutput');
    const depositOutput = depositOutputField.innerText;
    
    depositOutputField.innerText = depositInput
    depositField.value = ''
})