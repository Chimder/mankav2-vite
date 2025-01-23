import React from 'react'

export const Test = () => {
  const [height, setHeight] = React.useState(0)

  const measuredRef = React.useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      node.scrollIntoView({behavior:'smooth'})


    }
  }, [])

  return (
    <>
    <div className='h-[1000px]'></div>
      <h1 className="h-10" ref={measuredRef}>
        Hello, world
      </h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  )
}
