import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/main";
import {MorePage} from "pages/more";
import {ROUTES} from "shared/constants";

export const App = () => {
  return (
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage/>}/>
        <Route path={ROUTES.MORE} element={<MorePage/>}/>
      </Routes>
  );
}
