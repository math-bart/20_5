import React from 'react';

const Contact = () => (
  <div>
	<form>
	  <h3>Contact Us</h3>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="name" className="form-control" id="name" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input type="subject" className="form-control" id="name" placeholder="Subject" />
      </div>
        <textarea type="message" rows="4" cols="54"/>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
	<div className="contactdetails">
      <h4> <strong> Physical Address :</strong> </h4>
      <h4>90-78 / 890 , Newyork demo lane,</h4>
      <h4>United States</h4>
      <h4><strong>Email : </strong> info@yourdomain.com</h4>
      <h4><strong>Call : </strong> +90-890-8900-00</h4>
	  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d385221.7682753931!2d-8.147914!3d41.035208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzA2LjgiTiA4wrAwOCc1Mi41Ilc!5e0!3m2!1spl!2spl!4v1524428823174"  title="map" allowFullScreen></iframe>
    </div>
  </div>
);

export default Contact;