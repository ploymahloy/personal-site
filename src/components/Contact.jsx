import React from 'react';

import './Contact.css';

const emailHrefBody =
	"Dear Patrick, %0d%0a%0d%0a I am pleased to extend the following offer of employment to you on behalf of [insert your company's name]. You have been selected as the best candidate for the [insert job position name] position. Congratulations! %0d%0a%0d%0a Sincerely, %0d%0a Your Name %0d%0a%0d%0a **If you've made it this far please know that I am highly driven to become a full time web developer as soon as possible. I'm very excited to get started. Let's connect!** ";
const emailHref = `mailto:patrick.mahloy@gmail.com?subject=Offer%20From%20[Your%20Company]&body=${emailHrefBody}`;

export default function Contact() {
	return (
		<div className="contact-container" id="Contact">
			<div className="contact-card">
				<h2 className="contact-card-title">Contact</h2>
				<a type="button" href={emailHref} className="contact-btn">
					<i className="fa-solid fa-envelope fa-5x" />
				</a>
				<a
					type="button"
					href="https://github.com/ploymahloy"
					className="contact-btn"
				>
					<i className="fa-brands fa-github fa-5x" />
				</a>
				<a
					type="button"
					href="https://www.linkedin.com/in/patrickmahloy"
					className="contact-btn"
				>
					<i className="fa-brands fa-linkedin-in fa-5x" />
				</a>
			</div>
		</div>
	);
}
