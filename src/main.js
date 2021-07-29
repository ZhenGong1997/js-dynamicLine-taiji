let html=document.querySelector("#demo");
let style=document.querySelector("#style")
let n=0;
let string= `
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
        color:red;
}
`;
let string2=""

//用递归使setTimeout代替setInterval,好处：可以随时停下
let step = ()=>{
    setTimeout(()=>{
        if(n<string.length){
            //空行替换成html空行标签,空格替换成html空格，否则照搬
            // string2 += (string[n]==="\n") ? "<br>":string[n]; 
            if(string[n]==="\n"){
                string2+="<br>";
            }
            else if (string[n]===" "){
                string2+="&nbsp";
            }
            else{
                string2+=string[n];
            }
           
            html.innerHTML = string2;
            style.innerHTML = string.substring(0,n);
            n=n+1;        
            step();
        }             
    },50)   
}
step()
