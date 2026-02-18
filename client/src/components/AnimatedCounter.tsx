import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Évalué une fois : si l'utilisateur a activé "Réduire les animations" dans son OS
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Easing ease-out cubique : rapide au début, ralentit vers la fin
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

interface AnimatedCounterProps {
  /** Valeur cible numérique (peut être négative ou décimale) */
  value: number;
  /** Préfixe affiché avant le nombre, ex: "+" ou "-" */
  prefix?: string;
  /** Suffixe affiché après le nombre, ex: "h", "%", " k$" */
  suffix?: string;
  /** Nombre de décimales affichées (ex: 1 pour "3,1") */
  decimals?: number;
  /** Durée de l'animation en ms (défaut: 1500) */
  duration?: number;
  /** Locale pour le formatage du nombre (défaut: "fr-CA" → virgule décimale) */
  locale?: string;
  className?: string;
}

/**
 * Affiche un nombre qui s'anime de 0 vers `value` dès que l'élément entre dans le viewport.
 *
 * Comportement si prefers-reduced-motion est actif :
 *   - La valeur finale est affichée immédiatement, sans animation.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1500,
  locale = "fr-CA",
  className,
}: AnimatedCounterProps) {
  // Si motion réduit : partir directement à la valeur finale
  const [displayValue, setDisplayValue] = useState(
    prefersReducedMotion ? value : 0
  );

  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
    once: true,
    enabled: !prefersReducedMotion,
  });

  useEffect(() => {
    // Pas d'animation si motion réduit ou si l'élément n'est pas encore visible
    if (!isVisible || prefersReducedMotion) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      setDisplayValue(eased * value);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        // Forcer la valeur exacte à la fin pour éviter les erreurs d'arrondi
        setDisplayValue(value);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, value, duration]);

  const formatted = displayValue.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
