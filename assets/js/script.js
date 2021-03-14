let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
let retrievedTaskList = JSON.parse(localStorage.getItem("taskList", taskList));

$("document").ready(function(){
    // display current day and time in p with #currentDay
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
    // save current time in a moment object 
    let currentTime = moment().format("H");
    // let currentTime = 12;
    console.log(`the current time is ${currentTime}`)

    
    function auditTask(){
        // select col and add class based on the time
        $(".task-block").each(function(){
            let timeId = $(this).parent().attr("id")
            console.log(timeId)
            if(timeId > currentTime){
                // add class .future for future hours
                $(this).addClass("future")
            } else if ( timeId == currentTime) {
                // add class .present for current hour
                $(this).addClass("present") 
            } else {
                // add class .past for past events
                $(this).addClass("past")
            }
        });
    }
    

    // reaudit the time values every 30mins
    setInterval(function(){
        auditTask()
    }, (1000 *60) * 10)

       
    // click function to add tasks
    $(".hour-row").on("click", ".saveBtn", function(){
        console.log("clicked")
        let hourId = $(this).parent().attr("id")
        console.log(hourId)
        //  create element to store text
        let textInput = $(this).prev(".task-block").val().trim();
        console.log(textInput)
        
        // store both values in a object
        let taskOb = {
            hour: hourId,
            task: textInput
        }
        // push object into the array
        taskList.push(taskOb)
        console.log(taskList)
        localStorage.setItem("taskList", JSON.stringify(taskList));
        // take in that input and save it to localStorage

    });
        
    $(".hour-row").each(function(){
        for(let i = 0; i < retrievedTaskList.length; i++){
            if($(this).attr("id") == retrievedTaskList[i].hour){
                let taskText = $(this).prev(".task-block").val(); 
                let taskContainer = $("<div>");                
                taskText = retrievedTaskList[i].task;
                $(this).children("textarea").append(taskText)
            };
        };
    });

    auditTask()
})

