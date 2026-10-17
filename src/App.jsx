
import React, { useEffect, useState } from 'react';
import {
  Routes, Route, Link, NavLink, useLocation
} from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Menu, X, Search, ChevronDown,
  Settings, Factory, Handshake, UsersRound, ShieldCheck,
  Lightbulb, Leaf, Mail, MapPin, FileText, Wrench,
  Building2, Route as Road, Gauge, Boxes, Cog,
  CheckCircle2, Send, Phone, MoveUpRight
} from 'lucide-react';

const img = (id, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const products = [
  ['Manhole Covers & Frames', 'Infrastructure', 'photo-1518770660439-4636190af475', 'Ductile iron, cast iron, stainless steel, aluminium and GRP options for access applications.'],
  ['Gratings & Slot Drains', 'Infrastructure', 'photo-1581092160562-40aa08e78837', 'Open mesh gratings and drainage channels for industrial and commercial environments.'],
  ['Roof & Floor Hatches', 'Access Systems', 'photo-1504307651254-35680f356dfd', 'Access hatch covers in stainless steel, aluminium and mild steel.'],
  ['Infrastructure Products', 'Infrastructure', 'photo-1519003722824-194d4455a60c', 'Products for roads, drainage, civil construction and infrastructure.'],
  ['Industrial Products', 'Industrial', 'photo-1581092921461-eab62e97a780', 'Valves, fasteners, gaskets, pipe supports and engineered components.'],
  ['Safety & Access Products', 'Safety', 'photo-1504917595217-d4dc5ebe6122', 'Handrails, ladders, platforms, bollards and road safety products.'],
  ['Geosynthetics', 'Infrastructure', 'photo-1516937941344-00b4e0337589', 'Geotextiles, geogrids, geocells and geocomposite solutions.'],
  ['Landscaping & Drainage', 'Landscaping', 'photo-1416879595882-3373a0480b5b', 'Drainage cells, paver cells, root barriers and garden edging.'],
  ['Instrumentation & Electrical', 'Industrial', 'photo-1581092160607-ee22621dd758', 'Flow, level and pressure instruments and electrical components.'],
  ['CNC / VMC / Traub Job Work', 'Services', 'photo-1567789884554-0b844b597180', 'Precision machining for customer-specific component requirements.']
].map(([title, category, photo, description]) => ({
  title, category, photo, description
}));

const benefits = [
  [ 'Quality & Precision', ShieldCheck, 'A focus on quality, precision and durability.' ],
  [ 'Engineering Expertise', Cog, 'Application-led engineering and technical support.' ],
  [ 'Wide Product Range', Boxes, 'Infrastructure, industrial and commercial products.' ],
  [ 'Custom Requirements', Wrench, 'Solutions aligned with customer-specific needs.' ],
  [ 'Technical Approach', Settings, 'Creativity, technology and engineering expertise.' ],
  [ 'Long-Term Partnership', Handshake, 'Relationships built around trust and value.' ]
];

const productOptions = products.map(p => p.title);

function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow${light ? ' light' : ''}`}>{children}</span>;
}

function Title({ eyebrow, title, text, center = false }) {
  return (
    <div className={`sectitle${center ? ' center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [search, setSearch] = useState(false);
  const [term, setTerm] = useState('');

  const closeMenu = () => {
    setOpen(false);
    setDrop(false);
  };

  return (
    <header className="header">
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-symbol">A<span>.</span></span>
          <span className="brand-copy">
            <strong>ARTCREATION</strong>
            <small>DESIGN & ENGINEERING PVT LTD</small>
          </span>
        </Link>

        <button
          className="hamb"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'links open' : 'links'}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <div className="drop">
            <button
              type="button"
              onClick={() => setDrop(!drop)}
              aria-expanded={drop}
            >
              Products <ChevronDown size={14} />
            </button>
            {drop && (
              <div className="dropmenu">
                {products.map(p => (
                  <Link key={p.title} to="/products" onClick={closeMenu}>
                    {p.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/engineering" onClick={closeMenu}>
            Engineering
          </NavLink>
          <NavLink to="/industries" onClick={closeMenu}>Industries</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/catalogue" onClick={closeMenu}>Catalogue</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="actions">
          <Link className="btn small" to="/contact">
            Request a Quote <ArrowUpRight size={15} />
          </Link>
          <button
            className="searchbtn"
            onClick={() => setSearch(!search)}
            aria-label="Toggle product search"
          >
            {search ? <X /> : <Search />}
          </button>
        </div>
      </div>

      {search && (
        <form
          className="searchbar wrap"
          onSubmit={e => {
            e.preventDefault();
            window.location.href =
              '/products?search=' + encodeURIComponent(term);
          }}
        >
          <Search />
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
          <button className="btn small" type="submit">Search</button>
        </form>
      )}
    </header>
  );
}

function Footer() {
  const links = [
    ['About Us', '/about'],
    ['Products', '/products'],
    ['Engineering', '/engineering'],
    ['Industries', '/industries'],
    ['Projects', '/projects'],
    ['Catalogue', '/catalogue'],
    ['Contact', '/contact']
  ];

  return (
    <footer className="footer">
      <div className="wrap footgrid">
        <div className="footbrand">
          <Link to="/" className="brand inverse">
            <span className="brand-symbol">A<span>.</span></span>
            <span className="brand-copy">
              <strong>ARTCREATION</strong>
              <small>DESIGN & ENGINEERING PVT LTD</small>
            </span>
          </Link>
          <p className="foot-manifesto">
            Engineering with intention.<br />
            Solutions built around your needs.
          </p>
          <p>Engineering · Manufacturing · Trading · Consulting</p>
        </div>

        <div>
          <h4>Explore</h4>
          {links.map(([label, url]) => (
            <Link key={label} to={url}>{label}</Link>
          ))}
        </div>

        <div>
          <h4>Product categories</h4>
          {products.slice(0, 6).map(p => (
            <Link key={p.title} to="/products">{p.title}</Link>
          ))}
        </div>

        <div className="footcontact">
          <h4>Start a conversation</h4>
          <p><MapPin /> Mumbai, India</p>
          <a href="mailto:sales@artcreationde.com">
            <Mail /> sales@artcreationde.com
          </a>
          <Link to="/contact" className="footer-cta">
            Send an enquiry <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="footbottom wrap">
        <span>© {new Date().getFullYear()} ArtCreation Design & Engineering Pvt Ltd.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}

function PageHero({
  eyebrow, title, text,
  photo = 'photo-1581092160562-40aa08e78837'
}) {
  return (
    <section
      className="pagehero"
      style={{
        backgroundImage:
          `linear-gradient(90deg,rgba(27,35,31,.89),rgba(27,35,31,.43)),url(${img(photo, 1700)})`
      }}
    >
      <div className="wrap pagehero-content">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link className="btn" to="/contact">
          Discuss your requirement <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ p }) {
  return (
    <article className="product">
      <Link
        to={'/contact?product=' + encodeURIComponent(p.title)}
        className="productimg"
        aria-label={`Enquire about ${p.title}`}
      >
        <img src={img(p.photo, 700)} alt={p.title} loading="lazy" />
        <span><ArrowUpRight /></span>
      </Link>
      <div className="productbody">
        <Eyebrow>{p.category}</Eyebrow>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <Link
          className="textlink"
          to={'/contact?product=' + encodeURIComponent(p.title)}
        >
          Enquire about product <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

function QuoteForm({ compact = false, initialProduct = '' }) {
  const [f, setF] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: initialProduct,
    quantity: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setF(old => ({ ...old, product: initialProduct }));
    }
  }, [initialProduct]);

  const update = e => {
    setF(old => ({ ...old, [e.target.name]: e.target.value }));
    setStatus('');
  };

  function submit(e) {
    e.preventDefault();

    const body = [
      `Name: ${f.name}`,
      `Company: ${f.company || 'Not provided'}`,
      `Corporate email: ${f.email}`,
      `Phone: ${f.phone || 'Not provided'}`,
      `Product / requirement: ${f.product}`,
      `Volume requirements: ${f.quantity || 'Not provided'}`,
      `Project requirements: ${f.message}`
    ].join('\n');

    const mailto =
      `mailto:sales@artcreationde.com?subject=${encodeURIComponent('ArtCreation website enquiry')}&body=${encodeURIComponent(body)}`;

    setStatus('Opening your email application with the enquiry details.');
    window.location.href = mailto;
  }

  return (
    <form className={`quote${compact ? ' compact' : ''}`} onSubmit={submit}>
      <div className="form-heading">
        <Eyebrow>Project enquiry</Eyebrow>
        <h2>{compact ? 'Tell us what you need.' : 'Tell us about your project.'}</h2>
        <p>Share a few details and we can start a conversation.</p>
      </div>

      <div className="formrow">
        <label>
          <span>Full name <i>*</i></span>
          <input
            name="name"
            value={f.name}
            onChange={update}
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          <span>Company / firm name</span>
          <input
            name="company"
            value={f.company}
            onChange={update}
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>
      </div>

      <div className="formrow">
        <label>
          <span>Corporate email <i>*</i></span>
          <input
            type="email"
            name="email"
            value={f.email}
            onChange={update}
            placeholder="name@company.com"
            autoComplete="email"
            required
          />
        </label>
        <label>
          <span>Phone number</span>
          <input
            type="tel"
            name="phone"
            value={f.phone}
            onChange={update}
            placeholder="+91"
            autoComplete="tel"
          />
        </label>
      </div>

      <label>
        <span>Product / service <i>*</i></span>
        <select
          name="product"
          value={f.product}
          onChange={update}
          required
        >
          <option value="">Select your requirement</option>
          {productOptions.map(p => <option key={p} value={p}>{p}</option>)}
          <option value="Product catalogue request">Product catalogue</option>
          <option value="Request a sample">Request a sample</option>
          <option value="Become a distributor">Become a distributor</option>
          <option value="Other / custom requirement">Other / custom requirement</option>
        </select>
      </label>

      <label>
        <span>Volume requirements</span>
        <input
          name="quantity"
          value={f.quantity}
          onChange={update}
          placeholder="Estimated quantity, dimensions or project scale"
        />
      </label>

      <label>
        <span>Project requirements <i>*</i></span>
        <textarea
          name="message"
          value={f.message}
          onChange={update}
          placeholder="Tell us about the application, specification or project..."
          rows={compact ? 3 : 4}
          required
        />
      </label>

      <button className="btn submit" type="submit">
        Prepare enquiry <ArrowRight size={16} />
      </button>

      {status && <p className="status" role="status">{status}</p>}
      <small className="form-note">
        This form prepares an email in your email application. Direct online
        submission requires a backend or form service.
      </small>
    </form>
  );
}


const heroSlides = [
  {
    photo: 'photo-1581092160607-ee22621dd758',
    caption: 'Engineering with intention'
  },
  {
    photo: 'photo-1567789884554-0b844b597180',
    caption: 'Precision in every detail'
  },
  {
    photo: 'photo-1519003722824-194d4455a60c',
    caption: 'Infrastructure that performs'
  },
  {
    photo: 'photo-1581092160562-40aa08e78837',
    caption: 'Solutions built around your needs'
  }
];


function Home() {
    
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero(current => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const business = [
    ['01', 'Engineering', Settings, 'Design-oriented engineering solutions.'],
    ['02', 'Manufacturing', Factory, 'Fabricated and engineered products.'],
    ['03', 'Trading', Handshake, 'Supply of specialised products.'],
    ['04', 'Consulting', UsersRound, 'Technical and application-oriented support.']
  ];

  return (
    <>
      
      <section
        className="hero"
        style={{
          backgroundImage:
            `linear-gradient(90deg,rgba(246,242,233,.97) 0%,rgba(246,242,233,.88) 39%,rgba(246,242,233,.12) 100%),url(${img(heroSlides[activeHero].photo, 1900)})`
        }}
      >
        <div className="wrap herotext">
          <Eyebrow>
            Engineering · Manufacturing · Trading · Consulting
          </Eyebrow>

          <h1>
            Thoughtfully<br />
            engineered.<br />
            <em>Purposefully built.</em>
          </h1>

          <p>
            Engineering, manufacturing and product solutions for
            infrastructure, industrial and commercial applications.
          </p>

          <div className="btnrow">
            <Link className="btn" to="/products">
              Explore our products <ArrowUpRight size={16} />
            </Link>
            <Link className="btn outline" to="/contact">
              Discuss a project
            </Link>
          </div>

          <div className="hero-caption">
            <span>
              {String(activeHero + 1).padStart(2, '0')} /{' '}
              {String(heroSlides.length).padStart(2, '0')}
            </span>

            <div className="hero-dots" aria-label="Choose hero slide">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.photo}
                  type="button"
                  className={`hero-dot${activeHero === index ? ' active' : ''}`}
                  onClick={() => setActiveHero(index)}
                  aria-label={`Show slide ${index + 1}: ${slide.caption}`}
                  aria-current={activeHero === index ? 'true' : undefined}
                />
              ))}
            </div>

            <span className="hero-caption-line" />

            <span className="hero-caption-text">
              {heroSlides[activeHero].caption}
            </span>
          </div>
        </div>
      </section>


      <section className="wrap intro section">
        <div className="intro-copy">
          <Eyebrow>Who we are</Eyebrow>
          <h2>Practical thinking.<br /><em>Meaningful outcomes.</em></h2>
          <p>
            ArtCreation Design & Engineering Pvt Ltd brings together
            engineering, manufacturing, trading and consulting solutions.
          </p>
          <p>
            We work across infrastructure, industrial and commercial
            applications with a focus on quality, precision and customer needs.
          </p>
          <Link className="textlink" to="/about">
            Discover ArtCreation <ArrowRight size={15} />
          </Link>
        </div>
        <div className="intro-visual">
          <img
            className="introimg"
            src={img('photo-1581092160562-40aa08e78837')}
            alt="Engineering work in progress"
            loading="lazy"
          />
          <span className="image-caption">Engineering · Design · Delivery</span>
        </div>
        <div className="benefits">
          {benefits.slice(0, 4).map(([title, Icon, description]) => (
            <div key={title}>
              <Icon />
              <span><b>{title}</b><small>{description}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section className="pale section">
        <div className="wrap">
          <Title
            eyebrow="Our business"
            title="Four disciplines. One considered approach."
            text="A connected approach to engineering, manufacturing, product supply and technical support."
            center
          />
          <div className="businessgrid">
            {business.map(([number, title, Icon, description]) => (
              <Link className="business" to="/engineering" key={title}>
                <div className="business-top">
                  <Icon />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight className="corner" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <Title
          eyebrow="Selected product categories"
          title="Solutions for demanding applications."
          text="Explore infrastructure, industrial, access, safety and specialist engineering products."
        />
        <div className="productgrid">
          {products.slice(0, 6).map(p => <ProductCard p={p} key={p.title} />)}
        </div>
        <p className="center">
          <Link className="btn outline" to="/products">
            Explore all products <ArrowRight size={16} />
          </Link>
        </p>
      </section>

      <section
        className="infra"
        style={{
          backgroundImage:
            `linear-gradient(90deg,rgba(31,38,32,.94),rgba(31,38,32,.69)),url(${img('photo-1519003722824-194d4455a60c', 1700)})`
        }}
      >
        <div className="wrap infrain">
          <div>
            <Eyebrow light>Built for the bigger picture</Eyebrow>
            <h2>Infrastructure that works harder.</h2>
            <p>
              Explore products for roads, drainage, civil construction
              and infrastructure applications.
            </p>
            <Link className="btn" to="/products">
              Explore infrastructure <ArrowRight size={16} />
            </Link>
          </div>
          <div className="infratags">
            {['Manhole covers', 'Geosynthetics', 'Road safety', 'Bridge bearings', 'MSE wall systems'].map(item => (
              <span key={item}><CheckCircle2 />{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap lowergrid">
        <div
          className="machining"
          style={{
            backgroundImage:
              `linear-gradient(90deg,rgba(31,38,32,.72),rgba(31,38,32,.92)),url(${img('photo-1567789884554-0b844b597180', 900)})`
          }}
        >
          <Eyebrow light>Precision machining</Eyebrow>
          <h2>CNC · VMC · Traub<br />job work.</h2>
          <p>Manufacturing support for customer-specific components.</p>
          <Link className="btn" to="/engineering">
            Discuss job work <ArrowRight size={16} />
          </Link>
        </div>

        <div className="why">
          <Title eyebrow="Why ArtCreation" title="Built around your needs." />
          {benefits.map(([title, Icon, description]) => (
            <div className="whyrow" key={title}>
              <Icon />
              <span><b>{title}</b><small>{description}</small></span>
            </div>
          ))}
        </div>

        <QuoteForm compact />
      </section>

      <section className="cta">
        <div className="wrap ctain">
          <div>
            <Eyebrow light>Let's build the right solution</Eyebrow>
            <h2>Have a project in mind?</h2>
          </div>
          <Link className="btn light-btn" to="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Products() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [term, setTerm] = useState(params.get('search') || '');
  const [cat, setCat] = useState(params.get('category') || 'All');

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setTerm(query.get('search') || '');
    setCat(query.get('category') || 'All');
  }, [location.search]);

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const shown = products.filter(p =>
    (cat === 'All' || p.category === cat) &&
    `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <>
      <PageHero
        eyebrow="Product range"
        title="Engineering products for real-world applications."
        text="Explore infrastructure, industrial, access, safety and specialist engineering product categories."
        photo="photo-1581092921461-eab62e97a780"
      />
      <section className="section wrap">
        <label className="searchfield">
          <Search />
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            placeholder="Search products and categories..."
            aria-label="Search products"
          />
        </label>
        <div className="filters">
          {categories.map(category => (
            <button
              className={category === cat ? 'active' : ''}
              onClick={() => setCat(category)}
              key={category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="productgrid">
          {shown.map(p => <ProductCard p={p} key={p.title} />)}
        </div>
        {!shown.length && <p className="empty-state">No matching products. Try another search.</p>}
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="About ArtCreation"
        title="Engineering solutions shaped around your requirements."
        text="A customer-focused engineering and product partner for infrastructure, industrial and commercial applications."
      />
      <section className="section wrap two">
        <div>
          <Title eyebrow="Who we are" title="Technical thinking. Practical outcomes." />
          <p>
            ArtCreation Design & Engineering Pvt Ltd was established in 2025
            to deliver engineering, manufacturing, trading, printing and
            consulting solutions.
          </p>
          <p>
            Our approach combines technical expertise and practical
            capabilities to support products and services aligned with
            customer requirements.
          </p>
          <Link className="btn" to="/contact">Talk to our team <ArrowRight size={16} /></Link>
        </div>
        <img
          src={img('photo-1581092160607-ee22621dd758')}
          alt="Engineering and design"
          loading="lazy"
        />
      </section>
      <section className="pale section">
        <div className="wrap">
          <Title
            eyebrow="Our approach"
            title="Thoughtful work. Reliable partnerships."
            text="We emphasise quality, precision, durability and continuous improvement. Specific certifications should be published only after company confirmation."
          />
        </div>
      </section>
    </>
  );
}

function Engineering() {
  const capabilities = [
    ['Product Design & Development', Settings],
    ['Reverse Engineering', Gauge],
    ['Fabrication Work', Factory],
    ['Niche Product Manufacturing', Wrench],
    ['CNC / VMC / Traub Job Work', Cog],
    ['Custom Engineering Products', Boxes]
  ];

  return (
    <>
      <PageHero
        eyebrow="Engineering & manufacturing"
        title="From technical concept to practical component."
        text="Engineering support, fabrication and precision job work aligned to customer-specific manufacturing needs."
        photo="photo-1567789884554-0b844b597180"
      />
      <section className="section wrap">
        <Title eyebrow="Our capabilities" title="Specialist support for your project." />
        <div className="businessgrid capabilities">
          {capabilities.map(([title, Icon]) => (
            <div className="business" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>Application-focused technical support based on your project requirements.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cta">
        <div className="wrap ctain">
          <h2>Have a drawing or specification?</h2>
          <Link className="btn light-btn" to="/contact">Send an enquiry <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}

function Industries() {
  const data = [
    ['Construction', Building2, 'photo-1504307651254-35680f356dfd'],
    ['Civil Infrastructure', Road, 'photo-1519003722824-194d4455a60c'],
    ['Energy', Lightbulb, 'photo-1516937941344-00b4e0337589'],
    ['Industrial', Factory, 'photo-1581092921461-eab62e97a780'],
    ['Technology', Gauge, 'photo-1581092160562-40aa08e78837'],
    ['Printing', Boxes, 'photo-1581092160607-ee22621dd758']
  ];

  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Solutions across industries and applications."
        text="A broad product and service approach for construction, infrastructure, energy and industrial requirements."
        photo="photo-1519003722824-194d4455a60c"
      />
      <section className="section wrap">
        <div className="businessgrid industries">
          {data.map(([title, Icon, photo]) => (
            <article className="industry" key={title}>
              <img src={img(photo, 700)} alt={title} loading="lazy" />
              <div>
                <Icon />
                <h3>{title}</h3>
                <p>Product and engineering support aligned to the needs of your application.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Projects() {
  const applications = [
    'Road & Infrastructure', 'Industrial Facilities', 'Commercial Buildings',
    'Drainage Systems', 'Access & Safety', 'Manufacturing'
  ];

  return (
    <>
      <PageHero
        eyebrow="Projects & applications"
        title="Products designed around the job they need to do."
        text="Explore application areas where engineering products and manufacturing support can be relevant."
        photo="photo-1519003722824-194d4455a60c"
      />
      <section className="section wrap">
        <Title
          eyebrow="Applications"
          title="Built for demanding environments."
          text="These are illustrative application categories. Add verified project names and client references when available."
        />
        <div className="businessgrid">
          {applications.map(title => (
            <div className="business" key={title}>
              <Factory />
              <h3>{title}</h3>
              <p>Application-specific products and engineering support.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Catalogue() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Explore our product range."
        text="Request the current approved ArtCreation catalogue or contact us for technical information."
      />
      <section className="section wrap">
        <div className="catalogue">
          <FileText />
          <div>
            <Eyebrow>Product information</Eyebrow>
            <h2>Looking for product details?</h2>
            <p>
              The approved catalogue PDF can be linked here when supplied.
              Until then, request the latest catalogue from our team.
            </p>
            <Link
              className="btn"
              to="/contact?product=Product%20catalogue%20request"
            >
              Request catalogue <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = params.get('product') || '';

  const [initialProduct, setInitialProduct] = useState(product);

  useEffect(() => {
    setInitialProduct(product);
  }, [product]);

  const chooseEnquiry = type => {
    window.location.href =
      `/contact?product=${encodeURIComponent(type)}`;
  };

  return (
    <>
      <section className="contact-intro">
        <div className="wrap contact-intro-inner">
          <Eyebrow>Contact · Collaborate · Create</Eyebrow>
          <h1>LET'S BUILD THE<br /><em>FUTURE TOGETHER.</em></h1>
          <p>
            Have a project, a product requirement or an idea to explore?
            Tell us what you're working on.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="wrap contact-layout">
          <aside className="contact-aside">
            <Eyebrow>Start a conversation</Eyebrow>
            <h2>Good work<br />starts with a<br /><em>conversation.</em></h2>
            <p>
              Share your requirements with our team. We can begin by
              understanding your application, specifications and project needs.
            </p>
            <div className="contact-detail">
              <span className="contact-detail-icon"><MapPin /></span>
              <span><small>LOCATION</small><b>Mumbai, India</b></span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><Mail /></span>
              <span>
                <small>EMAIL</small>
                <a href="mailto:sales@artcreationde.com">sales@artcreationde.com</a>
              </span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon"><Phone /></span>
              <span><small>PHONE</small><b>Contact details to be confirmed</b></span>
            </div>
            <div className="contact-note">
              <span>01</span>
              <p>Tell us about the application. We'll start from there.</p>
            </div>
          </aside>

          <div className="contact-form-area">
            <div className="contact-form-heading">
              <Eyebrow>Project enquiry</Eyebrow>
              <h2>TELL US ABOUT YOUR PROJECT.</h2>
              <p>Complete the details below so we can understand your requirements.</p>
            </div>

            <div className="contact-form-grid">
              <QuoteForm initialProduct={initialProduct} />
              <aside className="contact-actions">
                <div className="contact-action-label">Other enquiries</div>
                <button
                  className="contact-action"
                  type="button"
                  onClick={() => chooseEnquiry('Request a sample')}
                >
                  <span className="contact-action-icon"><Boxes /></span>
                  <span>
                    <small>PRODUCT ENQUIRY</small>
                    <b>Request a sample</b>
                    <em>Discuss sample availability.</em>
                  </span>
                  <MoveUpRight />
                </button>
                <button
                  className="contact-action"
                  type="button"
                  onClick={() => chooseEnquiry('Become a distributor')}
                >
                  <span className="contact-action-icon"><Handshake /></span>
                  <span>
                    <small>PARTNER WITH US</small>
                    <b>Become a distributor</b>
                    <em>Explore a business partnership.</em>
                  </span>
                  <MoveUpRight />
                </button>
                <div className="contact-actions-foot">
                  <Leaf />
                  <p>Looking for something specific? Select your product or describe it in the enquiry form.</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <div className="section wrap notfound">
      <Eyebrow>404 · Page not found</Eyebrow>
      <h1>This page isn't here.</h1>
      <Link className="btn" to="/">Return home <ArrowRight size={16} /></Link>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.search]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <button
        className="top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
