import searchDark from '../Images/search.svg'
import searchLight from '../Images/search-light.svg'
import ExpendCards from './ExpendCards'
import Data from './Data'
import Card from './Card'
import { useState } from 'react'

export default function Body({ Dark }) {
  const [Render, setRender] = useState(true)
  const [expendData, setExpendData] = useState({})
  const [filter, setfilter] = useState({
    search: '',
    option: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setfilter(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const filteredData = Data.filter(items => {
    if (filter.option && items.region !== filter.option) {
      return false
    }

    if (
      filter.search &&
      !items.name.toLowerCase().includes(filter.search.toLowerCase())
    ) {
      return false
    }

    return true
  })

  const cards = filteredData.map(items => {
    return (
      <Card
        key={items.numericCode}
        flags={items.flags.svg}
        name={items.name}
        population={items.population}
        region={items.region}
        capital={items.capital}
        Dark={Dark}
        handleClick={() =>
          handleClick(
            items.flags.svg,
            items.name,
            items.population,
            items.region,
            items.capital,
            items.nativeName,
            items.subregion,
            items.topLevelDomain,
            items.borders,
            items.currencies,
            items.languages,
          )
        }
      />
    )
  })

  function handleClick(
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
  ) {
    setRender(prev => !prev)
    setExpendData(() => {
      return {
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
      }
    })
  }

  const MainSearchFilterStyle = {
    backgroundColor: Dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    boxShadow: !Dark && '0 0 10px 0 hsl(200, 15%, 8%)',
  }

  const FilterSearchStyle = {
    color: Dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
  }

  const FilterMenu = {
    backgroundColor: Dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    color: Dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
    boxShadow: !Dark && '0 0 10px 0 hsl(200, 15%, 8%)',
  }

  return Render ? (
    <section className='Main'>
      <section className='Main-filter'>
        <div className='Main-filter-search' style={MainSearchFilterStyle}>
          <img
            src={Dark ? searchDark : searchLight}
            alt='search'
            className='filter-search-icon'
          />
          <input
            style={FilterSearchStyle}
            type='text'
            placeholder='Search for a country...'
            className='filter-search'
            name='search'
            value={filter.search}
            onChange={handleChange}
          />
        </div>
        <div className='Main-filter-menu'>
          <select
            className='filter-menu'
            style={FilterMenu}
            value={filter.option}
            name='option'
            onChange={handleChange}
          >
            <option
              value='Filter by Region'
              style={{ display: handleChange ? 'none' : 'block' }}
            >
              Filter by Region
            </option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
      </section>
      <section className='Cards'>{cards}</section>
    </section>
  ) : (
    <ExpendCards {...expendData} Dark={Dark} setRender={setRender} />
  )
}
