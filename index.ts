import PromptSync from "prompt-sync";

const prompt = PromptSync()

const fruits = [
    'Apple',
    'Banana'
]

while(true){

    const request = prompt('Wait: ')
    const body = prompt('Body: ')
    if (request == ' ') {
        break
    }
    const array = request.split(' ')
    const method = array[0]
    const resourse = array[1]
    if (resourse == 'fruits') {
        if (method == 'GET') {
            console.log('Response: ', fruits);            
        }
        else if (method == 'POST') {
            fruits.push(body)
            console.log('Response: ', 'Your data has pushed.');            
        }
        else {
            console.log('404: Resourse ' + resourse + ' hasnot method' + method);
        }
    }
    else {
        console.log('404: Resourse ' + resourse + ' not found');
        
    }
}