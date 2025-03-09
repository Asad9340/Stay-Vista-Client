

const TermsOfService = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 md:my-12 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1B1F3B]">
        Terms of Service
      </h1>

      <div className="mt-8 text-lg text-gray-700">
        <p>
          Welcome to Stay Vista. These Terms of Service (Terms) govern your
          use of our website, services, and products (collectively referred to
          as Services). By accessing or using Stay Vista s Services, you agree
          to comply with these Terms. If you do not agree with these Terms,
          please do not use our Services.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          1. Use of Our Services
        </h2>
        <p className="mt-2">
          Stay Vista offers an online platform for booking motels. You agree to
          use our Services solely for lawful purposes and in accordance with
          these Terms. You may not use Stay Vista for any illegal activities,
          including but not limited to, fraud, impersonation, or violation of
          the rights of others.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          2. Booking and Payment
        </h2>
        <p className="mt-2">
          When you make a booking on Stay Vista, you agree to pay the full price
          of the booking, including any applicable taxes and fees, at the time
          of booking. Payments are processed through secure third-party payment
          providers, and Stay Vista is not responsible for any issues related to
          payment processing.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          3. Cancellations and Refunds
        </h2>
        <p className="mt-2">
          Please refer to our Refund Policy page for detailed information about
          cancellations and refunds. Cancellation policies may vary depending on
          the motel and booking type. It is your responsibility to review the
          motel’s cancellation policy before completing your booking.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          4. User Responsibilities
        </h2>
        <p className="mt-2">
          As a user of Stay Vista, you are responsible for maintaining the
          confidentiality of your account credentials. You agree to notify Stay
          Vista immediately of any unauthorized use of your account. Stay Vista
          is not liable for any loss or damage caused by your failure to protect
          your account credentials.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          5. Modifications to the Terms
        </h2>
        <p className="mt-2">
          Stay Vista reserves the right to modify or update these Terms at any
          time without prior notice. All changes will be posted on this page,
          and the Last Updated date will be revised accordingly. By continuing
          to use our Services after any modifications, you agree to the updated
          Terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          6. Limitation of Liability
        </h2>
        <p className="mt-2">
          Stay Vista strives to provide accurate and up-to-date information
          about motels, availability, pricing, and bookings. However, Stay Vista
          does not guarantee the accuracy of this information. Stay Vista is not
          responsible for any damages or losses resulting from the use of the
          Services, including but not limited to, lost bookings, incorrect
          pricing, or issues with third-party service providers.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          7. Privacy and Data Protection
        </h2>
        <p className="mt-2">
          Stay Vista is committed to protecting your privacy. Please review our
          Privacy Policy to understand how we collect, use, and protect your
          personal information.
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          8. Governing Law
        </h2>
        <p className="mt-2">
          These Terms shall be governed by and construed in accordance with the
          laws of [Country/State]. Any disputes arising from these Terms shall
          be resolved in the appropriate courts of [Country/State].
        </p>

        <h2 className="text-2xl font-semibold text-[#1B1F3B] mt-6">
          9. Contact Us
        </h2>
        <p className="mt-2">
          If you have any questions or concerns about these Terms or our
          Services, please feel free to contact us at{' '}
          <a href="mailto:support@stayvista.com" className="text-[#1B1F3B]">
            support@stayvista.com
          </a>
          .
        </p>

        <div className="text-center mt-8">
          <a
            href="/"
            className="bg-[#1B1F3B] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#1B1F6B] transition duration-300 ease-in-out"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
