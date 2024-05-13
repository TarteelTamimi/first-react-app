import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function MemberRow({ index, member }) {
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

export default MemberRow
