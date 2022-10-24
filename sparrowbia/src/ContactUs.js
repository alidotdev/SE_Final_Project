import React from "react";
export default function ContactPage(){
    return (
        <>
        <div className="ContactClass" id="Heading" >
          <h2>Contact Us</h2>
        </div>
        <div id="TopPara" className="ParaClass">
        New York, NY 10012, US
        <br />
        Email: customercare@sparrowbia.pk
        <br />
        Helpline: 042-111-128-733
        <br />
        <br />
        </div>
        <div class="d-flex justify-content-between">
        <div id="Body" className="BodyClass">
            <label>Name</label>
            <input type="Name"></input>
            <br />
            <br />
            <label>Email</label>
            <input type="Email"></input>
            <br />
            <br />
            <label>Phone</label>
            <input type="Phone"></input>
            <br />
            <br />
            <label>Your Message </label>
            <textarea id="Message" name="w3review" rows="4" cols="50"></textarea>
            <br />
            <br />
            <button>Submit</button>
        </div>
        </div>
        </>
    )
}