// src/components/Contact.js
import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="section contact-section">
      <h2>Contact</h2>
      <p>This is the contact section. Add your contact information or a form here.</p>
      <p>Email: your.email@example.com</p>
      {/* You could add a contact form component here later */}
    </section>
  );
});

export default Contact;