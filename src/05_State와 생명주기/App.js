import React, { Component } from "react";
import reactDom from "react-dom";


function App() {
    // before
    const tick = ()=>{
      const element = (
        <div>
          <h1>Hello world</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
      reactDom.render(
        element, document.getElementById('root')
      );
    }

    // after : element 요소를 컴포넌트화
    // 문제점 : Clock 컴포넌트가 타이머를 설정하고 매초 UI를 업데이트
    // 하는것이 Clock의 구현 세부사항이 되어야 합니다. 
    // 즉, <Clock />와 같이 렌더링을 수행하여야 합니다.
    function Clock(props){
      return (
          <div>
            <h1>Hello world</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
          </div>
      );
    }

    const tick2 = ()=>{
      reactDom.render(
        <Clock date={new Date()}/>, document.getElementById('root')
      );
    }

    const tick3 = ()=>{
      reactDom.render(
        <Clock_class />, document.getElementById('root')
      );
    }

    setInterval(tick,1000);
    setInterval(tick2,1000);

    return (
        <>
        {
          //tick()
          //tick2()
          tick3()
        }
        </>
    );
}
// 함수에서 클래스로 변환
// 클래스에 로컬 state 추가
// 생명주기 메서드를 클래스에 추가
class Clock_class extends React.Component{
  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }

  // 컴포넌트가 마운트 된 후 실행
  // 여기서 state를 설정하면 재 렌더링이 발생됩니다.
  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(), 1000);
  }

  // 컴포넌트가 삭제되기 전에 호출됩니다.
  // 이 메서드 안에서 필수적으로 해제해야 하는 네트워크요청이나
  // DidMount에 작성된 DOM 요소 등을 해제합니다.
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date : new Date()
    });
  }

  render(){
    return (
      <div>
      <h1>Hello world</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}

// State 올바르게 사용하기
// 1. 직접 State를 수정하지 마시오
class Clock_class2 extends React.Component{
  constructor(props){
    super(props);
    // wrong
    // this.setState({
    //   count : this.state.counter + this.props.increment
    // });

    // correct
    this.setState((state, props)=>({
      counter : state.counter + props.increment
    }));
  }
}

// State 업데이트는 병합됩니다.
// setState()를 호출할 때 React는 제공한 개겣를 현재 state로 병합니다.
class Clock_class3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts : [],
      comments : []
    };
  }

  // componentDidMount(){
  //   fetchPosts().then(response =>{
  //     this.setState({
  //       posts : response.posts
  //     });
  //   });
  //   // this.setState({comments})는 this.state.posts에
  //   // 영향을 주지 않고 comments만 대체된다.
  //   fetchComments().then(response=>{
  //     this.setState({
  //       comments : response.comments
  //     });
  //   });
  // }
}
export default App;
