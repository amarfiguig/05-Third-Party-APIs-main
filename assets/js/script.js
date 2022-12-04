// The start and end time of the calendar can be changed according to what you want to add
// Variables are not fixed
// Variables refer from six o'clock to seven o'clock

var diaryTime = {
    startTime: 6,
    endTime: 19,
}


function CalendarTime () {
    
   var CalendarTime = $('.container');
   var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
   CalendarTime.text(currentDay);
    $('#CalendarTime').text(CalendarTime);
    
   cansole.log(currentDay);
}

function hourColumnRaw (){
    var hourcolumn = $('.container');
    var hourcolumn =$('.hour-column');
    var hourcolumnTime =$('.hour-column-time');

}


// The colors change according to the temporal variables between the dying, the past and the future


function hours() {
    var dateToday = Today();
    var now = dateToday.hour();
    
    setInterval(function() {
    
    var hour = $(element).attr("hour");
    
    if (hour === now) {
        $(this).next().addClass("present");
        
        
    }else if (hour < now) {
        $(this).next().addClass("past");
        
        
    }else if (hour > now) {
        $(this).next().addClass("future");
    }}, 10000);
};

//Save buttum locale function

    $(".saveBtn").click(function () {
        var value = $(this).siblings().val();
        var time = $(this).parent().attr().split();
    });
