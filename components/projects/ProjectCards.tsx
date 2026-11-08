import Image from 'next/image';
import Link from 'next/link';
import type {Project} from '@/lib/content';

export default function ProjectCards({items}:{items:readonly Project[]}) {
  return <div className="grid gap-6 lg:grid-cols-2">
    {items.map(project => {
      const screenshot = project.screenshots[0];
      return <article key={project.slug} className="card-lift group overflow-hidden rounded-xl border border-paper-line bg-white shadow-sm">
        <Link href={project.route} className="focus-ring block">
          <div className="overflow-hidden border-b border-paper-line bg-ink">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={1920}
              height={870}
              sizes="(min-width:1024px) 50vw,100vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-7 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-label text-bronze">{project.category}</p>
            <h3 className="mt-4 font-display text-2xl font-medium text-ink">{project.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-ink/70">{project.summary}</p>
            <span className="mt-6 inline-flex text-sm font-medium text-bronze">View project details →</span>
          </div>
        </Link>
      </article>;
    })}
  </div>;
}
