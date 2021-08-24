import React from "react";

// 실습 : Student 컴포넌트 생성
// Student 컴포넌트에는 이름,나이,성별이 존재합니다.
// 3개의 Student 컴포넌트를 App 컴포넌트에서 호출하여 출력하시오.

function Student(props){
  return (
    <div>
      <h1>{props.std.name} / {props.std.age} / {props.std.gender}</h1>
    </div>
  );
}

function App() {
    const students = [{
      name : '홍길동',
      age : 20,
      gender : '남'
    },{
      name : '강감찬',
      age : 21,
      gender : '남'
    },{
      name : '김순자',
      age : 22,
      gender : '여'
    }];
    const element = [];
    students.map(std => element.push(<Student std={std}/>));
    return (
        <>
        {element}
        </>
    );
}


export default App;
