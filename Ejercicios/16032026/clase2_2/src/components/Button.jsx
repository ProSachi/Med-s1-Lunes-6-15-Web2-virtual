const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      className={`button button-${variant}${fullWidth ? ' full-width' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
