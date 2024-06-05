import React from "react";
import "./App.css"

const App = () => {

  const [team, setTeam] = React.useState([])
  const [money, setMoney] = React.useState(100)
  const [strength, setStrength] = React.useState(0)
  const [agility, setAgility] = React.useState(0)
  const [zombieFighters, setZombieFighters] = React.useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )

  function handleAddFighter(event) {
    const copyOfZombieFighters = structuredClone(zombieFighters)
    const specificFighter = copyOfZombieFighters.filter((fighter) => {
      return fighter.name === event.target.name
    })
    if (money < specificFighter[0].price) {
      return console.log(`Not enough money to add ${specificFighter[0].name}.`)
    } else {
      const copyOfTeam = structuredClone(team)
      copyOfTeam.push(specificFighter[0])
      setTeam(copyOfTeam)
      
      setMoney(money - (specificFighter[0].price))
      setStrength(strength + (specificFighter[0].strength))
      setAgility(agility + (specificFighter[0].agility))
    }
  }

  function handleRemoveFighter(index) {
    const copyOfTeam = structuredClone(team)
    const specificFighter = copyOfTeam[index]
    const withoutSpecificFighter = copyOfTeam.filter((fighter, fighterIndex) => {
      return index !== fighterIndex
    })
    setTeam(withoutSpecificFighter)
    setMoney(money + (specificFighter.price))
    setStrength(strength - (specificFighter.strength))
    setAgility(agility - (specificFighter.agility))
  }
  console.log(team)

  function isTeamEmpty() {
    if (team.length > 0) {
      return <>
        <ul>
          {team.map((teammate, index) => {
            return <li key={index}>
              <img src={teammate.img} /><br />
              Name: {teammate.name}<br />
              Price: {teammate.price}<br />
              Strength: {teammate.strength}<br />
              Agility: {teammate.agility}<br />
              <button name={teammate.name} onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          })}
        </ul>
        <p>Team agility: {agility}</p>
        <p>Team strength: {strength}</p>
      </>
    } else {
      return <p>You haven't added any team members yet. Get started below!</p>
    }
  }

  setZombieFighters

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h2>Your team:</h2>
      {isTeamEmpty()}
      <h2>Add a fighter!</h2>
      <ul>
        {zombieFighters.map((fighter, index) => {
          return <li key={index}>
            <img src={fighter.img} /><br />
            Name: {fighter.name}<br />
            Price: {fighter.price}<br />
            Strength: {fighter.strength}<br />
            Agility: {fighter.agility}<br />
            <button name={fighter.name} onClick={handleAddFighter}>Add</button>
          </li>
        })}
      </ul>
    </>
  );
}

export default App

