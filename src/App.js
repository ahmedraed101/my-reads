import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import Search from './components/Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

function App() {
    const [books, setBooks] = useState([])

    const updateBook = async (book, shelf) => {
        await BooksAPI.update(book, shelf)
        const newBooks = [...books]
        const updatedBookUIndex = newBooks.findIndex((b) => b.id === book.id)
        if (updatedBookUIndex !== -1) newBooks.splice(updatedBookUIndex, 1)
        book.shelf = shelf
        newBooks.push(book)
        setBooks(newBooks)
    }

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll()
            setBooks(res)
        }
        getBooks()
    }, [])

    return (
        <div className='app'>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <ListBooks
                            books={books}
                            updateBook={(book, shelf) =>
                                updateBook(book, shelf)
                            }
                        />
                    }
                ></Route>
                <Route
                    path='/search'
                    element={
                        <Search updateBook={updateBook} currentBooks={books} />
                    }
                ></Route>
            </Routes>
        </div>
    )
}

export default App
