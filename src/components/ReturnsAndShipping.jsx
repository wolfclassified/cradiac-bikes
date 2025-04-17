import React from "react";

const ReturnsShippingComponent = () => {
  return (
    <div className="bg-[#F4FAEC] rounded-[20px] p-16 text-left shadow-md mb-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Returns Policy</h2>
        <p className="mb-2">
          You may return most new, unopened items within 7 days of delivery for a full refund. We'll also pay the return
          shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).
        </p>
        <p className="mb-2">
          You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in
          many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your
          return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5
          business days), and the time it takes your bank to process our refund request (5 to 10 business days).
        </p>
        <p>
          If you need to return an item, simply login to your account, view the order using the "Complete Orders" link under the
          My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received
          and processed the returned item.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Shipping</h2>
        <p className="mb-2">
          We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products
          cannot be shipped to international destinations.
        </p>
        <p className="mb-2">
          When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and
          the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on
          the shipping quotes page.
        </p>
        <p>
          Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be
          found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to
          the next full pound.
        </p>
      </div>
    </div>
  );
};

export default ReturnsShippingComponent;