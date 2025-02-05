import * as React from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "../components/ui/Input"
import { Link } from "react-router-dom"

// Mock data for demonstration
const brands = [
  { name: "Toyota", logo: "/placeholder.svg", productCount: 1245 },
  { name: "Honda", logo: "/placeholder.svg", productCount: 987 },
  { name: "Ford", logo: "/placeholder.svg", productCount: 1102 },
  { name: "BMW", logo: "/placeholder.svg", productCount: 876 },
  { name: "Mercedes", logo: "/placeholder.svg", productCount: 943 },
  { name: "Volkswagen", logo: "/placeholder.svg", productCount: 1032 },
  { name: "Audi", logo: "/placeholder.svg", productCount: 789 },
  { name: "Nissan", logo: "/placeholder.svg", productCount: 901 },
  { name: "Hyundai", logo: "/placeholder.svg", productCount: 854 },
  { name: "Kia", logo: "/placeholder.svg", productCount: 732 },
  { name: "Chevrolet", logo: "/placeholder.svg", productCount: 1078 },
  { name: "Mazda", logo: "/placeholder.svg", productCount: 645 },
]

export default function BrandsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredBrands = brands.filter((brand) => brand.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Browse by Brand</h1>
      <div className="relative max-w-md mx-auto mb-8">
        <Input
          type="search"
          placeholder="Search brands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredBrands.map((brand) => (
          <motion.div
            key={brand.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <Link to={`/catalog?brand=${brand.name.toLowerCase()}`}>
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h2 className="text-center font-medium">{brand.name}</h2>
              <p className="text-center text-sm text-muted-foreground">{brand.productCount} products</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

