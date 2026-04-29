interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

function Button({ onClick, children, className = '', type = 'button' }: ButtonProps) {
  return (
    <button type={type} className={`counter ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
