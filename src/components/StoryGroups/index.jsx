import StoryItem from "../StoryItem";


const StoryGroups = ({ stories, onStorySelect }) => {
  return (
    <div className=" grid grid-cols-3 gap-4 sm:flex flex-wrap overflow-x-auto pb-2 items-center justify-center">
      {stories.length>0 && stories.map((story) => (
        <StoryItem key={story.id} story={story} onClick={() => onStorySelect(story)} />
      ))}
    </div>
  );
};

export default StoryGroups;
