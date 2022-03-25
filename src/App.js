import { 
  Admin, 
  Agent, 
  Analytics, 
  Bell, 
  CaretDown, 
  CaretRight, 
  FilterCaretDown, 
  Help, 
  Knowledge, 
  Search, 
  SearchTwo
} from './assets'
import { AnalyticsBox } from './components';

const App = () => {
  return (
    <div>
      <div className="side-nav">
        <div className="name-container">
          <h3>Metacare</h3>
          <p>adeyinka@metacare.app</p>
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <div className="nav-item-main">
              <Admin />
              <p>Admin</p>
              <CaretRight />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-main">
              <Knowledge />
              <p>Knowledge Base</p>
              <CaretRight />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-main">
              <Knowledge />
              <p>Train SAM</p>
              <CaretRight />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-main">
              <Agent />
              <p>Agent Inbox</p>
              <CaretRight />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-main">
              <Help />
              <p>Help Center</p>
              <CaretRight />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-main">
              <Analytics />
              <p className='selected-side-nav'>Analytics</p>
              <CaretDown />
            </div>
            <div className='nav-item-sub'>
              <p className='selected-nav-item-sub'>Teams</p>
              <p>Knowledge Base</p>
              <p>Training SAM</p>
              <p>Help Center</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="top-bar">
          <div className="first-section">
            <div className='search-container'>
              <input type="text" placeholder='Ask us any question' />
              <Search />
            </div>
            <div className='notification-profile-container'>
              <div className='notification'>
                <Bell />
                <div className='notification-number'>3</div>
              </div>
              <div className='profile-divide' />
              <div className='profile'>
                <div className="circle" />
                <CaretDown />
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className='nav'>
              <span className='selected-nav'>Efficiency</span>
              <span>Volume</span>
              <span>Customer Satisfaction</span>
              <span>Backlog</span>
            </div>
          </div>
          <div className="third-section">
            <h1 className='title'>Efficiency Analytics</h1>  
            <div className='third-section-right'>
              <div className="search-two-container">
                <SearchTwo />
                <input type="text" placeholder='Search' />  
              </div>
              <div className="filter">
                <p>Filter Options</p>  
                <FilterCaretDown />
              </div>
              <div className="divider-two"></div>
              <button className='export-btn'>Export</button>
            </div>
          </div>
        </div>
        <div className='main-content'>
          <AnalyticsBox 
            mainTitle="Average response Time"
            timeTitle="Average Response Time"
            lineColor="#F05D23" 
          />
          <AnalyticsBox 
            mainTitle="Replies per resolution"
            timeTitle="Average Replies"
            lineColor="#3E68FF" 
          />
          <AnalyticsBox 
            mainTitle="Average resolution time"
            timeTitle="Average Resolution Rate"
            lineColor="#FB6491" 
          />
          <AnalyticsBox 
            mainTitle="First contact resolution rate"
            timeTitle="Average Contact Rate"
            lineColor="#07C9E2" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;