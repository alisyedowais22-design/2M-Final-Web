// Confirm launch details in the environment; the brief marks contact values as placeholders.
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.2mdesigners.com';
export const site = {
  name: '2M Designers',
  url: new URL(configuredOrigin).origin,
  description: 'Fleet telematics, ERP, school management, shipping automation, POS, mobile apps, cloud and custom software for businesses across Pakistan and the GCC.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
  founded: '2016',
  socials: ['https://www.linkedin.com/company/2mdesigners','https://www.facebook.com/2mdesigners','https://www.instagram.com/2mdesigners'],
  publishedDate: process.env.SITE_PUBLICATION_DATE || '',
  modifiedDate: '2026-10-06',
};
export const absolute = (path: string) => path === '/' ? site.url : new URL(path, site.url).href;
export const contactEnabled = Boolean(process.env.CONTACT_WEBHOOK_URL);
export const verifiedStats = process.env.COMPANY_CLAIMS_VERIFIED === 'true';
export const caseApproved = (slug: string) => (process.env.APPROVED_CASE_STUDIES || '').split(',').map(s=>s.trim()).includes(slug);
export const siteIndexable = process.env.SITE_INDEXABLE !== 'false';
export const publicationDate = /^\d{4}-\d{2}-\d{2}$/.test(site.publishedDate) && site.publishedDate <= new Date().toISOString().slice(0,10) ? site.publishedDate : undefined;
