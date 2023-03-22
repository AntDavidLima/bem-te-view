import { createRef } from 'react'

export function AutogrowTextarea({ children, ...props }) {
  const ref = createRef()

  return (
    <textarea
      {...props}
      ref={ref}
      onInput={onInput}
      style={{
        height: ref.current?.scrollHeight,
        overflowY: 'auto',
      }}
    >
      {children}
    </textarea>
  )

  function onInput() {
    ref.current.style.height = 0
    ref.current.style.height = ref.current?.scrollHeight + 'px'
  }
}
