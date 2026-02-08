/**
 * Google Analytics 4 Setup Guide
 * 
 * BEFORE LAUNCH: Add your GA4 measurement ID
 * 
 * Steps to implement:
 * 1. Create GA4 property at https://analytics.google.com/
 * 2. Copy your measurement ID (format: G-XXXXXXXXXX)
 * 3. Add to .env.local: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * 4. Uncomment the code below in src/app/layout.tsx
 * 5. Deploy and verify tracking in GA4 real-time view
 */

// Add this to src/app/layout.tsx inside the <head> tag:
/*
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
        `,
      }}
    />
  </>
)}
*/

// Optional: Track custom events
// Example: gtag('event', 'contact_form_submit', { method: 'email' });

// Recommended GA4 Events to Track:
// - contact_form_submit
// - phone_call_click
// - service_inquiry
// - quote_request
// - project_view
// - brand_page_view

/**
 * Google Tag Manager (Alternative)
 * 
 * If you prefer GTM for more control:
 * 1. Create GTM container at https://tagmanager.google.com/
 * 2. Get your GTM ID (format: GTM-XXXXXXX)
 * 3. Add to .env.local: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 * 4. Add GTM snippets to layout.tsx
 */

// GTM Head snippet (add to <head>):
/*
{process.env.NEXT_PUBLIC_GTM_ID && (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
      `,
    }}
  />
)}
*/

// GTM Body snippet (add right after <body>):
/*
{process.env.NEXT_PUBLIC_GTM_ID && (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
)}
*/

export {};
