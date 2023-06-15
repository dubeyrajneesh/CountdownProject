const months= [

    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays=[

    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursdat",
    "Friday",
    "Saturday",

];

const giveaway = document.querySelector(".head3") ;
const deadline = document.querySelector(".deadline") ;
const items = document.querySelectorAll(".deadline-format h2") ;

let futureDate= new Date(2023,6,7,11,30,0) ;
console.log(futureDate ) ;

const year = futureDate.getFullYear() ;
const hours= futureDate.getHours() ;
const minutes = futureDate.getMinutes() ;

let month= futureDate.getMonth() ;
month= months[month] ;
const date= futureDate.getDate() ;

const weekday = futureDate.getDay() ;
console.log(weekday) ;

giveaway.textContent = `Giveaway ends on  ${date} ${month} ${year} ${hours}:${minutes}am` ;

const futureTime = futureDate.getTime() ;

function getRemainingTime(){
   
    const today = new Date().getTime() ;
    const t= futureTime - today ;
    console.log(t) ;


    const oneDay = 24*60*60*1000 ;
const oneHour = 60*60*1000 ;
const oneMinute = 60*1000 ;

let days= t/oneDay ;
days = Math.floor(days) ;
let hours = Math.floor((t%oneDay)/ oneHour) ;
let minutes = Math.floor((t%oneHour)/ oneMinute) ;
let seconds = Math.floor((t%oneMinute)/ 1000) ;

const values = [days , hours , minutes , seconds] ;

function format(item){
    if(item<10){
        return (item = `0${item}`) ;
    }
    return item ;
}

items.forEach(function (item , index){
    item.innerHTML = format(values[index]) ;
});

if(t<0){
    clearInterval(countdown) ;
    deadline.innerHTML = `<h4 class="expired"> Sorry , this giveaway has expired </h4>` ;
}


}

let countdown = setInterval(getRemainingTime, 1000) ;

getRemainingTime() ;