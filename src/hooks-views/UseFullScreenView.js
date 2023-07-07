/* eslint-disable jsx-a11y/alt-text */
//import imges from "../img/1.jpg";
import useFullscreen from "../hooks/useFullScreen";

function UseFullScrollView() {
    const onFullS = isFull => {
        console.log(isFull ? "full 스크린 true" : "exit full 스크린 false");
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFullS); 
    return (
      <div ref={element}>
        <h3>UseFullScroll - 이미지 fullscreen... </h3>
        <img src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize"></img>
        <button onClick={triggerFull}>full screen</button>
        <button onClick={exitFull}>exit full screen</button>
      </div>
    );
}

export default UseFullScrollView;