import React from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);


function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h2 className="h2 mb-4">Let's move forward together</h2>
            <p className="text-xl text-gray-400 mb-4">Complete a simple mission and receive a free pass.</p>

            <div className="mx-auto text-gray-700 font-medium mb-3 pb-2">
              <a className="btn text-white font-bold bg-green-600 hover:bg-white hover:text-green-600 shadow" href="https://forms.gle/sxLwfx9vdxKyFK6aA" target="_blank">MISSION</a>
            </div>
            {/* <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://forms.gle/sxLwfx9vdxKyFK6aA" target="_blank">MISSION</a> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="relative inline-flex flex-col mb-2">
                <div className="mb-3 flex items-center space-x-1">
                  {
                    [1, 2, 3, 4, 5].map((index) => {
                      return (
                        <span key={index} className="text-yellow-400">
                          {starIcon}
                        </span>
                      )
                    })
                  }
                </div>
              </div>
              <blockquote className="text-md text-white grow">Register as an ambassador and enjoy various benefits.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <img className="rounded-full" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
                <div className="flex flex-col ml-4">
                  <cite className="h5 text-gray-200 not-italic truncate">Sophia Lee</cite>
                  <cite className="text-xs text-gray-400 not-italic">Ambassador @sophialeeofficial</cite>
                </div>
              </div>
            </div>

            {/* 2st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="relative inline-flex flex-col mb-2">
                <div className="mb-3 flex items-center space-x-1">
                  {
                    [1, 2, 3, 4, 5].map((index) => {
                      return (
                        <span key={index} className="text-yellow-400">
                          {starIcon}
                        </span>
                      )
                    })
                  }
                </div>
              </div>
              <blockquote className="text-md text-white grow">Register as an ambassador and enjoy various benefits.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
                <div className="flex flex-col ml-4 truncate">
                  <cite className="h5 text-gray-200 not-italic">Chloe Kim</cite>
                  <cite className="text-xs text-gray-400 not-italic">Ambassador @chloekim.official</cite>
                </div>
              </div>
            </div>

            {/* 3st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="relative inline-flex flex-col mb-2">
                <div className="mb-3 flex items-center space-x-1">
                  {
                    [1, 2, 3, 4, 5].map((index) => {
                      return (
                        <span key={index} className="text-yellow-400">
                          {starIcon}
                        </span>
                      )
                    })
                  }
                </div>
              </div>
              <blockquote className="text-md text-white grow">Register as an ambassador and enjoy various benefits.</blockquote>
              <div className="flex text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
                <div className="flex flex-col ml-4 truncate">
                  <cite className="h5 text-gray-200 not-italic">Alexander Park</cite>
                  <cite className="text-xs text-gray-400 not-italic">Ambassador @alexanderpark_official</cite>
                </div>
              </div>
            </div>

            {/* 2nd testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
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

export default Testimonials;
