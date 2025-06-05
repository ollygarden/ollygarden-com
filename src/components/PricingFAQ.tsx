
import { Card, CardContent } from '@/components/ui/card';

const PricingFAQ = () => {
  const faqs = [
    {
      question: "What happens if my application sends more than 1,000 traces in one second?",
      answer: "We'll analyze the first 1,000 traces received in that second. Any additional traces received within that same second will be accepted by our endpoint but then discarded from the current analysis queue to maintain system performance. Your data flow won't be blocked. Analysis of new data continues as normal in the next second."
    },
    {
      question: "How do I know if 1,000 telemetry points/second is enough for me?",
      answer: "For generating meaningful insights and an accurate Instrumentation Score, 1,000 traces/second provides a very substantial sample for most applications. This isn't about capturing 100% of your production firehose for storage (that's what your backend vendor is for), but about analyzing a statistically significant portion to understand quality and efficiency. If you have specific concerns about extremely high-burst traffic patterns you want fully analyzed, let's talk."
    },
    {
      question: "Is the 1,000 points/second limit applied per service or for my whole organization?",
      answer: "The $2,500/month plan provides a total capacity of 1,000 telemetry points/second for your organization to send to the Insights service. You can direct data from multiple services within this limit."
    },
    {
      question: "Does OllyGarden store my raw telemetry data?",
      answer: "For the Telemetry Insights MVP, we process your OTLP data to generate insights and your Instrumentation Score. The raw data is not stored by OllyGarden long-term. Data is processed for insights and then discarded."
    },
    {
      question: "What types of telemetry data do you analyze?",
      answer: "Our initial MVP focuses on OTLP trace data for generating the Instrumentation Score. We plan to expand to metrics and logs analysis in future versions of the service."
    },
    {
      question: "How long does it take to get my insights report?",
      answer: "Typically within 24-48 hours after we receive a sufficient data sample to generate meaningful insights and calculate your Instrumentation Score."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, our early access program offers flexible cancellation. You can cancel at any time with 30 days notice. We want you to be successful with the insights we provide."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked 
              <span className="text-olly-green"> Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about our pricing and service.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
