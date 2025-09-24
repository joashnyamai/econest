import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-light mb-8 text-balance leading-tight">
          Beautiful homes,
          <span className="text-primary font-normal block mt-2">sustainable future</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          Transform your living spaces with thoughtfully designed, eco-conscious home goods that blend exquisite
          craftsmanship with environmental responsibility.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base px-8 py-6 rounded-full">
            Explore Collection
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-full bg-transparent">
            Learn Our Story
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Eco Products</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Sustainable</div>
          </div>
        </div>
      </div>
    </section>
  )
}
