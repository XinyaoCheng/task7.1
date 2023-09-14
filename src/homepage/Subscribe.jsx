import React from 'react'
import "./styles.css";

function Subscribe() {
    return (
        <form id="emailForm" action="/" method="post" className="email_form">
            <div className="email_subs_container">
                <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
                <input type="email" className="form-control" name="email" placeholder="Email" required />
                <button type="button" className="btn btn-outline">Subscribe</button>
            </div>
        </form>
    )
}

export default Subscribe;