# react-modal-ez

Try using modals easily and simply in React with react-modal-ez!

[DOCS](https://react-modal-ez.site)
[NPM](https://www.npmjs.com/package/react-modal-ez)

## Installation

Please install using the following command.

```bash
$ npm install react-modal-ez
$ yarn add react-modal-ez
```

## Using

Before using `react-modal-ez`, **first use `ModalProvider` in `App.tsx`**

```tsx
// app.tsx
import { ModalProvider } from "react-modal-ez";

function App({ children }: PropsWithChildren) {
  return (
    <ModalProvider>
      {children}
      // ...rest
    </ModalProvider>
  );
}

export default App;
```

You can use the `useModal` hook to **declaratively use modals without including the modal JSX in the return statement**.

```tsx
// example.tsx
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

export default MyExample;
```

## Options

**You can pass the following options** through the `second parameter` of `useModal`.

| Property           | Type                                                                                                                             | Default Value | Description                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------ |
| position           | "top-left" \| "top-center" \| "top-right" \| "left" \| "center" \| "right" \| "bottom-left" \| "bottom-center" \| "bottom-right" | "center"      | Position of the modal on the screen.                                                 |
| top                | string                                                                                                                           |               | Distance from the top of the screen (in pixels or percentage).                       |
| left               | string                                                                                                                           |               | Distance from the left of the screen (in pixels or percentage).                      |
| right              | string                                                                                                                           |               | Distance from the right of the screen (in pixels or percentage).                     |
| bottom             | string                                                                                                                           |               | Distance from the bottom of the screen (in pixels or percentage).                    |
| dimmed             | boolean                                                                                                                          | true          | Whether to dim the background behind the modal.                                      |
| closeOnDimmedClick | boolean                                                                                                                          | true          | Whether the modal should close when the dimmed background is clicked.                |
| closeOnEscape      | boolean                                                                                                                          | true          | Whether the modal should close when the Escape key is pressed.                       |
| scrollable         | boolean                                                                                                                          | false         | Whether the background behind the modal should be scrollable when the modal is open. |
| modalClassName     | string                                                                                                                           |               | Optional CSS class name to apply to the modal container for custom styling.          |
| dimmedClassName    | string                                                                                                                           |               | Optional CSS class name to apply to the dimmed container for custom styling.         |
