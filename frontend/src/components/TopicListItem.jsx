import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  const { label } = props;
  console.log("anything")


  return (
    <div className="topic-list__item" onClick={ () => { props.topicHandler(props.topicId)}}>
      {/* Insert React */}
      {/* <a href="" style={{ textDecoration: 'none' }} ><span >{label}</span></a> */}
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
