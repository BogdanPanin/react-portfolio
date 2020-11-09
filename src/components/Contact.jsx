import React from "react";
import "../scss/contact.scss";
import "../scss/mediaContact.scss";
import Form from "./Form";

function Contact() {
  return (
    <section className="contact">
      <a name="contact"></a>
      <p className="contact__header">&lt;contact&gt;</p>
      <p className="contact__title">
        Не стесняйтесь отправить электронное письмо на bogdan.panin@gmail.com
      </p>
      <p className="contact__p">
        Кроме того, вы также можете отправить письмо здесь!
      </p>
      <Form />
      <p className="contact__rights">© 2020, Все права защищены </p>
      <p className="contact__header">&lt;/contact&gt;</p>
    </section>
  );
}

export default Contact;
