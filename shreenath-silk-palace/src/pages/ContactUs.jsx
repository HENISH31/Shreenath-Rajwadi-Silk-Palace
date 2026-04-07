import { useEffect } from 'react'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible')
      })
    }, 100)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );
    
    window.location.href = `mailto:infoshreenathrajwadisilkpalace@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-[#fdfdfd]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-20">
        
        {/* Main Title */}
        <div className="mb-10 reveal">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#4a1c24]">
            Contact Us
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative reveal" style={{ transitionDelay: '100ms' }}>
          
          {/* Left Side: Form */}
          <div className="flex-1 w-full flex flex-col">
            <h2 className="font-serif text-2xl md:text-[28px] font-semibold text-[#3a111a] mb-4">
              Get in Touch
            </h2>
            <p className="font-sans text-[15px] md:text-base text-[#786366] leading-relaxed mb-8 max-w-lg">
              We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form 
              className="space-y-8 flex-1 flex flex-col" 
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex-1">
                  <label className="block font-sans text-base md:text-lg font-bold text-[#3a111a] mb-3 uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your full name" 
                    className="w-full bg-[#fdfdfd] border border-gray-300 rounded-lg text-base md:text-lg px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#68101e] focus:ring-1 focus:ring-[#68101e] transition-all shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-sans text-base md:text-lg font-bold text-[#3a111a] mb-3 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Enter your email" 
                    className="w-full bg-[#fdfdfd] border border-gray-300 rounded-lg text-base md:text-lg px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#68101e] focus:ring-1 focus:ring-[#68101e] transition-all shadow-sm"
                  />
                </div>
              </div>
 
              <div>
                <label className="block font-sans text-base md:text-lg font-bold text-[#3a111a] mb-3 uppercase tracking-wide">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="Enter your phone number" 
                  className="w-full bg-[#fdfdfd] border border-gray-300 rounded-lg text-base md:text-lg px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#68101e] focus:ring-1 focus:ring-[#68101e] transition-all shadow-sm"
                />
              </div>
 
              <div className="flex-1 flex flex-col">
                <label className="block font-sans text-base md:text-lg font-bold text-[#3a111a] mb-3 uppercase tracking-wide">Your Message</label>
                <textarea 
                  name="message"
                  required
                  placeholder="Tell us about your requirements..." 
                  rows={6}
                  className="w-full bg-[#fdfdfd] border border-gray-300 rounded-lg text-base md:text-lg px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#68101e] focus:ring-1 focus:ring-[#68101e] transition-all resize-none flex-1 shadow-sm"
                ></textarea>
              </div>
 
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-[#761022] hover:bg-[#5b0a18] text-white font-sans text-lg font-bold px-12 py-4 rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(118,16,34,0.3)]"
                >
                  Confirm & Send Message
                </button>
              </div>
            </form>
          </div>
 
          {/* Right Side: Contact Info & Map */}
          <div className="flex-1 w-full flex flex-col lg:pl-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3a111a] mb-10">
              Visit Our Palace
            </h2>
            
            <div className="space-y-8 md:space-y-12 mb-12 pl-1">
              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#761022]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8a1a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-serif text-xl md:text-2xl font-bold text-[#3a111a]">Call Us</span>
                  <div className="font-sans text-base md:text-lg text-[#786366] font-medium">+91 7600 465 647</div>
                </div>
              </div>
 
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#761022]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8a1a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-serif text-xl md:text-2xl font-bold text-[#3a111a]">Email Inquiry</span>
                  <div className="font-sans text-base md:text-lg text-[#786366] font-medium break-all">infoshreenathrajwadisilkpalace@gmail.com</div>
                </div>
              </div>
 
              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#761022]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8a1a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-serif text-xl md:text-2xl font-bold text-[#3a111a]">Our Location</span>
                  <div className="font-sans text-base md:text-lg leading-relaxed text-[#786366] font-medium">Shreeji Darshan Complex, Matrupuram Society, Manjalpur, Vadodara, Gujarat 390011</div>
                </div>
              </div>
 
              {/* Hours */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#761022]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8a1a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-serif text-xl md:text-2xl font-bold text-[#3a111a]">Showroom Hours</span>
                  <div className="font-sans text-base md:text-lg leading-relaxed text-[#786366] font-medium">Monday - Saturday: 10:00 AM - 8:00 PM<br/>Sunday: 11:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Embedded Official Map (Pethapur Vala Branch) */}
            <div className="w-full h-[260px] md:h-[300px] mt-auto rounded overflow-hidden shadow-sm border border-gray-200">
              <iframe
                title="Shreenath Rajwadi Silk Palace (Pethapur Vala) Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8705!2d73.1828477!3d22.2733969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc535ccc15ee7%3A0x1b3fbeb82c5e2515!2sShreenath+Rajwadi+Silk+Palace+(Pethapur+Vala)!5e0!3m2!1sen!2sin!4v1711210000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
