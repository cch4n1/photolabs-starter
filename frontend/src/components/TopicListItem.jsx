import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  const { label } = props;

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
