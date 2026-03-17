import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#cbd5e1', padding: '64px 24px 24px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '48px' }}>
        
        {/* Brand Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: '#3b82f6', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 'bold' }}>⚡</span>
            </div>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#f8fafc' }}>DataStore</span>
          </div>
          <p style={{ lineHeight: '1.6', fontSize: '14px', color: '#94a3b8' }}>
            Empowering businesses with intelligent data solutions and seamless cloud integration. 
            We build the infrastructure for the next generation of digital innovation.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {/* Social Icons Placeholders */}
            {[ 'facebook', 'twitter', 'linkedin', 'instagram' ].map((social) => (
              <a key={social} href={`#${social}`} style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f8fafc', textDecoration: 'none' }}>
                <span style={{ fontSize: '18px' }}>●</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#f8fafc', fontSize: '16px', fontWeight: '600', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Home', 'About Us', 'Our Services', 'Case Studies', 'Contact'].map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ color: '#f8fafc', fontSize: '16px', fontWeight: '600', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Help Center', 'Privacy Policy', 'Terms of Service', 'Security'].map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ color: '#f8fafc', fontSize: '16px', fontWeight: '600', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subscribe to Newsletter</h4>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
            Get the latest updates on data trends and product releases delivered to your inbox.
          </p>
          <form style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ flex: 1, backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', padding: '12px 16px', color: '#f8fafc', outline: 'none' }}
            />
            <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', padding: '12px 24px', fontWeight: '600', cursor: 'pointer' }}>
              Subscribe
            </button>
          </form>
          <p style={{ fontSize: '11px', color: '#64748b', marginTop: '16px' }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #334155', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontSize: '12px', color: '#64748b' }}>© 2026 DataStore Snapshot Inc. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: '#64748b' }}>
          <a href="#cookie" style={{ color: '#64748b', textDecoration: 'none' }}>Cookie Settings</a>
          <a href="#sitemap" style={{ color: '#64748b', textDecoration: 'none' }}>Sitemap</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
            <span>System Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;