import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" />
        Volver al blog
      </Link>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div className="mb-8">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Categoría</span>
          <h1 className="text-4xl font-bold mt-4 mb-4">Título del Artículo</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              15 de Enero, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />8 min de lectura
            </span>
          </div>
        </div>

        <p className="text-xl text-muted-foreground">Contenido del artículo en desarrollo...</p>
      </article>
    </div>
  )
}
