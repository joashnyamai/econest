import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Bamboo Dinnerware Set",
    price: "$89",
    image: "/bamboo-dinnerware-set.jpg",
  },
  {
    id: 2,
    name: "Organic Cotton Throw",
    price: "$65",
    image: "/organic-cotton-throw-blanket.jpg",
  },
  {
    id: 3,
    name: "Recycled Glass Vase",
    price: "$45",
    image: "/recycled-glass-vase.png",
  },
]

export function ProductGrid() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
