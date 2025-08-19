import { Typography } from "@/components"

function TypographyDemo({ 
  children, 
  variants,
  ...props 
}: { 
  children: React.ReactNode
  variants: string
} & React.ComponentProps<typeof Typography>) {
  return (
    <div className="relative group">
      <Typography 
        {...props}
        className="transition-all duration-200 group-hover:bg-primary/10 group-hover:rounded px-2 py-1 -mx-2 -my-1"
      >
        {children}
      </Typography>
      
      <div className="absolute top-full left-0 mt-1 px-2 py-1 bg-popover border rounded text-xs font-mono text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
        {variants}
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="px-4 py-2 bg-muted/30 border border-border rounded-lg backdrop-blur-sm">
        <Typography variant="h3" color="muted" weight="medium" className="text-center">
          {children}
        </Typography>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  )
}

export function TypographyExample() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      
      <div className="p-4 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5">
        <Typography variant="h4" color="primary" className="mb-2">
          🎯 Demo Interactive Typography
        </Typography>
        <Typography variant="small" color="muted">
          Survolez n'importe quel texte pour voir les variants utilisés ! 
          Chaque élément montre ses props au hover pour vous aider à comprendre le système.
        </Typography>
      </div>
      
      <SectionTitle>Main Page Example</SectionTitle>
      <section className="space-y-4">
        <TypographyDemo 
          variant="h1" 
          color="primary" 
          align="center"
          variants='variant="h1" color="primary" align="center"'
        >
          Riverside Flamez
        </TypographyDemo>
        
        <TypographyDemo 
          variant="muted" 
          align="center"
          variants='variant="muted" align="center"'
        >
          Tuesday, 2 Feb 2021
        </TypographyDemo>
      </section>

      <SectionTitle>Navigation Menu Example</SectionTitle>
      <section className="space-y-4">
        <TypographyDemo 
          variant="h2"
          variants='variant="h2"'
        >
          Choose Dishes
        </TypographyDemo>
        
        <div className="flex gap-6">
          <TypographyDemo 
            color="primary" 
            weight="medium"
            variants='color="primary" weight="medium"'
          >
            Hot Dishes
          </TypographyDemo>
          <TypographyDemo 
            color="muted"
            variants='color="muted"'
          >
            Cold Dishes
          </TypographyDemo>
          <TypographyDemo 
            color="muted"
            variants='color="muted"'
          >
            Soup
          </TypographyDemo>
          <TypographyDemo 
            color="muted"
            variants='color="muted"'
          >
            Grill
          </TypographyDemo>
        </div>
      </section>

      <SectionTitle>Dish Cards Example</SectionTitle>
      <section className="space-y-6">
        <TypographyDemo 
          variant="h3"
          variants='variant="h3"'
        >
          Exemples de Cards Plats
        </TypographyDemo>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <TypographyDemo 
              variant="h4" 
              color="muted"
              variants='variant="h4" color="muted"'
            >
              Card 1
            </TypographyDemo>
            <div className="border rounded-lg p-4 space-y-3 bg-card">
            <TypographyDemo 
              variant="h4"
              variants='variant="h4"'
            >
              Spicy seasoned seafood noodles
            </TypographyDemo>
            
            <TypographyDemo 
              variant="price" 
              color="primary"
              variants='variant="price" color="primary"'
            >
              $ 2.29
            </TypographyDemo>
            
            <TypographyDemo 
              variant="small" 
              color="muted"
              variants='variant="small" color="muted"'
            >
              20 Bowls available
            </TypographyDemo>
            </div>
          </div>

          <div className="space-y-4">
            <TypographyDemo 
              variant="h4" 
              color="muted"
              variants='variant="h4" color="muted"'
            >
              Card 2
            </TypographyDemo>
            <div className="border rounded-lg p-4 space-y-3 bg-card">
            <TypographyDemo 
              variant="h4"
              variants='variant="h4"'
            >
              Beef dumpling in hot and sour soup
            </TypographyDemo>
            
            <TypographyDemo 
              variant="price" 
              color="primary"
              variants='variant="price" color="primary"'
            >
              $ 2.99
            </TypographyDemo>
            
            <TypographyDemo 
              variant="small" 
              color="muted"
              variants='variant="small" color="muted"'
            >
              16 Bowls available
            </TypographyDemo>
            </div>
          </div>
        </div>
      </section>

      <SectionTitle>Order Example</SectionTitle>
      <section className="space-y-4">
        <TypographyDemo 
          variant="h3"
          variants='variant="h3"'
        >
          Order #34562
        </TypographyDemo>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <TypographyDemo 
                weight="medium"
                variants='weight="medium"'
              >
                Spicy seasoned seafood noodles
              </TypographyDemo>
              <TypographyDemo 
                variant="small" 
                color="muted"
                variants='variant="small" color="muted"'
              >
                Please, just a little bit spicy only.
              </TypographyDemo>
            </div>
            <div className="text-right">
              <TypographyDemo 
                variants='(default)'
              >
                Qty: 2
              </TypographyDemo>
              <TypographyDemo 
                variant="price" 
                color="primary"
                variants='variant="price" color="primary"'
              >
                $ 4.58
              </TypographyDemo>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <TypographyDemo 
              weight="medium"
              variants='weight="medium"'
            >
              Sub total
            </TypographyDemo>
            <TypographyDemo 
              variant="price"
              variants='variant="price"'
            >
              $ 21.03
            </TypographyDemo>
          </div>
        </div>
      </section>

      <SectionTitle>Order Status Example</SectionTitle>
      <section className="space-y-4">
        <TypographyDemo 
          variant="h3"
          variants='variant="h3"'
        >
          Statuts de Commande
        </TypographyDemo>
        
        <div className="flex gap-4">
          <TypographyDemo 
            variant="small" 
            color="success" 
            weight="medium"
            variants='variant="small" color="success" weight="medium"'
          >
            Completed
          </TypographyDemo>
          
          <TypographyDemo 
            variant="small" 
            color="warning" 
            weight="medium"
            variants='variant="small" color="warning" weight="medium"'
          >
            Preparing
          </TypographyDemo>

          <TypographyDemo 
            variant="small" 
            color="pending" 
            weight="medium"
            variants='variant="small" color="pending" weight="medium"'
          >
            Pending
          </TypographyDemo>
        </div>
      </section>

      <SectionTitle>Dashboard Stats Example</SectionTitle>
      <section className="space-y-4">
        <TypographyDemo 
          variant="h2"
          variants='variant="h2"'
        >
          Dashboard Stats
        </TypographyDemo>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg space-y-2">
            <TypographyDemo 
              variant="h1" 
              color="primary"
              variants='variant="h1" color="primary"'
            >
              $10,243.00
            </TypographyDemo>
            <TypographyDemo 
              variant="muted"
              variants='variant="muted"'
            >
              Total Revenue
            </TypographyDemo>
          </div>
          
          <div className="p-4 border rounded-lg space-y-2">
            <TypographyDemo 
              variant="h1" 
              color="primary"
              variants='variant="h1" color="primary"'
            >
              23,456
            </TypographyDemo>
            <TypographyDemo 
              variant="muted"
              variants='variant="muted"'
            >
              Total Dish Ordered
            </TypographyDemo>
          </div>
          
          <div className="p-4 border rounded-lg space-y-2">
            <TypographyDemo 
              variant="h1" 
              color="primary"
              variants='variant="h1" color="primary"'
            >
              1,234
            </TypographyDemo>
            <TypographyDemo 
              variant="muted"
              variants='variant="muted"'
            >
              Total Customer
            </TypographyDemo>
          </div>
        </div>
      </section>

      <SectionTitle>Form Example</SectionTitle>
      <section className="space-y-4">
        <TypographyDemo 
          variant="h3"
          variants='variant="h3"'
        >
          Formulaire Exemple
        </TypographyDemo>
        
        <div className="space-y-4 max-w-md">
          <div>
            <TypographyDemo 
              variant="label" 
              as="label"
              variants='variant="label" as="label"'
            >
              Cardholder Name
            </TypographyDemo>
            <TypographyDemo 
              variant="small" 
              color="muted"
              variants='variant="small" color="muted"'
            >
              Levi Ackerman
            </TypographyDemo>
          </div>
          
          <div>
            <TypographyDemo 
              variant="label" 
              as="label"
              variants='variant="label" as="label"'
            >
              Delivery Note
            </TypographyDemo>
            <TypographyDemo 
              variant="small" 
              color="muted"
              variants='variant="small" color="muted"'
            >
              Knock the door 3 times.
            </TypographyDemo>
          </div>
        </div>
      </section>

    </div>
  )
} 