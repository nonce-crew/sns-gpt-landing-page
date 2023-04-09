import React from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Pricing() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Simple and Affordable Pricing</h2>
            <p className="text-xl text-gray-400 mb-4">SNS-GPT offers the best value for the cost. You can enjoy high-quality service at a reasonable price.</p>
          </div>

          {/* Pricing */}
          <div className="max-w-sm mx-auto sm:max-w-none sm:justify-center grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none ">
            {/* <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none "> */}
            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-8 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="h3">$0<span className="text-gray-600">/mo</span></h2>
                  <h2 className="h4">Free</h2>
                </div>
              </div>
              <div className="text-gray-700 font-medium mb-8 h-12">
                <cite className="text-gray-500 not-italic">Provides basic features for free.</cite>
              </div>

              <div className="mx-auto w-full text-gray-700 font-medium mb-6 pb-5 border-b border-gray-700">
                <a className="btn w-full text-white font-bold bg-green-600 hover:bg-white hover:text-green-600 shadow" href="#0">Start Free Trial</a>
              </div>

              <ul className="text-gray-500">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>40 calls per week</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Age, gender, occupation, and language preferences</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Optional slang and hashtag preferences</span>
                </li>
              </ul>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-8 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="h3">$10<span className="text-gray-600">/mo</span></h2>
                  <h2 className="h4">Pro</h2>
                </div>
              </div>
              <div className="text-gray-700 font-medium mb-8 h-12">
                <cite className="text-gray-500 not-italic">Offers more features and performance, but may come with additional costs.</cite>
              </div>

              <div className="mx-auto w-full text-gray-700 font-medium mb-6 pb-5 border-b border-gray-700">
                <a className="btn w-full text-white font-bold bg-pro-700 hover:bg-white hover:text-pro-700 shadow" href="#0">Upgrade to Pro</a>
              </div>

              <ul className="text-gray-500">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Up to 10,000 calls per month</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>All features of the Free version</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Ability to use emojis and memes</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Removal of the maximum length limit for recommended comments</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Ability to adjust the number of recommended comments</span>
                </li>
              </ul>
            </div>

            {/* Offers more features and performance, but may come with additional costs. */}
            {/* 3rd testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">Register as an ambassador and enjoy various benefits.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Ambassador</cite>
                </div>
              </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;