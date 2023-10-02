
console.log("i have been injected - contentjs")
var recorder = null
let chunks =[]
const onAccessApproved=(stream)=>{
    recorder = new MediaRecorder(stream)

    recorder.start();
console.log("i have been injected - contentjs")
// var recorder = null

const onAccessApproved=(stream)=>{
    recorder = new MediaRecorder(stream)

    recorder.start();

    recorder.onstop = function(){
        stream.getTracks().forEach(function(track){
            if(track.readyState ==='live'){
                track.stop()
            }
        })
    }
    
    recorder.ondataavailable = function(event){
        chunks.push(event.data)
        // const blobs = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
    // const blobUrl = window.URL.createObjectURL(blobs);
        let recordedBlob = event.data;
        let url = URL.createObjectURL(recordedBlob)

        let a = document.createElement("a")
        a.style.display= 'none'
        a.href = url
        a.download = "screen-recording.webm"

        document.body.appendChild(a)
        a.click()

        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if(message.action === 'request_recording'){
        console.log('requesting recording')

        sendResponse(`processed: ${message.action}`)

        navigator.mediaDevices.getDisplayMedia({
            audio: true, video: true
        }).then((stream)=>{
            onAccessApproved(stream)
        })
    }
})
    recorder.onstop = function(){
        stream.getTracks().forEach(function(track){
            if(track.readyState ==='live'){
                track.stop()
            }
        })
    }
    
    recorder.ondataavailable = function(event){
        let recordedBlob = event.data;
        console.log(recordedBlob)
        let url = URL.createObjectURL(recordedBlob)
        console.log(url)
        uploadVideo(recordedBlob)
        let a = document.createElement("a")
        a.style.display= 'none'
        a.href = url
        // a.download = "screen-recording.webm"

        document.body.appendChild(a)
        // a.click()

        document.body.removeChild(a)
        // URL.revokeObjectURL(url)
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if(message.action === 'request_recording'){
        console.log('requesting recording')

        sendResponse(`processed: ${message.action}`)

        navigator.mediaDevices.getDisplayMedia({
            audio: true, video: true
        }).then((stream)=>{
            onAccessApproved(stream)
        })
    }
})


async function uploadVideo(videoBlob) {
    console.log('upload video')
    const generateRandomText =()=> {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = () => numbers[Math.floor(Math.random() * numbers.length)];
    return [randomLetter(), randomNumber(), randomLetter(), randomNumber(), randomLetter(), randomNumber()].join('');
}
    const randomText = generateRandomText()
    let videoName =`video${randomText}`
    console.log(videoName)
  try {
    const formData = new FormData();
    formData.append('video', videoBlob, `${videoName}.mp4`);
    console.log('uploading...')
    const response = await fetch('https://chrome-ext-server.onrender.com/api/hng/uploadfile', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
        console.log('succesfull!')
      const data = await response.json();
      console.log(data.message); // Output: File uploaded successfully
      const redirect =document.createElement('a')
      redirect.href= `https://emmy-hng-task-five.vercel.app/video/${videoName}`
      redirect.setAttribute('target', '_blank')
      document.body.appendChild(redirect)
      redirect.click()
      document.body.removeChild(redirect)
    } else {
      console.error('Failed to upload video:', response.statusText);
      console.log(response)
    }
  } catch (error) {
    console.error('Error uploading video:', error);
    console.log(error)
  }
}




  let controlsContainer = document.createElement("div");
  controlsContainer.style.display = "flex";
  controlsContainer.style.gap = "1rem";
  controlsContainer.style.alignItems = "center";
  controlsContainer.style.minWidth = "400px";
  controlsContainer.style.backgroundColor = "#141414";
  controlsContainer.style.borderRadius = "100vh";
  controlsContainer.style.paddingBlock = "0.5rem";
  controlsContainer.style.justifyContent = "space-evenly";
  controlsContainer.style.position = "fixed";
  controlsContainer.style.bottom = "5%";
  controlsContainer.style.left = "5%";
  let time = document.createElement("div");
  let timeP = document.createElement("p");
  let timeSpan = document.createElement("span");
  time.style.display = "flex";
  time.style.alignItems = "center";
  time.style.gap = "1rem";
  timeP.style.fontWeight = "500";
  timeP.style.fontSize = "1.25rem";
  timeP.style.fontFamily = "Inter";
  timeP.style.color = "#fff";
  timeP.textContent = "00:03:35";
  timeSpan.style.height = "8px";
  timeSpan.style.width = "8px";
  timeSpan.style.backgroundColor = "red";
  timeSpan.style.borderRadius = "50%";
  time.appendChild(timeP);
  time.appendChild(timeSpan);
  controlsContainer.appendChild(time);
  let controlItemsContainer = document.createElement("div");
  controlItemsContainer.style.display = "flex";
  controlItemsContainer.style.alignItems = "center";
  controlItemsContainer.style.gap = "1rem";
  controlItemsContainer.style.borderLeft = "1px solid #E8E8E8";
  controlItemsContainer.style.paddingLeft = "1rem";
  document.body.appendChild(controlsContainer);
  const controlItem1 = createControlItem("Pause", "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166602/Icons/ae3ufl4s59dy7tvh0tsb.png");
  const controlItem2 = createControlItem("Stop", "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166664/Icons/gj2gn1upqjimsgv2j8cz.png");
  const controlItem3 = createControlItem("Camera", "https://res.cloudinary.com/dzsomaq4z/image/upload/v1696166781/Icons/cawunk9gdd9yfnnvlnei.png");
  controlItemsContainer.appendChild(controlItem1);
  controlItemsContainer.appendChild(controlItem2);
  controlItemsContainer.appendChild(controlItem3);
  function createControlItem(labelText, imgUrl) {
    const controlItem = document.createElement("div");
    //   controlItem.className = "controlItem";
    controlItem.style.display = "flex";
    controlItem.style.alignItems = "center";
    controlItem.style.gap = ".3rem";
    //   controlItem.style.paddingLeft = "1rem";
    controlItem.style.flexDirection = "column";
    const button = document.createElement("button");
    button.style.borderRadius = "50%";
    button.style.display = "grid";
    button.style.placeContent = "center";
    button.style.backgroundColor = "#fff";
    button.style.border = "none";
    button.style.height = "30px";
    button.style.width = "30px";
    const img = document.createElement("img");
    img.style.height = "15px";
    img.style.objectFit = "contain";
    img.src =imgUrl;
    // img.src = "/assets/" + labelText.toLowerCase() + ".svg";
    button.appendChild(img);
    const label = document.createElement("small");
    label.style.fontFamily = "Work Sans";
    label.style.fontWeight = "500";
    label.style.fontSize = "0.75rem";
    label.style.color = "#fff";
    label.textContent = labelText;
    controlItem.appendChild(button);
    controlItem.appendChild(label);
    return controlItem;
  }

    controlsContainer.appendChild(controlItemsContainer);