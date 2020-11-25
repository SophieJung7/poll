import React from 'react';
import { Link } from 'react-router-dom';

const SmallThumb = ({ poll }) => {
  return (
    <div class='col-sm-6 mb-3'>
      <Link to={`/polls/${poll.id}`} style={{ color: 'black' }}>
        <div class='card' style={{ height: '20vh' }}>
          <div class='card-body'>
            <div className='row'>
              <div className='col-3'>PieChart</div>
              <div className='col-9'>
                <div className='d-block'>
                  <p>{`${new Date(poll.publishedDate)}`}</p>
                </div>
                <div className='d-block'>
                  <h5>{poll.title}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SmallThumb;
