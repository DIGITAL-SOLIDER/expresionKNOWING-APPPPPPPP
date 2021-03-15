function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k9B-rpRMo/model.json",loded);
}

function draw()
{
    image(webcam,0,0,300,300);
    classifier.classify(webcam,gotbanana);
}

function loded()
{
    console.log("banana");
}

function gotbanana(error,resultbanana)
{
    if(error)
    {
        console.log(error);
    }else
    {
        console.log(resultbanana);
        document.getElementById("hf").innerHTML = resultbanana[0].label;
        document.getElementById("hf_2").innerHTML = resultbanana[0].confidence.toFixed(2);
    }
}
