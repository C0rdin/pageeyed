interface CookieSection {
  title: string;
  content: Array<{
    id?: string;
    text: string;
    list?: string[];
  }>;
}

export const sections: CookieSection[] = [
  {
    title: "1. What Are Cookies?",
    content: [
      {
        text: "Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit a website. They help websites recognize your device and remember information about your preferences or actions."
      }
    ]
  },
  {
    title: "2. Types of Cookies We Use",
    content: [
      {
        id: "2.1.",
        text: "Essential Cookies",
        list: [
          "Required for basic website functionality",
          "Enable secure login and authentication",
          "Remember your preferences",
          "Cannot be disabled as they are necessary for the website to function"
        ]
      },
      {
        id: "2.2.",
        text: "Performance Cookies",
        list: [
          "Collect anonymous data about page views",
          "Track website usage patterns",
          "Help us understand user behavior",
          "Used to improve website performance"
        ]
      },
      {
        id: "2.3.",
        text: "Functional Cookies",
        list: [
          "Remember your preferences",
          "Store login details",
          "Customize your experience",
          "Enable additional features"
        ]
      },
      {
        id: "2.4.",
        text: "Advertising and Targeting Cookies",
        list: [
          "Deliver relevant advertisements",
          "Track marketing campaign effectiveness",
          "May be set by third-party services",
          "Help us understand our audience"
        ]
      }
    ]
  },
  {
    title: "3. How We Use Cookies",
    content: [
      {
        text: "We use cookies to:",
        list: [
          "Provide essential website functionality",
          "Remember your preferences and settings",
          "Analyze website traffic and usage patterns",
          "Deliver personalized content and advertisements"
        ]
      }
    ]
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      {
        text: "Some cookies on our website are set by third-party services we use, such as:",
        list: [
          "Analytics tools (e.g., Google Analytics)",
          "Advertising platforms (e.g., Google Ads, Facebook Pixel)",
          "Social media plugins (e.g., Share buttons from Facebook, Twitter, LinkedIn)"
        ]
      },
      {
        text: "These third parties have their own cookie policies, which we encourage you to review."
      }
    ]
  },
  {
    title: "5. Managing Cookies",
    content: [
      {
        id: "5.1.",
        text: "Browser Settings",
        list: [
          "Access your browser's settings",
          "Find the cookie management section",
          "Choose to accept or block specific types of cookies",
          "Clear existing cookies"
        ]
      },
      {
        id: "5.2.",
        text: "Cookie Consent Banner",
        list: [
          "Appears on your first visit",
          "Allows you to accept or reject non-essential cookies",
          "Can be updated at any time through our cookie preferences center"
        ]
      },
      {
        id: "5.3.",
        text: "Opt-Out Options",
        list: [
          "Google Analytics opt-out browser add-on",
          "Digital Advertising Alliance opt-out tool",
          "Individual advertising platform settings"
        ]
      }
    ]
  },
  {
    title: "6. Changes to This Policy",
    content: [
      {
        text: "We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. Any updates will be posted on this page with an updated effective date."
      }
    ]
  }
];