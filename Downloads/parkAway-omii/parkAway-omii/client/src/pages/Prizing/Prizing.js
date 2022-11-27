import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Prizing.css'

class Prizing extends Component {
  render() {
    return (
      <div className="pricing-wrapper clearfix">
		
		<h1 className="pricing-table-title">Prising List</h1>

		<div className="pricing-table">
			<h3 className="pricing-title">Basic Parking</h3>
			<div className="price">$60<sup>/ mes</sup></div>
			
			<ul className="table-list">
				<li> Work Hours <span>Access</span></li>
				<li>1 Day <span>regurlarly</span></li>
				<li>0 <span> Transfer allowence</span></li>
				<li>Car Covering <span className="unlimited">Charged Extra</span></li>
				<li>Carwash <span className="unlimited">Charged Extra</span></li>
				<li>Battery Heater <span> not-included</span></li>
			</ul>
			
			<div className="table-buy">
				<p>$60<sup>/ mes</sup></p>
				<a href="/contact" className="pricing-action">Buy</a>
			</div>
		</div>
		
		<div className="pricing-table recommended">
			<h3 className="pricing-title">Premium Parking</h3>
			<div className="price">$100<sup>/ day</sup></div>
			
			<ul className="table-list">
        <li> 24 Hours <span>Access</span></li>
				<li>1 Day <span>regurlarly</span></li>
				<li>2 <span> Transfer allowence</span></li>
				<li>Car Covering <span className="unlimited">Included</span></li>
				<li>Carwash <span className="unlimited">Charged Extra</span></li>
				<li>Battery Heater <span> Charged Extra</span></li>
			</ul>
			
			<div className="table-buy">
				<p>$100<sup>/ day</sup></p>
				<a href="/contact" className="pricing-action">Buy</a>
			</div>
		</div>

		<div className="pricing-table">
			<h3 className="pricing-title">Ultimate Parking</h3>
			<div className="price">$200<sup>/ mes</sup></div>
			
			<ul className="table-list">
				<li> Unlimited <span>Access</span></li>
				<li>1 Day <span>regurlarly</span></li>
				<li>5 <span> Transfer allowence</span></li>
				<li>Car Covering <span className="unlimited">Included</span></li>
				<li>Carwash <span className="unlimited">Included</span></li>
				<li>Battery Heater <span> Included</span></li>
			</ul>
			
			<div className="table-buy">
				<p>$150<sup>/ day</sup></p>
				<a href="/contact" className="pricing-action">Buy</a>
			</div>
		</div>
	</div>
    );
  }
}

export default Prizing;
