let inputNumber = window.document.getElementById("inputNumber"); // 숫자 입력창
let figureDiv = window.document.getElementById("figure-div"); //도형생성 존 
let bubbleBtn = window.document.getElementById("bubble-btn"); //버블정렬 버튼
let selectBtn = window.document.getElementById("select-btn"); //선택정렬 버튼
let insertBtn = window.document.getElementById("insert-btn"); //삽입정렬 버튼




// 숫자 입력 할 때 마다 배열로 치환 메소드
const printValue = () => { 
    
    inputValueArr = JSON.parse("[" + inputNumber.value +"]"); //입력값 배열로 치환 입력값 체크를위해 전역변수 선언

    console.log(inputValueArr); 
    

};

const start = () => {
    printValue(); // 입력값 체크를 위해 메소드 호출

    if(inputValueArr[0] == null) { //입력값 없을시 값 입력하고 포커싱
        alert('값을 입력하세요');
        inputNumber.focus(); 
        return;
    }
    
    setFigure(); // 입력값 있으면 도형 생성
    inputNumber.value =''; // 숫자입력창 초기화
    bubbleBtn.disabled = false; // 도형 생성하면 정렬버튼 활성화
    selectBtn.disabled = false; // 도형 생성하면 정렬버튼 활성화
    insertBtn.disabled = false; // 도형 생성하면 정렬버튼 활성화
};
    
    
// 도형 생성 메서드
const setFigure = () => {
    
    for(let i = 0;i<inputValueArr.length;i++){ 
        let newFigure = document.createElement("div"); // div요소를 생성 한다.
        figureDiv.appendChild(newFigure).classList.add("figure-style"); // 도형생성
        newFigure.innerText=inputValueArr[i]; // 도형에 입력값 을 표시
    }

};

// 도형 제거 메서드
const removeFigure = () => {  
    for(let i = 0;i<=inputValueArr.length;i++){ 
        figureDiv.removeChild(figureDiv.firstChild);
    }
};

//버블정렬
const bubbleSort = () => {
    removeFigure(); // 정렬전에 기존에 만든 도형 제거
    for (let i = 0; i < inputValueArr.length - 1; i++) {
        for (let j = 0; j < inputValueArr.length - i; j++) {
          if (inputValueArr[j + 1] < inputValueArr[j]) {
            let temp = inputValueArr[j];
            inputValueArr[j] = inputValueArr[j + 1];
            inputValueArr[j + 1] = temp;
          }
        }
      }
    setFigure();
};