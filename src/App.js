import React from 'react';
import './App.css';
import HeaderForm from './components/header/HeaderForm';
import HeaderButton from './components/header/HeaderButton';
import MainPost from './components/main/MainPost';
import MainPagination from './components/main/MainPagination';
import MAinSideCategory from './components/main/MainSideCategory';
import MAinSideForm from './components/main/MainSidePopularPost';
import MainSidePupolasPost from './components/main/MainSidePopularPost';
import MainSideRecentPost from './components/main/MainSideRecentPost';
import MainPageHeader from './components/main/MainPageHeader';
import FooterLatestTweets from './components/footer/FooterLatestTweets';
import FooterSocialicons from './components/footer/FooterSocialIcon';
import HeaderLogo from './components/header/HeaderLogo';


function App() {
  return (
      <>
      <div className="body">
        <header id="header" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 57, "stickySetTop": "-57px", "stickyChangeLogo": true}'>
        <div className="header-body">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <HeaderLogo />
              </div>
              <div className="header-column">
                <div className="header-row">
                  <div className="header-search hidden-xs">
                    <HeaderForm />
                  </div>
                  <nav className="header-nav-top">
                    <ul className="nav nav-pills">
                      <li className="hidden-xs">
                        <a href="about-us.html">
                          <i className="fa fa-angle-right"></i> About Us</a>
                      </li>
                      <li className="hidden-xs">
                        <a href="contact-us.html">
                          <i className="fa fa-angle-right"></i> Contact Us</a>
                      </li>
                      <li>
                        <span className="ws-nowrap">
                          <i className="fa fa-phone"></i> (123) 456-789</span>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-row">
                  <div className="header-nav">
                    <HeaderButton />
                    <ul className="header-social-icons social-icons hidden-xs">
                      <li className="social-icons-facebook">
                        <a href="http://www.facebook.com/" target="_blank" title="Facebook">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="social-icons-twitter">
                        <a href="http://www.twitter.com/" target="_blank" title="Twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="social-icons-linkedin">
                        <a href="http://www.linkedin.com/" target="_blank" title="Linkedin">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                      <nav>
                        <ul className="nav nav-pills" id="mainNav">
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="index.html">
                              Home
                            </a>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="index.html">
                              Register
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </header>

        <div role="main" className="main">

        <MainPageHeader />

        <div className="container">

          <div className="row">
            <div className="col-md-9">
              <div className="blog-posts">

                <MainPost />
                <MainPost />
                <MainPost />
                <MainPost />
            
                <MainPagination />

              </div>
            </div>

            <div className="col-md-3">
              <aside className="sidebar">

              <MAinSideForm />

                <hr/>

                <h4 className="heading-primary">Categories</h4>
                <ul className="nav nav-list mb-xlg">
                  <MAinSideCategory name ={"tecnologia"} />
                  <MAinSideCategory name ={'Diseño'}/>
                  <MAinSideCategory name ={'musica'}/>
                  <MAinSideCategory name ={'ciencia'}/>
                  <MAinSideCategory name ={'cultura'}/>
                  
                </ul>

                <div className="tabs mb-xlg">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#popularPosts" data-toggle="tab">
                        <i className="fa fa-star"></i> Popular</a>
                    </li>
                    <li>
                      <a href="#recentPosts" data-toggle="tab">Recent</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="popularPosts">
                      <ul className="simple-post-list">
                      <MainSidePupolasPost />
                      <MainSidePupolasPost />
                      <MainSidePupolasPost />     
                      </ul>
                    </div>
                    <div className="tab-pane" id="recentPosts">
                      <ul className="simple-post-list">
                        <MainSideRecentPost />
                        <MainSideRecentPost />
                        <MainSideRecentPost />                
                      </ul>
                    </div>
                  </div>
                </div>

                <hr/>

                <h4 className="heading-primary">About Us</h4>
                <p>Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor
                  fringilla libero. Nulla nunc dui, tristique in semper vel. Nam dolor ligula, faucibus id sodales in, auctor
                  fringilla libero. </p>

              </aside>
            </div>
          </div>

        </div>

        </div>

        <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-ribbon">
              <span>Get in Touch</span>
            </div>
            <div className="col-md-3">
              <div className="newsletter">
                <h4>Newsletter</h4>
                <p>Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</p>

                <div className="alert alert-success hidden" id="newsletterSuccess">
                  <strong>Success!</strong> You've been added to our email list.
                </div>

                <div className="alert alert-danger hidden" id="newsletterError"></div>

                <form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST">
                  <div className="input-group">
                    <input className="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text"/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Latest Tweets</h4>
              <FooterLatestTweets />
            </div>
            <div className="col-md-4">
              <div className="contact-details">
                <h4>Contact Us</h4>
                <ul className="contact">
                  <li>
                    <p>
                      <i className="fa fa-map-marker"></i>
                      <strong>Address:</strong> 1234 Street Name, City Name, United States</p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-phone"></i>
                      <strong>Phone:</strong> (123) 456-789</p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-envelope"></i>
                      <strong>Email:</strong>
                      <a href="mailto:mail@example.com">mail@example.com</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <h4>Follow Us</h4>
              <ul className="social-icons">
                <FooterSocialicons />
                <FooterSocialicons />
                <FooterSocialicons />       
              </ul>
            </div>
          </div>
        </div>
        </footer>
        </div>
      </>
  );
}

export default App;
