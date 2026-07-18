import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Detector from 'i18next-browser-languagedetector';

i18n
.use(Detector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Home": "Home",
                    "Login": "Login",
                    "Logout": "Logout",
                    "Register": "Register",
                    "Cart": "Cart",
                    "Checkout": "Checkout",
                    "Categories": "Categories",
                    "Show more": "Show more",
                    "Products": "Products",
                    "Daily Deals": "Daily Deals",
                    "Electronics": "Electronics",
                    "Best Sellers": "Best Sellers",
                    "New Arrivals ": "New Arrivals",
                    "About Us": "About Us",
                    "Privacy Policy": "Privacy Policy",
                    "Terms of Service": "Terms of Service",
                    "Contact Us": "Contact Us",
                    "Join": "Join",
                    "User Email": "User Email",
                    "Join": "Join",
                    "Your email": "Your email",
                    "Add To Cart": "Add To Cart",
                    "Search for products...": "Search for products...",

                    "Your ultimate destination for premium electronics and lifestyle products.We focus on quality and innovation."
                        : "Your ultimate destination for premium electronics and lifestyle products.We focus on quality and innovation.",

                    "focus on quality and innovation.": "focus on quality and innovation.",

                    "Get the latest updates on new products    and upcoming sales.": "Get the latest updates on new products    and upcoming sales.",
                    " © 2026 KASHOP. All rights reserved.": " © 2026 KASHOP. All rights reserved."

                }
            },
            ar: {
                translation: {
                    "Home": " الصفحة الرئيسية",
                    "Login": "تسجيل الدخول",
                    "Logout": "تسجيل الخروج",
                    "Register": "انشاء حساب",
                    "Cart": "السلة",
                    "Checkout": "الدفع",
                    "Categories": "التصنيفات",
                    "Show more": "رؤية المزيد",
                    "Products": "المنتجات",
                    "Daily Deals": "عروض يومية",
                    "Electronics": "الإلكترونيات",
                    "Best Sellers": "أفضل المبيعات",
                    "New Arrivals ": "وصل حديثاً",
                    "About Us": "من نحن",
                    "Privacy Policy": "سياسة الخصوصية",
                    "Terms of Service": "شروط الخدمة",
                    "Contact Us": "اتصل بنا",
                    "Join": "انضمام",
                    "Your email": "بريدك الإلكتروني",
                    "Add To Cart": "أضف للسلة",
                    "Search for products...": "البحث عن منتجات...",

                    "Your ultimate destination for premium electronics and lifestyle products.We focus on quality and innovation.":
                        "وجهتك النهائية للإلكترونيات الممتازة ومنتجات أسلوب الحياة. نحن نركز على الجودة والابتكار.",

                    "Get the latest updates on new products    and upcoming sales.": "احصل على أحدث التحديثات حول المنتجات الجديدة والمبيعات القادمة.",

                    " © 2026 KASHOP. All rights reserved.": " © 2026 KASHOP. جميع الحقوق محفوظة."
                }
            }
        },
        fallbackLng: "en",
    });
export default i18n;