// password check
function passwordCheck(){
    var pswd = document.getElementById('pswd')
    if(pswd.value.length < 8){
        pswd.style.backgroundColor = `rgba(255,0,0,0.15)`
    }
    else{
        pswd.style.backgroundColor = `rgba(0,255,0,0.15)`
    }
}

// formatvalue
function formatValue(id){
    var element = document.getElementById(id)
    element.value = element.value[0].toUpperCase() + element.value.slice(1)
}