import React, { Component } from 'react';
import { polls } from '../../poll.json';
import { pollResults } from '../../pollResults.json';
import { PieChart } from 'react-minimal-pie-chart';

class PollPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollResults: pollResults.find(
        (poll) => poll.id == this.props.match.params.id
      ),
    };
  }

  voteYes = (answerId) => {
    console.log(answerId);
  };

  voteNo = (answerId) => {
    console.log(answerId);
  };

  render() {
    const poll = polls.find((poll) => poll.id == this.props.match.params.id);
    const yesPercentage = parseInt(
      (
        (this.state.pollResults.answers[0].count /
          (this.state.pollResults.answers[0].count +
            this.state.pollResults.answers[1].count)) *
        100
      ).toFixed(2)
    );
    const noPercentage = 100 - yesPercentage;
    if (poll) {
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
                  onClick={() =>
                    this.voteYes(this.state.pollResults.answers[0].id)
                  }
                >
                  Yes
                </button>
                <button
                  className='btn btn-success d-block mt-2'
                  style={{ width: '5rem' }}
                  onClick={() =>
                    this.voteYes(this.state.pollResults.answers[1].id)
                  }
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
                      title: 'Two',
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
    } else {
      window.location.reload(false);
      return null;
    }
  }
}

export default PollPage;
