import React, { useState } from "react";

const initialData = {
  seo: {
    title: "Sowpay Mart",
    description: "India's trusted shopping platform.",
    keywords: "shopping, rewards, sowpay mart, India",
    favicon: "",
  },
  urls: {
    website: "https://sowpaymart.com",
    app: "https://app.sowpaymart.com",
  },
  social: {
    instagram: "https://instagram.com/sowpaymart",
    facebook: "https://facebook.com/sowpaymart",
    twitter: "https://twitter.com/sowpaymart",
  },
  info: {
    email: "support@sowpaymart.com",
    phone: "+91 98765 43210",
    company: "Sowpay Mart Pvt Ltd, India",
    address: "India",
  },
  stats: {
    activeUsers: "10K+",
    partnerShops: "500+",
    rewardsGiven: "₹5L+",
  },
};

export default function CMSManagement() {
  const [data, setData] = useState(initialData);
  const [message, setMessage] = useState("");

  const handleChange = (section, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API call to save data
    setMessage("Settings saved successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Website CMS Management</h2>
      <form onSubmit={handleSubmit}>
        {/* SEO Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">SEO Settings</h3>
          <input className="input" type="text" placeholder="Title" value={data.seo.title} onChange={e => handleChange('seo', 'title', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Meta Description" value={data.seo.description} onChange={e => handleChange('seo', 'description', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Keywords" value={data.seo.keywords} onChange={e => handleChange('seo', 'keywords', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Favicon URL" value={data.seo.favicon} onChange={e => handleChange('seo', 'favicon', e.target.value)} />
        </div>
        {/* URLs Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">App URLs</h3>
          <input className="input" type="text" placeholder="Website URL" value={data.urls.website} onChange={e => handleChange('urls', 'website', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="App URL" value={data.urls.app} onChange={e => handleChange('urls', 'app', e.target.value)} />
        </div>
        {/* Social Links Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Social Links</h3>
          <input className="input" type="text" placeholder="Instagram" value={data.social.instagram} onChange={e => handleChange('social', 'instagram', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Facebook" value={data.social.facebook} onChange={e => handleChange('social', 'facebook', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Twitter" value={data.social.twitter} onChange={e => handleChange('social', 'twitter', e.target.value)} />
        </div>
        {/* Site Info Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Site Information</h3>
          <input className="input" type="text" placeholder="Support Email" value={data.info.email} onChange={e => handleChange('info', 'email', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Phone" value={data.info.phone} onChange={e => handleChange('info', 'phone', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Company Name" value={data.info.company} onChange={e => handleChange('info', 'company', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Address" value={data.info.address} onChange={e => handleChange('info', 'address', e.target.value)} />
        </div>
        {/* Stats Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Site Stats</h3>
          <input className="input" type="text" placeholder="Active Users" value={data.stats.activeUsers} onChange={e => handleChange('stats', 'activeUsers', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Partner Shops" value={data.stats.partnerShops} onChange={e => handleChange('stats', 'partnerShops', e.target.value)} />
          <input className="input mt-2" type="text" placeholder="Rewards Given" value={data.stats.rewardsGiven} onChange={e => handleChange('stats', 'rewardsGiven', e.target.value)} />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save Settings</button>
        {message && <div className="mt-4 text-green-600">{message}</div>}
      </form>
    </div>
  );
}
