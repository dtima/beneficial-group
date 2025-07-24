"use client";

import { useTranslations } from "next-intl";
import { IconComponents } from '@/components/common/IconSystem';

// Externalized data
const contactInfoData = [
  {
    icon: "WhatsApp",
    title: "contactInfo.phone.title",
    value: "+237 6 73 10 81 20",
    link: "https://wa.me/237673108120",
  },
  {
    icon: "Contact",
    title: "contactInfo.email.title",
    value: "ebenebot1978@gmail.com",
    link: "mailto:ebenebot1978@gmail.com",
  },
  {
    icon: "MapMarker",
    title: "contactInfo.address.title",
    value: "contactInfo.address.value",
    link: "#",
  },
  {
    icon: "Calendar",
    title: "contactInfo.businessHours.title",
    value: "contactInfo.businessHours.value",
    link: "#",
  },
];

const subjectsData = [
  { value: "general", label: "form.subjects.general" },
  { value: "partnership", label: "form.subjects.partnership" },
  { value: "investment", label: "form.subjects.investment" },
  { value: "media", label: "form.subjects.media" },
  { value: "other", label: "form.subjects.other" },
];

const contactMethodsData = [
  { value: "email", label: "form.contactMethods.email" },
  { value: "phone", label: "form.contactMethods.phone" },
];

const ContactPage = () => {
  const t = useTranslations("Contact");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
              <IconComponents.Contact size="sm" className="mr-2" />
              {t("badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight text-white">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfoData.map((info, index) => {
              const IconComponent = IconComponents[info.icon as keyof typeof IconComponents];
              return (
                <a
                  key={index}
                  href={info.link}
                  className="group block"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-red-200 text-center group-hover:bg-red-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size="lg" className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {t(info.title)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {info.value.startsWith('contactInfo.') ? t(info.value) : info.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-900">
                {t("form.title")}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("form.subtitle")}
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <form className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.firstName")}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.lastName")}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject and Contact Method */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.subject")}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">{t("form.selectSubject")}</option>
                      {subjectsData.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {t(subject.label)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.preferredContact")}
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">{t("form.selectMethod")}</option>
                      {contactMethodsData.map((method) => (
                        <option key={method.value} value={method.value}>
                          {t(method.label)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <IconComponents.PaperPlane size="sm" className="mr-2" />
                    {t("form.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 