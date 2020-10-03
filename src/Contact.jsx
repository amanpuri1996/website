import React from 'react';

const Contact = () => {
  return (
    <>
      <div class="container">
        <div >
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div class="row">
          <div class="column">
            <img src="/w3images/map.jpg" alt="img" />
          </div>
          <div class="column">
            <form>
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;