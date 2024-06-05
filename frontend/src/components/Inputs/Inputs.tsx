import React, { forwardRef, InputHTMLAttributes } from 'react'
type iInputProps = InputHTMLAttributes<HTMLInputElement>



const Inputs = forwardRef<HTMLInputElement, iInputProps>(({name = '', type = 'text', ...props}, ref) => {
  return (
    <label htmlFor={name}>
      <input type={type} className="leading-loose border" ref={ref}/>
    </label>
  )
}
)

export default Inputs