/** Marks content that is not real yet, so nothing invented reads as fact. */
export default function PlaceholderTag({ label = 'Placeholder' }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-mute/60 px-2.5 py-0.5 text-xs font-medium text-mute">
      {label}
    </span>
  )
}
