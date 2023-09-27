import { React, useState } from 'react'
import "./styles.css";
import axios from 'axios';
import { Alert } from 'react-bootstrap';


function SubscribeEmail() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {

            const apiUrl = 'https://api.mailgun.net/v3/sandbox5ff35f5aaa83492c8aaf470e63ce5749.mailgun.org/messages';
            const data = {
                from: 'DevLink <mailgun@sandbox17d71fe965714045b7a0de3605282bd6.mailgun.org>',
                to: email,
                subject: 'Welcome email',
                text: 'If you receive this welcome email, it means you subscribed successfully!'
            };


            const response = await axios.post(apiUrl, data, {
                auth: {
                    username: 'api',
                    password: '993aba3832f21e18556ac6716521e023-db137ccd-4371273a'
                },
                params: {
                    from: 'DevLink <mailgun@sandbox17d71fe965714045b7a0de3605282bd6.mailgun.org>',
                    to: email,
                    subject: 'Welcome email',
                    text: 'If you receive this welcome email, it means you subscribed successfully!'

                }
            });

            if (response.status === 200) {
                setMessage('Subscribe successful! Check your email for a welcome message.');
                setAlertVariant('success');
            } else {
                setMessage('Failed to subscribe. Please try again later.');
                setAlertVariant('danger');
            }

        } catch (error) {
            setMessage('Failed to subscribe. Please try again later.');
            setAlertVariant('danger');
            console.error(error);
        }
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };



    return (
        <div>
            <form id="emailForm" onSubmit={handleSubscribe} className="email_form">
                <div className="email_subs_container">
                    <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Email" required />
                    <button type="submit" className="btn btn-outline">Subscribe</button>
                </div>

            </form>
            {showAlert && (
                <Alert
                    variant={alertVariant}
                    className={`fixed-alert ${showAlert ? 'slide-in' : ''}`}
                >
                    {message}
                </Alert>
            )}

        </div>
    )
}

export default SubscribeEmail;