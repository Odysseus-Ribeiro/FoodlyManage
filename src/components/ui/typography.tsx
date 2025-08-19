import { cn } from "@/lib"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const typographyVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        h1: "text-2xl md:text-3xl font-bold tracking-tight",
        h2: "text-xl md:text-2xl font-semibold tracking-tight", 
        h3: "text-lg md:text-xl font-semibold",
        h4: "text-base md:text-lg font-medium",
        body: "text-base leading-relaxed",
        small: "text-sm",
        muted: "text-sm text-muted-foreground",
        price: "font-semibold text-lg",
        label: "text-sm font-medium",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg", 
        xl: "text-xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium", 
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        default: "text-foreground",
        primary: "text-primary",
        muted: "text-muted-foreground", 
        success: "text-green-600 dark:text-green-400",
        warning: "text-orange-600 dark:text-orange-400",
        pending: "text-purple-600 dark:text-purple-400",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      variant: "body",
      color: "default", 
      align: "left",
    },
  }
)

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: keyof React.JSX.IntrinsicElements
  children: React.ReactNode
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ 
    className, 
    variant, 
    size, 
    weight, 
    color, 
    align, 
    as,
    children,
    ...props 
  }, ref) => {
    const getComponent = (): keyof React.JSX.IntrinsicElements => {
      if (as) return as
      
      switch (variant) {
        case "h1": return "h1"
        case "h2": return "h2"
        case "h3": return "h3"
        case "h4": return "h4"
        case "label": return "label"
        case "small": return "small"
        case "price": return "span"
        default: return "p"
      }
    }

    const Component = getComponent()

    return React.createElement(
      Component as React.ElementType,
      {
        className: cn(
          typographyVariants({ 
            variant, 
            size, 
            weight, 
            color, 
            align,
            className 
          })
        ),
        ref,
        ...props,
      },
      children
    )
  }
)

Typography.displayName = "Typography"

export { Typography, typographyVariants }
