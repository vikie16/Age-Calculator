const dobInput =document.getElementById("dob");
const CalculateBtn=document.getElementById("Calculator-btn");
const result1=document.getElementById("result");

CalculateBtn.addEventListener("click",function(){
    const dob= new Date(dobInput.value);
    const ageInMs=Date.now()-dob.getTime();
    const ageDate=new Date(ageInMs);
    const age=Math.abs(ageDate.getUTCFullYear()-1970);

    result1.innerHTML=`Your Current Age is ${age} years.`
});