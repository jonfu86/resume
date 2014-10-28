

function DoHome(){
	var Home ='<div class="home_box">\
			<div class="portrait">\
				<img height="300px" src="professional.jpg">\
			</div>\
			<div class="intro_p">\
				<h2>Hello</h2>\
				<h4>Just a little about myself,</h4>\
				<p>\
					After graduating from Cal Poly Pomona I was eager to begin my career as a professional in the Silicon Valley. In an effort to better understand the technologies that powered the amazing tech companies I wanted so badly to work for, I decided to learn coding. After taking the CodingDojo course at the end of 2013, I fell in love with coding and haven\'t looked back!\
				</p>\
				<button onclick="DoPortfolio();" class="projects_button" type="button">View My Projects</button>\
			</div>\
			<div class="contact_p">\
				<h5>Available For:</h5>\
				<p>Hire</p>\
				<br>\
				<h5>Website:</h5>\
				<p>www.jonfu86.com</p>\
				<br>\
				<h5>Phone:</h5>\
				<p>408-841-6900</p>\
				<br>\
				<h5>Email:</h5>\
				<p>jonfu86@gmail.com</p>\
				<br>\
				<h5>LinkedIn:</h5>\
				<p><a href="http://www.linkedin.com/in/jonfu/">www.linkedin.com/in/jonfu/</a></p>\
			</div>\
		</div>\
		<div class="recent">\
			<h1 style="font-size:30px; margin-left:none;">Some of my recent projects:</h1>\
			<br>\
			<div class="project" id="project1">\
				<div class="thumb">\
					<a href="http://get-vaped.net"><img src="vape.jpg"><p>get-vaped.net</p></a>\
				</div>\
				<div class="pop">\
					<a href="http://get-vaped.net"><img src="vape.jpg"><p>get-vaped.net</p></a>\
				</div>\
			</div>\
			<div class="project" id="project2">\
				<div class="thumb">\
					<a href="http://www.topkinghealth.com"><img src="topking.jpg"><p>topkinghealth.com</p></a>\
				</div>\
				<div class="pop">\
					<a href="http://www.topkinghealth.com"><img src="topking.jpg"><p>topkinghealth.com</p></a>\
				</div>\
			</div>\
		</div>';
      $( ".content" ).empty();
      $( ".content" ).append(Home);
      PopImage();
   }
function DoResume(){
	var Resume ='<div class="resume_box">\
	<div class="resume_contact">\
				<h1>Jonathan Fu</h1>\
				<br>\
				<p>Address: 3855 Higuera Rd. San Jose, CA 95148</p>\
				<p>Email: jonfu86@gmail.com</p>\
				<p>Phone: 408-841-6900</p>\
				<p>LinkedIn: <a href="http://www.linkedin.com/in/jonfu/">www.linkedin.com/in/jonfu/</a></p>\
			</div>\
			<img height="215px" src="work.jpg">\
		</div>';
		
		Resume += '<div class="resume_content">\
			<div class="resume_main">\
				<h3>Professional Info</h3>\
				<br>\
				<p>\
					After completing the Coding Dojo course, I have learned the basics of full-stuck web development. I am continuing to learn new technologies to expand my skillset as I accept paid projects as a freelance web developer. I am very passionate about coding and would love to hear about your website, project idea, or employment opportunity.\
				</p>\
				<br>\
				<h3>Work Experience</h3>\
				<br>';

		Resume += '<div class="job">\
						<div class="job_title"><h4>Payments Partner Support</h4><h5>May 2012 - April 2013</h5></div>\
						<p>Google.com - Mtn View, CA</p>\
						<ul>\
							<li>Provide quality customer and technical support to customers through inbound email requests.</li>\
							<li>Assist in developing efficient work-flows for investigating issues and escalation to tier-2 support teams.</li>\
							<li>Independently identify, troubleshoot, document, categorize and replicate customer problems and then escalate complex problems according to defined escalation procedures.</li>\
							<li>Provide input to internal escalation departments, though proper escalation procedures.</li>\
							<li>Retain ownership of individual help requests throughout the resolution process.</li>\
							<li>Report enhancement requests received from customer regarding hardware, application, or documentation.</li>\
							<li>Report bugs to engineering team and communicate bug fixes and new enhancements to customers.</li>\
							<li>Communicate policy changes as well as new features through proactive phone and email outreach.</li>\
						</ul>\
					</div>\
					<br>\
					<div class="job">\
						<div class="job_title"><h4>Tech Support & Visual Media Support</h4><h5>January 2010 - December 2010</h5></div>\
						<p>Raiden Technologies - El Monte, CA</p>\
						<ul>\
							<li>Provided customers with technical and customer service support through email and phone communication.</li>\
							<li>Facilitated the sale of thousands of dollars of merchandise on a weekly basis.</li>\
							<li>Trained several employees in technical aspects of our products and sales/customer service techniques.</li>\
							<li>Led and created original content for a technical support seminar for customer service staff to increase product awareness and basic troubleshooting abilities.</li>\
							<li>Featured in a series of instructional videos for repairs and maintenance of our products.</li>\
							<li>Directly contributed to a 20% reduction in technical service queries over a 6 month period.</li>\
							<li>Assisted in both online and real world product promotion through online social media community management and participating in promotional booths at various events.</li>\
						</ul>\
					</div>\
					<br>\
					<div class="job">\
						<div class="job_title"><h4>Marketing Consultant Intern</h4><h5>August 2008 - October 2008</h5></div>\
						<p>Laszlo Systems - San Mateo, CA</p>\
						<ul>\
							<li>Analyzed customer database demographics using Salesforce and Excel.</li>\
							<li>Generated hundreds of quality leads through phone and email contact on a weekly basis.</li>\
							<li>Provided valuable research information on our major competitors and their products.</li>\
							<li>Provided basic market analysis and input on marketing strategy during weekly meetings.</li>\
						</ul>\
					</div>\
					<br>\
					<div class="job">\
						<div class="job_title"><h4>Marketing Consultant Intern</h4><h5>June 2008 - August 2008</h5></div>\
						<p>eLooMobile - Beijing, China</p>\
						<ul>\
							<li>Conducted research projects regarding iPhone and Android SDK funding as well as applications.</li>\
							<li>Compiled several reports and gave multiple PowerPoint presentations to the local marketing team.</li>\
							<li>Familiarized marketing team with the newest and most popular cell phone applications.</li>\
						</ul>\
					</div>\
					<br>\
					<h3>Education</h3>\
					<div class="job">\
						<div class="job_title"><h4>Coding Dojo - Mountain View</h4><h5>November 2013 - February 2014</h5></div>\
						<br>\
						<p style="font-size:14px;">I have completed the Coding Dojo program to learn full stack web development. I have learned HTML, CSS, jQuery, Javascript, MYSQL, PHP, AJAX, CodeIgniter, and Ruby on Rails.</p>\
					</div>\
					<br>\
					<div class="job">\
						<div class="job_title"><h4>California State Polytechnic University - Pomona</h4><h5>2007-2011</h5></div>\
						<p>Bachelor of Science, International Business and Marketing</p>\
						<br>\
						<p style="font-size:14px;">Coursework in Business Marketing, Market Analysis/Research, Import/Export, Microeconomics, Macroeconomics, Financial Accounting, Operations Research, and Brand Promotion</p>\
					</div>\
					<br>\
					<div class="job">\
						<div class="job_title"><h4>Lynbrook High School</h4><h5>2000-2004</h5></div>\
					</div>\
					<br>\
					</div>\
					<div class="sidebar">\
						<h4>Languages</h4>\
						<br>\
						<ul>\
							<li>HTML/CSS</li>\
							<li>Javascript</li>\
							<li>jQuery</li>\
							<li>MYSQL</li>\
							<li>PHP</li>\
							<li>Ruby on Rails</li>\
							<li>AJAX</li>\
						</ul>\
						<br>\
						<h4>Skills</h4>\
						<br>\
						<ul>\
							<li>Photoshop</li>\
							<li>Salesforce</li>\
							<li>Mandarin Chinese</li>\
							<li>Customer Service</li>\
							<li>Lead Generation</li>\
						</ul>\
					</div>\
					</div>';

		$( ".content" ).empty();
     	$( ".content" ).append(Resume);

}
function DoPortfolio(){
	var Portfolio ='<div class="portfolio_box">\
						<div class="portfolio_intro">\
						<h2>These are some of the projects I\'ve made in the past:</h2>\
						</div>\
					</div>\
					<div class="project_list">\
						<div class="thumb"><a href="http://get-vaped.net"><img src="vape.jpg"><p>get-vaped.net</p></a></div>\
							<div class="project_info">\
							<p>\
								I created get-vaped.net as an informational resource on the benefits of using vaporizers or electronic cigarettes compared to smoking tobacco. I made this website using the Codeigniter framework, jQuery, as well as the parallax.js library. I ran into some interesting challenges when trying to incorporate parallax.js into selectable content and had to settle with adding the parallax effect in the background only. This was my first major project using an MVC framework.\
							</p>\
							</div>\
					</div>\
					<div class="project_list">\
						<div class="thumb"><a href="http://www.topkinghealth.com"><img src="topking.jpg"><p>topkinghealth.com</p></a></div>\
							<div class="project_info">\
							<p>\
								I created topkinghealth.com for a client in Taiwan who owns a health clinic business. This website was made using procedural PHP, jQuery, and javascript. I also used MYSQL to create a database to store information for the support team to contact prospective partners and clients. I used the basic bootstrap design for the navigation bar and modified it to suit what my client wanted. Originally, I didn\'t realize the scope of the project and eventually refactored my code to create universal headers and footers included on each page.\
							</p>\
							</div>\
					</div>';

		$( ".content" ).empty();
     	$( ".content" ).append(Portfolio);

}
function PopImage(){
		$(".pop").hide();
		$("#project1").hover(
			function() {
				$(this).find('.pop').show();
				$(this).find('.thumb').hide();
			},
			function() {
				$(this).find('.pop').hide();
				$(this).find('.thumb').show();
			}
		);

		$("#project2").hover(
			function() {
				$(this).find('.pop').show();
				$(this).find('.thumb').hide();
			},
			function() {
				$(this).find('.pop').hide();
				$(this).find('.thumb').show();
			}
		);
   }

$(document).ready(function(){
	DoHome();
	

});



