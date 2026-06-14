"use client";

import { Star } from "lucide-react";
import { RATING_LABELS } from "@/lib/satisfaction-emailjs";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  name: string;
  value: number;
  onChange: (value: number) => void;
  hasError?: boolean;
  disabled?: boolean;
};

export function StarRating({
  name,
  value,
  onChange,
  hasError = false,
  disabled = false,
}: StarRatingProps) {
  return (
    <div>
      <input type="hidden" name={name} value={value || ""} />
      <div
        className="flex flex-wrap items-center gap-2"
        role="radiogroup"
        aria-label="Nota de satisfação de 1 a 5"
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const selected = star <= value;
          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={value === star}
              aria-label={`${star} — ${RATING_LABELS[star]}`}
              disabled={disabled}
              onClick={() => onChange(star)}
              className={cn(
                "size-11 rounded-xl flex items-center justify-center transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                selected
                  ? "bg-gold/15 text-gold ring-1 ring-gold/40"
                  : "bg-zinc-50 text-zinc-300 ring-1 ring-zinc-200 hover:text-gold/70",
                hasError && !selected && "ring-red-300",
                disabled && "opacity-60 cursor-not-allowed",
              )}
            >
              <Star className={cn("size-5", selected && "fill-current")} />
            </button>
          );
        })}
      </div>
      {value > 0 && (
        <p className="mt-2 text-sm text-zinc-600">
          {value} — {RATING_LABELS[value]}
        </p>
      )}
    </div>
  );
}
