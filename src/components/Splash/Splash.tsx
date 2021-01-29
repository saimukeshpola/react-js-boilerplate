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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
);
