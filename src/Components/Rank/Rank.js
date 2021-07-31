import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white pt2 rank'>
                {`${name}, your current entry count is...`}
            </div>
            <div className='white rankNo'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;