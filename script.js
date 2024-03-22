const qrText = document.getElementById("qrText");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage")


const generateQR = () => {
    if (qrText.value === "") {
        qrText.classList.add("error");
        // alert("Enter Text or URL")
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
    } else {
        qrImage.src = url + qrText.value;
        imgBox.classList.add("show-img");
    }
}

document.addEventListener("keydown" ,(e)=>{
    if(e.key === "Enter"){
        generateQR();
    }
})