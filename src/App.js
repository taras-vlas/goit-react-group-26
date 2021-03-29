import MyFirstComponent from './components/MyFirstComponent';
// import MySecondComponent from './components/MySecondComponent';
import MyThirdComponent from './components/MyThirdComponent';

// Елементи, => Компоненти (файли-класи, файли-ф-ції)
// Компоненту пишуть з Великої літери
// function App() {
const App = () => {

  /* props ***є  const user  її треба передати у MyFirstComponent... */
    const user = {
      name: 'Bobby',
    };

  return (
    // ф-я повертає jsx <теги>, 
    // а Babel перетворює їх в createElement < div >, <h1>
    // <div class="App">
    <div className="App">
      <h1>Hello from react</h1>
{/* Тут Рендерю Компонент і звідси передаю властивості/Props/чи настройки компонента */}
      {/* <MyFirstComponent /> */}
      {/* <MyFirstComponent user={user} /> */} 
      <MyFirstComponent user={user} x={73} />
      {/* <MyFirstComponent user={user} x = "Hi!" /> */}
      <p>lorem ipsum </p>
      {/* <MySecondComponent /> */}
      {/* <MySecondComponent user={user} /> */}
      <MyThirdComponent>
        <>
        <p>lorem, , ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button>Push me</button>
        </>
      </MyThirdComponent>
    </div>
  );
};

export default App;
