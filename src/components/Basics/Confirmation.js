import React from 'react'
import './Confirmation.css'
const Confirmation = () => {
    return (
        <div className="order_confirmation">
            <div className='Confirmation'>
                <div className='Confirmation_thanks'>
                    <h1>Thankyou for choosing us</h1>
                </div>
                <div className='Confirmation_email'>
                    <p>A confirmation email will be sent to the registered email once the item(s) is shipped</p>
                </div>
                <div className='Confirmation_summary'>
                    <div className='summary_bit'>
                        <div>
                            <h4>Order No.</h4>
                            <p>#8675649</p>
                        </div>
                        <div>
                            <h4>Payment mode</h4>
                            <p>VISA##########4567</p>
                        </div>
                    </div>
                    <div className="summary_bit">
                        <h4>Order Date</h4>
                        <p>23/4/2022</p>
                    </div>
                    <div className="summary_bit">
                        <h4>Address</h4>
                        <p>Lorem ipsum dolor sit,
                            amet consect
                            etur adipisicing elit. Debitis beatae ab nesciunt.</p>
                    </div>
                </div>
                <div className='Confirmation_note'>
                    <p>You may cancel the order withim approximately 12hour after the confirmation.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quaerat tenetur nu
                        mquam facilis consequatur maiores, sint corrupti itaque quo voluptatibus id praesentium q
                        uis ducimus ut nam? Molestiae, dolores adipisci. Incidunt molestiae illo animi voluptas vo
                        luptates, distinctio nesciunt sunt eligendi saepe ratione assumenda iste recusandae sed?</p>
                </div>
                <div>
                    <button className="Confirmation_receipt">Download receipt</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation