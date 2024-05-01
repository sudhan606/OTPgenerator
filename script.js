let val=document.querySelector("#digit");
let btn=document.querySelector("button");
let load=document.querySelector(".load");
let otp=document.querySelector(".otpclass");
let code;
//console.log(otp.childNodes)
btn.addEventListener("click",()=>{
    btn.innerText="Generating...";
    btn.disabled=true;
    otp.style.display="none";
    load.style.display="block";
    otp.childNodes[1].style.color="#E3FEF7";
    otp.childNodes[1].innerText="Your OTP is:";
    setTimeout(()=>{
        otp.style.display="block";
        load.style.display="none";
        btn.innerText="Generate Again";
        btn.disabled=false;
        let o=gen();
        //console.log(o);
        otp.childNodes[3].innerText=`${o}`;

    },3000);
})
const gen=()=>{
    if(val.value==4)
    {
        code=Math.floor((Math.random())*10000)
        if(digitcheck(code)!==4)
        {
            return ("0"+code);
        }
        else
        return code;
    }
    if(val.value==5)
    {
        code=Math.floor((Math.random())*100000)
        if(digitcheck(code)!==5)
        {
            return ("0"+code);
        }
        else
        return code;
    }
    if(val.value==6)
    {
        code=Math.floor((Math.random())*1000000)
        if(digitcheck(code)!==6)
        {
            return ("0"+code);
        }
        else
        return code;
    }
    if(!val.value)
    {
        otp.childNodes[1].innerText="Error";
        otp.childNodes[1].style.color="red";
        return("Select Digits!!")
    }
}
const digitcheck=(d)=>{
    let r,sum,c=0;
    while(d!==0){
        d=Math.floor(d/10);
        c++;
    }
    return c;
}
