function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nEMiMc6Z7/model.json", modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img1=document.getElementById("alien1");


        if(results[0].label=="meow"){
            img1.src="cat.gif";
        }
        
        else if(results[0].label=="Barking"){
            img1.src="dog.gif";

        }

        else if(results[0].label=="roar"){
            img1.src="lion.gif";
    
        }

        else{
            img1.src="ear.png";
        }

    }
}