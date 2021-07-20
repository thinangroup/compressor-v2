import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Social from './social';

export default function EngalaPathi() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" style={{ background: 'white' }}>
                <div className='rules-main'>
                    <h1 style={{ marginBottom: '0px' }}>About Us:</h1>
                    <p style={{ textIndent: '50px' }}>
                        Compress The Image is the product of Thinan groups.
                        Thinan Groups was started by group of young entrepreneurs because we need to solve the
                        problems that is occurring in our day to day life. That's why we started this Thinan Groups
                        which is started on 2020 during the pandemic. We faced many failures and we even closed the
                        project and loose the confidence of building own websites. Then again we started during 2021
                        and successfully launched our website Compresstheimage.com which is now available worldwide.
                        After our first launch our journey has started with many challenges where we learnt much about
                        online and what should be done to have a successful business model.
                        Now we are in towards developing many sites models to solve the problems that are faced by
                        customers throughout the world. You can also email us to thinangroups@gmail.com. We value our
                        users/customers suggestion.
                    </p>
                </div>
                <h3 >
                    Click here for <a href='/'>Compresstheimage's homepage</a>
                </h3>
                <Social />
            </Container>
        </React.Fragment>
    );
}