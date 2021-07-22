import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Social from './social';

export default function Terms() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" style={{ background: 'white' }}>
                <div className='rules-main'>
                    <h1 style={{ marginBottom: '0px' }}>Terms and Conditions:</h1>
                    <p style={{ textIndent: '50px' }}>
                        <h2>Personal identification information</h2>
                        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, respond to a survey and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate,

                            Users may, however, visit our Site anonymously.</p>

                        <p>We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>

                        <h2>Non-personal identification information</h2>
                        <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>

                        <h2>Web browser cookies</h2>
                        <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>

                        <h2>How we use collected information</h2>
                        <p>Thinan Groups collects and uses Users personal information for the following purposes:

                            <li>To send periodic emails</li>

                            <li>The email address Users provide for order processing, will only be used to send them information and updates pertaining to their order. It may also be used to respond to their inquiries, and/or other requests or questions. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</li>
                        </p>
                        <h2>How we protect your information</h2>
                        <p>We adopt appropriate data collection, storage and processing practices and security measures
                            to protect against unauthorized access, alteration, disclosure or destruction of your personal
                            information, username, password, transaction information and data stored on our Site.</p>
                        <p>
                            Google Adsense
                            Some of the ads may be served by Google. Google\'s use of the DART cookie enables it to serve ads
                            to Users based on their visit to our Site and other sites on the Internet. DART uses "non personally
                            identifiable information" and does NOT track personal information about you, such as your name,
                            email address, physical address, etc. You may opt out of the use of the DART cookie by visiting
                            the Google ad and content network privacy policy at http://www.google.com/privacy_ads.html</p>
                        <h2>Changes to this privacy policy</h2>
                        <p>Thinan Groups has the discretion to update this privacy policy at any time.
                            When we do, . We encourage Users to frequently check this page for any changes to stay
                            informed about how we are helping to protect the personal information we collect.
                            You acknowledge and agree that it is your responsibility to review this privacy policy
                            periodically and become aware of modifications.</p>

                        <h2>Your acceptance of these terms</h2>
                        <p>By using this Site, you signify your acceptance of this policy and terms of service.
                            If you do not agree to this policy, please do not use our Site.
                            Your continued use of the Site following the posting of changes to this policy
                            will be deemed your acceptance of those changes.
                        </p>

                        <h2>Contacting us</h2>
                        <p>If you have any questions about this Privacy Policy, the practices of this site,
                            or your dealings with this site, please contact us at:</p>
                        <p>
                            Thinan Groups</p>
                        <p>
                            https://compresstheimage.com</p>

                        <p>Sivanthi nagar, Tenkasi</p>

                        <p> thinangroups@gmail.com</p>
                    </p>
                </div>
                <h3 >
                    Click here for <a href='/'>Compresstheimage's homepage</a>
                </h3>
                <Social />
            </Container>
        </React.Fragment >
    );
}