import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const topicsMap = props.topics.map(topic => (
    <TopicListItem label={topic.title} key={topic.id} topicHandler={props.topicHandler} topicId={topic.id}/>
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {topicsMap}
    </div>
  );
};

export default TopicList;
