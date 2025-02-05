import * as React from "react"
import { motion } from "framer-motion"
import { Car, Plus, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"

// Mock data for demonstration
const savedVehicles = [
  { id: 1, make: "Toyota", model: "Camry", year: 2019 },
  { id: 2, make: "Honda", model: "Civic", year: 2020 },
  { id: 3, make: "Ford", model: "F-150", year: 2018 },
]

export default function GaragePage() {
  const [vehicles, setVehicles] = React.useState<any>(savedVehicles)
  const [newVehicle, setNewVehicle] = React.useState({ make: "", model: "", year: "" })

  const addVehicle = () => {
    if (newVehicle.make && newVehicle.model && newVehicle.year) {
      setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }])
      setNewVehicle({ make: "", model: "", year: "" })
    }
  }

  const removeVehicle = (id: number) => {
    setVehicles(vehicles.filter((vehicle: any) => vehicle.id !== id))
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">My Garage</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Add a Vehicle</CardTitle>
              <CardDescription>Enter your vehicle details below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={newVehicle.make} onValueChange={(value) => setNewVehicle({ ...newVehicle, make: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  <SelectItem value="nissan">Nissan</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Model"
                value={newVehicle.model}
                onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
              />
              <Select value={newVehicle.year} onValueChange={(value) => setNewVehicle({ ...newVehicle, year: value })}>
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
            </CardContent>
            <CardFooter>
              <Button onClick={addVehicle} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Vehicle
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-semibold mb-4">Your Vehicles</h2>
          {vehicles.length === 0 ? (
            <p className="text-muted-foreground">No vehicles added yet.</p>
          ) : (
            <div className="space-y-4">
              {vehicles.map((vehicle: any) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
                >
                  <div className="flex items-center space-x-4">
                    <Car className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="font-medium">
                        {vehicle.make} {vehicle.model}
                      </p>
                      <p className="text-sm text-muted-foreground">{vehicle.year}</p>
                    </div>
                  </div>
                  <Button variant="ghost" onClick={() => removeVehicle(vehicle.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

