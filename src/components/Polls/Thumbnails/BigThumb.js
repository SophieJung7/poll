import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const BigThumb = ({ poll, pollResults, onVoteSumbit }) => {
  const yesPercentage = parseInt(
    (
      (pollResults.answers[0].count /
        (pollResults.answers[0].count + pollResults.answers[1].count)) *
      100
    ).toFixed(2)
  );
  const noPercentage = 100 - yesPercentage;
  return (
    <div className='container mt-5'>
      <h3>{poll.title}</h3>
      <hr className='my-4'></hr>
      <p className='text-right'>{`PUBLISHED : ${new Date(
        poll.publishedDate
      )}`}</p>
      <div className='jumbotron'>
        <h5>{poll.title}</h5>
        <div className='row'>
          <div className='col-sm-8 mt-5'>
            <button
              className='btn btn-warning d-block'
              style={{ width: '5rem' }}
            >
              Yes
            </button>
            <button
              className='btn btn-success d-block mt-2'
              style={{ width: '5rem' }}
            >
              No
            </button>
          </div>
          <div className='col-sm-4'>
            <PieChart
              data={[
                {
                  title: 'One',
                  value: yesPercentage,
                  color: '#E38627',
                },
                {
                  title: 'One',
                  value: noPercentage,
                  color: '#C13C37',
                },
              ]}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigThumb;
