import React from 'react';
import { toast } from 'react-toastify';

const FooterNewsLetter = () => {

    const handleSubscribe = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <form onSubmit={handleSubscribe}>
                <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                <button type="submit"> <i className="fa fa-paper-plane" /></button>
            </form>
        </>
    );
};

export default FooterNewsLetter;