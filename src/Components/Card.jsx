export default function Card({
  flags,
  name,
  population,
  region,
  capital,
  handleClick,
  Dark,
}) {
  const cardStyle = {
    backgroundColor: Dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    color: Dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
    boxShadow: !Dark && '0 0 5px 0 hsl(200, 15%, 8%)',
  }

  const cardInfo = {
    fontWeight: !Dark && '600',
  }

  const cardInfoStyle = {
    color: Dark ? 'hsl(0, 0%, 85%)' : 'hsl(200, 15%, 8%)',
  }

  return (
    <button className='Card' onClick={handleClick} style={cardStyle}>
      <img src={flags} loading='lazy' alt='Flags' className='Card-flags' />
      <article className='Card-details'>
        <h1 className='Card-heading'>{name}</h1>
        <p className='Card-info' style={cardInfo}>
          Population:{' '}
          <span className='Card-info-style' style={cardInfoStyle}>
            {Intl.NumberFormat('en-us').format(population)}
          </span>
        </p>
        <p className='Card-info' style={cardInfo}>
          Region:{' '}
          <span className='Card-info-style' style={cardInfoStyle}>
            {region}
          </span>
        </p>
        <p className='Card-info' style={cardInfo}>
          Capital:{' '}
          <span className='Card-info-style' style={cardInfoStyle}>
            {capital}
          </span>
        </p>
      </article>
    </button>
  )
}
