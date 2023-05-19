import arrowDark from '../Images/arrow.svg'
import arrowlight from '../Images/arrow-light.svg'

export default function ExpendCards({
  flags,
  name,
  population,
  region,
  capital,
  nativeName,
  subRegion,
  topLevelDomain,
  borders,
  currencies,
  languages,
  Dark,
  setRender,
}) {
  const expendBtnStyle = {
    backgroundColor: Dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    color: Dark ? 'hsl(0, 0%, 85%)' : 'hsl(200, 15%, 8%)',
    fontWeight: !Dark && '600',
  }

  const borderStyle = {
    color: Dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
  }

  const boxStyle = {
    backgroundColor: Dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    color: Dark ? 'hsl(0, 0%, 85%)' : 'hsl(200, 15%, 8%)',
    fontWeight: Dark && '400',
  }

  const cardInfo = {
    fontWeight: !Dark && '600',
  }

  const cardInfoStyle = {
    color: Dark ? 'hsl(0, 0%, 85%)' : 'hsl(200, 15%, 8%)',
  }

  return (
    <section className='Expend-cards'>
      <button
        className='Expend-btn'
        style={expendBtnStyle}
        onClick={() => setRender(prev => !prev)}
      >
        <img
          src={Dark ? arrowDark : arrowlight}
          alt='arrow'
          className='btn-arrow'
        />
        Back
      </button>
      <div className='Expend-container'>
        <div className='Expend-flag'>
          <img src={flags} alt='falg' className='flag' />
        </div>
        <section className='Expend-details'>
          <h1 className='Expend-heading'>{name}</h1>
          <div className='details'>
            <div>
              <p className='Card-info Expend-info' style={cardInfo}>
                Native Name:{' '}
                <span className='Card-info-style' style={cardInfoStyle}>
                  {nativeName}
                </span>
              </p>
              <p className='Card-info Expend-info' style={cardInfo}>
                Population:{' '}
                <span className='Card-info-style' style={cardInfoStyle}>
                  {population}
                </span>
              </p>
              <p className='Card-info Expend-info' style={cardInfo}>
                Region:{' '}
                <span className='Card-info-style' style={cardInfoStyle}>
                  {region}
                </span>
              </p>
              <p className='Card-info Expend-info' style={cardInfo}>
                Sub Region:{' '}
                <span className='Card-info-style' style={cardInfoStyle}>
                  {subRegion}
                </span>
              </p>
              <p className='Card-info Expend-info' style={cardInfo}>
                Capital:{' '}
                <span className='Card-info-style' style={cardInfoStyle}>
                  {capital === undefined ? ' ' : capital}
                </span>
              </p>
            </div>
            <div>
              <p className='Card-info Expend-info' style={cardInfo}>
                Top Level Domain:{' '}
                <span className='Card-info-style' style={cardInfoStyle}>
                  {topLevelDomain}
                </span>
              </p>
              <p className='Card-info Expend-info' style={cardInfo}>
                Currencies:{' '}
                {currencies === undefined
                  ? ''
                  : currencies.map((items, index) => (
                      <span
                        className='Card-info-style'
                        style={cardInfoStyle}
                        key={index}
                      >
                        {items.name},{' '}
                      </span>
                    ))}
              </p>
              <p className='Card-info Expend-info' style={cardInfo}>
                Languages:{' '}
                {languages.map((items, index) => (
                  <span
                    className='Card-info-style'
                    style={cardInfoStyle}
                    key={index}
                  >
                    {items.name},{' '}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className='borders' style={borderStyle}>
            Border Countries:
            {borders === undefined
              ? ' '
              : borders.map((items, index) => {
                  return (
                    <div className='box' style={boxStyle} key={index}>
                      {items}
                    </div>
                  )
                })}
          </div>
        </section>
      </div>
    </section>
  )
}
