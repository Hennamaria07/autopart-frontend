import * as React from "react"
import { motion } from "framer-motion"
import { Minus, Plus, X } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"

// Mock data for demonstration
const cartItems = [
  { id: 1, name: "Brake Pad Set", price: 45.99, quantity: 1, image: "/placeholder.svg" },
  { id: 2, name: "Oil Filter", price: 12.99, quantity: 2, image: "/placeholder.svg" },
  { id: 3, name: "Spark Plug", price: 8.99, quantity: 4, image: "/placeholder.svg" },
]

export default function CartPage() {
  const [items, setItems] = React.useState(cartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setItems(
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10 // Fixed shipping cost for demonstration
  const total = subtotal + shipping

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link to="/catalog">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center space-x-4 border-b py-4"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="w-16 text-center"
                  />
                  <Button size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, 0)}>
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

