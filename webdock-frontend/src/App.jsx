import Router from "./router/router";

import usePreferenceStore from "./stores/preferenceStore";

export default function App() {
  const { theme, setTheme, layout, setLayout} = usePreferenceStore(); //TODO: delete unused variables from the store
// TODO: update styling to conditionally swap light/dark
  return (
    <>
      <div className={`background ${theme === 'dark' ? 'background--dark' : ''}`}>
        <div>
          <Router />
        </div>
      </div>
    </>
  );
}
