import './App.css';
import Box from './components/Box';
import List from './components/List';

function App() {

  const listElements = [1,2,3,4,5,6,7];
  
  const renderItem = (item, index) => {
    const style = {color: index % 2 === 0 ? 'blue' : 'green'}
    return (
      <div style={style}>
        {item} - Уникальный стиль
      </div>
    )
  }
  return (
    <div className="App">
      <Box children={<span>Holly shit, it work!</span>}/>
      <Box children={<button>Push</button>}/>  

      <List listItems={listElements} renderItem={renderItem}/>
    </div>
  );
}

export default App;
