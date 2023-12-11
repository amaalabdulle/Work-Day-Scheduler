dayjs.extend(window.dayjs_plugin_advancedFormat)

var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMMM  Do'));

// past, present & future
var currentTime = dayjs();
console.log('Current Time:', currentTime.format('HH:mm:ss'));

function hourTrackerColor() {
    var currentHour = dayjs().hour();
    console.log(currentHour); // getting the current hour

    // looping over each timeblock
    $('.time-blocl').each(function() {
        var currentHourBlock = parseInt($(this).attr("id").split("-")[1]); // dont get this much

        if (currentHourBlock < currentHour) {
            $(this).addClass('past');
        } else if (currentHourBlock === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}

hourTrackerColor ();

// allowing the user to enter an event when they click a timeblock

// saving to local storage

const saveBtn = $('.saveBtn');


saveBtn.on('click', function() {
    event.preventDefault();
    console.log('i am clicked');
    const text = $('textarea').val;
    const item = 'hour: ' + hourCurrent; // will not work untill this is defined
    localStorage.setItem(item, text);

    alert ('saved to local storage');
});




// const localStorageData = [{
//     date: today,
//     data: {
//         9:'text at 9AM',
//         10:'text at 10AM',
//         11:'text at 11AM',
//         12:'text at 12PM',
//         13:'text at 13PM',
//         14:'text at 14PM',
//         15:'text at 15PM',
//         16:'text at 16PM',
//         17:'text at 17PM',
//     },
// }];

// const today = dayjs().format('DD-MM-YYYY');
// const todayDate = localStorageData.find(function(element) {
//     return element.date === today;
// });