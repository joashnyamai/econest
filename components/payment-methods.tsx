"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Banknote, Smartphone, Building2 } from "lucide-react"

const paymentOptions = [
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Pay securely with your card",
    icon: CreditCard,
    popular: true,
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    description: "Quick and secure payment",
    icon: Smartphone,
    popular: false,
  },
  {
    id: "tabby",
    name: "Tabby",
    description: "Buy now, pay later in 4 installments",
    icon: CreditCard,
    popular: false,
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    description: "Direct bank transfer",
    icon: Building2,
    popular: false,
  },
  {
    id: "cash-on-delivery",
    name: "Cash on Delivery",
    description: "Pay when you receive your order",
    icon: Banknote,
    popular: false,
  },
]

export function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("card")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              3
            </span>
            Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="space-y-4">
            {paymentOptions.map((option) => {
              const Icon = option.icon
              return (
                <div key={option.id} className="relative">
                  <Label
                    htmlFor={option.id}
                    className={`flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                      selectedMethod === option.id ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <RadioGroupItem value={option.id} id={option.id} />
                    <div className="flex items-center space-x-3 flex-1">
                      <div
                        className={`p-2 rounded-lg ${
                          selectedMethod === option.id ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{option.name}</span>
                          {option.popular && (
                            <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </Label>
                </div>
              )
            })}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Payment Details Form */}
      {selectedMethod === "card" && (
        <Card>
          <CardHeader>
            <CardTitle>Card Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            <div>
              <Label htmlFor="cardholder">Cardholder Name</Label>
              <Input id="cardholder" placeholder="John Doe" />
            </div>
          </CardContent>
        </Card>
      )}

      {selectedMethod === "bank-transfer" && (
        <Card>
          <CardHeader>
            <CardTitle>Bank Transfer Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium mb-2">Transfer to:</p>
                <p>
                  <strong>Bank:</strong> EcoNest Bank
                </p>
                <p>
                  <strong>Account:</strong> 1234567890
                </p>
                <p>
                  <strong>IBAN:</strong> AE123456789012345678901
                </p>
                <p>
                  <strong>Reference:</strong> ORDER-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
              <p className="text-muted-foreground">
                Please include the reference number in your transfer. Your order will be processed once payment is
                confirmed.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedMethod === "cash-on-delivery" && (
        <Card>
          <CardHeader>
            <CardTitle>Cash on Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium mb-2">Payment Instructions:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Pay in cash when your order is delivered</li>
                  <li>• Additional AED 10 COD fee applies</li>
                  <li>• Have exact change ready for faster delivery</li>
                  <li>• Available for orders within UAE only</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedMethod === "tabby" && (
        <Card>
          <CardHeader>
            <CardTitle>Tabby - Buy Now, Pay Later</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium mb-2">How it works:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Split your purchase into 4 equal payments</li>
                  <li>• First payment due today, rest every 2 weeks</li>
                  <li>• No interest or fees when you pay on time</li>
                  <li>• Instant approval for eligible customers</li>
                </ul>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                Continue with Tabby
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedMethod === "apple-pay" && (
        <Card>
          <CardHeader>
            <CardTitle>Apple Pay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Use Touch ID or Face ID to complete your purchase securely.
              </p>
              <Button className="w-full bg-black hover:bg-black/90 text-white">
                <Smartphone className="mr-2 h-4 w-4" />
                Pay with Apple Pay
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
