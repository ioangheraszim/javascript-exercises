const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

const getTheTitles = (booksArr) => {
    return booksArr.map((book) => book.title);
};



// Do not edit below this line
module.exports = getTheTitles;
