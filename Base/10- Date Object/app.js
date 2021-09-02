let value;


const now = new Date(); // now

const date1 = new Date("06-05-1996 04:15:00")

const date2 = new Date("Jun 05 1996")

const date3 = new Date("9/19/1196")



value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();


date1.setMonth(7);
date1.setFullYear(1994);
date1.setDate(12);
date1.setHours(8);
date1.setMinutes(14);
date1.setSeconds(45);



value = date1;


console.log(value)


