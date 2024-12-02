export const contact = `
   <div class="contact">
        <div class="contact-heading">
          <h1>Contact Us</h1>
        </div>

        <form class="contact-form" action="">
          <div class="input-container input-name">
            <label for="name">Name</label>
            <input
              class="input-box"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div class="input-container input-email">
            <label for="email">Email</label>
            <input
              class="input-box"
              type="text"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div class="input-subject input-container">
            <label for="subject">Subject</label>
            <input
              class="input-box"
              type="text"
              id="subject"
              placeholder="Write a subject "
            />
          </div>

          <div class="input-container input-message">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              class="input-box"
              placeholder="Write a message"
            ></textarea>
          </div>

          <button class="submit-btn">Send</button>
        </form>
      </div>
`;
