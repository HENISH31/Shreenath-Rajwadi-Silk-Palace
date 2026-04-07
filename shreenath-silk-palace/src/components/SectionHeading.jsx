/* ==========================================================
 * SectionHeading.jsx
 * Reusable decorated section heading used across all sections.
 * Props:
 *   eyebrow  — small uppercase label above the title
 *   title    — main heading text
 *   subtitle — optional paragraph below
 *   light    — if true, renders white text (for dark backgrounds)
 *   center   — if true, centres text (default true)
 * ========================================================== */

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}) {
  return (
    <div className={`reveal mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`font-sans text-xs tracking-[0.3em] uppercase mb-2 ${
            light ? 'text-gold-400' : 'text-maroon-600'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold border-gold-decor ${
          light ? 'text-white' : 'text-maroon-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-sans text-sm md:text-base max-w-xl mt-5 leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-white/50' : 'text-maroon-700/70'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
