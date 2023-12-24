import { Button, Text } from "tugcebutton";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <Button text="Primary Button" type="primaryButton" />
      <Button text="Default Button" type="defaultButton" />
      <Button text="Dashed Button" type="dashedButton" />
      <Button text="Text Button" type="textButton" />
      <Button text="Link Button" type="linkButton" />
    </div>
  );
}

export default App;
