import '../App.css'

function Logo({ src, href, alt }) {
  
  return (
    <>
      <div>
        <a href={href} target="_blank">
          <img src={src} className="logo" alt={alt} />
        </a>
      </div>
    </>
  )
}

export default Logo