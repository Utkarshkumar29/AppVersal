import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import storyData from './assets/storyData';
import StoryGroups from './components/StoryGroups';
import StoryModal from './components/StoryModal';

function App() {
  const [selectedStory, setSelectedStory] = useState(null)
  console.log("App", storyData);
  return (
    <div className='flex flex-col gap-[24px] items-center justify-center h-screen bg-gray-100'>
      <p className="text-3xl leading-snug md:text-5xl md:leading-snug lg:text-[64px] lg:leading-[77px] text-black-100 font-medium">
  Welcome to Story Teller
</p>

      <StoryGroups
        stories={storyData[2].details}
        onStorySelect={(story) => setSelectedStory(story)}
      />
      {selectedStory && (
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </div>
  );
}

export default App;
