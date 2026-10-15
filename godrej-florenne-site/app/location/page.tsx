import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://godrej-florenne.gepropertyhub.com';

export const metadata: Metadata = {
  title: 'Godrej Florenne Location | Whitefield, East Bengaluru',
  description: 'Explore the Godrej Florenne project location off Whitefield-Hoskote Road in East Bengaluru, with links to map directions and project enquiries.',
  alternates: { canonical: '/location' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/location`,
    title: 'Godrej Florenne Location | Whitefield, East Bengaluru',
    description: 'Location information for Godrej Florenne near Whitefield-Hoskote Road, East Bengaluru.',
  },
};

export default function ProjectLocationPage() {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=XRC2%2BQJP%2C%20Hemmandahalli%2C%20Karnataka%20560117';
  return <main style={{fontFamily:"Arial, sans-serif",color:"#24231f",background:"#f5f0e6",minHeight:"100vh",padding:"clamp(24px,6vw,72px)",lineHeight:1.75}}>
    <nav aria-label="Breadcrumb" style={{fontSize:14,marginBottom:32}}><Link href="/">Home</Link> / Location</nav>
    <p style={{letterSpacing:3,fontSize:12,color:"#8b7048"}}>GE PROPERTY HUB · PROJECT INFORMATION</p>
    <h1 style={{fontSize:"clamp(34px,6vw,58px)",lineHeight:1.1,maxWidth:850}}>Godrej Florenne Location in Whitefield, Bengaluru</h1>
    <p style={{fontSize:18,maxWidth:850}}>Godrej Florenne is located off Whitefield-Hoskote Road in the Hemmandahalli area of East Bengaluru, Karnataka. Check the route and confirm the exact site-visit location with the project team before travelling.</p>
    <h2>Getting to the project</h2>
    <p>Whitefield is an established residential and employment area in East Bengaluru. Travel times vary with traffic and the route you choose, so check a live map before leaving and verify the site entrance with the sales representative.</p>
    <p><a href={mapUrl} target="_blank" rel="noopener noreferrer">Open location in Google Maps ↗</a></p>
    <h2>Plan a site visit</h2>
    <p>Before visiting, confirm the appointment, exact meeting point, available residence types and the latest project documents.</p>
    <p><Link href="/#enquiry">Contact the project enquiry team</Link> · <Link href="/floor-plans">Explore 4 and 5 BHK floor-plan information</Link> · <Link href="/">Return to project overview</Link></p>
    <hr style={{border:0,borderTop:"1px solid #d4c7b4",margin:"36px 0"}}/>
    <p style={{fontSize:13,color:"#625d53"}}>This is a project-information page operated through GE Property Hub and is not the official Godrej Properties website. Confirm all details with the developer. Official source: <a href="https://www.godrejproperties.com/bengaluru/residential/godrej-florenne" target="_blank" rel="noopener noreferrer">Godrej Properties project page</a>.</p>
    <Link href="/">← Back to Godrej Florenne project information</Link>
  </main>;
}
