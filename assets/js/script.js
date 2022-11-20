// The start and end time of the calendar can be changed according to what you want to add
// Variables are not fixed
// Variables refer from six o'clock to seven o'clock

var diaryTime = {
    startTime: 6,
    endTime: 17,
}


function CalendarTime {
    
   var CalendarTime = ('.container');
   var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
   console.log(currentDay);
}


// The colors change according to the temporal variables between the dying, the past and the future


function hours() {
    Today();
    setInterval(Today);
    
    var hour = $(element).attr("hour");
    
    if (hour === now) {
        $(this).next().addClass("present");
        
        
    }else if (hour < now) {
        $(this).next().addClass("past");
        
        
    }else if (hour > now) {
        $(this).next().addClass("future");
    }
};

//Save buttum locale function

    $(".saveBtn").click(function () {
        var value = $(this).siblings().val();
        var time = $(this).parent().attr().split();
    });