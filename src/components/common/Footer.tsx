"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { IconComponents } from './IconSystem';

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Beneficial Solutions LLC</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t("description")}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <IconComponents.MapMarker size="sm" className="mr-3 text-red-400" />
                <span>{t("contact.address")}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <IconComponents.Phone size="sm" className="mr-3 text-red-400" />
                <span>{t("contact.phone")}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <IconComponents.Contact size="sm" className="mr-3 text-red-400" />
                <span>{t("contact.email")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("quickLinks.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors">
                  {t("quickLinks.home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition-colors">
                  {t("quickLinks.about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition-colors">
                  {t("quickLinks.services")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/projects`} className="text-gray-300 hover:text-white transition-colors">
                  {t("quickLinks.projects")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white transition-colors">
                  {t("quickLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("services.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/services/mining`} className="text-gray-300 hover:text-white transition-colors">
                  {t("services.mining")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/transport`} className="text-gray-300 hover:text-white transition-colors">
                  {t("services.transport")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/forestry`} className="text-gray-300 hover:text-white transition-colors">
                  {t("services.forestry")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/agriculture`} className="text-gray-300 hover:text-white transition-colors">
                  {t("services.agriculture")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Beneficial Solutions LLC. {t("rights")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 