"use client";

import Footer from "@/components/Footer";

export default function EmailHosting() {
  return (
    <div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-extralight mb-6">Email Hosting</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl font-light">
            conzura provides professional email hosting solutions with custom domain 
            addresses, robust spam filtering, and seamless integration with popular 
            email clients. Keep your business communication secure, reliable, and 
            professional.
          </p>

          {/* Feature Block — What We Do */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">What We Do</h2>

            <ul className="text-sm text-gray-700 space-y-2 font-light">
              <li>• Custom domain email addresses (you@yourdomain.com)</li>
              <li>• Advanced spam and virus filtering</li>
              <li>• Webmail access and mobile sync (IMAP/POP3)</li>
              <li>• Large mailbox storage and attachments</li>
              <li>• Calendar, contacts, and task management</li>
              <li>• Email encryption and compliance features</li>
            </ul>
          </div>

          {/* Feature Block — Technologies */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Technologies</h2>

            <p className="text-sm text-gray-700 leading-relaxed font-light">
              Postfix, Dovecot, Roundcube, IMAP/POP3/SMTP, SPF/DKIM/DMARC, SpamAssassin, 
              ActiveSync, Webmail Interface, SSL/TLS Encryption, Microsoft Outlook Support.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}