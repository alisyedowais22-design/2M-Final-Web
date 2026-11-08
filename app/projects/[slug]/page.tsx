import {notFound} from 'next/navigation';
import ProjectTemplate from '@/components/projects/ProjectTemplate';
import {projects} from '@/lib/content';
import {pageMetadata} from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(project => ({slug: project.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const project = projects.find(item => item.slug === slug);
  return project ? pageMetadata(project.seoTitle,project.description,project.route,{image:project.screenshots[0]?.src}) : {};
}

export default async function Page({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <ProjectTemplate project={project}/>;
}
