getWorkHours=(empCheck)=>{
   switch(empCheck){
      case IS_PART_TIME:
         return PART_TIME_HOURS;
      case IS_FULL_TIME:
         return FULL_TIME_HOURS;
      default:
         return IS_ABSENT;
   }
}

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS=20;
const MAX_WORKING_HOURS=160;

let empHours=0;
let totalWorkingDays=0;

while(empHours<=MAX_WORKING_HOURS && totalWorkingDays<NUM_OF_WORKING_DAYS){
   let empCheck = Math.floor(Math.random()*10)%3;
   empHours+=getWorkHours(empCheck);
   totalWorkingDays++;
}
let empWage=WAGE_PER_HOUR*empHours;
console.log("Working hours in a month : "+empHours);
console.log("Employee wage for a month : "+empWage);
