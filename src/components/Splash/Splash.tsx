import { forwardRef, PropsWithoutRef, Ref } from "react";
import logo from "./logo.svg";
import "./Splash.css";

export interface SplashProps {
  ref?: Ref<HTMLElement>;
}

export const Splash: React.FunctionComponent<SplashProps> = forwardRef(
  (props: PropsWithoutRef<SplashProps>, ref: SplashProps["ref"]) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
);
