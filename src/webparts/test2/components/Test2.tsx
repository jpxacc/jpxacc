import * as React from 'react';
import styles from './Test2.module.scss';
import { ITest2Props } from './ITest2Props';
import { HashRouter, Route } from "react-router-dom";
import { Nav, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { escape } from '@microsoft/sp-lodash-subset';
//import Home from '../Components/home.js';
//import About from '../Components/about.js';
//import Contact from '../Components/contact.js';
import Staff from '../components/staff';
//import CourseDescription from '../Components/course-description';
//import Schedule from '../Components/schedule.js';


const navStyles: Partial<INavStyles> = { root: { width: 300 } };
const stackTokens: IStackTokens = { childrenGap: 40 };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'React Components',
    links: [
/*      {
        key: 'Home',
        name: 'Home',
        url: '#/',
      },
      {
        key: 'About',
        name: 'About Us',
        url: '#/about',
      },
      {
        key: 'Contact',
        name: 'Contact',
        url: '#/contact',
      },
      {
        key: 'Schedule',
        name: 'Schedule',
        url: '#/schedule',
      },
      {
        key: 'CourseDescription',
        name: 'CourseDescription',
        url: '#/course-description',
      },*/
      {
        key: 'Staff',
        name: 'Staff',
        url: '#/staff',
      },
    ],
  }
];

export default class Test2 extends React.Component<ITest2Props, {}> {
  public render(): React.ReactElement<ITest2Props> {
    return (
      <div className={ styles.test2 }>
        <Stack horizontal tokens={stackTokens}>
          <Nav styles={navStyles} ariaLabel="Nav example similiar to one found in this demo page" groups={navLinkGroups} />
          <HashRouter>
            <Route path='/staff' component={Staff} />
          </HashRouter>
        </Stack>
      </div>
    );
  }
}
