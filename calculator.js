/*let str="";
let buttons=document.querySelectorAll('.button');
let mod=document.getElementById('mod');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.innerHTML=='C')
        {
            str="";
            document.querySelector(".input").value=str;
        }
        else if(event.target.innerHTML=='=' && (str.includes('x') || str.includes('÷') || str.includes('+') || str.includes('–')))
        {
            str=str.replace('x','*');
            str=str.replace('÷','/');
            str=str.replace('+','+');
            str=str.replace('–','-');
            str=eval(str);
            document.querySelector(".input").value=str;
        }
        
        else{
            str=str+event.target.innerHTML;
            document.querySelector(".input").value=str;
        }
    })
})


function fact()
{
    let f=1;
    let num=document.querySelector(".input").value;
    for(let i=1;i<=num;i++)
    f=f*i;
    str=str+f;
    document.querySelector(".input").value=f;
}*/

var input = document.querySelector('.input');
var btn = document.querySelectorAll('.button');
for (item of btn) 
{
    item.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'x') 
    {
        input.value=input.value+"*";
    }

     if (e.target.innerHTML == '÷') 
     {
        input.value=input.value+"/";
    }
    if (e.target.innerHTML == '–') 
     {
        input.value=input.value+"-";
    }
    if(e.target.innerHTML=='C')
    input.value="";
    //if(btntext!='=' && btntext!='C')
    if (e.target.innerHTML != '=' && e.target.innerHTML != 'C' && e.target.innerHTML != 'x' && e.target.innerHTML != '÷' && e.target.innerHTML != '–' && e.target.innerHTML != 'Del' && e.target.innerHTML != 'sin'
    && e.target.innerHTML != 'tan' && e.target.innerHTML != 'cos' && e.target.innerHTML != 'log' && e.target.innerHTML != 'n!' && e.target.innerHTML != 'abs')
    input.value=input.value+e.target.innerHTML;
});
}

function sin() {
    input.value = Math.sin(input.value);
}

function cos() {
    input.value = Math.cos(input.value);
}

function tan() {
    input.value = Math.tan(input.value);
}

function sqrt() {
    input.value = Math.sqrt(input.value, 2);
    }

function log() {
    input.value = Math.log(input.value);
}

function fact() 
{
    var i, num, f;
    f = 1
    num = input.value;
    for (i = 1; i <= num; i++) 
    {
        f = f * i;
    }

    i = i - 1;

    input.value = f;
}

function backspace() {
    input.value = input.value.slice(0, input.value.length - 1);
}

function abs()
{
    input.value=Math.abs(input.value);
}
