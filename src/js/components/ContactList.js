import React from 'react'
import Contact from './Contact'

const ContactList = ({ contacts }) => (
	<ul>
		{contacts.map(contact => 
			<Contact 
				key={contact.id}
				{...contact}
			/>
		)}
	</ul>
)

export default ContactList