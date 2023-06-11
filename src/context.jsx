import { createContext, useContext } from 'react'

export default function Contex() {
  return (
    <Ctx>
      <Log />

      <Div>
        <Log />
        <Div>
          <Log />
        </Div>
      </Div>
      <br />

      <Ctx>
        <Log />
        <Ctx>
          <Log />
        </Ctx>
      </Ctx>
      <br />

      <Ctx>
        <Log />
      </Ctx>
    </Ctx>
  )
}

// create context
const lvlCtx = createContext(0)

function Ctx({ children }) {
  const lvl = useContext(lvlCtx)

  // provide context to DOM sub-tree
  return (
    <div
      style={{
        border: `solid #${lvl % 2 ? '077' : 470}`,
        borderRadius: '1em',
        padding: '1em',
      }}
    >
      <lvlCtx.Provider value={lvl + 1}>
        {children}
      </lvlCtx.Provider>
    </div>
  )
}

// use context in DOM sub-tree
function Log() {
  const lvl = useContext(lvlCtx)
  return <h2>{`closest context lvl: ${lvl}`}</h2>
}

// helpers components:
function Div({ children }) {
  return (
    <div
      style={{
        border: 'dashed thin darkorange',
        borderRadius: '1em',
        padding: '1em',
      }}
    >
      {children}
    </div>
  )
}
