import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_PHONE } from "../constants";

const formatPhoneForDisplay = (phone: string) => {
  if (phone.startsWith("91") && phone.length === 12) {
    return `+91 ${phone.slice(2, 7)} ${phone.slice(7)}`;
  }
  if (phone.length === 10) {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  }
  return phone;
};

const ContactCTA: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "Repair & Service",
    message: "",
  });
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS">("IDLE");
  const [botField, setBotField] = useState("");
  const lastSubmitRef = useRef(0);
  const formStartRef = useRef(Date.now());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    const isTooFast = now - formStartRef.current < 2000;
    const isTooSoon = now - lastSubmitRef.current < 10000;
    if (botField.trim() !== "" || isTooFast || isTooSoon) {
      return;
    }
    lastSubmitRef.current = now;
    setStatus("LOADING");

    const message = [
      `Name: ${formState.name}`,
      `Phone: ${formState.phone}`,
      `Service: ${formState.service}`,
      `Message: ${formState.message || "N/A"}`,
    ].join("\n");

    const url = `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setTimeout(() => {
      setStatus("SUCCESS");
      formStartRef.current = Date.now();
    }, 400);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="bg-brand-900 py-20 relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-800 rounded-3xl p-5 sm:p-6 md:p-10 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-start justify-between border border-brand-700 gap-8 md:gap-10 lg:gap-12">
          {/* Contact Info Side */}
          <div className="w-full lg:w-5/12 text-center lg:text-left pt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              Have questions about our RO purifiers or need to schedule a
              service? Fill out the form, and our expert team will get back to
              you shortly.
            </p>

            <div className="flex flex-col space-y-6">
              <div className="flex items-start justify-start text-brand-200 group mx-auto lg:mx-0 max-w-xs lg:max-w-none">
                <div className="p-3 bg-brand-700/50 rounded-full mr-4 group-hover:bg-brand-700 transition-colors shrink-0">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-brand-300 uppercase tracking-wider font-semibold">
                    Call Us
                  </p>
                  <a
                    href={`tel:+${COMPANY_PHONE}`}
                    className="text-lg font-medium text-white hover:text-brand-100 transition-colors"
                  >
                    {formatPhoneForDisplay(COMPANY_PHONE)}
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-start text-brand-200 group mx-auto lg:mx-0 max-w-xs lg:max-w-none">
                <div className="p-3 bg-brand-700/50 rounded-full mr-4 group-hover:bg-brand-700 transition-colors shrink-0">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-brand-300 uppercase tracking-wider font-semibold">
                    Email Us
                  </p>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-lg font-medium text-white hover:text-brand-100 transition-colors"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-start text-brand-200 group mx-auto lg:mx-0 max-w-xs lg:max-w-none">
                <div className="p-3 bg-brand-700/50 rounded-full mr-4 group-hover:bg-brand-700 transition-colors shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-brand-300 uppercase tracking-wider font-semibold">
                    Visit Us
                  </p>
                  <p className="text-lg font-medium text-white">
                    1/208, MEDAVAKKAM, Vadakkupattu Main Rd, Kovilambakkam,
                    Chennai, Tamil Nadu 600129
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-6/12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
              {status === "SUCCESS" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Request Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you, {formState.name}. We have received your details
                    and will call you within 15 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("IDLE");
                      setFormState({
                        name: "",
                        phone: "",
                        service: "Repair & Service",
                        message: "",
                      });
                      setBotField("");
                      formStartRef.current = Date.now();
                    }}
                    className="mt-6 text-brand-600 font-semibold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Enquiry
                  </h3>

                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="\\+?[0-9\\s]{8,15}"
                        title="Please enter a valid phone number"
                        inputMode="numeric"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        placeholder="9876543210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Service Type
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                      >
                        <option>New Product Enquiry</option>
                        <option>Repair & Service</option>
                        <option>Installation</option>
                        <option>AMC Plan</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "LOADING"}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-200 transition-all flex items-center justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "LOADING" ? (
                      <Loader2 size={20} className="animate-spin mr-2" />
                    ) : (
                      <Send size={20} className="mr-2" />
                    )}
                    {status === "LOADING" ? "Sending..." : "Send Enquiry"}
                  </button>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    Your details are safe with us. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
