import useFadeIn from "../hooks/useFadeIn";

function UseFadeInView() {
  const fadeInH1 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(2, 2);

  return (
    <div>
      <h3>useFadeIn - 하나의 element를 가지는데 자동으로 서서히 나타나게 만듬</h3>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalala</p>
    </div>
  );
}

export default UseFadeInView;