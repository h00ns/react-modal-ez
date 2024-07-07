import { Typography } from "../../atoms/Typography";
import { highLightStyle } from "./UseSection.css";
import { Prism as CodeHighLighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseSection() {
  return (
    <section>
      <Typography as="h3" variant="h4" style={{ marginBottom: 4 }}>
        Using
      </Typography>
      <p>
        Before using <span className={highLightStyle}>react-modal-ez</span>,{" "}
        <b>
          first use <span className={highLightStyle}>ModalProvider</span> in{" "}
          <span className={highLightStyle}>App.tsx</span>
        </b>
      </p>

      <CodeHighLighter language="tsx" style={oneDark}>
        {ModalProviderCode}
      </CodeHighLighter>

      <p style={{ marginTop: 24 }}>
        You can use the <span className={highLightStyle}>useModal</span> hook to
        declaratively use modals{" "}
        <b>without including the modal JSX in the return statement.</b>
      </p>
      <CodeHighLighter language="tsx" style={oneDark}>
        {UseModalCode}
      </CodeHighLighter>
    </section>
  );
}

const ModalProviderCode = `// app.tsx
import { ModalProvider } from "react-modal-ez";
            
function App({ children }: PropsWithChildren) {
    return (
        <ModalProvider>
          {children}
          // ...rest
        </ModalProvider>
      );
}

export default App;`;

const UseModalCode = `// example.tsx
import { useModal } from "react-modal-ez";
import MyModal from "./MyModal.tsx";

function MyExample() {
  const { isOpen, open, close } = useModal();

  const handleOnClick = () => {
    open(<MyModal />, {
      // options (is optional)
    });
  };

  return (
    <>
      <button onClick={handleOnClick}>open</button>
      <button onClick={close}>close</button>
    </>
  );
}

export default MyExample;`;
