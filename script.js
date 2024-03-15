document.getElementById("calculate").onclick=function(){
    let bill=parseFloat(document.getElementById("bill").value);
    let paid=parseFloat(document.getElementById("paid").value);
    var noofnotes=document.querySelectorAll(".no-of-notes");
    let arr=[2000,500,100,20,10,5,1];
    if(paid<bill){
        document.getElementById("demo").textContent="Amount paid is less than bill";
    }
    else if(paid==bill)  document.getElementById("demo").textContent="Amount paid is equal to bill";
    else{
        document.getElementById("demo").textContent="";
        let remain=paid-bill;
        for(var i=0;i<arr.length;i++){
            const paisa=Math.trunc(remain/arr[i]);
            remain=remain%arr[i];
            noofnotes[i].innerText=paisa;
        }

    }
}