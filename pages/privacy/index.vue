<script setup>
const language = {
  heading1: {
    en: "Privacy Policy",
    bn: "গোপনীয়তা নীতি",
  },
  paragraph1: {
    en: "This privacy policy sets out how our website uses and protects any information that you give us when you use this website.",
    bn: "এই গোপনীয়তা নীতি নির্ধারণ করে যে আপনি যখন এই ওয়েবসাইটটি ব্যবহার করেন তখন আমাদের ওয়েবসাইট কীভাবে ব্যবহার করে এবং আপনি আমাদের যে তথ্য দেন তা রক্ষা করে।",
  },
  heading2: {
    en: "Information We Collect",
    bn: "যা তথ্য আমরা সংগ্রহ করি",
  },
  paragraphHeading: {
    en: "We may collect the following information",
    bn: "আমরা নিম্নলিখিত তথ্য সংগ্রহ করতে পারি",
  },
  listItem1: {
    en: "Your name and contact information",
    bn: "আপনার নাম এবং যোগাযোগের তথ্য",
  },
  listItem2: {
    en: "Demographic information",
    bn: "জনসংখ্যার তথ্য",
  },
  listItem3: {
    en: "Other information relevant to customer surveys and/or offers",
    bn: "গ্রাহক সার্ভে এবং/অথবা অফার সম্পর্কিত অন্যান্য তথ্য",
  },
  heading3: {
    en: "How We Use the Information",
    bn: "আমরা কিভাবে তথ্য ব্যবহার করি",
  },
  paragraph2: {
    en: "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons",
    bn: "আপনার চাহিদা বুঝতে এবং আপনাকে প্রদান করার জন্য আমাদের এই তথ্য প্রয়োজন একটি ভাল পরিষেবা সহ, এবং বিশেষ করে নিম্নলিখিত কারণে",
  },
  listItem4: {
    en: "Internal record keeping",
    bn: "অভ্যন্তরীণ রেকর্ড রাখা",
  },
  listItem5: {
    en: "Improving our products and services",
    bn: "আমাদের পণ্য এবং পরিষেবা উন্নত করা",
  },
  listItem6: {
    en: "Sending promotional emails about new products, special offers, or other information which we think you may find interesting",
    bn: "নতুন পণ্য, বিশেষ অফার, বা অন্যান্য তথ্য সম্পর্কে প্রচারমূলক ইমেল পাঠানো যা আমরা মনে করি আপনার কাছে আকর্ষণীয় হতে পারে",
  },
  listItem7: {
    en: "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, or mail. We may use the information to customize the website according to your interests.",
    bn: "সময়ে সময়ে, আমরা আপনার সাথে যোগাযোগ করার জন্য আপনার তথ্য ব্যবহার করতে পারি বাজার গবেষণা উদ্দেশ্য। আমরা আপনার সাথে ইমেল, ফোন বা মেইলে যোগাযোগ করতে পারি। আমরা আপনার আগ্রহ অনুযায়ী ওয়েবসাইট কাস্টমাইজ করতে তথ্য ব্যবহার করতে পারেন",
  },
  heading4: {
    en: "Security",
    bn: "সিকিউরিটি",
  },
  paragraph3: {
    en: "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.",
    bn: "আমরা আপনার তথ্য সুরক্ষিত তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। অননুমোদিত অ্যাক্সেস বা প্রকাশ রোধ করার জন্য, আমরা অনলাইনে যে তথ্য সংগ্রহ করি তা সুরক্ষিত এবং সুরক্ষিত করার জন্য আমরা উপযুক্ত শারীরিক, ইলেকট্রনিক এবং ব্যবস্থাপক পদ্ধতি স্থাপন করেছি।",
  },
  heading5: {
    en: "Cookies",
    bn: "কুকিজ",
  },
  paragraph4: {
    en: "A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences. Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.",
    bn: "একটি কুকি হল একটি ছোট ফাইল যা আপনার কম্পিউটারের হার্ড ড্রাইভে রাখার অনুমতি চায়৷ একবার আপনি সম্মত হলে, ফাইল যোগ করা হয়, এবং কুকি ওয়েব ট্র্যাফিক বিশ্লেষণে সহায়তা করে বা আপনি যখন কোনও নির্দিষ্ট পরিদর্শন করেন তখন আপনাকে জানাতে দেয় সাইট কুকিজ ওয়েব অ্যাপ্লিকেশনগুলিকে একজন ব্যক্তি হিসাবে আপনাকে প্রতিক্রিয়া জানাতে দেয়। ওয়েব অ্যাপ্লিকেশানটি তার ক্রিয়াকলাপগুলিকে আপনার প্রয়োজন, পছন্দ এবং অপছন্দ অনুসারে তৈরি করতে পারে। সামগ্রিকভাবে, কুকিজ আমাদেরকে সাহায্য করে আপনাকে একটি ভালো ওয়েবসাইট প্রদান করতে সাহায্য করে, আমাদেরকে নিরীক্ষণ করতে সাহায্য করে যে কোন পৃষ্ঠাগুলি আপনি দরকারী এবং কোনটি আপনার কাছে নেই৷ একটি কুকি কোনোভাবেই আমাদেরকে আপনার কম্পিউটার বা আপনার সম্পর্কে কোনো তথ্যের অ্যাক্সেস দেয় না, আপনি যে ডেটা আমাদের সাথে ভাগ করতে চান তা ছাড়া।",
  },
  heading6: {
    en: "Links to Other Websites",
    bn: "অন্যান্য ওয়েবসাইটের লিঙ্ক",
  },
  paragraph5: {
    en: "Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.",
    bn: "আমাদের ওয়েবসাইটে আগ্রহের অন্যান্য ওয়েবসাইটের লিঙ্ক থাকতে পারে। যাহোক, একবার আপনি আমাদের সাইট ছেড়ে যেতে এই লিঙ্কগুলি ব্যবহার করেছেন, আপনি যে নোট করা উচিত যে অন্য ওয়েবসাইটের উপর আমাদের কোন নিয়ন্ত্রণ নেই। অতএব, এই ধরনের সাইট পরিদর্শন করার সময় আপনি যে তথ্য প্রদান করেন তার সুরক্ষা এবং গোপনীয়তার জন্য আমরা দায়ী হতে পারি না এবং এই ধরনের সাইটগুলি এই গোপনীয়তা বিবৃতি দ্বারা নিয়ন্ত্রিত হয় না। আপনার সতর্কতা অবলম্বন করা উচিত এবং প্রশ্নে থাকা ওয়েবসাইটে প্রযোজ্য গোপনীয়তা বিবৃতিটি দেখতে হবে।",
  },
  heading7: {
    en: "Controlling Your Personal Information",
    bn: "আপনার ব্যক্তিগত তথ্য নিয়ন্ত্রণ",
  },
  paragraph6: {
    en: "You may choose to restrict the collection or use of your personal information in the following ways",
    bn: "আপনি নিম্নলিখিত উপায়ে আপনার ব্যক্তিগত তথ্য সংগ্রহ বা ব্যবহার সীমাবদ্ধ করতে বেছে নিতে পারেন",
  },
  listItem8: {
    en: "If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at [email protected].",
    bn: "আপনি যদি পূর্বে আপনার ব্যক্তিগত তথ্য ব্যবহার করে আমাদের সাথে সম্মত হন সরাসরি বিপণনের উদ্দেশ্যে, আপনি যে কোনো সময় আমাদেরকে [ইমেল সুরক্ষিত] এ লিখে বা ইমেল করে আপনার মন পরিবর্তন করতে পারেন",
  },
  listItem9: {
    en: "We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.",
    bn: "আমরা তৃতীয় পক্ষের কাছে আপনার ব্যক্তিগত তথ্য বিক্রি, বিতরণ বা ইজারা দেব না যদি না আমাদের কাছে আপনার অনুমতি না থাকে বা এটি করার জন্য আইন দ্বারা প্রয়োজন হয়। আমরা তৃতীয় পক্ষের প্রচারমূলক তথ্য পাঠাতে আপনার ব্যক্তিগত তথ্য ব্যবহার করতে পারি যা আমরা মনে করি যে আপনি যদি আমাদের বলেন যে আপনি এটি ঘটতে চান তাহলে আপনার কাছে আকর্ষণীয় হতে পারে।",
  },
  listItem10: {
    en: "You may request details of personal information which we hold about you. If you would like a copy of the information held on you, please write to [Your Company Name, Address, City, State, Zip Code] or email [email protected]",
    bn: "আপনি ব্যক্তিগত তথ্যের বিবরণের জন্য অনুরোধ করতে পারেন যা আমরা আপনার সম্পর্কে রাখি। আপনি যদি আপনার কাছে রাখা তথ্যের একটি অনুলিপি চান তবে অনুগ্রহ করে [আপনার কোম্পানির নাম, ঠিকানা, শহর, রাজ্য, জিপ কোড] বা ইমেল লিখুন [ইমেল সুরক্ষিত]",
  },
  listItem11: {
    en: "If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.",
    bn: "আপনি যদি বিশ্বাস করেন যে আমরা আপনার কাছে রাখা কোনো তথ্য ভুল বা অসম্পূর্ণ, দয়া করে উপরের ঠিকানায় যত তাড়াতাড়ি সম্ভব আমাদের লিখুন বা ইমেল করুন। আমরা অবিলম্বে ভুল পাওয়া যে কোনো তথ্য সংশোধন করা হবে",
  },
  paragraph7: {
    en: "This privacy policy is subject to change without notice.",
    bn: "এই গোপনীয়তা নীতি নোটিশ ছাড়াই পরিবর্তন সাপেক্ষে।",
  },
};
</script>

<template>
  <h1 class="py-16"></h1>
  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">
        {{ language.heading1[$i18n.locale] }}
      </h1>

      <p class="mb-4">
        {{ language.paragraph1[$i18n.locale] }}
      </p>

      <h2 class="text-2xl font-bold mb-2">
        {{ language.heading2[$i18n.locale] }}
      </h2>

      <p class="mb-4">{{ language.paragraphHeading[$i18n.locale] }}:</p>

      <ul class="list-disc list-inside mb-4">
        <li>{{ language.listItem1[$i18n.locale] }}</li>
        <li>{{ language.listItem2[$i18n.locale] }}</li>
        <li>{{ language.listItem3[$i18n.locale] }}</li>
      </ul>

      <h2 class="text-2xl font-bold mb-2">
        {{ language.heading3[$i18n.locale] }}
      </h2>

      <p class="mb-4">{{ language.paragraph2[$i18n.locale] }}:</p>

      <ul class="list-disc list-inside mb-4">
        <li>{{ language.listItem4[$i18n.locale] }}</li>
        <li>{{ language.listItem5[$i18n.locale] }}</li>
        <li>
          {{ language.listItem6[$i18n.locale] }}
        </li>
        <li>
          {{ language.listItem7[$i18n.locale] }}
        </li>
      </ul>

      <h2 class="text-2xl font-bold mb-2">
        {{ language.heading4[$i18n.locale] }}
      </h2>

      <p class="mb-4">
        {{ language.paragraph3[$i18n.locale] }}
      </p>

      <h2 class="text-2xl font-bold mb-2">
        {{ language.heading5[$i18n.locale] }}
      </h2>

      <p class="mb-4">
        {{ language.paragraph4[$i18n.locale] }}
      </p>

      <h2 class="text-2xl font-bold mb-2">
        {{ language.heading6[$i18n.locale] }}
      </h2>

      <p class="mb-4">
        {{ language.paragraph5[$i18n.locale] }}
      </p>

      <h2 class="text-2xl font-bold mb-2">
        {{ language.heading7[$i18n.locale] }}
      </h2>

      <p class="mb-4">{{ language.paragraph6[$i18n.locale] }}:</p>

      <ul class="list-disc list-inside mb-4">
        <li>
          {{ language.listItem8[$i18n.locale] }}
        </li>
        <li>
          {{ language.listItem9[$i18n.locale] }}
        </li>
        <li>
          {{ language.listItem10[$i18n.locale] }}
        </li>
        <li>
          {{ language.listItem11[$i18n.locale] }}
        </li>
      </ul>

      <p class="mb-4">
        {{ language.paragraph7[$i18n.locale] }}
      </p>
    </div>
  </div>
</template>
