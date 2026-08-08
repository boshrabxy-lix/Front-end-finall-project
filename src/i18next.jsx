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
                    "Shop By category": "Shop By category",
                    "Show more": "Show more",
                    "All Products": "All Products",
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
                    "User Name": "User Name",
                    "Full Name": "Full Name",
                    "Password": "Password",
                    "Phone Number": "Phone Number",
                    "Already you have account?": "Already you have account?",
                    "Forgit password?": "Forgit password?",
                    "Your email": "Your email",
                    "Add To Cart": "Add To Cart",
                    "Search for products...": "Search for products...",
                    "Subscribe Now": "Subscribe Now",
                    "Enter Your Email Address...": "Enter Your Email Address...",
                    "Profile": "Profile",
                    "Add another account": "Add another account",
                    "Settings": "Settings",
                    "PREMIUM CURATION": "PREMIUM CURATION",
                    "Elevate Your": "Elevate Your",
                    "Lifestyle": "Lifestyle",

                    "Write a Review": "Write a Review",
                    "Your Review": "Your Review",
                    "Rating": "Rating",
                    "Filters": "Filters",
                    "Min Price": "Min Price",
                    "Max Price": "Max Price",
                    "Sort By": " Sort By",
                    "Order": "Order",
                    "Ascending": "Ascending",
                    "Descending": "Descending",
                    "APPLY FILTER": "APPLY FILTER",
                    "The most loved items this month.": "The most loved items this month.",
                    "Address Book": "Address Book",
                    "Payment Methods": "Payment Methods",
                    "Account Settings": "Account Settings",
                    "Info": "Info",
                    "My Orders": "My Orders",
                    "Address Book": "Address Book",
                    "New Password": "New Password",
                    "Verify Code": "Verify Code",
                    "Enter the 4-Digit sent to your Email": "Enter the 4-Digit sent to your Email",
                    "Forget Password": "Forget Password",
                    "*Please enter your email to send reset code": "*Please enter your email to send reset code",
                    "Product Name": "Product Name",
                    "My Cart": "My Cart",
                    "Price": "Price",
                    "Quantity": "Quantity",
                    "Total": "Total",
                    "Actions": "Actions",
                    "Remove": "Remove",
                    "Procces To Checkout": "Procces To Checkout",
                    "Countinue Shopping": " Countinue Shopping",
                    "Payment Method": "Payment Method",
                    "paymentMethod": "paymentMethod",
                    "Cash": "Cash",
                    "Visa": "Visa",
                    "Thier is no Product in this Category": "Thier is no Product in this Category",
                    "Pay Now": "Pay Now",
                    "Verify Code": "Verify Code",
                    "Built for Endurance": "Built for Endurance",
                    "LIMITED EDITION": "LIMITED EDITION",
                    "Reviews": "Reviews",
                    "Price": "Price",
                    "Quantity": "Quantity",
                    "Buy Now": "Buy Now",
                    "Product Description": "Product Description",
                    "Customer Reviews": "Customer Reviews",
                    "Write a Reviwe": "Write a Reviwe",
                    "Pasted on": "Pasted on",
                    "My Profile": "My Profile",
                    "Active Orders": "Active Orders",
                    "Orders": "Orders",
                    "Total Spent": "Total Spent",
                    "Store Credits": "Store Credits",
                    "170 pts": "170 pts",
                    "Recent Orders": "Recent Orders",
                    "Date": "Date",
                    "paymentStatus": "paymentStatus",
                    "Amount": "Amount",
                    "Status": "Status",
                    "Picked For You": "Picked For You",
                    "": "",
                    "": "",
                    "": "",
                    "": "",
                    "": "",
                    "": "",
                    "": "",
                    "": "",
           
                    "Enter the Verify Code 4-Digit sent to your Email": "Enter the Verify Code 4-Digit sent to your Email",
                    "Discover a curated selection of global trends blended with modern Arabic sophistication. Seamless, high-end, and designed for you."
                        : "Discover a curated selection of global trends blended with modern Arabic sophistication.Seamless, high-end, and designed for you.",

                    "Shop Collection": "Shop Collection",
                    "View Lookbook": "View Lookbook",

                    "Join the Modern Circle": " Join the Modern Circle",

                    "Your ultimate destination for premium electronics and lifestyle products.We focus on quality and innovation."
                        : "Your ultimate destination for premium electronics and lifestyle products.We focus on quality and innovation.",

                    "focus on quality and innovation.": "focus on quality and innovation.",

                    "By Subscribing ,you agree to our Privacy Policy and Terms of Service.": "By Subscribing ,you agree to our Privacy Policy and Terms of Service.",

                    "Subscribe to our newsletter and get 15% off your first order .Stay updated with the latest trenfs and exclusive drops.":
                        "Subscribe to our newsletter and get 15% off your first order .Stay updated with the latest trenfs and exclusive drops.",

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
                    "Shop By category": "تسوق حسب التصنيفات",
                    "Show more": "رؤية المزيد",
                    "All Products": "كل المنتجات",
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
                    "User Email": "البريد الإلكتروني للمستخدم",
                    "User Name": "إسم المتخدم",
                    "Full Name": "الإسم الكامل",
                    "Password": "كلمة السر",
                    "Already you have account?": "هل تمتلك حساباً بالفعل؟",
                    "Phone Number": "رقم الهاتف",
                    "Forgit password?": "هل نسيت كلمة السر؟",
                    "Your email": "بريدك الإلكتروني",
                    "Add To Cart": "أضف للسلة",
                    "Search for products...": "البحث عن منتجات...",
                    "Subscribe Now": "إشترك الآن ",
                    "Enter Your Email Address...": "أدخل عنوان بريدك الإلكتروني...",
                    "Profile": "الحساب الشخصي",
                    "Add another account": "إضافة حساب آخر",
                    "Settings": "الإعدادات",
                    "PREMIUM CURATION": "تشكيلة مميزة",
                    "Elevate Your": "ارتقِ بـ",
                    "Lifestyle": "أسلوب حياتك",
                    "Write a Review": "",
                    "Your Review": "",
                    "Filters": "",
                    "Write a Review": "",




                 
                    "Enter the Verify Code 4-Digit sent to your Email": "أدخل رمز التحقق المكون من 4 أرقام المرسل إلى بريدك الإلكتروني",

                    "Discover a curated selection of global trends blended with modern Arabic sophistication. Seamless, high-end, and designed for you."
                        : "اكتشف تشكيلة مختارة بعناية من أحدث صيحات الموضة العالمية الممزوجة بالرقي العربي العصري. تجربة سلسة وراقية، مصممة خصيصاً لك.",

                    "Shop Collection": "تسوق عبر التصنيفات",
                    "View Lookbook": "عرض الكتالوج",
                    "Join the Modern Circle": "انضم إلى الدائرة العصرية",

                    "Your ultimate destination for premium electronics and lifestyle products.We focus on quality and innovation.":
                        "وجهتك النهائية للإلكترونيات الممتازة ومنتجات أسلوب الحياة. نحن نركز على الجودة والابتكار.",

                    "Get the latest updates on new products    and upcoming sales.": "احصل على أحدث التحديثات حول المنتجات الجديدة والمبيعات القادمة.",

                    "focus on quality and innovation.": "نركز على الجودة والابتكار.",

                    "By Subscribing ,you agree to our Privacy Policy and Terms of Service.": "بالاشتراك، فإنك توافق على سياسة الخصوصية وشروط الخدمة الخاصة بنا.",

                    "Subscribe to our newsletter and get 15% off your first order .Stay updated with the latest trenfs and exclusive drops.":
                        "اشترك في نشرتنا البريدية واحصل على خصم 15% على طلبك الأول. ابقَ على اطلاع بأحدث الصيحات والعروض الحصرية.",


                    " © 2026 KASHOP. All rights reserved.": " © 2026 KASHOP. جميع الحقوق محفوظة."
                }
            }
        },
        fallbackLng: "en",
    });
export default i18n;