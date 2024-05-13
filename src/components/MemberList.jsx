import React from 'react'
import MemberRow from './MemberRow'

function MemberList({ members }) {

    const rows = members.map((member, index) => <MemberRow key={index} member={member} />);

    return (
        <div className="rows">
            {rows}
        </div>
    );
}

export default MemberList
