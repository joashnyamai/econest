import { PaymentMethods } from "@/components/payment-methods"
import { OrderSummary } from "@/components/order-summary"

export function CheckoutSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl font-bold text-center mb-12">Checkout</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <PaymentMethods />
          <OrderSummary />
        </div>
      </div>
    </section>
  )
}
