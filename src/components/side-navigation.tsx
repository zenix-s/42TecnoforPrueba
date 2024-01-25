import {
    SideNavigation,
    NavigationHeader,
    NavigationContent,
    NavigationFooter,
    Header,
    Footer,
  } from '@atlaskit/side-navigation';
  
  // import '@atlaskit/side-navigation/style.css';



const Sidebar = () => {
  return (
    <SideNavigation label="project" testId="side-navigation">
      <NavigationHeader>
        <Header>Your Project Name</Header>
      </NavigationHeader>
      <NavigationContent>
        {<p>Hola mundo</p>}
      </NavigationContent>
      <NavigationFooter>
        <Footer>Footer content</Footer>
      </NavigationFooter>
    </SideNavigation>
  );
};

export default Sidebar;
