import "./style.css";
import SearchBar from './components/SearchBar'
import MemberList from './components/MemberList'
import Actions from './components/Actions'

const MEMBERS = [
  { name: "Carooien Bloeme", present: "false" },
  { name: "Sun Jun", present: "true" },
  { name: "Song Bao", present: "false" },
  { name: "Olivia Arribas", present: "true" },
  { name: "Aonginkosi Mdladlana", present: "false" },
  { name: "Arina Belomestnykh", present: "true" },
  { name: "Jacqueline Likoki", present: "true" },
]

export default function App() {
  return (
    <>
      <p className="header">Add members to Front-end development team</p>
      <div className="container">
        <SearchBar />
        <MemberList members={MEMBERS} />
        <Actions />
      </div>
    </>
  )
}
