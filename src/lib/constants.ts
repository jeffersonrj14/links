export const isProduction = process.env.NODE_ENV === 'production'

export const SITE_URL = isProduction ? 'https://links.jeffersonrj.com' : 'http://localhost:60236'

export const SITE_NAME = 'RJ Jefferson'
export const SITE_TITLE = 'RJ Jefferson — Self-Taught Developer'
export const SITE_DESCRIPTION = 'A self-taught developer who learns best by building projects.'
export const SITE_KEYWORDS = ['jeffersonrj14', 'Next.js', 'React', 'TypeScript']
