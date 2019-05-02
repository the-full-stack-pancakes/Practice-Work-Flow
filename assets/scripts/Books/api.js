
const config = require('../config.js')
const store = require('../store')

const getBooks = () => {
  return $.ajax({
    url: config.apiUrl + `/books`,
    method: 'GET'
  })
}
const getBook = (id) => {
  return $.ajax({
    url: config.apiUrl + `/books/${id}`,
    method: 'GET'
  })
}
const createBook = (title, author) => {
  return $.ajax({
    url: config.apiUrl + `/books`,
    method: 'POST',
    data: {
      book: {
        title: title,
        author: author
      }
    }
  })
}
const updateBook = (id, title, author) => {
  return $.ajax({
    url: config.apiUrl + `/books/${id}`,
    method: 'PATCH',
    data: {
      book: {
        title: title,
        author: author
      }
    }
  })
}
const removeBook = (id) => {
  return $.ajax({
    url: config.apiUrl + `/books/${id}`,
    method: 'DELETE',
  })
}
