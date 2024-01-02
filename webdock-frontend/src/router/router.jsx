import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from '../layout/navigation/Navigation';
import RoadmapView from '../views/RoadmapView';
import ListView from '../views/ListView';
import SinglePostView from '../views/SinglePostView';

import SortFunctionAndFilterContainer from '../components/SortFunctionAndFilterContainer/SortFunctionFilterContainer';
import CreatePostModal from '../components/CreatePostModal/CreatePostModal';
import SelectCategory from '../components/Modal/SelectCategory/SelectCategory';
import LoginScreen from '../components/Modal/LoginScreen/LoginScreen';
import MergePostModal from '../components/Modal/MergePostModal/MergePostModal';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <CreatePostModal />
      <MergePostModal />
        <Routes>
          <Route exact path="/" element={<RoadmapView />} />
          <Route path="/listview" element={<ListView />} />
          <Route path="/posts/:id" element={<SinglePostView />} /> 
          <Route path="/sort" element={<SortFunctionAndFilterContainer />} /> 
          <Route path="/selectcategory" element={<SelectCategory />} />  
          <Route path="/login" element={<LoginScreen />} />  
        </Routes>
    </BrowserRouter>
  );
};

export default Router;