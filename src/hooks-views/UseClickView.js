import useClick from "../hooks/useClick";

function UseClickView() {
    const sayHello = () => console.log("say hello~");
    const title = useClick(sayHello);
    return (
      <div>
        <h3>useClick - component 요소를 가져와서 click 시 function 실행</h3>
        <h3 ref={title}>Hi</h3>
      </div>
    );
}

export default UseClickView;