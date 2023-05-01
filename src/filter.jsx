import { useState } from 'react'
import products from './products.json'

export default function App() {
  return <FilterableProductTable products={products} />
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [stocked, setStocked] = useState(false)

  return (
    <div>
      <SearchBar
        filterText={filterText}
        stocked={stocked}
        onFilterTextChange={setFilterText}
        onStockedChange={setStocked}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        stocked={stocked}
      />
    </div>
  )
}

function SearchBar({
  filterText,
  stocked,
  onFilterTextChange,
  onStockedChange,
}) {
  return (
    <form>
      <input
        type='text'
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)}
        placeholder='Search...'
      />{' '}
      <label>
        <input
          type='checkbox'
          checked={stocked}
          onChange={e => onStockedChange(e.target.checked)}
        />{' '}
        Only stocked
      </label>
    </form>
  )
}

function ProductTable({ products, filterText, stocked }) {
  const rows = []
  let lastCategory = null

  products.forEach(product => {
    if (
      product.name
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) === -1 ||
      (stocked && !product.stocked)
    )
      return

    if (product.category !== lastCategory)
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )

    rows.push(
      <ProductRow product={product} key={product.name} />
    )

    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan='2'>{category}</th>
    </tr>
  )
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  )

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
