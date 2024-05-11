
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//   const form = useRef();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (form.current.checkValidity()) {
//       emailjs
//         .sendForm('service_fb4bmgm', 'template_27xt8ak', form.current, {
//           publicKey: 'hXuKn8T6o9PFxf2Wz',
//         })
//         .then(
//           (result) => {
//             console.log(result.text);
//             alert("SUCCESS!")
//             setIsSubmitted(true);
//             // Reset the form after successful submission
//             form.current.reset();
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//             alert("FAILED")
//           },
//         );
//     } else {
//       // If the form is invalid, show error messages
//       form.current.reportValidity();
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: 'url("./assets/background_contactus.jpg")'}}>
//       <div className="w-full max-w-md bg-gray-800 bg-opacity-90 text-gray-700 p-8 rounded-lg shadow-md">
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
//           <div className="bg-gray-700 rounded-md p-4">
//             <div className="mb-2">
//               <p className="text-sm text-gray-400">Phone:</p>
//               <p className="text-base font-semibold text-white">+0377911131</p>
//             </div>
//             <div className="mb-2">
//               <p className="text-sm text-gray-400">Email:</p>
//               <p className="text-base font-semibold text-white">anishkaudith2@gmail.com</p>
//             </div>
//             <div className="mb-2">
//               <p className="text-sm text-gray-400">Address:</p>
//               <p className="text-base font-semibold text-white">gamunupura 1st lane, kaduwela</p>
//             </div>
//             <div className="mb-2">
//               <p className="text-sm text-gray-400">Description:</p>
//               <p className="text-sm text-white">Each interaction with our team is treated with care and attention. We understand that every customer is unique, and we tailor our responses to meet your specific needs and preferences.</p>
//             </div>
//           </div>
//         </div>
//         {/* Google Map */}
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.08221835654!2d79.94483254209021!3d6.904320208068082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256d59601df81%3A0x31a1dd96e8d49ba!2sMalabe!5e0!3m2!1sen!2slk!4v1715191797383!5m2!1sen!2slk" 
//           width="100%"
//           height="200" // Adjust the height here
//           frameBorder="0"
//           style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//       </div>
//       <div className="w-full max-w-md bg-white bg-opacity-90 p-8 mt-8">
//         <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
//         <form className="space-y-4" ref={form} onSubmit={sendEmail}>
//           <div>
//             <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Your Name"
//               className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
//               required // Required field
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Your Email"
//               className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
//               required // Required field
//             />
//           </div>
//           <div>
//             <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">
//               Mobile
//             </label>
//             <input
//               type="tel" // Change type to "tel" for mobile input
//               id="mobile"
//               name="mobile"
//               placeholder="Your Mobile"
//               className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
//               required // Required field
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
//               required // Required field
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
//           >
//             Submit
//           </button>
//           {isSubmitted && <p className="text-green-500">Form submitted successfully!</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateMobileNumber = (number) => {
    // Regular expression for a 10-digit phone number format
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      const mobileNumber = e.target.mobile.value;
      if (!validateMobileNumber(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      emailjs
        .sendForm('service_fb4bmgm', 'template_27xt8ak', form.current, {
          publicKey: 'hXuKn8T6o9PFxf2Wz',
        })
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!")
            setIsSubmitted(true);
            // Reset the form after successful submission
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("FAILED")
          },
        );
    } else {
      // If the form is invalid, show error messages
      form.current.reportValidity();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: 'url("./assets/background_contactus.jpg")'}}>
      <div className="w-full max-w-md bg-gray-800 bg-opacity-90 text-gray-700 p-8 rounded-lg shadow-md">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
          <div className="bg-gray-700 rounded-md p-4">
            <div className="mb-2">
              <p className="text-sm text-gray-400">Phone:</p>
              <p className="text-base font-semibold text-white">+037791131</p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-400">Email:</p>
              <p className="text-base font-semibold text-white">anishkaudith2@gmail.com</p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-400">Address:</p>
              <p className="text-base font-semibold text-white">gamunupura 1st lane, kaduwela</p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-400">Description:</p>
              <p className="text-sm text-white">Each interaction with our team is treated with care and attention. We understand that every customer is unique, and we tailor our responses to meet your specific needs and preferences.</p>
            </div>
          </div>
        </div>
        {/* Google Map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.08221835654!2d79.94483254209021!3d6.904320208068082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256d59601df81%3A0x31a1dd96e8d49ba!2sMalabe!5e0!3m2!1sen!2slk!4v1715191797383!5m2!1sen!2slk" 
          width="100%"
          height="200" // Adjust the height here
          frameBorder="0"
          style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 mt-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              required // Required field
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              required // Required field
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">
              Mobile
            </label>
            <input
              type="tel" // Change type to "tel" for mobile input
              id="mobile"
              name="mobile"
              placeholder="Your Mobile"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              pattern="[0-9]{10}" // Regular expression pattern for a 10-digit number
              title="Please enter a 10-digit mobile number." // Error message for invalid input
              required // Required field
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              required // Required field
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
          {isSubmitted && <p className="text-green-500">Form submitted successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
