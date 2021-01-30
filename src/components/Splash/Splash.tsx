import { forwardRef, PropsWithoutRef, Ref } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./Splash.css";

export enum GREETIN_ACTION {
  MORNING,
  AFTERNOON,
  NIGHT,
}
export interface SplashProps {
  ref?: Ref<HTMLElement>;
  message?: string;
  onGreetingChange: (greetingAction: GREETIN_ACTION) => void;
}

const StyledActionWrapper = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin: 0.5rem;
    padding: 0.25rem;
  }
`;

export const Splash: React.FunctionComponent<SplashProps> = forwardRef(
  (props: PropsWithoutRef<SplashProps>, ref: SplashProps["ref"]) => {
    const { message, onGreetingChange } = props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {message}
          <StyledActionWrapper>
            <button onClick={() => onGreetingChange(GREETIN_ACTION.MORNING)}>
              Morning
            </button>
            <button onClick={() => onGreetingChange(GREETIN_ACTION.AFTERNOON)}>
              Afternoon
            </button>
            <button onClick={() => onGreetingChange(GREETIN_ACTION.NIGHT)}>
              Night
            </button>
          </StyledActionWrapper>
        </header>
      </div>
    );
  }
);
