let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Time to chill baby!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Beat the laziness!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Tacoooooo tuuuuesday';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Two more days to the weekend!!';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'The weekend is almost here...';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time to get wasted!';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;