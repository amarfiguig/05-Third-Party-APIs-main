// The start and end time of the calendar can be changed according to what you want to add
// Variables are not fixed
// Variables refer from six o'clock to seven o'clock

var diaryTime = {
    startTime: 6,
    endTime: 19,
}


function renderTime() {
    
   var CalendarTime = $('#CalendarTime');
   var currentDay = moment().format("dddd, MMMM , YYYY, HH:mm:ss");
   CalendarTime.text(currentDay);

//$('#CalendarTime').text(CalendarTime);

//CalendarTime = currentDay.getInstance();
//String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss");
//format(Calendar.getInstance();
//getTime());

   console.log(currentDay);
}

function hourColumnRaw (){
    var hourcolumn = $('#container');
    var hourcolumn =$('.hour-column');
    var hourcolumnTime =$('.hour-column-time');

}

function hourColumnRaw() {
    currentDay();
    setInterval(currentDay, 10000);

};


// The colors change according to the temporal variables between the dying, the past and the future

function hours() {

    
    setInterval(function() {
    
      $('.row').each(function(index,element) {

        var hourNow = moment().hour();
        var hour = $(element).attr("data-hour");

        if (hour === hourNow) {
            $(this).next().addClass('present');

        }else if (hour < hourNow) {
            $(this).next().addClass('past');

        }else if (hour > hourNow) {
            $(this).next().addClass('future');
        }

      }) 
   }, 10000);
};

//Save buttum locale function

    $(".saveBtn").click(function () {
        var value = $(this).siblings().val();
        var time = $(this).parent().attr().split();
    });

    renderTime();

    hours();
