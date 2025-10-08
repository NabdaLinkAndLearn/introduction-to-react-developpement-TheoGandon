import '../App.css'

function Logo({ viteLogo, reactLogo, viteHref, reactHref, viteAlt, reactAlt }) {
  
  return (
    <>
      <div>
        <a href={viteHref} target="_blank">
          <img src={viteLogo} className="logo" alt={viteAlt} />
        </a>
        <a href={reactHref} target="_blank">
          <img src={reactLogo} className="logo react" alt={reactAlt} />
        </a>
      </div>
    </>
  )
}

export default Logo