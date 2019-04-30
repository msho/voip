
window.onload = function(){
    var dAudio = getAudioComp();
    setAudioSteam(dAudio);
}

function getAudioComp(){
    var arrdAudios = document.getElementsByTagName('audio');
    return arrdAudios && arrdAudios[0];
}

function setAudioSteam(dAudio){
    //get audio stream
    navigator.getUserMedia({audio: true}, 
        function(stream){
            // ok
            console.log(stream);
            
            console.log('***Printing tacks***');
            stream.getTracks().forEach(track => console.log(track));
            console.log('***finish printing tacks***');

            //set audio stream to component
            if (dAudio)
                dAudio.srcObject = stream;
        },
        function(err) {
            console.log(err);
        }
    ) //get user media
}
