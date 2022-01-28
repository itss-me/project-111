prediction1 = "";
prediction2 = "";

Webcam.set({
  width : 350 ,
  height : 300 ,
  image_format:'png',
  png_quality:90
});

   camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured" src="captured_image" src="+data_uri+"/>';
    })
}

console.log('ml5 version:' ,ml5.version );

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/azCpqRJu9/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = windows.speechSynthesis;
    speak_data_1 = "The first predicition is"+prediction_1;
    speak_data_2 = "And the second predicition is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speech_data_2);
    synth.speak(utterThis);
}