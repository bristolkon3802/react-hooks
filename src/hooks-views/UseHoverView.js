import { useState } from "react";
import useHover from "../hooks/useHover";

function UseHoverView() {
  const [log, setLog] = useState("");
  const onHover = () => {
    setLog("mouse entered");
    setTimeout(() => setLog("wait..."), 1000);
  };
  const hoverItem = useHover(onHover);

  return (
    <div>
      <h3>useHover - useClick과 비슷하나 이벤트 리스너에 mouseenter로 설정</h3>
      <span ref={hoverItem}>Hover me</span>
      <div>{log}</div>
    </div>
  );
}

export default UseHoverView;