import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Évalué une fois : si l'utilisateur a activé "Réduire les animations" dans son OS
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface AnimatedSectionProps {
  children: ReactNode;
  /** Délai avant le début de la transition (ms). Utile pour décaler des éléments en cascade. */
  delay?: number;
  className?: string;
}

/**
 * Enveloppe un bloc avec un effet fade-in + slide-up déclenché à l'entrée dans le viewport.
 *
 * Comportement si prefers-reduced-motion est actif :
 *   - Aucun style de transition appliqué, le contenu est affiché directement.
 */
export function AnimatedSection({
  children,
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    once: true,
    enabled: !prefersReducedMotion,
  });

  const animatedStyle: CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(2rem)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      };

  return (
    <div ref={ref} className={cn(className)} style={animatedStyle}>
      {children}
    </div>
  );
}
