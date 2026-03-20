import { useState } from "react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is HelloQ?",
      answer: "HelloQ is a colorful and inclusive social platform where people can meet, chat, express themselves freely, and build meaningful relationships. It celebrates diversity and creates a safe space for everyone."
    },
    {
      question: "Is HelloQ free?",
      answer: "Yes! HelloQ is free to download and use. We offer optional premium features for users who want to enhance their experience with exclusive tools and benefits."
    },
    {
      question: "How does matching work?",
      answer: "Our smart matching algorithm considers your interests, preferences, and behavior to suggest compatible people. The more you use HelloQ, the better your matches become."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-leading encryption and security practices to protect your personal data. You have full control over your privacy settings and what information is shared."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 bg-[#e695eb]">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Frequently Asked{" "}
          <span className="text-white/80">Questions</span>
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                relative rounded-2xl overflow-hidden
                bg-white/30 backdrop-blur-lg border border-white/40
                transition-all duration-300 group
              "
            >

              {/* ✨ SINGLE COLOR GLOW */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition duration-500
                bg-[#d45add]/50 blur-xl
              "></div>

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="relative z-10 w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>

                {/* ICON */}
                <span className={`text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}>
                  ⌄
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`relative z-10 px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-800">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;