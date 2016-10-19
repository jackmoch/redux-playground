import React from 'react'
import ReactDOM from 'react-dom'
import ContactList from './components/ContactList'

const app = document.getElementById('entry')

const contacts = [
	{
		name: 'Jack',
		address: 'here',
		id: 0
	}
]

ReactDOM.render(
	<ContactList contacts={contacts}  />,
app)