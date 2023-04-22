const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
        // We are setting a constant that is going to have our media stream data and we are waiting to assign that until the user has actually selected which screen or window they want to share. Then we are passing that media stream into our video object as its source object. Then when that video data has loaded its metadata, it's going to call a function that is going to play the video. 
    }catch(error) {
        // Catch Error Here
        console.log('whoops, error: ' + error); 
    }
}

button.addEventListener('click',async () => {
    //Disable the button
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset the button
    button.disabled = false;
});

//On Load
selectMediaStream();