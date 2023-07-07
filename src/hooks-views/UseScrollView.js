import useScroll from "../hooks/useScroll";

function UseScrollView() {
    const {y} = useScroll();
    return (
      <div style={{height:"1000vh"}}>
        <h3>UseScroll - 유저가 스크롤 해서 무언갈 지나쳤을 때 색상을 바구거나 무엇이든지 이벤트를 할 수 있음</h3>
        <h1 style={{position: "fixed" ,color: y > 100 ? "red" : "blue"}}>Hi</h1>
      </div>
    );
}

export default UseScrollView;