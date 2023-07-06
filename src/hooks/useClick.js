import { useEffect, useRef } from "react";

/* 
  useClick을 사용해서 useRef()를 만들고,
  같은 reference를 return 해준다.
  그리고 주어진 reference를 title에 준다.
  이렇게 되면 상호작용을 할 수 있는 상태가 된다.
  useEffect에서 할일은 reference안에 element.current가 있는지 확인하는거다.
  그리고 조건이 만족되면 Click 이벤트를 부여한다.
*/
const useClick = (onClick) => {
    const element = useRef();
    
    useEffect(() => {
        if (typeof onClick !== "function") {
        return ;
        }

        const current = element.current;
        if (current) {
            current.addEventListener("click", onClick);
        }
        return () => {
            if (current) {
                current.removeEventListener("click", onClick);
            }
        };
    });
    return element;
};
  
export default useClick;