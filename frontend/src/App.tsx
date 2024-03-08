import React from 'react';
import logo from './logo.svg';
import './App.css';

interface BandProps {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  {
    name: 'Greta Van Fleet',
    members: 'Josh Kiszka, Jake Kiszka, Daniel Wagner, Sam Kiszka, Kyle Hauck',
    formed: 2012,
  },
  {
    name: 'Journey',
    members:
      'Steve Perry, Arnel Pineda, Neal Schon, Randy Jackson, Jonathan Cian, Steve Augeri, Greg Rolie',
    formed: 1973,
  },
  {
    name: 'Ozzy Osbourne',
    members: 'Ozzy and friends',
    formed: 1975,
  },
  {
    name: 'Creed',
    members:
      'Scott Stapp, Mark Tremonto, Brian Marshall, Scott Phillips, Brian Brasher, Brett Hestla, Eric Friedman',
    formed: 1993,
  },
];

function Welcome() {
  return <h1>Some Random Bands that I listen to</h1>;
}

class Band extends React.Component<BandProps> {
  render() {
    const oneBand = this.props;

    return (
      <div>
        <img />
        <h2>Name: {oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}
function BandList() {
  return (
    <div>
      {bandNames.map((bandNum) => (
        <Band {...bandNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
