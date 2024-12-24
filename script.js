const container = document.querySelector('.container');
let count = 50;


for(var i = 0; i < 50; i++){
    let snowWidth = Math.floor(Math.random() * container.clientWidth);
    let snowHeight = Math.floor(Math.random() * container.clientHeight);
    let snowSize = Math.floor(Math.random() * 50);
    let snowTime = Math.floor((Math.random() * 5) + 5);
    let snowBlur = Math.floor(Math.random() * 5);


    let div = document.createElement('div');
    div.classList.add('snowflake');
    console.log(div);


    div.style.top  = snowHeight + 'px';
    div.style.left = snowWidth + 'px';
    div.style.width = snowSize + 'px';
    div.style.height = snowSize + 'px';
    div.style.animationDuration = snowTime + 's';
    div.style.filter = "blur(" + snowBlur + "px)";


    container.appendChild(div);
}

