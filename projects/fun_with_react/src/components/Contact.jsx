import React from "react";

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder="name" />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="email" />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query"
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
