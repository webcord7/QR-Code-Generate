let qrText = document.getElementById("qrText");9
let qrImage = document.getElementById("qrImage");
 let imgBox = document.getElementById("imgBox");

function GenerateCode(){
if(qrText.value.length > 0){

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="  + qrText.value;
    
    imgBox.classList.add("show-img");
}else{
    qrText.classList.add('error');
    setTimeout(()=>{
        qrText.classList.remove('error');
    },1000);
    
}
}