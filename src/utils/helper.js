function compareTime(timeString1,timeString2){
     let dateTime1 = new Date(timeString1);
     let dateTime2 = new Date(timeString2);
     return dateTime1.getTime() > dateTime2.getTime();

}

// function totalTime(timeString1,timeString2){
//     let dateTime1 = new Date(timeString1);
//     let dateTime2 = new Date(timeString2);
//     return dateTime1.getTime()-dateTime2ateTime2.getTime();
// }

module.exports = {
    compareTime
}