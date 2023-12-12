dayjs.extend(window.dayjs_plugin_advancedFormat)

var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd MMMM  Do'));

var currentHourBlock; 
// past, present & future
var currentTime = dayjs();
console.log('Current Time:', currentTime.format('HH:mm:ss'));

function hourTrackerColor() {
    var currentHour = dayjs().hour();
    console.log('Current Hour: ' + currentHour); // getting the current hour

    // looping over each timeblock
    $('.time-block').each(function() {
        currentHourBlock = parseInt($(this).attr('id').split('-')[1]);
        console.log('current hour block: ' + currentHourBlock);

        if (currentHourBlock < currentHour) {
            $(this).addClass('past')
        } else if (currentHourBlock === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass("past");
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}
hourTrackerColor ();

// allowing the user to enter an event when they click a timeblock
// saving to local storage

const saveBtn = $('.saveBtn');


saveBtn.on('click', function() {
    // event.preventDefault();
    console.log('i am clicked');
    
    const text = $(this).siblings('.background').val();
    var item = $(this).parent().attr('id');
    localStorage.setItem(item, text);

    console.log($(this).siblings('.background').val());
    console.log($(this).parent().attr('id'));
    
    alert ('saved to local storage');
});



for (var i=9; i < 17; i++) {
    $('#hour-'+i +' .background').val(localStorage.getItem('hour-' +i));
}


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