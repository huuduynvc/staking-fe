import EnterSouni from './components/EnterSouni/EnterSouni';
import IntegrationSection from './components/IntegrationSection/IntegrationSection';
import MainSection from './components/MainSection/MainSection';
import Header from './components/Header/Header';

import classes from './App.module.css'
function App() {
  return (
    <div className={classes.homepage}>
      <Header />
      <MainSection />
      {/* <EnterSouni /> */}
      {/* <IntegrationSection /> */}
    </div>
  );
}

export default App;
