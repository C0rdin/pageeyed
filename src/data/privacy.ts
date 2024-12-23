interface PrivacySection {
  title: string;
  content: Array<{
    id?: string;
    text: string;
    list?: string[];
  }>;
}

export const sections: PrivacySection[] = [
  {
    title: "1. Information We Collect",
    content: [
      {
        id: "1.1.",
        text: "Personal Information: We collect personal information that you provide to us when you place an order, contact us, or interact with our website. This includes:",
        list: [
          "Name",
          "Email address",
          "Phone number (if provided)",
          "Payment information",
          "Any additional details submitted via our forms (e.g., project requirements, uploaded files)"
        ]
      },
      {
        id: "1.2.",
        text: "Non-Personal Information: We collect non-personal data automatically through cookies and analytics tools, such as:",
        list: [
          "Browser type",
          "IP address",
          "Device information",
          "Pages visited on our website",
          "Time spent on our website"
        ]
      }
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        text: "We use the information collected for the following purposes:",
        list: [
          "To process and fulfill your orders",
          "To communicate with you about your projects, inquiries, or updates",
          "To improve our services and user experience",
          "To comply with legal obligations",
          "To analyze website usage and trends for optimization purposes"
        ]
      }
    ]
  },
  {
    title: "3. Sharing Your Information",
    content: [
      { 
        id: "3.1.",
        text: "Third-Party Service Providers: We may share your information with trusted third-party service providers for payment processing, email communication, or other necessary functions. These providers are obligated to keep your data secure and use it solely for the purposes specified."
      },
      {
        id: "3.2.",
        text: "Legal Compliance: We may disclose your information if required by law or to protect our legal rights."
      },
      {
        id: "3.3.",
        text: "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity."
      }
    ]
  },
  {
    title: "4. Data Security",
    content: [
      {
        text: "We implement appropriate technical and organizational measures to safeguard your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure."
      }
    ]
  },
  {
    title: "5. Cookies",
    content: [
      {
        text: "Our website uses cookies to enhance user experience and analyze website traffic. You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website."
      }
    ]
  },
  {
    title: "6. Your Rights",
    content: [
      {
        text: "You have the following rights regarding your personal data:",
        list: [
          "Access: Request access to the personal information we hold about you",
          "Correction: Request correction of inaccurate or incomplete data",
          "Deletion: Request deletion of your personal information, subject to legal obligations",
          "Objection: Object to the processing of your data for specific purposes",
          "Data Portability: Request transfer of your data to another service provider"
        ]
      }
    ]
  },
  {
    title: "7. Retention of Data",
    content: [
      {
        text: "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or to comply with legal obligations."
      }
    ]
  },
  {
    title: "8. Changes to This Policy",
    content: [
      {
        text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review the policy periodically."
      }
    ]
  }
];