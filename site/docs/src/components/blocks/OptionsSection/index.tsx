import { Typography } from "../../atoms/Typography";
import { Prism as CodeHighLighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { highLightStyle } from "../UseSection/UseSection.css";

export default function OptionsSection() {
  return (
    <section>
      <Typography as="h3" variant="h4" style={{ marginBottom: 4 }}>
        Using
      </Typography>
      <p>
        <b>You can pass the following options</b> through the{" "}
        <span className={highLightStyle}>second parameter</span> of{" "}
        <span className={highLightStyle}>useModal</span>.
      </p>
      <CodeHighLighter language="typescript" style={oneDark}>
        {OptionsCode}
      </CodeHighLighter>
    </section>
  );
}

const OptionsCode = `interface ModalOptions {
  position?:                      // (default: "center") , Position of the modal on the screen.
    | "top-left"
    | "top-center"
    | "top-right"
    | "left"
    | "center"
    | "right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  top?: string | number;          // Distance from the top of the screen (in pixels or percentage).
  left?: string | number;         // Distance from the left of the screen (in pixels or percentage).
  right?: string | number;        // Distance from the right of the screen (in pixels or percentage).
  bottom?: string | number;       // Distance from the bottom of the screen (in pixels or percentage).
  dimmed?: boolean;               // (default: true) , Whether to dim the background behind the modal.
  closeOnDimmedClick?: boolean;   // (default: true) , Whether the modal should close when the dimmed background is clicked.
  closeOnEscape?: boolean;        // (default: true) , Whether the modal should close when the Escape key is pressed.
  scrollable?: boolean;           // (default: false) , Whether the background behind the modal should be scrollable when the modal is open.
  dimmedClassName?: string;       // Optional CSS class name to apply to the modal container for custom styling.
  modalClassName?: string;        // Optional CSS class name to apply to the dimmed container for custom styling.
}
`;
