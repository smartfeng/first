let myButton = document.querySelector('button');
let head = document.querySelector('h1');

function setUserName(){
    let myName = prompt('输入你的名字');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        head.textContent = '你好，' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    head.textContent = '你好，' + storeName;
}

myButton.onclick = function(){
    setUserName()
}