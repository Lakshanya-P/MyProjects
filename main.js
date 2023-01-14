var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);

   if (content=="take my selfie"){
    speak();
   }

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data="Taking Your Selfie in 5 Seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(
        function()
        {
            take_snapshot1();
        },5000);

        setTimeout(
            function()
            {
                take_snapshot2();
            },10000);
            setTimeout(
                function()
                {
                    take_snapshot3();
                },15000);
}

camera=document.getElementById("camera");

Webcam.set({width: 360, height:250, image_format:"png", png_quality:90});

function take_snapshot1(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
    } );
}

function take_snapshot2(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML= '<img id="selfie_image1" src="'+data_uri+'">';
    } );
}

function take_snapshot3(){
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML= '<img id="selfie_image2" src="'+data_uri+'">';
    } );
}



