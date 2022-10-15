import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/main";
import {MorePage} from "../pages/more";

export const App = () => {

  return (
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'more'} element={<MorePage/>}/>
      </Routes>

  );
}
