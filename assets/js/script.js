let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
let retrievedTaskList = JSON.parse(localStorage.getItem("taskList", taskList));

$("document").ready(function(){
    // display current day and time in p with #currentDay
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
    // save current time in a moment object 
    // let currentTime = moment().format("H");
    let currentTime = 12;
    console.log(`the current time is ${currentTime}`)

    
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
    })
    // Question: How does this get re-evaluted? on page refresh?
    // Question: it doesn't seem like moment returns a number? does it return a string? === does not work .... can I parseInt??
       
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
                let taskText = $(this).prev(".task-block").val() 
                taskText = retrievedTaskList[i].task
                $(".hour-row").child(".task-block").append(taskText)
                // console.log(retrievedTaskList[i].hour)
                // console.log($(this).attr("id"))
                // console.log(retrievedTaskList[i].task)
            }
        }
        
        
    })
    console.log(retrievedTaskList)
})

