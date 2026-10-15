import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://godrej-florenne.gepropertyhub.com';

export const metadata: Metadata = {
  title: 'Godrej Florenne Floor Plans | 4 & 5 BHK Row Houses',
  description: 'Explore information about Godrej Florenne 4 and 5 BHK row-house layouts in Whitefield, Bengaluru. Request current official floor plans and availability.',
  alternates: { canonical: '/floor-plans' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/floor-plans`,
    title: 'Godrej Florenne Floor Plans | 4 & 5 BHK Row Houses',
    description: 'Project information and enquiries for 4 and 5 BHK row-house layouts at Godrej Florenne, Whitefield, Bengaluru.',
  },
};

export default function FloorPlansPage() {
  return <main style={{fontFamily:"Arial, sans-serif",color:"#24231f",background:"#f5f0e6",minHeight:"100vh",padding:"clamp(24px,6vw,72px)",lineHeight:1.75}}>
    <nav aria-label="Breadcrumb" style={{fontSize:14,marginBottom:32}}><Link href="/">Home</Link> / Floor plans</nav>
    <p style={{letterSpacing:3,fontSize:12,color:"#8b7048"}}>GE PROPERTY HUB · PROJECT INFORMATION</p>
    <h1 style={{fontSize:"clamp(34px,6vw,58px)",lineHeight:1.1,maxWidth:850}}>Godrej Florenne Floor Plans in Whitefield, Bengaluru</h1>
    <p style={{fontSize:18,maxWidth:850}}>Godrej Florenne is presented as a premium row-house development off Whitefield-Hoskote Road in East Bengaluru, with 4 and 5 BHK residence options. Layouts, dimensions, specifications and availability should be confirmed against the latest official project documents.</p>
    <h2>Explore 4 BHK and 5 BHK layouts</h2>
    <p>When comparing a row-house floor plan, review the room dimensions, circulation, staircase position, private outdoor areas, terrace or balcony arrangement, parking, and any unit-specific variations. Do not rely on illustrative images alone for final dimensions or contractual specifications.</p>
    <h2>Request the latest floor plan</h2>
    <p>Use the enquiry section to ask for the current official floor plan, unit configuration, price sheet and availability. Ask for the applicable taxes and other charges in writing before making a purchase decision.</p>
    <p><Link href="/#residences">View residences on the project page</Link> · <Link href="/#enquiry">Request information or a site visit</Link> · <Link href="/location">Explore the Whitefield location</Link></p>
    <hr style={{border:0,borderTop:"1px solid #d4c7b4",margin:"36px 0"}}/>
    <p style={{fontSize:13,color:"#625d53"}}>This is a project-information page operated through GE Property Hub and is not the official Godrej Properties website. Details may change; verify all plans and terms directly with the developer. Official source: <a href="https://www.godrejproperties.com/bengaluru/residential/godrej-florenne" target="_blank" rel="noopener noreferrer">Godrej Properties project page</a>.</p>
    <Link href="/">← Back to Godrej Florenne project information</Link>
  </main>;
}
