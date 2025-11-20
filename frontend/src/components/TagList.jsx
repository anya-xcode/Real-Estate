const TagList = ({ tags, selectedTags = [], onTagClick, showAll = false }) => {
  const displayTags = showAll ? tags : tags.slice(0, 8);

  return (
    <div className="tag-list">
      <button
        onClick={() => onTagClick('')}
        className={`tag-list__item ${selectedTags.length === 0 ? 'tag-list__item--active' : ''}`}
      >
        All Topics
      </button>
      
      {displayTags.map((tag, index) => (
        <button
          key={index}
          onClick={() => onTagClick(tag)}
          className={`tag-list__item ${selectedTags.includes(tag) ? 'tag-list__item--active' : ''}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;