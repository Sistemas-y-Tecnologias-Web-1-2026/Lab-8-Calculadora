export default function Button ({ label, onClick, className, imageSrc }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {imageSrc ? <img src={imageSrc} alt={label} /> : label}
    </button>
  )
}