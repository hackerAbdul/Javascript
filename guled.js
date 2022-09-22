const getSleepHours = (day) => {
    if (day === "monday") {
      return 4;
    } else if (day === "tuesday") {
      return 10;
    } else if (day === "wednesday") {
      return 10;
    } else if (day === "thursday") {
      return 10;
    } else if (day === "friday") {
      return 10;
    } else if (day === "saturday") {
      return 10;
    } else if (day === "sunday"){
        return 10;
    }else{
        console.log("that day does not exist")
    }
};

function getActualSleepHours(){
    var sleep = (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday") )
    return sleep
};

const getIdealSleepHours = () => {
    const idealHours = 70
    
    return idealHours;
};

const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    console.log(actualSleepHours)
    var idealSleepHours = getIdealSleepHours();
    console.log(idealSleepHours)
    if (actualSleepHours < idealSleepHours) {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " less sleep than you needed this week. Get some rest."
      );
    }else if (actualSleepHours === idealSleepHours) {
        console.log("Perfect");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You've overslept");
    } else {
        console.log("Error");
    }
}; 

calculateSleepDebt();

