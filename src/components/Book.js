import PropTypes from 'prop-types'

const Book = ({ book, updateBook }) => {
    const update = (shelf) => {
        updateBook(book, shelf)
    }
    return (
        <div className='book'>
            <div className='book-top'>
                <div
                    className='book-cover'
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                            book.imageLinks && book.imageLinks.smallThumbnail
                        })`,
                    }}
                ></div>
                <div className='book-shelf-changer'>
                    <select
                        onChange={(e) => update(e.target.value)}
                        value={book.shelf ? book.shelf : 'none'}
                    >
                        <option value='none' disabled>
                            Move to ...
                        </option>
                        <option value='currentlyReading'>
                            Currently Reading
                        </option>
                        <option value='wantToRead'>Want to Read</option>
                        <option value='read'>Read</option>
                        <option value='none'>None</option>
                    </select>
                </div>
            </div>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
}

export default Book
