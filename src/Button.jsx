export default function Button ({ label, onClick, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  )
}