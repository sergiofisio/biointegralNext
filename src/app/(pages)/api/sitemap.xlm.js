export default function Sitemap(req, res) {
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
}

function createSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.biointegralsaude.com.br/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
    </urlset>
  `;
}
