import {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { flushSync } from 'react-dom'


const imgs = [1, 2, 3].map(id => ({
  id,
  url: `/src/assets/${id}.png`,
}))

const Li = forwardRef((props, ref) => {
  const realRef = useRef(null)

  // expose only scrollIntoView() to the parent-Component
  const exposedMethods = {
    scrollIntoView() {
      realRef.current.scrollIntoView(...arguments)
    },
  }
  useImperativeHandle(ref, () => exposedMethods)

  return (
    <li {...props} ref={realRef}>
      {props.children}
    </li>
  )
})

export default function ImgRef() {
  const { current: itemsRef } = useRef(new Map())
  const ulRef = useRef(null)
  const [lis, setLis] = useState([])
  const [txt, setTxt] = useState('')

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, left: 0 }}>
        <button onClick={() => scrollToId(1)}>one</button>
        <button onClick={() => scrollToId(2)}>two</button>
        <button onClick={() => scrollToId(3)}>three</button>
        <br />
        <input onChange={e => setTxt(e.target.value)} />
        <button
          onClick={() => {
            flushSync(() =>
              setLis([
                <li key={lis.length + 1}>{txt}</li>,
                ...lis,
              ])
            )
            //sync: commit setLis() before parsing next line.

            ulRef.current.firstChild.style.border = 'solid red'
          }}>
          add text
        </button>
      </nav>
      <div>
        <ul ref={ulRef}>
          {lis}
          {imgs.map(img => (
            <Li
              key={img.id}
              ref={node =>
                // on unmonut pass node = null
                itemsRef[node ? 'set' : 'delete'](img.id, node)
              }>
              <img
                src={img.url}
                alt={'Img #' + img.id}
                loading='lazy'
                style={{ height: '80vh', borderRadius: '20%' }}
              />
            </Li>
          ))}
        </ul>
      </div>
    </>
  )

  function scrollToId(id) {
    const node = itemsRef.get(id)
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      //inline: 'center',
    })
  }
}
