import React from 'react';
import Route from './Route';
import Header from './Header';
import LearnReact from './LearnReact';
import LearnHtmlCss from './LearnHtmlCss';
import LearnNode from './LearnNode';




const App = () => {
   
    return(
        <div className="ui container">


<iframe width="560" height="315" src="https://www.youtube.com/embed/10jHXhNwCqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Header />
            <Route path='/webdev/html-css'>
                <LearnHtmlCss />
             </Route>
             <Route path='/webdev/react'>
                <LearnReact />
             </Route>
             <Route path='/webdev/node'>
                <LearnNode/>
             </Route>

        </div>
       
    );
}

export default App;