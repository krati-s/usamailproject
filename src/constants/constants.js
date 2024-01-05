import campaign1 from '../assets/images/mc-1.png'
import campaign2 from '../assets/images/mc-2.png'
import campaign3 from '../assets/images/mc-3.png'
import campaign4 from '../assets/images/mc-4.png'
import recentArticle1 from '../assets/images/article-1.png'
import recentArticle2 from '../assets/images/article-2.png'
import recentArticle3 from '../assets/images/article-3.png'
import recentArticle4 from '../assets/images/article-4.png'
import eye from '../assets/svg/eye.svg'
import target from '../assets/svg/target.svg'
import contactPhone from '../assets/svg/contact-phone.svg'
import contactMail from '../assets/svg/contact-mail.svg'
import globe from '../assets/svg/globe-1.svg'
import article1 from '../assets/images/articles-1.png'
import article2 from '../assets/images/articles-2.png'
import article3 from '../assets/images/articles-3.png'
import article4 from '../assets/images/articles-4.png'
import article5 from '../assets/images/articles-5.png'
import article6 from '../assets/images/articles-6.png'
export const campaignData = [
    {
        image : campaign1,
        heading : 'Postcards',
        links : [
            {
                heading : '4x6',
                link : 'javascript:void(0)'
            },
            {
                heading : '5x7',
                link : 'javascript:void(0)'
            },
            {
                heading : '6x11',
                link : 'javascript:void(0)'
            },
            {
                heading : '8.5x11',
                link : 'javascript:void(0)'
            }
        ],
        buttonLink : 'get-started'
    },
    {
        image : campaign2,
        heading : 'Folded Mailers',
        links : [
            {
                heading : 'Self-Mailers',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Brochure Mailers',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Flyers',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Folded Postcards',
                link : 'javascript:void(0)'
            }
        ],
        buttonLink : 'get-started'
    },
    {
        image : campaign3,
        heading : 'Newsletters',
        links : [
            {
                heading : '11x17',
                link : 'javascript:void(0)'
            },
            {
                heading : '8.5x11',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Magazines',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Catalogs',
                link : 'javascript:void(0)'
            }
        ],
        buttonLink : 'get-started'
    },
    {
        image : campaign4,
        heading : 'Letters in Envelopes',
        links : [
            {
                heading : 'Appeal Letters',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Invoices/Statements',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Invitations',
                link : 'javascript:void(0)'
            },
            {
                heading : 'Business Letters',
                link : 'javascript:void(0)'
            }
        ],
        buttonLink : 'get-started'
    }
]

export const letterBoxData = [
    {
        delay : 400,
        counter : 1,
        title : 'Log-in / RFQ',
        paraHeading : 'Stay Connected and informed!',
        para : 'Log in to access your account and manage your mailing campaigns. New to USAMail.Direct? Check our FAQ for answers to common questions and to streamline your experience with us.',
        linkHeading : 'Get Started',
        link : 'place-order'
    },
    {
        delay : 600,
        counter : 2,
        title : 'Shop Mailing Lists',
        paraHeading : 'Tailored Audiences Await!',
        para : 'Dive into our extensive mailing lists to find the perfect audience for your campaign. Browse, select, and purchase lists that align with your target demographics and marketing goals.',
        linkHeading : 'Get Started',
        link : 'place-order'
    },
    {
        delay : 800,
        counter : 3,
        title : 'Graphic Design',
        paraHeading : 'Make Your Message Pop!',
        para : 'Stand out in the crowd with our graphic design services. Whether you have a concept in mind or need creative inspiration, our team is here to help. Start crafting visually compelling mailers today!',
        linkHeading : 'Get Started',
        link : 'place-order'
    },
    {
        delay : 1000,
        counter : 4,
        title : 'Place an Order',
        paraHeading : 'Seamless & Efficient!',
        para : 'Ready to kickstart your campaign? Click here to place an order. Choose your services, upload your materials or design requests, and leave the rest to us. We ensure timely and professional delivery every time.',
        linkHeading : 'Get Started',
        link : 'place-order'
    },
]
export const testimonialData = [
    {
        name :'Mellissa Parker',
        testimonial : ' Great service to send campaign letters. The API is quite clear and gets you up and running in no time. The customer service is quick and concise. Highly recommended!'
    },
    {
        name :'Robert Geller',
        testimonial : 'Great service to send campaign letters. The API is quite clear and gets you up and running in no time. The customer service is quick and concise. Highly recommended!'
    }
]
export const recentArticles = [
    {
        image :recentArticle1,
        heading : 'How it works with USA mail.com? The whole process',
        date :'AUG 25',
        link : 'javascript:void(0)'
    },
    {
        image :recentArticle2,
        heading : 'How it works with USA mail.com? The whole process',
        date :'AUG 24',
        link : 'javascript:void(0)'
    },
    {
        image :recentArticle3,
        heading : 'How it works with USA mail.com? The whole process',
        date :'AUG 24',
        link : 'javascript:void(0)'
    },
    {
        image :recentArticle4,
        heading : 'How it works with USA mail.com? The whole process',
        date :'AUG 22',
        link : 'javascript:void(0)'
    }
]
export const missionData = [
    {
        image : eye,
        title : 'Our Vision',
        description : 'Connecting companies with customers through intelligent personalized communication.'
    },
    {
        image : target,
        title : 'Our Mission',
        description : 'Connecting companies with customers through intelligent personalized communication.'
    }
]
export const contactData = [
    {
        image : contactPhone,
        contactTitle : 'Phone',
        contactText : '(309) 872-6245',
        link : 'tel:(309) 872-6245'
    },
    {
        image : contactMail,
        contactTitle : 'Email',
        contactText : 'info@usamail.direct',
        link : 'mailto:info@USAmaildirect'
    },
    {
        image : globe,
        contactTitle : 'Website',
        contactText : 'USAMail.Direct',
        link : 'javascript:void(0)'
    }
]

export const faqQuestions = [
    {
        question : 'Q: What is my first step in initiating a direct mail campaign?',
        answer : ['The first thing you want to do is target your audience, i.e. whom do you want to mail to? What does your ideal customer look like? What are the demographics that define your ideal customer base? Deciding whom you want to mail to usually determines how many pieces of direct mail you will send out. It also determines what kind of mail piece you will create, i.e. postcard, brochure, enveloped letter, etc….']
    },
    {
        question : ' Q: What is the minimum number of pieces required to do a bulk mailing? ',
        answer : [' No. As long as you are sending out mail at the Presorted Standard or Presorted First Class postage rates, you can just use our mailing permits. The only condition to using Usa Mail’s mailing permit, is that Usa Mail has to be the organization that prepares and processes your mail. Also, only an agent of Usa Mail can present bulk-mail at the post office that has a Usa Mail mailing permit indicia printed on it.']
    },
    {
        question : " Q: How do I take advantage of maximum postage discounts?",
        answer : ["Many people have the misconception that postage discounts are based on the volume of mail sent out at one time. This is inaccurate. Postage discounts are not volume based, but are based the how well the mail is pre-sorted and pre-barcoded. Every bulk mailing is inspected and verified by the post office upon entry into the mail stream. That is when the Post Office determines if you qualify for the discounted postage rates or not. In other words, postage discounts are determined by how your mailing list sorts out, based on postal regulations. Once we have your mailing list, the first thing we do is take out all of the duplicated addresses (there is no need to send duplicate mailings to the same address). Then we Move Update your mailing list to make sure that the person you are targeting is still at that address. Finally, we Zip+4/CASS certify your mailing list, which verifies the delivery address and assigns the nine-digit zipcode. Once we have all of your mailing list information updated, then we pre-sort and pre-barcode your mailing according to USPS regulations. That way your direct mail piece is ready to travel straight to the USPS barcode sorting machines. Presenting mail that is already pre-sorted and pre-barcoded means there is less work for the Post Office to do to process your mailing. In return, they give you reduced postage rates when we present your mail for processing."]
    },
    {
        question : " Q: Are there any design guidelines to consider when preparing a mass mailing?",
        answer : ["Yes!! The United States Post Office has very specific rules and regulationsthat govern the processing of direct mail. It is critical that you follow all of the USPS guidelines as you are designing your mail piece. We also highly recommend that you let our Mail Piece Design Analyst inspect all of your artwork before you send anything off to be printed. Mail pieces that are not designed and printed properly usually end up be classified by the post office as “non-automation compatible” or “ non-machineable”, and therefore end up having to go at a higher postage rate. There have even been instances where mail pieces have been determined to be “non-mailable”, and could not be entered into the post office as bulk mail. As a rule, it’s always better to be safe than sorry. Don’t print anything until we have a chance to look at it. It’s as simple as emailing over a PDF proof for us to look at. Also, we encourage you to check out the “Links” section of our about mail piece design."]
    },
    {
        question : "Q: If we are a non-profit organization, does that automatically mean we qualifyto mail at the Non-profit postage rates?",
        answer :[ " No. In order to mail at the Non-profit postage rates, you need to take the proper documentation to your local Post Office and apply for a Non-profit mailing permit. The USPS will take your application and decide whether or not you qualify to mail at the Non-profit rates."]
    },
    {
        question : "Q: What is NCOA Move Update, and why is it important?",
        answer : ["Move Update is the term used by the United State Postal Service (USPS) in regard to updating all mail delivery addresses with National Change of Address (NCOA) information. The post office now requires that some form of Move Update process be performed on all mailing lists being used in any kind of presorted or discounted postage mailings, i.e. bulk mail. In a nutshell, if you want to do any kind of bulk mailing, you have to make sure that the people on your mailing list that you are mailing to, still reside at the delivery addresses you are mailing to. The reason the Post Office has made this a requirement is because they are trying to reduce the amount of Undeliverable As Addressed (UAA) mail. In 2006 alone, over 9.7 billion pieces of mail were sent out with addresses that could not be delivered. This cost the USPS almost $1.9 billion to process, forward, return, or destroy." ,
         "There are several factors that lead to a mail piece being undeliverable. One of the most common reasons is that the mail piece recipient has moved. Whenever someone fills out a change of address card, or goes to the USPS Change Of Address web page, a record is generated in the post offices NCOA master database. By comparing the addresses in your mailing list against this NCOA master database, we can find the new addresses of those who have moved, and thereby update your mailing list with the new information.Electronically updating your mailing list before you mail is the easiest way to conform to this mandatory USPS requirement. Mailers failing to comply with the Move Update rules stand to lose their automation discounts. This would apply to all the pieces in a given mailing, not just those pieces that couldn’t be delivered. Obviously, any violation would also invite increased scrutiny of future mailings by the U.S. Postal Service. Here at Usa Mail Mailing Services we have the means to electronically Move Update your mailing lists prior to each mailing in order to make sure it complies with the USPS Move Update regulations." ,
        "Move Updating your mailing list prior to each mailing is also an excellent cost saving measure. By cleaning up your mailing list before each mailing, removing undeliverable addresses, removing duplicates, and removing bad addresses, you will ultimately have to send out fewer pieces of mail. Why keep paying over and over again to send out mail that is undeliverable? Not only will Move Updating your database save you money on the overall cost of each mailing, but it will also allow your mail to be delivered directly to your target audience more quickly and accurately. This can dramatically improve your response rates."]
    },
    {
        question : "Q: What is the difference between Presorted Standard mail and Presorted First Class mail?",
        answer : ["The postage due for Presorted Standard mail is less than the postage due for Presorted First Class mail. This is because the level of service provided by the post office is different between the two classes. For instance, Presorted Standard mail does not get forwarding or return service. If the mail piece is Undeliverable as Addressed (UAA), it is disposed of by the post office. Also, Standard mail primarily travels by ground on trucks, which can slow down delivery time, whereas Presorted First Class mail gets quicker delivery service, and even travels via airplane when required. Presorted First Class mail also gets forwarding and return service."]
    },
    {
        question : "Q: Can I send correspondence mail at the Standard mail or Non-profit mail postage rates?",
        answer : ["No. Any mail that has personal information in it particular to the person you are mailing it to, i.e. social security numbers, billing amounts, etc… cannot travel at the Standard mail or Non-Profit mail postage rates. For instance, a church cannot send out their end-of-year statements-of-giving at the Non-profit postage rates. This is because this mail bears personal information, and therefore must be sent via First Class mail."]
    }
]
export const articles = [
    {
        image : article1,
        date : '16 Sep, 2023',
        heading : 'Begin with the end in mind.',
        link : '/article-details',
        articleInfo : "First of all, let's talk about metrics. Metrics are crucial to the success of any direct mail campaign. A little forethought about the goals will ensure that your direct-mail campaign is a major success. What do you consider success? Planning is everything. Define the criteria for measuring success by tracking cost per lead, response rate, and Return on Investment (ROI)."
    },
    {
        image : article2,
        date : '16 Sep, 2023',
        heading : 'Target your very best, most potential customers.',
        link : '/article-details',
        articleInfo : "When you are procuring a mailing list, always make sure that the data you’re retrieving is targeting your best customers and flourishing with opportunity for the unique requirements of your business. The biggest advantage that direct mail has over other advertising mediums is that you can directly and specifically target your best customers. With direct mail, you don’t waste your advertising dollars blasting your message out over the airwaves to everybody. Your best customers meet a very specific demographic criterion. Target them specifically. Direct Mail is sniper rifle. Every other advertising medium is a shotgun. Aim accurately!"
    },    {
        image : article3,
        date : '15 Sep, 2023',
        heading : 'Be absolutely clear about the benefits to your customer',
        link : '/article-details',
        articleInfo : "Be absolutely clear about the benefits to your customer. The goods and services that you are offering is the best factor contributing to the success of any direct mail campaign. The hypothesis, proposal, or invitation must clearly state the features and the benefits to the customer. Remember: features don’t sell… Benefits do. How does your product or service benefit them directly? What is in it for them personally? That is one of the things that makes direct mail so effective… you can target your offer to a very specific group and predict with some accuracy how they’ll respond. This is where time-limited offers, freebies, or other benefits can tip the scales in your favor. Decide on one main benefit rather than throwing in too much information for the customer to focus on. Keep it simple and relevant. Make sure that you call them to some kind of action, i.e. buy now, call today, limited time offer, etc..."
    },    {
        image : article4,
        date : '15 Sep, 2023',
        heading : 'Employ QR Code technology into your mail piece.',
        link : '/article-details',
        articleInfo : "The goal with direct mail is to capture their attention, peek their interest, then play to their curiosity with an irresistible offer and call them to action. You want them to take the direct mail piece that is in their hand and immediately scan in the QR Code and go in to your website. Your “Call to Action” should involve scanning in the QR Code and moving the customer to your online portal. Your website should have all of the information they need to make a purchasing decision and close the sale. Also, the branding, colors, and imagery of your website should match the look of your mail piece. Be consistent."
    },    {
        image : article4,
        date : '15 Sep, 2023',
        heading : 'Do not overlook even the smallest detail.',
        link : '/article-details',
        articleInfo : "Careful oversight of fulfillment and mailing services is crucial. Make sure your documents are proofed and ready before submitting into production. Make sure you supply all of the required data fields when you prep the data. Make sure the number of records you send over is the correct number from your master list. Verify everything. Make sure everything is producing and printing properly. Let multiple people proofread."
    },
    {
        image : article4,
        date : '15 Sep, 2023',
        heading : 'Test and then test again.',
        link : '/article-details',
        articleInfo : "Every mailing you send out is part of your active test marketing. The effectiveness of your direct mail campaigns can always be perfected by testing and retesting the mailings you are promulgating. Timing, message clarity, creative effectiveness, response rate, offer, and other criteria can easily be gauged through tracking the data and monitoring response rates. Document every statistic and track the variables over multiple mailings. Do not skip this step. It is imperative that you figure out what is working and what is not. Do not make assumptions. Test it."
    },
    {
        image : article5,
        date : '12 Sep, 2023',
        heading : 'Measure & evaluate.',
        link : '/article-details',
        articleInfo : "Measure results accurately and track your success factor-by-factor and campaign by campaign. This is how you will determine the cost per lead and ROI. This will help you budget accordingly for all of your marketing efforts. It pays to know the truth. So don't ignore the truth."
    },
    {
        image : article4,
        date : '15 Sep, 2023',
        heading : 'Mail repeatedly to the same list. Be consistent.',
        link : '/article-details',
        articleInfo : "Response rates go up with each consecutive touch. Don’t mail to a list just once, get frustrated and give up. Make sure your offers, your branding, your color schemes, your messaging, your contact information, etc…. is consistent mailing to mailing. You also want the branding to match whatever you’re doing with any of your marketing projects. You want the customers to recognize that this is related to the previous offer they received earlier. Response rates go up with each consecutive hit."
    },
    {
        image : article4,
        date : '15 Sep, 2023',
        heading : 'Make it easy for all of your customers to respond.',
        link : '/article-details',
        articleInfo : "Optimize the design of your direct mail pieces to illicit a response. Remember, customers will tend to want to respond using different communication mediums. Don’t limit their options. Offer customers a choice of response mechanisms and repeat them often. Always have a QR Code, but also include your written web address, email, phone #, etc… This will greatly increase the probability of rapid response. Don’t just talk about your product or service and assume that the customer will be so impressed that they’ll do whatever it takes to contact you. Give them options. Keep it simple. Always repeat the offer and the expiration date. Call them to action."
    },
    {
        image : article6,
        date : '10 Sep, 2023',
        heading : 'Enjoy the fruit.',
        link : '/article-details',
        articleInfo : "Now that you have tested, evaluated, and executed your successful direct mail plan and enjoyed a very healthy ROI, you have all the tools you will need to confidently and proficiently pre-plan your next direct mail campaign. Always remember, direct mail is proactive rather than reactive. Manage and direct the entire “marketing to purchasing” process."
    }
]
export const popularArticles = [
    {
            link : "javascript:void(0)",
            content : "How postcard template customization works?",
            date : "Aug 25"
    },
    {
        link : "javascript:void(0)",
        content : "How postcard template customization works?",
        date : "Aug 22"
},
{
    link : "javascript:void(0)",
    content : "How postcard template customization works?",
    date : "Aug 20"
},
{
    link : "javascript:void(0)",
    content : "How postcard template customization works?",
    date : "Aug 15"
},
{
    link : "javascript:void(0)",
    content : "How postcard template customization works?",
    date : "Aug 12"
},
{
    link : "javascript:void(0)",
    content : "How postcard template customization works?",
    date : "Aug 08"
}
]

export const categories = [
    {
        link : 'javascript: void(0)',
        content : "Mail Post"
    },  
    {
        link : 'javascript: void(0)',
        content : "Postcard "
    },
    {
        link : 'javascript: void(0)',
        content : "Recent News"
    },
    {
        link : 'javascript: void(0)',
        content : "Guides"
    },
    {
        link : 'javascript: void(0)',
        content : "Newsletter"
    },
    {
        link : 'javascript: void(0)',
        content : "Envelope"
    }
]

export const serviceDropdown = [
    {
        to : 'javascript:void(0)',
        itemText : 'Menu 1'
    },
    {
        to : 'javascript:void(0)',
        itemText : 'Menu 2'
    },
    {
        to : 'javascript:void(0)',
        itemText : 'Menu 3'
    },
    {
        to : 'javascript:void(0)',
        itemText : 'Menu 4'
    }
]
export const articleDetails = [
    {
        title : '1. Our Recent Articles',
        content : ["First of all, let's talk about metrics. Metrics are crucial to the success of any direct mail campaign. A little forethought about the goals will ensure that your direct-mail campaign is a major success. What do you consider success? Planning is everything. Define the criteria for measuring success by tracking cost per lead, response rate, and Return on Investment (ROI)."]
    },
    {
        title : '2. Target your very best, most potential customers.',
        content :[ " When you are procuring a mailing list, always make sure that the data you’re retrieving is targeting your best customers and flourishing with opportunity for the unique requirements of your business. The biggest advantage that direct mail has over other advertising mediums is that you can directly and specifically target your best customers. With direct mail, you don’t waste your advertising dollars blasting your message out over the airwaves to everybody. Your best customers meet a very specific demographic criterion. Target them specifically. Direct Mail is sniper rifle. Every other advertising medium is a shotgun. Aim accurately!"]
    },
    {
        title : "3. Be absolutely clear about the benefits to your customer.",
        content : ["The goods and services that you are offering is the best factor contributing to the success of any direct mail campaign. The hypothesis, proposal, or invitation must clearly state the features and the benefits to the customer. Remember: features don’t sell… Benefits do. How does your product or service benefit them directly? What is in it for them personally? That is one of the things that makes direct mail so effective… you can target your offer to a very specific group and predict with some accuracy how they’ll respond. This is where time-limited offers, freebies, or other benefits can tip the scales in your favor. Decide on one main benefit rather than throwing in too much information for the customer to focus on. Keep it simple and relevant. Make sure that you call them to some kind of action, i.e. buy now, call today, limited time offer, etc..."]
    },
    {
        title : "4. Employ QR Code technology into your mail piece.",
        content : ["The goal with direct mail is to capture their attention, peek their interest, then play to their curiosity with an irresistible offer and call them to action. You want them to take the direct mail piece that is in their hand and immediately scan in the QR Code and go in to your website. Your “Call to Action” should involve scanning in the QR Code and moving the customer to your online portal. Your website should have all of the information they need to make a purchasing decision and close the sale. Also, the branding, colors, and imagery of your website should match the look of your mail piece. Be consistent."]
    },
    {
        title : "5. Do not overlook even the smallest detail.",
        content : ["Careful oversight of fulfillment and mailing services is crucial. Make sure your documents are proofed and ready before submitting into production. Make sure you supply all of the required data fields when you prep the data. Make sure the number of records you send over is the correct number from your master list. Verify everything. Make sure everything is producing and printing properly. Let multiple people proofread."]
    },
    {
        title : "6. Test and then test again.",
        content : ["Every mailing you send out is part of your active test marketing. The effectiveness of your direct mail campaigns can always be perfected by testing and retesting the mailings you are promulgating. Timing, message clarity, creative effectiveness, response rate, offer, and other criteria can easily be gauged through tracking the data and monitoring response rates. Document every statistic and track the variables over multiple mailings. Do not skip this step. It is imperative that you figure out what is working and what is not. Do not make assumptions. Test it."]
    },
    {
        title : "7. Measure & evaluate.",
        content : ["Measure results accurately and track your success factor-by-factor and campaign by campaign. This is how you will determine the cost per lead and ROI. This will help you budget accordingly for all of your marketing efforts. It pays to know the truth. So don't ignore the truth."]
    },
    {
        title : "8. Mail repeatedly to the same list. Be consistent.",
        content : ["Response rates go up with each consecutive touch. Don’t mail to a list just once, get frustrated and give up. Make sure your offers, your branding, your color schemes, your messaging, your contact information, etc…. is consistent mailing to mailing. You also want the branding to match whatever you’re doing with any of your marketing projects. You want the customers to recognize that this is related to the previous offer they received earlier. Response rates go up with each consecutive hit."]
    },
    {
        title : "9. Make it easy for all of your customers to respond.",
        content : ["Optimize the design of your direct mail pieces to illicit a response. Remember, customers will tend to want to respond using different communication mediums. Don’t limit their options. Offer customers a choice of response mechanisms and repeat them often. Always have a QR Code, but also include your written web address, email, phone #, etc… This will greatly increase the probability of rapid response. Don’t just talk about your product or service and assume that the customer will be so impressed that they’ll do whatever it takes to contact you. Give them options. Keep it simple. Always repeat the offer and the expiration date. Call them to action."]
    },
    {
        title : "10. Enjoy the fruit..",
        content : ["Now that you have tested, evaluated, and executed your successful direct mail plan and enjoyed a very healthy ROI, you have all the tools you will need to confidently and proficiently pre-plan your next direct mail campaign. Always remember, direct mail is proactive rather than reactive. Manage and direct the entire “marketing to purchasing” process."]
    },
    {
        title : "Making Direct Mail Work for You!!",
        content : ["Direct Mail Marketing is an essential and invaluable tool when seeking to build and sustain profitable relationships with current and prospective customers. Whether you need to purchase a mailing list or utilize your own database, there are several creative ways USAMail.Direct can add value to your mass mailing projects. Boosting your sales and growing your business by reaching your customers with a message that is tailored to that specific audience will translate into increased revenue and brand loyalty. Because you are specifically targeting your very best clients, direct mail is the easiest and most cost effective way to achieve such consistent and measurable growth results." , 
    "Reactivating old accounts and retaining existing accounts does not happen without persistent contact via direct mail to your existing customer base. A successful direct mail campaign remains the method of choice for discerning businesses to stay in touch with current contacts. It is a well-known fact, that the best place to get more business is from your existing customer base. Personalized follow up and constant contact via direct mail is a critical step in the process of effective customer retention. The mailing of informational material can also start generating new business from existing contacts almost immediately. Also, announcing changes in your company's organization, products, or services will initiate curiosity which could encourage prospects and existing customers to take action now rather than later. Educating your customers with informational newsletters and brochures is invaluable to retaining your current customers. However, providing quality information takes time, research, and professional expertise. The ability to target a specific audience, like your existing clientele, is perhaps the most attractive aspect of direct mail. That’s why it is called “Direct Mail” …it’s very nature allows you to directly contact those specific customers that are the most beneficial to you.",
    "Developing your brand, or enhancing your market presence and increasing sales volume in existing accounts is the most cost effective manner to grow revenue. To get the most “bang for your marketing buck” it is best to retain the assistance of a professional direct mail company that knows all of the ins and outs of the mail and print industry. There are so many ways to keep costs under control. The biggest way to save money is by using a CASS Certified and PAVE Certified mail marketing company. In order to help you qualify for maximum postage discounts and quick delivery service, USAMail.Direct. presorts and pre-barcodes your mail while adhering very strictly to postal guidelines and regulations designed to ensure the best deliverability and the biggest discounts in postage.",
    "The other area where expert help is a necessity is in layout and design of your mail piece. It is mission critical that your marketing piece is designed to travel through the mail stream seamlessly without any obstacles or delays, or additional postage assessments. USAMail.Direct mail piece design analysts are unmatched anywhere else in the industry. Successful companies realize and exploit the fact that direct mail is one of the most cost effective methods of sales promotion, but they also realize that it has to be done right. Organizations looking to strategically accelerate business growth, keep the attention of these specific target markets at the forefront. They also know that they need the professional services of a company like USAMail.Direct if they want to exceed projected sales and marketing goals. It’s time to put Direct Mail to work for you!!"
    ]
    }
]