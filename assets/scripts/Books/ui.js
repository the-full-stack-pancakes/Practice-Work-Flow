
const showBooksTemplate = require('../templates/get-button.handlebars')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
}

module.exports = {
  getBooksSuccess
}
