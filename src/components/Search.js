import { Link } from 'react-router-dom'
import { useState } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import * as BooksAPI from './../BooksAPI'

const Search = ({ updateBook, currentBooks }) => {
    const [books, setBooks] = useState([])

    const searchBooks = async (query) => {
        if (query.trim() === '') {
            setBooks([])
            return
        }

        const res = await BooksAPI.search(query.trim())
        if (!!res.error) {
            setBooks([])
            return
        }

        const booksToRender = res.map((b) => {
            const currentBook = currentBooks.find((cb) => cb.id === b.id)
            console.log(currentBook)
            if (currentBook) return currentBook
            return b
        })
        setBooks(booksToRender)
    }

    return (
        <div className='search-books'>
            <div className='search-books-bar'>
                <Link className='close-search' to='/'>
                    Close
                </Link>
                <div className='search-books-input-wrapper'>
                    <input
                        type='text'
                        placeholder='Search by title, author, or ISBN'
                        onChange={(e) => searchBooks(e.target.value)}
                    />
                </div>
            </div>
            <div className='search-books-results'>
                <ol className='books-grid'>
                    {books.length !== 0 &&
                        books.map((b) => (
                            <li key={b.title}>
                                <Book book={b} updateBook={updateBook}></Book>
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    )
}

Search.propTypes = {
    updateBook: PropTypes.func.isRequired,
    currentBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Search
