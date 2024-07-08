import { Typography } from "../../atoms/Typography";
import { headerStyle, linkWrapStyle } from "./Header.css";

export default function Header() {
  return (
    <header className={headerStyle}>
      <Typography as="h1" variant="h4" color="white">
        react-modal-ez
      </Typography>
      <Typography as="h2" variant="sh2" color="white" style={{ marginTop: 12 }}>
        Try using modals easily and simply in React with react-modal-ez!
      </Typography>
      <div className={linkWrapStyle}>
        <a href="https://github.com/h00ns/react-modal-ez" target="_blank">
          <Typography variant="b5" color="gray">
            Git Repository
          </Typography>
        </a>
        <a href="https://www.npmjs.com/package/react-modal-ez" target="_blank">
          <Typography variant="b5" color="gray">
            NPM
          </Typography>
        </a>
      </div>
    </header>
  );
}
