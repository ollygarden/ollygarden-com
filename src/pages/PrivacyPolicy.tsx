export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Effective Date: 21/05/2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          OllyGarden ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard information when you use our services, which involve analyzing telemetry data to provide insights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">We collect and process telemetry data, which may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">System Metrics: CPU usage, memory consumption, disk I/O, and network statistics.</li>
          <li className="mb-2">Application Logs: Error logs, access logs, and other application-generated logs.</li>
          <li className="mb-2">Trace Data: Information about the flow of requests through your systems.</li>
        </ul>
        <p>This data is used solely to provide insights and analytics to improve system performance and reliability.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">The telemetry data collected is used to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Provide analytics and insights into system performance.</li>
          <li className="mb-2">Identify and diagnose issues within your systems.</li>
          <li className="mb-2">Improve our services and develop new features.</li>
        </ul>
        <p>We do not use this data for marketing purposes or share it with third parties for such purposes.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
        <p className="mb-4">We do not sell or rent your telemetry data. We may share data with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Service Providers: Third-party vendors who assist in providing our services, under strict confidentiality agreements.</li>
          <li className="mb-2">Legal Requirements: If required by law, we may disclose data to comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p>Telemetry data is retained only as long as necessary to provide our services and fulfill the purposes outlined in this policy. We may retain and use information as required to comply with legal obligations, resolve disputes, and enforce our agreements.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
        <p className="mb-4">Depending on your location, you may have the following rights regarding your data:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Access: Request access to the data we hold about you.</li>
          <li className="mb-2">Correction: Request correction of inaccurate or incomplete data.</li>
          <li className="mb-2">Deletion: Request deletion of your data, subject to legal obligations.</li>
          <li className="mb-2">Objection: Object to the processing of your data under certain circumstances.</li>
        </ul>
        <p>To exercise these rights, please contact us at contact@ollygarden.com.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
        <p>If we transfer data internationally, we ensure appropriate safeguards are in place to protect your data, in compliance with applicable data protection laws.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes and indicate at the top of the policy when it was last updated.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <address className="not-italic">
          <p className="mb-2">OllyGarden, Inc.</p>
          <p className="mb-2">251 Little Falls Dr</p>
          <p className="mb-2">Wilmington, DE, US, 19808</p>
          <p className="mb-2">contact@ollygarden.com</p>
          <p>+491628993238</p>
        </address>
      </section>
    </div>
  );
}
