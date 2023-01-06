const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
                // = document.querySelector("#login-form input")
const link = document.querySelector("a");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="userNameKey";

function loginSubmit(event){ // preventdefault하기 위해 첫번째 인자에 식별자를 붙였을 뿐
        
    event.preventDefault(); // form(&submit)은 새로고침이 기본값이기 때문
    
    //css로 hidden class는 안 보이게 설정

    loginForm.classList.add(HIDDEN_CLASSNAME); 
        //로그인폼에 hidden클래스 지정
    const userName = loginInput.value; //value: input text 안에 써진 값
    localStorage.setItem(USERNAME_KEY,userName); // 이름 저장하기

    paintGreetings(userName);

    // TODO LIST도 보이게 하자
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);

}

function paintGreetings(name){
    greeting.innerText = `Hello, ${name}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME); 
        // hidden제거-->보이게
}
// ========= 화면실행 ==========
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null){ // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
            // 로그인폼에서 hidden 삭제 --> 보이게

    // form 이기 때문에 click이 아닌 submit 감지하는 event 사용
    loginForm.addEventListener("submit",loginSubmit); // 이제 로그인 함수 실행 (위에)

} else { // show the greetings
    paintGreetings(savedUserName);
}
