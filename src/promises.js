const isShort = true;
const isSkinny = true;

const heCanPlayBasketBall = ()=>{
    return new Promise((resolve, reject)=>{
        if(isShort && !isSkinny){
            reject({
                observation: "He's too short for this.",
                message: "We're sorry to see him go :("
            })
        }else if(isSkinny && !isShort){
            reject({
                observation: "He's too underweight for this..",
                message: "We're sorry to see him go :("
            })
        }else if(isShort && isSkinny){
            reject({
                observation: "He's not qualified at all for this.",
                message: "Next candidate plz."
            })
        }else{
            resolve({
                observation: "He's  absolutely the right guy for this.",
                message: "Plz bring him in :)"
            })
        }
    })
} 

heCanPlayBasketBall().then(res => {
console.log(`${res.observation} ${res.message}`);
}).catch(err => {
    console.log(`${err.observation} ${err.message}`);
})


const checkUserAge = (age, gender) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (age < 18 && gender === 'Male') {
                reject(`We're sorry sir! You're not allowed in here coz you're under 18.`)
            } else if (age < 18 && gender === 'Female') {
                reject(`We're sorry ma'am! You're not allowed in here coz you're under 18.`)
            } else {
                resolve("Please proceed!")
            }
        }, 3000)
    })
}


const showDirection = new Promise((resolve, reject) => resolve("Morning! Please turn right :)"));

const showSeat = new Promise((resolve, reject) => resolve("Morning! Please sit here :)"))

Promise.all([
    checkUserAge(10, "Female"),
    showDirection,
    showSeat
]).then(messages => {
    console.log(messages);
}).catch(err => {
    console.log(err);
})