
const FAQ = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 md:my-12 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1B1F3B]">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            1. How do I make a booking?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            To make a booking on Stay Vista, simply browse through our available
            motels, select the one you want, and choose your check-in and
            check-out dates. Then, follow the checkout process to complete your
            booking.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            2. Can I modify or cancel my booking?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Yes, you can modify or cancel your booking depending on the
            cancellation policy of the motel you’ve booked. Please refer to our
            Refund Policy for more details.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            3. What payment methods are accepted?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            We accept a wide variety of payment methods, including credit/debit
            cards, PayPal, and other secure third-party payment providers. Your
            payment details are handled securely.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            4. Is my personal information safe?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Yes, we take your privacy seriously. Please review our Privacy
            Policy to understand how your personal information is collected,
            used, and protected.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            5. Do I need to create an account to book a motel?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            No, you do not need to create an account to make a booking. However,
            creating an account will allow you to view your booking history and
            receive personalized recommendations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            6. Can I book for someone else?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Yes, you can book a room for someone else. Simply enter their
            details during the booking process.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            7. Are pets allowed in the motels?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Pet policies vary by motel. Please check the motels pet policy on
            the booking page before making your reservation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            8. What should I do if I encounter issues during my stay?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            If you encounter any issues during your stay, please contact the
            motel’s front desk immediately. You can also reach out to our
            customer support team through our contact page for assistance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            9. Can I book multiple rooms at once?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Yes, you can book multiple rooms at once. Simply select the number
            of rooms you wish to book during the booking process.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            10. How can I contact Stay Vista?
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            If you have any questions or need assistance, you can reach us
            through our contact page or email us directly at{' '}
            <a href="mailto:support@stayvista.com" className="text-[#1B1F3B]">
              support@stayvista.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
