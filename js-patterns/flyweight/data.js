function BookFlyweight(title, author, genre, pageCount, publisherId, isbn) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.pageCount = pageCount;
	this.publisherId = publisherId;
	this.isbn = isbn;
}

function BookFactory() {
	var existingBooks = {};
	return {
		createBook: function(title, author, genre, pageCount, publisherId, isbn) {
			var existingBook = existingBooks[isbn];
			if (existingBook) {
				return existingBook;
			} else {
				var book = new BookFlyweight(title, author, genre, pageCount, publisherId, isbn);
				existingBooks[isbn] = book;
				return book;
			}
		}
	}
}

function BookRecordManager() {
	var bookRecordDatabase = {};
	return {
		addBookRecord: function(id, title, author, genre, pageCount, publisherId, isbn, checkoutDate, checkoutMember, dueReturnDate, availability) {
			var book = bookFactory.createaBook(title, author, genre, pageCount, publisherId, isbn);
			bookRecordDatabase[id] = {
				checkoutMember: checkoutMember,
				checkoutDate: checkoutDate,
				dueReturnDate: dueReturnDate,
				availability: availability,
				book: book
			};
		},
		updateCheckoutStatus: function(bookId, newStatus, checkoutDate checkoutMember, newReturnDate) {
			var record = bookRecordDatabase[bookId];
			record.availability = newStatus;
			record.checkoutDate = checkoutDate;
			record.checkoutMember = checkoutMember;
			record.dueReturnDate = newReturnDate;
		},
		extendCheckoutPeriod: function(bookId, newReturnDate) {
			bookRecordDatabase[bookId].dueReturnDate = newReturnDate;
		},
		isPastDue: function(bookId) {
			return (new Date()).getTime() > Date.parse(bookRecordDatabase[bookId].dueReturnDate);
		}
	};
}
