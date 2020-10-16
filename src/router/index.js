import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
 
import four from './../componets/404';
import gscroll from './../componets/gscroll';
import ss from './../componets/ss';
import click from './../demo/click';
import show from './../demo/show';
import list from './../demo/list';
import form from './../demo/form';
import father from './../demo/father';
import scroll from './../demo/scroll';
import slide from './../demo/slide';
import hookState from './../demo/hookState';
import cardSlot from './../demo/cardSlot';

const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={ss} />
                     <Route path="/404" component={four} />
                     <Route path="/click" component={click} />
                     <Route path="/show" component={show} />
                     <Route path="/list" component={list} />
                     <Route path="/form" component={form} />
                     <Route path="/father" component={father} />
                     <Route path="/scroll" component={scroll} />
                     <Route path="/slide" component={slide} />
                     <Route path="/hookState" component={hookState} />
                     <Route path="/gscroll" component={gscroll} />
                     <Route path="/cardSlot" component={cardSlot} />
                      {/*路由不正确时，默认跳回home页面*/}
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);
 
export default Root;