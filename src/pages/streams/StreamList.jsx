import React, { useEffect } from 'react';
import AppWraper from '../../components/AppWraper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.streams);
  const streams = Object.values(state);

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  return (
    <AppWraper>
      <div>
        <ul>
          {streams &&
            streams.map(({ id, title, description }) => {
              return (
                <>
                  <li>{title}</li>
                  <li>{description}</li>
                </>
              );
            })}
        </ul>
      </div>
    </AppWraper>
  );
};

export default StreamList;
