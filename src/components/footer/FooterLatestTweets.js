import React from "react";
import "../../assets/styles.css";

const FooterLatestTweets = () => {
  return (
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
  );
};

export default FooterLatestTweets;
