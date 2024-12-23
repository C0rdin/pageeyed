interface TermSection {
  title: string;
  content: Array<{
    id?: string;
    text: string;
  }>;
}

export const sections: TermSection[] = [
  {
    title: "1. General Overview",
    content: [
      { id: "1.1.", text: "pageey.com provides custom web design services based on user-provided requirements." },
      { id: "1.2.", text: "By submitting an order, you confirm that you are legally capable of entering into a binding contract." },
      { id: "1.3.", text: "These Terms and Conditions apply to all orders and services provided by pageey.com." }
    ]
  },
  {
    title: "2. Scope of Services",
    content: [
      { id: "2.1.", text: "We offer custom web design services tailored to the specifications provided by the client in the order form." },
      { id: "2.2.", text: "The client is responsible for providing accurate and complete information, including but not limited to design preferences, functionality requirements, and any necessary assets (e.g., logos, images)." },
      { id: "2.3.", text: "We do not offer hosting or domain registration services unless explicitly stated." }
    ]
  },
  {
    title: "3. Pricing and Payment",
    content: [
      { id: "3.1.", text: "Pricing for services is as follows:" },
      { text: "- Basic Plan: $349" },
      { text: "- Extended Plan: $549" },
      { text: "- Premium Plan: Custom Pricing (based on individual requirements)" },
      { id: "3.2.", text: "Full payment is required upfront for the Basic and Extended Plans. For the Premium Plan, a custom quote will be provided, and payment terms will be agreed upon before work begins." },
      { id: "3.3.", text: "Payments must be made through the methods specified on our website. All transactions are secure." },
      { id: "3.4.", text: "Prices are subject to change, but changes will not affect orders already placed and paid for." }
    ]
  },
  {
    title: "4. Order Process",
    content: [
      { id: "4.1.", text: "Clients must complete the online order form accurately and in full." },
      { id: "4.2.", text: "Once the order is submitted, we will review the details and provide confirmation via email." },
      { id: "4.3.", text: "For Premium Plan orders, a follow-up discussion may be required to finalize the quote and project scope." }
    ]
  },
  {
    title: "5. Delivery",
    content: [
      { id: "5.1.", text: "Delivery timelines will be communicated during the order confirmation process." },
      { id: "5.2.", text: "Timelines may vary depending on the complexity of the project and the responsiveness of the client in providing necessary information or feedback." },
      { id: "5.3.", text: "Completed projects will be delivered via email or other agreed-upon methods." }
    ]
  },
  {
    title: "6. Revisions",
    content: [
      { id: "6.1.", text: "Basic and Extended Plans include one round of revisions after the initial delivery." },
      { id: "6.2.", text: "Additional revisions will be charged at an hourly rate, which will be communicated in advance." },
      { id: "6.3.", text: "Premium Plan revisions will be outlined in the custom agreement." }
    ]
  },
  {
    title: "7. Client Responsibilities",
    content: [
      { id: "7.1.", text: "Clients must provide all necessary content, assets, and instructions in a timely manner." },
      { id: "7.2.", text: "Delays in providing information or feedback may result in delayed delivery." },
      { id: "7.3.", text: "Clients must ensure they have the rights to any materials submitted (e.g., images, logos) and indemnify pageey.com against any claims arising from unauthorized use." }
    ]
  },
  {
    title: "8. Intellectual Property",
    content: [
      { id: "8.1.", text: "Upon full payment, the client will own the rights to the final design delivered." },
      { id: "8.2.", text: "pageey.com reserves the right to showcase completed projects in its portfolio unless explicitly requested otherwise by the client." }
    ]
  },
  {
    title: "9. Refunds and Cancellations",
    content: [
      { id: "9.1.", text: "Refunds are not available once work has commenced on the project." },
      { id: "9.2.", text: "Cancellations requested before work begins may be eligible for a full refund." },
      { id: "9.3.", text: "In case of dissatisfaction with the final product, efforts will be made to address concerns, but refunds will not be issued for completed work." }
    ]
  },
  {
    title: "10. Limitation of Liability",
    content: [
      { id: "10.1.", text: "pageey.com is not responsible for:" },
      { text: "- Errors resulting from inaccurate or incomplete information provided by the client." },
      { text: "- Losses due to delays caused by the client's failure to provide required materials or feedback." },
      { text: "- Any issues arising from the client's hosting provider or third-party services." },
      { id: "10.2.", text: "Our total liability for any claim related to the services shall not exceed the amount paid by the client." }
    ]
  },
  {
    title: "11. Termination",
    content: [
      { id: "11.1.", text: "We reserve the right to terminate services if the client violates these Terms and Conditions or engages in unlawful activity." }
    ]
  },
  {
    title: "12. Changes to Terms",
    content: [
      { id: "12.1.", text: "We may update these Terms and Conditions from time to time. Clients will be notified of significant changes, but it is the client's responsibility to review the Terms periodically." }
    ]
  },
  {
    title: "13. Governing Law",
    content: [
      { id: "13.1.", text: "These Terms and Conditions are governed by the laws of Poland." }
    ]
  }
];