type ButtonProps = {
  label: string
  onClick: () => void
  className: string
  imageSrc?: string
  wide?: boolean
}

export default function Button({ label, onClick, className, imageSrc, wide = false }: ButtonProps) {
  const classes = wide ? `${className} btn-wide` : className

  return (
    <button type="button" className={classes} onClick={onClick} aria-label={label}>
      {imageSrc ? <img src={imageSrc} alt="" aria-hidden="true" /> : label}
    </button>
  )
}
