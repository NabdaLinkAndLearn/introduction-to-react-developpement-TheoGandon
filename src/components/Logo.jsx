import '../App.css'

function Logo({ props }) {
  
  return (
    <>
      <div>
        <a href={props.href} target="_blank">
          <img src={props.src} className="logo" alt={props.alt} />
        </a>
      </div>
    </>
  )
}

export default Logo