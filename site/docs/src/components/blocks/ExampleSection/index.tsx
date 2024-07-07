"use client";

import { useModal } from "react-modal-ez";
import { Button } from "../../atoms/Button";
import { Typography } from "../../atoms/Typography";
import { buttonWrapStyle, formStyle, rowStyle } from "./ExampleSection.css";
import MyModal from "./MyModal";
import { useState } from "react";

interface FormType {
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "left"
    | "center"
    | "right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  dimmed: boolean;
  closeOnDimmedClick: boolean;
  closeOnEscape: boolean;
  scrollable: boolean;
}

export default function ExampleSection() {
  const { open, close } = useModal();

  const [form, setForm] = useState<FormType>({
    position: "center",
    dimmed: true,
    closeOnDimmedClick: true,
    closeOnEscape: true,
    scrollable: false,
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setForm((prev) => ({
      ...prev,
      position: value as FormType["position"],
    }));
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleOpenClick = () => {
    open(<MyModal handleClose={close} />, {
      ...form,
    });
  };

  return (
    <section>
      <Typography as="h3" variant="h4" style={{ marginBottom: 4 }}>
        Example
      </Typography>

      <form className={formStyle}>
        <select
          style={{ width: 200 }}
          value={form.position}
          onChange={handleSelectChange}
        >
          <option value="top-left">top-left</option>
          <option value="top-center">top-center</option>
          <option value="top-right">top-right</option>
          <option value="left">left</option>
          <option value="center">center</option>
          <option value="right">right</option>
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-center">bottom-center</option>
          <option value="bottom-right">bottom-right</option>
        </select>

        <div className={rowStyle}>
          <input
            type="checkbox"
            checked={form.dimmed}
            name="dimmed"
            onChange={handleCheckBoxChange}
          />
          <Typography variant="b4">dimmed</Typography>
        </div>
        <div className={rowStyle}>
          <input
            type="checkbox"
            checked={form.closeOnDimmedClick}
            name="closeOnDimmedClick"
            onChange={handleCheckBoxChange}
          />
          <Typography variant="b4">closeOnDimmedClick</Typography>
        </div>
        <div className={rowStyle}>
          <input
            type="checkbox"
            checked={form.closeOnEscape}
            name="closeOnEscape"
            onChange={handleCheckBoxChange}
          />
          <Typography variant="b4">closeOnEscape</Typography>
        </div>
        <div className={rowStyle}>
          <input
            type="checkbox"
            checked={form.scrollable}
            name="scrollable"
            onChange={handleCheckBoxChange}
          />
          <Typography variant="b4">scrollable</Typography>
        </div>
      </form>

      <div className={buttonWrapStyle}>
        <Button variant="primary" text="open" onClick={handleOpenClick} />
        <Button variant="secondary" text="close" onClick={close} />
      </div>
    </section>
  );
}
