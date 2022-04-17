import './App.css';

function App() {

  return (
    <div className="App">
      <div className="KTopTriangle"></div>
      <div className="KBottomTriangle"></div>
      <div className="KTopTriangleTrans"></div>
      <div className="KBottomTriangleTrans"></div>
      <header>Meet Kotlin</header>
      <div className="container">
        <div className="content">
          <h1>Come, Learn Kotlin from the Experts</h1>
          <h4>Meet Kotlin is a thriving community of Kotlin enthusiasts who publish content and live sessions. 
            Check out this YouTube playlist and make sure to subscribe!</h4>
        </div>
        <iframe className="video" src="https://www.youtube.com/embed/?listType=playlist&list=PLw3tvNaR6PRMyZCCdaGJaB6KWSaQWrOLx" frameborder="0" allowfullscreen></iframe>
      </div>
      <footer>
        <div>
          <a href="https://www.youtube.com/channel/UCdsPze-RrIr_J9ATaZQehdg?sub_confirmation=1" target="_blank">
            <button class="bn632-hover bn21">Start Learning</button>
          </a>
          <a href="mailto:kotlinmeet@gmail.com"><button class="bn632-hover bn20">Become a Speaker</button></a>
        </div>
        <div className="madewithlove">Made with ❤ by Meet Kotlin team</div>
      </footer>
    </div>
  );
}

export default App;
