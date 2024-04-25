import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function MemberList({ members }) {
  const rows = [];

  members.forEach((member) => {
    rows.push(
      <MemberRow member={member} />
    );
  })

  return (
    <div className="rows">
      {rows}
    </div>
  );
}

function MemberRow({ member }) {
  const name = member.name;

  return (
    <div className="row">
      <div className="name">
        <FontAwesomeIcon icon={faUser} />
        {name}
      </div>
      <input type="checkbox" className="checkbox" />
    </div>
  );
}

function SearchBar() {

  return (
    <form className="search-form">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input type="text" id="member" placeholder="Find members" />
    </form>
  )
}

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
        <div className="actions">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">SAVE</button>
        </div>
      </div>
    </>
  )
}
