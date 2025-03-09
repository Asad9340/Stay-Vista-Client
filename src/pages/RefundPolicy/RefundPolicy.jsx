
const RefundPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 md:my-12 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1B1F3B]">
        Refund Policy
      </h1>

      <div className="mt-8 text-lg text-gray-700">
        <p>
          We at Stay Vista strive to provide high-quality services and
          ensure customer satisfaction. However, in case you are not satisfied
          with our services, we offer the following refund policy:
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          Eligibility for Refund
        </h2>
        <p className="mt-2">
          To be eligible for a refund, the following conditions must be met:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            The service/product must be unused and in its original condition.
          </li>
          <li>
            The request for a refund must be made within 14 days from the date
            of purchase.
          </li>
          <li>
            The product or service must be purchased directly through our
            official website or authorized channels.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          Non-Refundable Conditions
        </h2>
        <p className="mt-2">
          We do not offer refunds under the following conditions:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            If the product or service was used or consumed (e.g., tickets,
            access to digital content, etc.).
          </li>
          <li>If the refund request is made after 14 days of purchase.</li>
          <li>If the product is damaged due to user negligence or misuse.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          Refund Process
        </h2>
        <p className="mt-2">
          To initiate a refund request, please follow the steps below:
        </p>
        <ol className="list-decimal pl-6 mt-2">
          <li>
            Contact our support team at <strong>support@stayvista.com</strong>
            .
          </li>
          <li>
            Provide your order number and details of the product/service
            purchased.
          </li>
          <li>
            Our team will review your request and get back to you within 5
            business days.
          </li>
          <li>
            If your refund is approved, we will process the refund and send you
            confirmation via email.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          Refund Timelines
        </h2>
        <p className="mt-2">
          Refunds will be processed to the original payment method and typically
          take 7-10 business days. Please note that depending on your bank or
          payment provider, it may take additional time for the refund to
          reflect in your account.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          Contact Us
        </h2>
        <p className="mt-2">
          If you have any questions regarding our refund policy or need
          assistance with a refund request, feel free to contact us at{' '}
          <strong>support@stayvista.com</strong> or call our support team at{' '}
          <strong>(123) 456-7890</strong>.
        </p>

        <p className="mt-4">
          Thank you for choosing Stay Vista. We are committed to
          providing the best service and ensuring your satisfaction.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
