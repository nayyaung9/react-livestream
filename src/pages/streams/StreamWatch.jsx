/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import flv from 'flv.js';
import AppWraper from '../../components/AppWraper';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchSingleStream } from '../../actions';

class StreamWatch extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return 'Loading';
    }

    const { title, description } = this.props.stream;

    return (
      <AppWraper>
        <Container style={{ marginTop: 20 }}>
          <video
            ref={this.videoRef}
            style={{ width: '100%' }}
            controls={true}
          />
          <h3>{title}</h3>
          <p>{description}</p>
        </Container>
      </AppWraper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStream: id => dispatch(fetchSingleStream(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamWatch);
