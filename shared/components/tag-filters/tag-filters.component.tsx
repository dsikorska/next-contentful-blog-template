import React, { FunctionComponent } from 'react';

type Props = {
  tags: { id: string; name: string }[];
  selectedTagId: string;
  updatePage: Function;
};

const TagFilters: FunctionComponent<Props> = ({
  tags,
  updatePage,
  selectedTagId
}) => {
  const handleTagChosen = (tag) => {
    updatePage(tag);
  };

  const renderTag = (tag, index) => (
    <div key={index} onClick={() => handleTagChosen(tag.id)}>
      {tag.name}
    </div>
  );

  return (
    <div>
      <h2>Filter By Tags.</h2>
      <div>
        <div onClick={() => handleTagChosen('')}>All</div>
        {tags.map(renderTag)}
      </div>
    </div>
  );
};

export default TagFilters;
