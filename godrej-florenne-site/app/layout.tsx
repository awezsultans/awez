import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
export const metadata: Metadata={title:'Godrej Florenne | 4 & 5 BHK Row Houses in Whitefield',description:'Premium 4 & 5 BHK row houses at Godrej Florenne, Off Soukya Road, Whitefield, Bengaluru.'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}