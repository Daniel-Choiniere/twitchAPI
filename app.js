// run our JQUERY
$(document).ready(function(){
    // FREE CODE CAMP STREAM INFO AND STATUS API CALL
     var url= "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
     $.getJSON(url,function(data1){
         if(data1.stream === null) {
             $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
         }else{
            $("#fccStatus").html("Free Code Camp is currently ONLINE");
         }
    });
    var followerURL = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/" 
    
})