/**
 * Renders a JSON-LD <script> block. data is a plain object matching a
 * schema.org type; it's serialized verbatim into the page <head>/<body>.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
