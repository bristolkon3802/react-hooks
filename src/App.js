import useBeforeLeave from "./hooks/useBeforeLeave";
import UseTabView from "./hooks-views/UseTabView";
import useTitle from "./hooks/useTitle";
import useFadeIn from "./hooks/useFadeIn";

export default function App() {
  // useTitle
  const titleUpdater = useTitle("Loading...");
  // useBeforeLeave
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);

  const fadeInH1 = useFadeIn(2, 2);

  return (
    <div>
      <div>
        <h1 {...fadeInH1}>Hello</h1>
      </div>
      <h1>Custom hook examples</h1>
      <div>
        <UseTabView onTabChanged={titleUpdater} />
      </div>
    </div>
  );
}