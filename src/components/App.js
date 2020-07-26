import React from 'react';
import Route from './Route';
import Header from './Header';
import LearnReact from './LearnReact';
import LearnHtmlCss from './LearnHtmlCss';
import LearnNode from './LearnNode';




const App = () => {
   
    return(
        <div className="ui container">
            <Header />
            <Route path='/html-css'>
                <LearnHtmlCss />
             </Route>
             <Route path='/react'>
                <LearnReact />
             </Route>
             <Route path='/node'>
                <LearnNode/>
             </Route>

        </div>
       
    );
}

export default App;