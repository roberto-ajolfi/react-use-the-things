import React from 'react'
import { useMyHook, TwilioLogo, useCounter, useDocumentTitle } from '@raghnor/react-use-the-things'

const App = () => {
  const [count, setCount] = useCounter(4)
  useDocumentTitle(count)
  const example = useMyHook()
  return (
    <div>
      <TwilioLogo
        height='240px'
        width='520px'
        customStyles={{ border: '1px solid black' }}
      />
      <p>Currently, the count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
    </div>
  )
}
export default App