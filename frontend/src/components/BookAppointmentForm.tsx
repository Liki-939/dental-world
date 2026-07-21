"use client";

import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function BookAppointmentForm({ 
  defaultTreatment = 'General Consultation', 
  minimal = false 
}: { 
  defaultTreatment?: string; 
  minimal?: boolean; 
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    treatment: defaultTreatment,
    preferredLocation: '',
    preferredDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        treatment: defaultTreatment,
        preferredLocation: '',
        preferredDate: '',
        message: ''
      });
    } catch (err: any) {
      setError(err.message || 'Failed to submit booking');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center space-y-4 shadow-sm h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-heading">Request Received!</h3>
        <p className="text-lg opacity-90">Thank you for booking with us. Our team will contact you shortly to confirm your appointment time.</p>
        <button onClick={() => setSuccess(false)} className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
          Book Another
        </button>
      </div>
    );
  }

  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm">
            {error}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white text-sm" placeholder="John Doe" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white text-sm" placeholder="+91 00000 00000" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Location *</label>
          <select name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white text-sm">
            <option value="">Select a location</option>
            <option value="Pragathi Nagar">Pragathi Nagar</option>
            <option value="Bachupally">Bachupally</option>
          </select>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3.5 rounded-xl mt-4 transition shadow-md flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed text-base">
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Request Callback"
          )}
        </button>
        <p className="text-[11px] text-center text-slate-400 mt-3">We respect your privacy. No spam. Instant confirmation.</p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="+91 00000 00000" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Select Treatment</label>
          <select name="treatment" value={formData.treatment} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white">
            <option value="General Consultation">General Consultation</option>
            <option value="Second Opinion">Second Opinion</option>
            <option value="Root Canal Treatment">Root Canal Treatment</option>
            <option value="Teeth Cleaning/Scaling">Teeth Cleaning/Scaling</option>
            <option value="Dental Implants">Dental Implants & Full Mouth Implants</option>
            <option value="Clear Aligners / Invisalign">Clear Aligners & Invisible Aligners</option>
            <option value="Dental Braces">Dental Braces</option>
            <option value="Kids & Pediatric Dentistry">Kids & Pediatric Dentistry</option>
            <option value="Wisdom Tooth Extraction">Wisdom Tooth Extraction</option>
            <option value="Advanced Gum Treatment">Advanced Gum Treatment & Flap</option>
            <option value="Tooth Decay & Fillings">Tooth Decay & Fillings</option>
            <option value="Hybrid & Full Mouth Dentures">Hybrid & Full Mouth Dentures</option>
            <option value="Smile Designing">Smile Designing</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Bad Breath & Halitosis">Bad Breath & Halitosis</option>
            <option value="Dental Crown & Bridges">Dental Crown & Bridges</option>
            <option value="Frenectomy">Frenectomy</option>
            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
            <option value="Laser Dentistry">Laser Dentistry</option>
            <option value="Jaw Surgery">Jaw Surgery</option>
            <option value="Genioplasty">Genioplasty</option>
            <option value="Mouth Ulcers">Mouth Ulcers</option>
            <option value="Preventive Dentistry">Preventive Dentistry</option>
            <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Location *</label>
          <select name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white">
            <option value="">Select a location</option>
            <option value="Pragathi Nagar">Pragathi Nagar</option>
            <option value="Bachupally">Bachupally</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-slate-400" />
            </div>
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition bg-slate-50 focus:bg-white" placeholder="Tell us more about your dental concern..."></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-brand hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-xl transition shadow-lg flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          "Confirm Appointment Request"
        )}
      </button>
    </form>
  );
}
