export function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-page__title">Contact Us</h1>
      <p className="contact-page__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu sapien
        vel ligula bibendum tincidunt. Praesent iaculis leo nisi, ac pulvinar
        velit rutrum vitae. Nam nec purus faucibus, iaculis nibh quis, auctor
        risus. Pellentesque et risus ligula. Integer maximus vehicula ante, id
        lobortis libero.
      </p>
      <form className="contact-page__form">
        <label className="contact-page__label" htmlFor="name">
          Name
        </label>
        <input className="contact-page__input" type="text" id="name" />
        <label className="contact-page__label" htmlFor="email">
          Email
        </label>
        <input className="contact-page__input" type="email" id="email" />
        <label className="contact-page__label" htmlFor="message">
          Message
        </label>
        <textarea className="contact-page__textarea" id="message"></textarea>
        <button className="contact-page__button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
