$("document").ready(function(){
    // display current day and time in p with #currentDay
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
    // save current time in a moment object 
    // let currentTime = moment().format("H");
    let currentTime = 12;
    console.log(`the current time is ${currentTime}`)

    
    // select col and add class based on the time
    $(".task-block").each(function(){
        let timeId = $(this).attr("id")
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
    // $(".task-block").on("click", function(){
    //     console.log("clicked")
    //     //  create element to store text
    //     let text = $(this).text().trim()
    //     // time blocked clicked needs to add a child element text area
        
        
    //     console.log(text)
    //     console.log(textInput)
       
    //     // take in that input and save it to localStorage
    //     // on blur takes input and makes it into a <p> element 
    //     $("span").replaceWith(textInput);
    //     textInput.trigger("focus");
    //     // exit edit when out of focus
    // })
        
    
    
})

