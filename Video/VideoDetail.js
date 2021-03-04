import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>;
    }

  return <div>{video.snippit.tittle}</div>;
};

export default VideoDetail;
