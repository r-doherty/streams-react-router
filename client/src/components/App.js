import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';

const App = () =>
{
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/net" component={StreamCreate}/>
                    <Route path="/streams/edit" component={StreamEdit}/>
                    <Route path="/streams/delete" component={StreamDelete}/>
                    <Route path="/streams/show" component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;