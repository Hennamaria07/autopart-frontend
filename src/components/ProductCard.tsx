import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/Button"

interface ProductCardProps {
  product: {
    id: number
    name: string
    category: string
    price: number
    rating: string
    image: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={200}
          className="w-full object-cover h-48"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </motion.div>
  )
}

