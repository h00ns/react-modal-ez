import { Typography } from "../../atoms/Typography";
import { Prism as CodeHighLighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function InstallSection() {
  return (
    <section>
      <Typography as="h3" variant="h4" style={{ marginBottom: 4 }}>
        Installation
      </Typography>
      <p>Please install using the following command.</p>
      <CodeHighLighter language="bash" style={oneDark}>
        {InstallCode}
      </CodeHighLighter>
    </section>
  );
}

const InstallCode = `$ npm install react-modal-ez
$ yarn add react-modal-ez
`;
