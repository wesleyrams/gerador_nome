
function getCharTypes(){
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const numbers = document.querySelector('#include_number').checked;
    const specialCaracter = document.querySelector('#include_caracter_special').checked;
    const charTypes = [];

    if(uppercase){
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if(lowercase){
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }
    if(numbers){
        charTypes.push('0123456789');
    }
    if(specialCaracter){
        charTypes.push('?/~^{}[]!@#$%&*()_-+=.:;');
    }

    return charTypes;
}

console.log(getCharTypes)
function getPasswordSize(){
    const size = document.querySelector('#size').value;
    if(isNaN(size) || size < 3 || size > 12){
        alert('O tamanho da senha deve estar entre 3 e 12')
    }
    return size;
}

function randomChar(charTypes){
            const randomIndex = Math.floor(Math.random() * charTypes.length);
            return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
}  
        

function generetePassword(size, charTypes){
    let password = '';
    while(password.length < size){
        password += randomChar(charTypes);
    }
    return password;
}


document.querySelector('#generate').addEventListener('click', function () {
    const size = getPasswordSize();
    const charTypes = getCharTypes();
    const newPassword = generetePassword(size, charTypes);
    document.querySelector('#password_container').classList.add('show');
    document.querySelector('#passwordSpan').textContent = newPassword;

})


