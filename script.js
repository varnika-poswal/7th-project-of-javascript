function boxcontainer(name){
    var x;
    x=document.getElementByIdClassName("container");
    for(var i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(name).style.display="block";
}