
// Old-fashioned approach of handline promises. 

const takeClientOrder = (order) => {
    console.log('Please wait a moment...');
    return new Promise((resolve, reject) => {
        if (order === 'Pizza') {
            resolve("Here's your Pizza dear sir/ma'am.");
        } else {
            reject("Sorry. We only receive Pizza orders here :(")
        }
    })
}


const processOrder = (response) => {
    return new Promise((resolve, reject) => {
        console.log("Processing the response");
        resolve(`As we promised! ${response}`)
    })
}


// takeClientOrder('Pizza').then(response =>{
//     return processOrder(response);
// }).then(processedResponse =>{
//     console.log(processedResponse);
// }).catch(err =>{
//     console.log(err);
// });





// New way of handling promises with async/await. 

const waitForResponse = async () => {

    try {
        const response = await takeClientOrder('Cake')
        const processedResponse = await processOrder(response)
        console.log(processedResponse);
    } catch (error) {
        error && console.log(error)
    }
}

waitForResponse();