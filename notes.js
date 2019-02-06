console.log('Starting notes.js');

let addNote = (title, body) => {
	console.log('Adding Note', title, body);
};

let getAll = (title, body) => {
	console.log('Getting All Notes');
};

let getNote = (title) => {
	console.log('Getting Note', title);
};

let removeNote = (title) => {
	console.log('Removing note', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
