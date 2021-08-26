import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                this.props.businesses.map(business => {
                    return <li key={business.id}><Business key={business.id} business={business} /></li>
                })
                }
                
            </div>
        );
    }
}

export default BusinessList;