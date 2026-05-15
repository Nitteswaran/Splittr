import { useState } from 'react'
import Navbar from '../components/Navbar'

function Splitter() {

  //Bill Information
  const [billName, setBillName] = useState('')
  const [billTotal, setBillTotal] = useState('')

  //People list
  const [people, setPeople] = useState([])

  //Input field for adding a new person's name
  const [newPersonName, setNewPersonName] = useState('')
}

const addPerson = () => {
  if (!newPersonName.trim()) return;

  const newPerson = {
    id: Date.now(),
    name: newPersonName,
    paid: false,
  }

setPeople([...people, newPerson]);
setNewPersonName('')
}

const removePerson = (id) => {
  setPeople(people.filter((person) => person.id !== id))
}

const togglePaid = (id) => {
  setPeople(people.map((person) => {
    if (person.id === id) {
      return {...person, paid: !person.paid}
    }
    return person
  }))
}

//Convert the string to decimal number
const total = parseFloat(billTotal) || 0

//Calculate each person's share - derived from the state, not stored in the state
const sharePerPerson = people.length > 0 ? total / people.length : 0

//Count how many people have paid
const paidCount = people.filter((p) => p.paid).length

//Calculate how mucb has been collected so far
const collectedAmount = paidCount * sharePerPerson


const Splitter = () => {
  return (
    <div>
      <Navbar />

    </div>
  )
}

export default Splitter