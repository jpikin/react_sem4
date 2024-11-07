import './App.css';
import ListPage from './task3/ListPage';
// import Box from './components/Box';
// import List from './components/List';

function App() {
  
  const listItems = [
    {name: 'name1',
     description: 'description1' 
    },
    {name: 'name2',
      description: 'description2' 
     },
     {name: 'name3',
      description: 'description3' 
     },
     {name: 'name4',
      description: 'description4' 
     },
  ]
  const ulStyle = {listStyleType: 'none'}

  const changePage = () => {
    console.log('pif-paf')
  }
  // const listElements = [1,2,3,4,5,6,7];
  //
  // const renderItem = (item, index) => {
  //   const style = {color: index % 2 === 0 ? 'blue' : 'green'}
  //   return (
  //     <div style={style}>
  //       {item} - Уникальный стиль
  //     </div>
  //   )
  // }
  return (
    <div className="App">
      {/* <Box children={<span>Holly shit, it works!</span>}/>
      <Box children={<button>Push</button>}/>  
      <List listItems={listElements} renderItem={renderItem}/> */}
      <ListPage children={
        <ul style={ulStyle}>
          {listItems.map(value =>
            <li key={listItems.indexOf(value)} onClick={changePage}>
              {value.name}
            </li>
          )}
        </ul>
      }/>

    </div>
  );
}

export default App;
