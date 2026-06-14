# Dental World Website Customization Guide

This guide is designed for the client and developer team to easily make modifications, add content, change images/logos, update FAQs, and add new reviews in the Dental World website.

---

## Table of Contents
1. [General Contact & Social Links](#1-general-contact--social-links)
2. [Logos & Favicons](#2-logos--favicons)
3. [Updating FAQs](#3-updating-faqs)
4. [Updating Reviews & Testimonials](#4-updating-reviews--testimonials)
5. [Changing Images & Banners](#5-changing-images--banners)
6. [Updating Treatment Content & Pricing](#6-updating-treatment-content--pricing)

---

## 1. General Contact & Social Links

All global variables like phone numbers, WhatsApp links, business hours, and addresses are stored in a single config file for easy management.

* **File Path:** `src/lib/site.ts`
* **What you can change here:**
  * **Phone Numbers:** Update the `phone.display` and `phone.tel` (link format) values.
  * **WhatsApp Link:** Edit `whatsapp.number` and `whatsapp.url`.
  * **Working Hours:** Change weekday or Sunday timings.
  * **Social Media Handles:** Update URLs for Facebook, Instagram, YouTube, and LinkedIn.
  * **Addresses & Maps:** Update the physical addresses or change the Google Maps embed links (`mapsEmbed`).

---

## 2. Logos & Favicons

The official logo is displayed in the navigation bar, footer, promotional banners, and as the browser's tab icon (favicon).

* **Image Location:** `public/images/logo.jpeg`
* **How to replace it:**
  1. Prepare your new logo. Ensure it is a **1:1 square ratio** (ideally **1200 x 1200 pixels** or similar high resolution). A square ratio is required for the favicon to display correctly in Google Search results.
  2. Save the new logo as a JPEG and name it exactly `logo.jpeg`.
  3. Overwrite the existing file at `public/images/logo.jpeg`.
  * *Note: If you use this method, you don't need to change any code!*
* **If your new logo has a different format (e.g. `logo.png`):**
  * You will need to change the file references in:
    * `src/app/layout.tsx` (metadata icons)
    * `src/components/Navbar.tsx` (Navbar image source)
    * `src/components/Footer.tsx` (Footer image source)
    * `src/components/PromotionalBanner.tsx` (Promotional overlay logo)
    * `src/app/(site)/blog/[slug]/page.tsx` (Structured JSON Schema url)

---

## 3. Updating FAQs

The website features FAQs in two places: the main FAQ Page and individual Treatment Pages.

### A. The Main FAQ Page
* **File Path:** `src/app/(site)/faq/FAQClient.tsx`
* **How to edit/add:**
  * Find the `faqData` array (starting around line 27).
  * To add a new FAQ, insert a new object in the list:
    ```typescript
    {
      category: 'general', // Categories: 'general', 'root-canal', 'implants', 'braces-aligners', etc.
      question: 'Your Question here?',
      answer: 'Your Answer here.',
    },
    ```

### B. Treatment-Specific FAQs
* **File Path:** `src/data/treatments.ts`
* **How to edit/add:**
  * Search for the treatment key (e.g., `'root-canal-treatment'`).
  * Locate the `faqs` property and update/add entries:
    ```typescript
    faqs: [
      { question: "Is the procedure painful?", answer: "No, we use advanced local anesthesia..." },
      // Add more here
    ],
    ```

---

## 4. Updating Reviews & Testimonials

Patient reviews are managed in two files: the dedicated Testimonials page and the individual treatment sections.

### A. Dedicated Reviews Page
* **File Path:** `src/app/(site)/testimonials/page.tsx`
* **How to edit/add:**
  * Locate the `allTestimonials` array (starting around line 12).
  * Insert a new review using this format:
    ```typescript
    { 
      id: 5, // Increment the ID number
      patient_name: "Patient Name", 
      text: "The patient's review content goes here.", 
      rating: 5, 
      treatment_name: "Invisalign" 
    }
    ```

### B. Treatment Page Reviews
* **File Path:** `src/data/treatments.ts`
* **How to edit/add:**
  * Go to the corresponding treatment object and locate the `testimonials` list.
  * Add or edit reviews using this format:
    ```typescript
    testimonials: [
      { id: 1, patient_name: "Patient Name", text: "Patient's review text", rating: 5, treatment_name: "Root Canal" }
    ]
    ```

---

## 5. Changing Images & Banners

All local static images are located in the `public` directory.

* **Doctor Pictures:**
  * Location: `public/anurag.jpg`, `public/dr.abdul.jpg`, `public/sneha.jpg`
  * Replace the file with your new picture (keep the file name and format the same).
* **Treatment Banner Banners:**
  * Location: `public/root_canal_banner.png`, `public/dental_implant_banner.png`, `public/braces_banner.png`, `public/invisalign_banner.png`, etc.
  * To update, replace these images with matching names in the `public` folder.
* **Before / After Cases:**
  * Location: `public/images/cases/`
  * Add your images here and link them under the `cases` section of the relevant treatment in `src/data/treatments.ts`.

---

## 6. Updating Treatment Content & Pricing

Pricing tables and descriptive content on the treatment pages are fully dynamic.

* **File Path:** `src/data/treatments.ts`
* **Structure:** Each treatment has descriptive benefits, duration, a custom procedure explanation, technology highlights, and pricing cards.
* **Updating Pricing Cards:**
  * Find the `pricing` list for the treatment:
    ```typescript
    pricing: [
      { title: "Standard", price: "22,000", features: ["Consultation", "Basic Procedure"] },
      { title: "Premium", price: "35,000", features: ["3D Scan", "Premium Materials"], isPopular: true }
    ],
    ```
  * Modify the `price` string or features array to update what is displayed on the pricing tables.
