const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event){
    event.preventDefault();    // 브라우저의 기본동작을 막아줌 (새로고침 저지)
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    paintGreeting(username);

}

function paintGreeting(username){
    greeting.innerText = `반가워요 ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


function handleLinkClick(event){
    alert("넘어갑니다잇!");
}


// function onLoginBtnClick(){
//     const usrname = loginInput.value;
//     //console.log(usrname);
//     if(usrrname === ""){
//         alert("이름을 입력해주세요");
//     }else if(usrname.length>15){
//         alert("이름이 너무 길어요...")
//     }
// }


//event
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click",handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}