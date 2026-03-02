import './Footer.css'
import { useState, useEffect } from 'react'
import countryList from 'country-list'

export default function Footer(){
  const [form, setForm] = useState({
    name:'', email:'', mobile:'', company:'', country:'', product:'', message:''
  })
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to load products:', err))
  }, [])

  const countries = countryList.getData()

  const productGroups = products.reduce((acc, p) => {
    const group = p.type.charAt(0).toUpperCase() + p.type.slice(1)
    if (!acc[group]) acc[group] = []
    acc[group].push(p)
    return acc
  }, {})

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('Footer form submitted:', form)
    // temporary: clear form
    setForm({ name:'', email:'', mobile:'', company:'', country:'', product:'', message:'' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-left">
            <div >
                <img className="footer-brand" src="/images/footer-logo.jpeg" alt="brand" loading="lazy" />
            </div>
            <div className='footer-content-left'>
                <div className='footer-col'>
                    <div className="office">
                        <h4>Registered Office:</h4>
                        <p>Amelia House, Crescent Road,<br/>Worthing, UK. Pin Code: BN11 1RL</p>
                    </div>

                    <div className="office">
                        <h4>Corporate Office:</h4>
                        <p>407, Kingdom Tower I,<br/>One Kingdom Street, Paddington,<br/>Pin Code - W2 6BD, UK</p>
                    </div>

                    <div className="copyright">©2026 Copyright. All rights reserved.</div>

                </div>
                <div className="footer-col footer-center">
                    <div className="contact-line">📱 +44-7488883088</div>
                    <div className="contact-line">📞 +44-1293227670</div>
                    <div className="contact-line">✉️ sar@saroverseas.com</div>
                </div>
            </div>
        </div>

        <div className="footer-col footer-right">
          <h3 className="enquire-title">ENQUIRE NOW</h3>
          <form className="enquire-form" onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" />

            <select name="country" value={form.country} onChange={handleChange}>
              <option value="">Select Country</option>
              {countries.map(({ code, name }) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>

            <select name="product" value={form.product} onChange={handleChange}>
              <option value="">Select Product</option>
              {Object.entries(productGroups).map(([group, items]) => (
                <optgroup key={group} label={group}>
                  {items.map(p => (
                    <option key={p.slug} value={`${p.abbr} – ${p.name}`}>
                      {p.abbr} – {p.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />

            <div className="form-actions">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}
