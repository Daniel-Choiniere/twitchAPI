/* global $ */
// run our JQUERY
$(document).ready(function(){
    
    let profiles = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    // FREE CODE CAMP STREAM INFO AND STATUS API CALL
     let url= "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
     $.getJSON(url,function(data1){
         if(data1.stream === null) {
             $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
         }else{
            $("#fccStatus").html("Free Code Camp is currently ONLINE");
         }
    });
    let profileURL = "https://wind-bow.glitch.me/twitch-api/users/";
    for (let i=0; i <profiles.length; i++) {
        $("#userProfile").html((profileURL + profiles[i]));
    }
})