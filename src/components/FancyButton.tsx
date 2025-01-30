import React from "react";
import "./FancyButton.css";
import { Sparkles } from "lucide-react";

interface FancyButtonProps {
  text: string;
  builderAttributes: any;
}

export function FancyButton(props: FancyButtonProps) {
  const { text, builderAttributes } = props;
  return (
    <button {...builderAttributes} className="fancy-btn">
      <span className="sparkle">
        <Sparkles />
      </span>
      <span> {text ?? "Fancy Button"}</span>
      <span className="inset-1" />
      <span className="inset-2" />
    </button>
  );
}
