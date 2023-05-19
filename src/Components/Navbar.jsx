import moonLight from '../Images/moon-light.svg'
import moonDark from '../Images/moon.svg'

export default function Navbar({ Dark, setDark }) {
  const NavbarStyle = {
    backgroundColor: Dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
  }

  return (
    <nav className='Navbar' style={NavbarStyle}>
      <h1 className='Navbar-logo'>Where in the world?</h1>
      <div className='Navbar-DarkMode'>
        <input
          type='checkbox'
          id='check'
          onChange={() => setDark(prev => !prev)}
          checked={Dark}
        />
        <img
          src={Dark ? moonLight : moonDark}
          alt='moon'
          className='Navbar-DarkMode-moon'
        />
        <label htmlFor='check' className='Navbar-DarkMode-label'>
          Dark Mode
        </label>
      </div>
    </nav>
  )
}
