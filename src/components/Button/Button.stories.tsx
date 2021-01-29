import React, { useState } from "react";

import { Button } from "./Button";

import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

export const HelloButton = () => {
  const [text, setText] = useState("Hello");
  return (
    <Button
      label={text}
      onClick={() => {
        setText("Hello worlds");
        action("Hello button is clicked")();
      }}
    />
  );
};
