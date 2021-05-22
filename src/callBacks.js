const isShort = false;
const isSkinny = false;

const heCanPlayBasketBall = (acceptance, singleDefect, totalRejection) => {

    if(isShort && !isSkinny){
        singleDefect({
            observation: "He's too short for this.",
            message: "We're sorry to see him go :("
        })
    }else if(isSkinny && !isShort){
        singleDefect({
            observation: "He's too underweight for this..",
            message: "We're sorry to see him go :("
        })
    }else if(isShort && isSkinny){
        totalRejection({
            observation: "He's not qualified at all for this.",
            message: "Next candidate plz."
        })
    }else{
        acceptance({
            observation: "He's  absolutely the right guy for this.",
            message: "Plz bring him in :)"
        })
    }
}

heCanPlayBasketBall((acceptanceMesg) => {
    console.log(`${acceptanceMesg.observation} ${acceptanceMesg.message}`);
}, (singleDefectMsg) => {
    console.log(`${singleDefectMsg.observation} ${singleDefectMsg.message}`);
}, (totalRejectionMsg) => {
    console.log(`${totalRejectionMsg.observation} ${totalRejectionMsg.message}`);
})