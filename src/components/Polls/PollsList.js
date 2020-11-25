import React, { Component } from 'react';
import { polls } from '../../poll.json';
import BigThumb from './Thumbnails/BigThumb';
import SmallThumb from './Thumbnails/SmallThumb';

class PollsList extends Component {
  state = {
    pollResults: [
      {
        id: 1,
        answers: [
          {
            id: 1,
            count: 1,
          },
          {
            id: 2,
            count: 5,
          },
        ],
      },
      {
        id: 2,
        answers: [
          {
            id: 3,
            count: 1,
          },
          {
            id: 4,
            count: 5,
          },
        ],
      },
      {
        id: 3,
        answers: [
          {
            id: 5,
            count: 1,
          },
          {
            id: 6,
            count: 5,
          },
        ],
      },
      {
        id: 4,
        answers: [
          {
            id: 7,
            count: 1,
          },
          {
            id: 8,
            count: 5,
          },
          {
            id: 9,
            count: 5,
          },
          {
            id: 10,
            count: 5,
          },
          {
            id: 11,
            count: 5,
          },
          {
            id: 12,
            count: 5,
          },
        ],
      },
      {
        id: 5,
        answers: [
          {
            id: 5,
            count: 13,
          },
          {
            id: 6,
            count: 14,
          },
        ],
      },
    ],
  };

  onVoteSumbit = (pollId, answerId) => {
    const pollResults = [...this.state.pollResults];
    const answeredPoll = pollResults.find((poll) => poll.id === pollId);
    const foundAnswer = answeredPoll.answers.find(
      (answer) => answer.id === answerId
    );
    foundAnswer.count++;
    // ****** Change Code After!!!
    this.setState({ pollResults: foundAnswer });
  };

  renderSmallThumbs = () => {
    // Remove first poll
    polls.splice(0, 1);
    // Render all the other polls
    return polls.map((poll) => {
      return (
        <SmallThumb
          poll={poll}
          key={poll.id}
          pollResults={this.state.pollResults[0]}
          onVoteSumbit={this.onVoteSumbit}
        />
      );
    });
  };
  render() {
    return (
      <div className='container mb-5'>
        <BigThumb
          poll={polls[0]}
          pollResults={this.state.pollResults[0]}
          onVoteSumbit={this.onVoteSumbit}
        />

        <div class='row'>{this.renderSmallThumbs()}</div>
      </div>
    );
  }
}

export default PollsList;
