let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
let string = `
/* 你好
 * 我将演示如何画一个太极
 * 首先准备一个div
 */
 
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*
 * 接下来吧div变成一个八卦，注意看好了
 * 首先把div变成一个圆
 */

#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgb(0,0,0,0.5);
    border:none;
}

/*
 *八卦是阴阳形成的
 *一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 * 加上两个阴阳鱼鱼眼
*/
#div1::before{
    width:100px;
    height:100px; 
    left:50%;
    top:0;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = "";
console.log("JS starts");
let step = () => {
    setTimeout(() => {
        if (n < string.length) {
            if (string[n] === "\n") {
                string2 += "<br>";
            }
            else if (string[n] === " ") {
                string2 += "&nbsp";
            }
            else {
                string2 += string[n];
            }
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            n += 1;
// 粗暴滚动到最底端 
            window.scrollTo(0,9999);
            html.scrollTo(0,9999)
            step();
        }

    }, 0)
}

step();


