import React from 'react'
import './Checkout.css'
// import SubTotal from './SubTotal.js'
const Checkout = () => {
  return (
      <div className='checkout'>
          <div className="checkout__right ">
              
              <h3 className='checkout__right__title'>
                Here's your Subtotal
              </h3>

              <p className='checkout__TotItems'>
                  Total amount(4 items):
                  $577.8
              </p>

              <button className="checkout_coupons">
                  Apply Coupon
              </button>

              <p className='checkout__PayItems'>
                  Payable amount(4 items):
                  $57.8
              </p>

              <button className='checkout_submit'>Proceed to Checkout</button>
                {/* <SubTotal/> */}
            </div>
          <div className="checkout__left">
                {/* <img className='checkout__ad' src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
                <div>
                    <h2 className="checkout__title">Hurray, Your shopping basket</h2>
                  <div className="basket">
                      <div className="basketItems">
                          <div className="itemImg">
                              <img src="https://images.pexels.com/photos/2762939/pexels-photo-2762939.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                          </div>
                          <div className="itemDetail">
                              <h2>Pizza</h2>
                              <h4>
                                  $23.56
                              </h4>
                              <button className='itemDetail_remove'>Remove from basket</button>
                          </div>
                      </div>
                      <div className="basketItems">
                      <div className="itemImg">
                              <img src="https://images.pexels.com/photos/10966377/pexels-photo-10966377.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                          </div>
                          <div className="itemDetail">
                              <h2>Grill veg</h2>
                              <h4>
                                  $43.56
                              </h4>
                              <button className='itemDetail_remove'>Remove from basket</button>
                          </div>
                      </div>
                      <div className="basketItems">
                          <div className="itemImg">
                              <img src="https://images.pexels.com/photos/2762939/pexels-photo-2762939.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                          </div>
                          <div className="itemDetail">
                              <h2>Pizza</h2>
                              <h4>
                                  $23.56
                              </h4>
                              <button className='itemDetail_remove'>Remove from basket</button>
                          </div>
                      </div>
                      <div className="basketItems">
                      <div className="itemImg">
                              <img src="https://images.pexels.com/photos/10966377/pexels-photo-10966377.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                          </div>
                          <div className="itemDetail">
                              <h2>Pasta</h2>
                              <h4>
                                  $56.56
                              </h4>
                              <button className='itemDetail_remove'>Remove from basket</button>
                          </div>
                      </div>
                      
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Checkout