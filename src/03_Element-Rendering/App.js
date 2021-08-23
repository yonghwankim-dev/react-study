function App(){
    // React 엘리먼트는 일반 객체이며 쉽개 생성 가능
    // React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트 수행
    const element = <h1>Hello, world</h1>

    // DOM에 엘리먼트 렌더링하기
    // index.html 파일에 <div id="root"></div> 태그 요소가 존재합니다.
    // index.js에서 App.js의 내용을 렌더링하여 index.html 파일의 <div id="root"></div>
    // 태그에 렌더링합니다.
    // const element = <h1>Hello, world</h1>
    // ReactDom.render(element, document.getElementById("root")) => 초기 앱 생성시 index.js에 위치
    
    // 렌더링 된 엘리먼트 업데이트하기
    // React 엘리먼트는 불변객체입니다. UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고
    // 다시 ReactDOM.render() 메서드를 호출하여 새롭게 렌더링하는 방법뿐이다.
    const tick = ()=>{
        const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        return element;
    }

    return (    
        <>
        {tick()}
        </>
    );
}

export default App;
