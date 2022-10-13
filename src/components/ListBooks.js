import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const ListBooks = ({ books, updateBook }) => {
    const currentlyReading = books.filter((b) => b.shelf === 'currentlyReading')
    const wantToRead = books.filter((b) => b.shelf === 'wantToRead')
    const read = books.filter((b) => b.shelf === 'read')

    return (
        <div className='list-books'>
            <div className='list-books-title'>
                <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
                <div>
                    <BookShelf
                        title='Currently Reading'
                        books={currentlyReading}
                        updateBook={updateBook}
                    />
                    <BookShelf
                        title='Want to Read'
                        books={wantToRead}
                        updateBook={updateBook}
                    />
                    <BookShelf
                        title='Read'
                        books={read}
                        updateBook={updateBook}
                    />
                </div>
            </div>
            <div className='open-search'>
                <Link to='/search'> Add a Book</Link>
            </div>
        </div>
    )
}

ListBooks.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateBook: PropTypes.func.isRequired,
}

export default ListBooks
