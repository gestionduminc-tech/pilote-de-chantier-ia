import { useEffect, useRef, useState, type RefObject } from "react";

// Évalué une seule fois au chargement du module — stable, pas de SSR dans ce projet
const supportsIO = typeof IntersectionObserver !== "undefined";

export interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  /** Arrête d'observer après la première intersection (défaut: true) */
  once?: boolean;
  /** Désactiver l'observer : isVisible sera true immédiatement (ex: prefers-reduced-motion) */
  enabled?: boolean;
}

/**
 * Retourne [ref, isVisible].
 * - Si IntersectionObserver n'est pas supporté → isVisible = true (fallback)
 * - Si enabled = false → isVisible = true immédiatement (utile pour prefers-reduced-motion)
 * - Cleanup automatique au démontage du composant
 */
export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px", once = true, enabled = true } =
    options;

  // true si IO absent (fallback) OU si désactivé (motion réduit, etc.)
  const [isVisible, setIsVisible] = useState(!supportsIO || !enabled);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!supportsIO || !enabled) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, threshold, rootMargin, once]);

  return [ref, isVisible];
}
