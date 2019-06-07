const fetch = require('node-fetch');

exports.run = async (client, message, lastIndex) => {

    function randomIndex() {return Math.round(Math.random() * (gachiData.length-1));} 

    const gachiData = [
        "AAAAAHHHHHH",
        "Fucking slaves.. Get your ass back here!",
        "SUCTION!",
        "**assClap**",
        ":gachiBASS: YO FORSEN WHATS UP ITS ME BILLY HARRINGTON, ANIKI. :gachiBASS: JUST GOT OFF A PLANE FROM GREECE, ITS WHY IM A LITTLE SUNTANNED RIGHT NOW. :gachiBASS:  JUST WANTED TO WISH YOU A HAPPY BIRTHDAY BUDDY. TAKE CARE!:gachiBASS:",
        "What the hell do you boys think that this here is, fucking Fairyland? Pulling on your wee-wees like a pack of fucking fruits?",
        "Let us remember these timeless words: Ass♂we♂can.",
        "I want to tell all my fans at Nico Nico to live their life without any judgments, and be adventurous. When opportunity comes, put work into your faith, and don't be afraid to go out and live life. Whatever your sexuality is - gay, straight, boy, girl - go have fun. That's what life is all about. And live a life of yugamineena.",
        "Yeah, it certainly is cum alright, atleast it smells like it."
    ];
    
    var index = randomIndex()
    
/*     console.log("--------------------")
    console.log(lastIndex)
    console.log(index) */

    if (lastIndex != null) {
        if (index == lastIndex) {
            index = randomIndex()
            console.log(`Index changed to ${index}!`)}}

    message.channel.send(gachiData[index])
            
    return index;

};

exports.help = {
    name: "gachi"
};