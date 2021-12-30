function calculateWage(empHours) {
   return empHours * NUM_OF_WORKING_DAYS;
}

getWorkHours = (empCheck) => {
   switch (empCheck) {
      case IS_PART_TIME:
         return PART_TIME_HOURS;
      case IS_FULL_TIME:
         return FULL_TIME_HOURS;
      default:
         return IS_ABSENT;
   }
}

//Array Helper Functions

//functions used in UC-7A
function sumWage(empdailyWage) {
   emptotalWage += empdailyWage;
}

function totalWages(totalWage, dailyWage) {
   return totalWage += dailyWage;
}

//function used in UC-7B
function mapDaywithDailyWage(dailyWage) {
   dayCount++;
   return "day:" + dayCount + " =" + " wage:" + dailyWage;
}

//function used in UC-7C,7D,7E
function fullTimeWage(dayWithDailyWage) {
   return dayWithDailyWage.includes("160")
}

//function used in UC-7F
function partTimeWage(dayWithDailyWage) {
   return dayWithDailyWage.includes("80");
}

console.log("\n-----Welcome to Employee Wage-----");

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

let empDailyWageArr = new Array();
let empHours = 0;
let totalEmpHours = 0;
let totalWorkingDays = 0;

while (empHours <= MAX_WORKING_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
   let empCheck = Math.floor(Math.random() * 10) % 3;
   empHours = getWorkHours(empCheck);
   totalEmpHours += empHours;
   let dailyWage = calculateWage(empHours);
   empDailyWageArr.push(dailyWage);
   totalWorkingDays++;
}

let empWage = calculateWage(totalEmpHours);
console.log("\nTotal working days in a month : " + totalWorkingDays);
console.log("Total Working hours in a month : " + totalEmpHours);
console.log("Employee wage for a month : " + empWage);
console.log("Daily wages for a month : " + empDailyWageArr + "\n");

//UC-7A  Calc total Wage using Array forEach or reduce method
let emptotalWage = 0;
empDailyWageArr.forEach(sumWage);
console.log("UC-7A using for each   Total working days : " + totalWorkingDays + "  Total employee wage : " + emptotalWage);
console.log("UC-7A using reduce     Total working days : " + totalWorkingDays + "  Total employee wage : " + empDailyWageArr.reduce(totalWages, 0));

//UC-7B  Show the Day along with Daily Wage using Array map helper function
let dayCount = 0;
let dayWithDailyWageArr = empDailyWageArr.map(mapDaywithDailyWage);
console.log("UC-7B  Mapping day with daily wage ")
console.log(dayWithDailyWageArr);

//UC-7C  Show Days when Full time wage of 160 were earned using filter function
let fullTimeWageDayArr = dayWithDailyWageArr.filter(fullTimeWage);
console.log("UC-7C   Daily wage when employee work full time");
console.log(fullTimeWageDayArr);

//UC-7D  Find the first occurrence when Full Time Wage was earned using find function
console.log("UC-7D   First time full time wage earned on : " + fullTimeWageDayArr.find(fullTimeWage));

//UC-7E  Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("UC-7E   Every element holds full time wage in fullTimeWageDayArr: " + fullTimeWageDayArr.every(fullTimeWage));

//UC-7F  Check if there is any Part Time Wage
console.log("UC-7F   Part time wage present : " + dayWithDailyWageArr.some(partTimeWage));

//UC-7G  Find the number of days the Employee Worked
let partTimeWageDayArr = dayWithDailyWageArr.filter(partTimeWage);
console.log("UC-7G   No of days employee worked : " + (fullTimeWageDayArr.length + partTimeWageDayArr.length));