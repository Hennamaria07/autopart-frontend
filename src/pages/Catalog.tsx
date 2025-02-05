import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/Pagination"
import { Slider } from "../components/ui/Slider"
import { ProductCard } from "../components/ProductCard"
import { Filter } from "lucide-react"

// Mock data for demonstration
const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Auto Part ${i + 1}`,
  category: ["Brake System", "Engine Parts", "Suspension", "Electrical"][i % 4],
  price: Math.floor(Math.random() * 200) + 20,
  rating: (Math.random() * 2 + 3).toFixed(1),
  image: "/placeholder.svg",
}))

export default function CatalogPage() {
  const [priceRange, setPriceRange] = React.useState([0, 200])
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [sortBy, setSortBy] = React.useState("popularity")

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Auto Parts Catalog</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <motion.div
          className="w-full md:w-64 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div>
            <h2 className="text-lg font-semibold mb-2">Filters</h2>
            <Input type="text" placeholder="Search parts..." className="mb-4" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="brake">Brake System</SelectItem>
                <SelectItem value="engine">Engine Parts</SelectItem>
                <SelectItem value="suspension">Suspension</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Price Range</h3>
            <Slider min={0} max={200} step={10} value={priceRange} onValueChange={setPriceRange} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <Button className="w-full">
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </motion.div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-muted-foreground">Showing {products.length} results</p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

