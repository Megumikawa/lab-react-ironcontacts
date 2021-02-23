import React from 'react'
import ContactDetails from './ContactDetails'
import contactsJson from '../contacts.json'


// const firstFive = contactsList.slice(0, 5)

class ContactsList extends React.Component {
  state = {
    contacts: contactsJson.slice(0, 5)
  }
  handleAdd = () => {
    let randomIndex = Math.floor(Math.random()*contactsJson.length)
    let randomContact = contactsJson[randomIndex]

    this.setState({
      contacts: [...this.state.contacts, randomContact]
    })
  }

  handleSort = () => {
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
    
    clonedContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      else if (a.name < b.name) {
        return -1
      }
      else {
        return 0
      }
    })
    this.setState({
      contacts: clonedContacts
    })
  }

  handleSortPopularity = () => {
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))
    
    clonedContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      }
      else if (a.popularity > b.popularity) {
        return -1
      }
      else {
        return 0
      }
    })
    this.setState({
      contacts: clonedContacts
    })
  }

  handleDelete = (contactId) => {
    let filteredContacts = this.state.contacts.filter((singleContact) => {
      return singleContact.id !== contactId
  })

  // make sure you update the state with the filtered students
  this.setState({
      contacts: filteredContacts
  })
  
  } 

    render(){
      return (
        <div>
          <h1>IronContacts</h1>
          <button onClick={this.handleAdd}>Add Random Contact</button>
          <button onClick={this.handleSort}>Sort by name</button>
          <button onClick={this.handleSortPopularity}>Sort by popurality</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((singleContact, index) => {
                return <ContactDetails 
                  key={index}
                  picture={singleContact.pictureUrl}
                  name={singleContact.name}
                  popularity={singleContact.popularity}
                  id={singleContact.id}
                  onDelete={this.handleDelete}
                />
                })
              }
            </tbody>
          </table>
        </div>
      )
    }
}

export default ContactsList