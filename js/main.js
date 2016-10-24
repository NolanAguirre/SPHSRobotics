var header = document.getElementById("fixed-header");
window.addEventListener('scroll', function(){
    if(window.scrollY > 450){
        header.style = "top:0px;"
    }else{
        header.style = "top:-100px"
    }
})
