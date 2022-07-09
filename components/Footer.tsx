export default function Footer() {
  return (
    <div className="footer mt-3">
      <div className="footer-inner text-center py-3 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-2/4 before:h-[1px] before:w-3/4 before:bg-grey">
        <div className="container">
          © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}
