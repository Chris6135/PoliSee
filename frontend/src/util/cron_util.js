const cron = require('node-cron')
let scheduleInterval = "* * * * *" 
//this is how cron reads datetime. 
//editing this will allow our chon to build a new schedule. 



//this function doesn't take in any arguments. Its prebuilt to set the 
//schedule to once per day. The number represents how many hours until
//the schedule is hit. 

export const perDay = (interval = 23) =>{
    let scheduleInterval = "* * * * *" 
    let newInterval = scheduleInterval.split(' ')
    newInterval[1] = interval
    return newInterval.join(' ')
} 

//as is, schedules for every monday. 
//days increment, 7 is sunday. 
export const perWeek = (interval = 1) =>{
    let scheduleInterval = "* * * * *" 
    let newInterval = scheduleInterval.split(' ')
     newInterval[4] = interval
     return newInterval.join(' ')
 } 

 //this sets a schedule on the first day of every month.
 //changing the interval just changes which day. 
 //i.e. interval = 4 would be the fourth of every month. 
 export const perMonth = (interval = 1) =>{
    let scheduleInterval = "* * * * *" 
    let newInterval = scheduleInterval.split(' ')
     newInterval[2] = interval
     return newInterval.join(' ')
 } 



 //this presets sets the schedule to every sunday in august and november
 //passing in the months as a string and the days of the week as a sting 
 //will set the scheduled to run every listed day within that month. 
 export const weeklyByMonth= (month = 'August, November', day="Sunday") =>{
    let scheduleInterval = "* * * * *" 
    let newInterval = scheduleInterval.split(' ')
    newInterval[3] = month
    newInterval[4] = day
    return newInterval.join(' ')
 }


 //this workflow should be used to build the schedule for the user
 // in the backend. 
 //to my knoweldge as soon as the cron schedule is built is will start running until explictly stopped or destoryed. 
 //this means as long as we keep our heroku app live, theoretically this should keep to the schedule. 


 let schedule = null 
 // set this to a prop in the user. This way we can turn off the schedule. 
 // you can also refactor to push mutiple schedule crons into an array 
 //just so long as we can access the schedule again to turn it off. 



 const cronBuilder = (time)=> {
   schedule = cron.schedule (`${perDay()}`, ()=>{
    console.log('chron builder works')
 })
}

// this function builds a chron schedule using one of the preset interval times above. 
//just change out the perDay interpolation with whatever schedule interval is apporpriate, then
// replace the console.log with the function you want to run (in our case sending an email)


////schedule will become the chron object which can be controlled with the chron specitic methods
// schedule.stop() this will stop the chron scheduled coundown.
//schedule.start() this will start the countodwn back up as if you just made it
//schedule.destroy() this will completely destroy the countdown, stopping it in the process. 
