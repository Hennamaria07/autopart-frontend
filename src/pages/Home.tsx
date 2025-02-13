import * as React from "react"
import { motion } from "framer-motion"
import { Car, Search, ArrowRight } from "lucide-react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { Link } from "react-router-dom"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  // const [plateNumber, setPlateNumber] = React.useState("")

  const popularBrands = [
    { name: "Toyota", logo: "https://th.bing.com/th/id/OIP.lu3_UAgouMhR7AHaAdkQOQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" },
    { name: "Honda", logo: "https://www.motorbiscuit.com/wp-content/uploads/2022/01/Honda-logo.jpg?w=1024&h=681&strip=all&quality=89" },
    { name: "Ford", logo: "https://th.bing.com/th/id/OIP.LosVjInRlcFVHgXOlWYvfQHaEo?rs=1&pid=ImgDetMain" },
    { name: "BMW", logo: "https://images.unsplash.com/photo-1521058001910-55b77aba2203?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwYnJhbmQlMjBsb2dvfGVufDB8fDB8fHww" },
    { name: "Mercedes", logo: "https://th.bing.com/th/id/OIP.vgvY59iKjtdavLHEFo-eJwHaEK?rs=1&pid=ImgDetMain" },
    { name: "Volkswagen", logo: "https://th.bing.com/th/id/OIP.YALadKdkxrg1ClIlvko4AgHaEK?rs=1&pid=ImgDetMain" },
  ]

  const featuredCategories = [
    { name: "Brake System", image: "https://images.unsplash.com/photo-1599143125814-3fe66b6fecd8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Engine Parts", image: "https://images.unsplash.com/photo-1429772011165-0c2e054367b8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Suspension", image: "https://images.unsplash.com/photo-1599143125823-fecf49e7548b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Center Console", image: "https://plus.unsplash.com/premium_photo-1693876592077-83dd243edbb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container">
          <motion.div className="max-w-2xl space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Find the Perfect Parts for Your Vehicle</h1>
            <p className="text-lg text-muted-foreground">
              Search from millions of high-quality auto parts. Fast shipping and expert support included.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search parts by number (e.g. EK4508)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 text-lg"
                />
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button className="w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700">
                <Car className="h-5 w-5" />
                Add Car to My Garage
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Search Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-bold">Search by</h2>
              <span className="text-2xl font-bold text-blue-500">Vehicle</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Car Maker" />
                </SelectTrigger>
                <SelectContent>
                  {popularBrands.map((brand) => (
                    <SelectItem key={brand.name} value={brand.name.toLowerCase()}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Model Line" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="camry">Camry</SelectItem>
                  <SelectItem value="corolla">Corolla</SelectItem>
                  <SelectItem value="rav4">RAV4</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => 2024 - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="bg-blue-600 hover:bg-blue-700">
                Search Parts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Popular Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {popularBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Link to={`/brands/${brand.name.toLowerCase()}`}>
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <p className="text-center mt-4 font-medium">{brand.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Featured Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Link to={`/catalog/${category.name.toLowerCase()}`}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                      View Products <ArrowRight className="inline h-4 w-4 ml-1" />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

