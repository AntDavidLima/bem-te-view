import { TextareaHTMLAttributes, createRef } from "react";

export function AutogrowTextarea({
  children,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = createRef<HTMLTextAreaElement>();

  return (
    <textarea
      {...props}
      ref={ref}
      onInput={onInput}
      style={{
        height: ref.current?.scrollHeight,
        overflowY: "auto",
      }}
    >
      {children}
    </textarea>
  );

  function onInput() {
    if (ref.current) {
      ref.current.style.height = "0";
      ref.current.style.height = ref.current?.scrollHeight + "px";
    }
  }
}
