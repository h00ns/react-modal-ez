import { Button } from "../../../atoms/Button";
import { Typography } from "../../../atoms/Typography";
import { buttonWrapStyle, myModalStyle } from "./MyModal.css";

interface Props {
  handleClose: () => void;
}

export default function MyModal({ handleClose }: Props) {
  return (
    <div className={myModalStyle}>
      <Typography variant="sh1">My Modal</Typography>

      <Typography variant="b4">
        This is a example modal made using react-modal-ez
      </Typography>

      <div className={buttonWrapStyle}>
        <Button variant="primary" text="close" onClick={handleClose} />
      </div>
    </div>
  );
}
