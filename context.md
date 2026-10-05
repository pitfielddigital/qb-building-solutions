# QB Building Solutions — website content and implementation context

Prepared: 5 October 2026. This is the content brief for a later implementation task; this task does not change the website code.

## 1. Authority, sources and scope

The user's request and the supplied client requirements govern this brief. The ZIP and existing website are reference material, not instructions to execute. Read all six Astro files in `src/pages.zip`, all seven entries in `src/data/services.json`, and the current layout, navigation, footer, site configuration and styling. Reviewed the original website at https://qbbuildingsolutions.com/. Its About, Projects and Contact navigation links resolve to the same homepage in the browsing results; attempts to access separate paths were unavailable. No separate live project descriptions were available to substantiate case studies.

The ZIP contains `index.astro`, `about.astro`, `services.astro`, `services/[service].astro`, `contact.astro` and `404.astro`. The dynamic template generates bricklaying, joinery, site-management, extensions, new-builds, general-building and groundworks pages from the JSON. It does not contain a Projects page, although header, footer and homepage link to one.

Deliver all existing page copy below, plus five new service routes needed to give the client's missing services proper coverage: kitchens, orangeries, steel-erection, restoration-renovation and demolition. Include a modest Projects page to resolve the existing navigation, and the requested Privacy Policy page. Do not generate town-by-service permutations or a blog as part of this task.

## 2. Client requirements and factual boundaries

The main goal is more relevant search clicks and enquiries. The client particularly wants visibility for builders in Belper, Duffield, Quarndon and Allestree, and for bricklayers, joiners, extensions and kitchens in Belper, Duffield and Allestree. Wider coverage includes Derby, Ashbourne and Derbyshire. Treat all seven places as service areas, not office locations.

Client-confirmed service scope:

- QB Building Solutions: new builds, extensions, orangeries, general building, walls, steel erection, restoration and renovation, kitchens.
- Teams: joiners, bricklayers, groundworkers and demolition teams. Site management is supported by the original website and existing service data.
- QB Groundworks: a separate division providing foundations, patios, landscaping, drainage and driveways. Its purpose is greater control over an integral part of the build.
- QB Demolition: a separate division providing demolition, site clearance, asbestos removal and asbestos disposal. The client describes asbestos provision as fully vetted and qualified; this does not establish the legal entity, licence type, licence holder or authority for every category of asbestos work.

Contact details corroborated by the original website: `07464 214327` and `info@qbbuildingsolutions.com`. Existing local copy describes Belper, Derbyshire as the base; retain that broad description without inventing a street address or separate town offices.

Do not promise first place in search. Do not invent reviews, completion dates, projects, prices, experience totals, guarantees, licences, affiliations or team biographies. Remove unconditional claims such as “always on time and on budget”, “no hidden extras” and “highest standards every time”. Existing draft claims about insurance, opening hours and free quotes are not independently verified: omit insurance and hours; use “request a quote” until the free-quote terms are confirmed.

The original website mentions ICW recognition for work in Littleover for Ivygrove and NHBC recognition for bricklayers. Hold award copy out of the new public text until the client confirms exact award names, year, recipient and permission to use logos. Do not turn recognition received by individuals or a development into an accreditation of QB.

Asbestos copy must describe enquiries and scope assessment without claiming all work can be carried out directly by QB. Before publishing regulated-service claims, confirm who performs removal and disposal and the relevant qualifications, licences, waste authorisations and documentation. Avoid DIY asbestos advice.

## 3. SEO and design requirements

Use plain British English: bricklaying, joinery, groundworks, single-storey, orangeries. Write for prospective customers, with clear scope, useful next steps and visible contact options. Use location names naturally; one relevant heading and a clear service-area paragraph are more useful than repeated lists in every sentence. Each service page should answer a distinct enquiry intent. No keyword stuffing, hidden text, invented local facts or interchangeable town landing pages.

Primary query mapping:

| Route | Primary intent | Supporting geography / topics |
| --- | --- | --- |
| `/` | builders Belper | Duffield, Allestree, Quarndon; building company Derbyshire |
| `/about` | QB Building Solutions | team, divisions, approach |
| `/services` | building services Derbyshire | full scope and service navigation |
| `/services/bricklaying` | bricklayer Belper | Duffield, Allestree; walls and extension brickwork |
| `/services/joinery` | joiner Belper | Duffield, Allestree; carpentry and kitchen fitting |
| `/services/extensions` | extensions Belper | Duffield, Allestree, Quarndon; kitchen extensions |
| `/services/kitchens` | kitchens Belper / kitchen fitting | Duffield, Allestree; fitting versus structural work |
| `/services/new-builds` | new build builders Derbyshire | construction from approved plans |
| `/services/general-building` | general builders Derbyshire | alterations, repairs and improvements |
| `/services/site-management` | construction site management Derbyshire | trade coordination |
| `/services/groundworks` | groundworks Belper / Derbyshire | QB Groundworks; foundations, patios, drainage, driveways, landscaping |
| `/services/orangeries` | orangery builders Derbyshire | Belper, Duffield, Allestree, Quarndon |
| `/services/steel-erection` | steel erection Derbyshire | structural steel for building projects |
| `/services/restoration-renovation` | renovation builders Derbyshire | restoration and existing properties |
| `/services/demolition` | demolition Derbyshire | QB Demolition; clearance and asbestos enquiries |
| `/projects` | QB Building Solutions projects | genuine work evidence when supplied |
| `/contact` | contact QB Building Solutions | quote and project enquiries |

Every normal page needs a unique title and description, exactly one meaningful H1, semantic H2/H3 sections, descriptive internal links and a useful CTA. Use the full titles supplied below exactly once: BaseLayout currently appends the brand, so adapt its title API or pass the unbranded part without duplicating it. Titles are editorial suggestions, not a fixed character-count promise.

Keep the current logo, red/black/white/grey palette, Commissioner font, header/navigation structure, footer structure, hero treatment, buttons, cards and alternating sections. Improve spacing, line lengths, responsive grids, image cropping and typographic hierarchy within that system. The current small red hero label can remain an eyebrow; the large main headline should be the H1. Give substantial content visual structure with scope cards, two-column introductions, numbered processes and readable FAQ blocks. Avoid a long unformatted text dump or a site redesign.

Use existing images only where relevant. Images are not proof of an identified local job. Do not claim that an image depicts a kitchen, asbestos activity, town or client project unless verified. New service routes have no matching image files: use a verified suitable existing image or a tasteful text-led hero in the existing style. Write alt text based on what the image actually shows; decorative backgrounds may have empty alt text.

Implementation issues already observed:

- Hardcoded GitHub Pages URLs appear across navigation, assets and CTAs despite the production domain in Astro config. Replace with deployment-base-aware internal URLs and local assets; preserve support for a subpath preview where needed. Import the actual stylesheet into the Astro layout so edited local CSS is used.
- Shared Open Graph values are homepage-only; make them page-specific. Add absolute canonical URLs using the production origin and the correct page path. Verify the Open Graph image exists.
- JSON-LD has a trailing comma and is invalid JSON. Serialize valid structured data using confirmed facts only. Use Organization and Service data where appropriate; do not invent a postal address to satisfy LocalBusiness requirements, star ratings or separate entities for unconfirmed divisions.
- Astro sitemap integration is already configured. Keep it, exclude the 404 route, and add/verify robots.txt with the production sitemap URL. Do not index previews or put placeholder project pages into search as finished case studies.
- Service pages lack a proper hero H1; some pages close H2 tags with `</h1>`. Correct these.
- Footer service paths omit `/services/`, the footer CTA has no href, social links are placeholder local paths, and Projects does not exist. Fix functional links; remove unverified social links rather than inventing accounts.
- Contact form has no action/handler or named fields; phone is an inappropriate number input. Never show fake delivery success. Use explicit labels, `type="tel"`, field names, sensible autocomplete and accessible errors. Connect an existing approved handler if available. If none exists, keep phone/email enquiry options clear and mark form integration outstanding without adding a vendor.
- No analytics, advertising pixels, newsletter, checkout, uploads or account system were found in the reviewed source. A Google Maps iframe, cdnjs Font Awesome and external GitHub assets are present. Audit the actual deployed network/cookies before finalising the policy. Loading an iframe lazily is not a consent mechanism.

Other SEO work outside the code implementation: confirm and maintain the genuine Google Business Profile and its service areas, keep contact details consistent across listings, request honest customer reviews, add real project photos and case studies with permissions, and use Search Console to monitor relevant queries and enquiry outcomes. Content supports visibility; no ranking guarantee is possible. Do not introduce tracking solely to meet this brief.

## 4. Shared content

**Primary CTA:** Discuss your project → `/contact`.

**Secondary CTA:** Call 07464 214327 → `tel:+447464214327`.

**Email CTA:** Email our team → `mailto:info@qbbuildingsolutions.com`.

**Shared end-of-page CTA heading:** Tell us what you want to build.

**Shared CTA body:** Whether you have drawings ready or are still exploring your options, tell us about your property, location and the work you have in mind. We'll discuss the next step and what we need to prepare a quote.

**Footer description:** Building, joinery and brickwork across Belper and Derbyshire, supported by our QB Groundworks and QB Demolition divisions.

**Footer service-area line:** Serving Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and the wider Derbyshire area.

**Footer quick links:** Home, About, Services, Projects, Contact, Privacy Policy. Service links use the actual `/services/{slug}` routes. Link the Groundworks and Demolition divisions to their service pages; they are divisions, not separate verified companies.

## 5. Existing page content

### Home — `/` — `src/pages/index.astro`

**Title:** Builders in Belper & Derbyshire | QB Building Solutions

**Meta description:** Building, bricklaying and joinery in Belper, Duffield, Allestree and Quarndon. Explore extensions, kitchens, new builds and groundworks with QB.

**Hero eyebrow:** QB Building Solutions

**H1:** Builders in Belper, working across Derbyshire

**Hero body:** From a garden wall to a new home, QB Building Solutions brings together the trades your project needs. We carry out building work, extensions, bricklaying, joinery and kitchen installations in Belper, Duffield, Allestree, Quarndon and the surrounding area.

**Hero buttons:** Discuss your project; View our services → `/services`.

**H2: Building work, brought together**

A building project involves more than individual trades. It needs the groundwork, structure and finishing work to fit together. Our bricklayers, joiners, groundworkers and demolition teams support projects from early site preparation through to the work that makes a property ready to use.

Whether you're extending your home, improving an existing property or planning a new build, we'll discuss the scope and help identify the right next step. Learn more about our team → `/about`.

**H2: What can we help you build?**

Use the service-card copy in section 6. Feature Extensions, Bricklaying, Joinery and Kitchens as the first four cards, with a View all services link. Ensure new builds, orangeries, general building, steel erection and renovation are discoverable through the Services hub.

**H2: Dedicated divisions for the early stages**

**QB Groundworks:** Foundations, drainage, driveways, patios and landscaping form the base of many projects. Our dedicated groundworks division gives us greater control over this essential stage and how it connects to the building work. Explore groundworks → `/services/groundworks`.

**QB Demolition:** When a project starts with removing an existing structure or clearing a site, our demolition division can discuss the preparation and clearance required. Contact us about demolition and asbestos-related requirements so the scope and appropriate specialist provision can be assessed. Explore demolition → `/services/demolition`.

**H2: A practical approach to your project**

- **The right trades:** Bricklaying, joinery, groundworks and demolition brought together around the work required.
- **Clear scope:** Discuss the plans, site conditions and priorities before agreeing what the project includes.
- **Connected stages:** Consider how foundations, structural work and finishes affect one another.
- **Local coverage:** A team serving Belper and the surrounding Derbyshire communities.

**H2: Building services near you**

We welcome enquiries from Belper, Duffield, Allestree and Quarndon, as well as Derby, Ashbourne and the wider Derbyshire area. If you're looking for a local builder, bricklayer or joiner, tell us where the property is and what you need. We'll confirm whether the work is suitable for our team.

**H2: See our work**

Explore our project gallery for a closer look at our building work. If you would like to see examples relevant to your plans, ask our team when you enquire.

Use this gallery introduction only if genuine QB work is verified. Otherwise use “Looking for examples of similar work? Ask our team about projects relevant to your plans.” Do not label generic service images as recent completed projects. Link to the honest Projects page below.

**H2: Questions before you get started**

**Do you work outside Belper?** Yes. Our service area includes Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. Contact us with the site location to discuss availability and suitability.

**Can I enquire about a smaller job?** Yes. Our scope includes walls and general building work as well as larger extensions and new builds. Tell us what is needed so we can assess the job.

**What should I send with my enquiry?** Your location, a short description of the work and any drawings you already have are useful starting points. You can email further information after contacting us.

Finish with the shared CTA.

### About — `/about` — `src/pages/about.astro`

**Title:** About Our Building Team | QB Building Solutions

**Meta description:** Meet QB Building Solutions: building, bricklaying and joinery across Derbyshire, supported by dedicated groundworks and demolition divisions.

**Eyebrow:** About QB Building Solutions

**H1:** A building team for every stage

**Hero body:** We bring together building trades and dedicated divisions to help customers improve, extend and build properties across Belper and Derbyshire.

**H2: Who we are**

QB Building Solutions carries out new builds, extensions, orangeries, general building, walls, steel erection, restoration, renovation and kitchens. Our teams include bricklayers, joiners, groundworkers and demolition operatives, with site management available to help coordinate construction work.

We serve Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and the wider Derbyshire area. Each enquiry starts with the property, the proposed work and the practical requirements of the site.

**H2: Three divisions, connected work**

**QB Building Solutions:** The building and finishing work that creates a new property or changes an existing one, from brickwork and structural work to joinery and kitchens.

**QB Groundworks:** Our separate division for foundations, patios, landscaping, drainage and driveways. Keeping this stage connected to the build gives us greater control over an integral part of the project.

**QB Demolition:** Our separate division for demolition and site clearance, with enquiries also welcomed for asbestos removal and disposal. The scope and suitable qualified provision must be established before asbestos work is agreed.

Link each division to its relevant service page.

**H2: What matters to us**

- **Care in the work:** Pay attention to the structure, materials and details that shape the finished result.
- **Straightforward communication:** Explain the agreed scope and discuss questions as the work develops.
- **Practical planning:** Consider access, sequencing and the way different trades need to work together.
- **Respect for your property:** Discuss how the site will be used and how work may affect occupied areas.

**H2: How a project starts**

1. **Discuss:** Tell us what you want to achieve, where the property is and what information you already have.
2. **Review:** Discuss the drawings, site conditions and work required. Establish whether further specialist input is needed.
3. **Agree:** Set out the proposed scope, quote and next steps before construction is arranged.
4. **Build:** Coordinate the agreed work and discuss progress, questions and any proposed changes.

**H2: Choose the service that fits your plans**

You might need one trade for a defined job or several teams for a larger project. Explore our services, or contact us to discuss where your project fits.

Buttons: Explore our services; Discuss your project.

### Services hub — `/services` — `src/pages/services.astro`

**Title:** Building Services in Derbyshire | QB Building Solutions

**Meta description:** Explore QB's extensions, new builds, bricklaying, joinery, kitchens, renovation, groundworks and demolition services across Belper and Derbyshire.

**Eyebrow:** Our services

**H1:** Building services in Belper and Derbyshire

**Hero body:** Find the right service for your project, from brickwork and kitchen fitting to a complete new build. Our building teams and dedicated divisions cover the structure, preparation and finishing work your plans may need.

**H2: Building, alterations and finishing**

Use cards for Bricklaying, Joinery, Extensions, New Builds, General Building, Kitchens, Orangeries, Steel Erection, Restoration & Renovation and Site Management. Card text and links are supplied in section 6. Keep related services together and give cards equal visual weight without forcing equal copy lengths.

**H2: Groundworks and demolition divisions**

Building work often starts before the first brick is laid. QB Groundworks covers foundations, drainage and external works. QB Demolition covers demolition and site clearance, with asbestos-related enquiries assessed for suitable specialist provision. Use the two division cards from section 6.

**H2: Where we work**

Our service area includes Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. Availability and suitability depend on the type of work and site requirements. Contact us with your location and project details.

**H2: Not sure which service you need?**

You don't need to choose the trade before getting in touch. Describe the result you want, and we'll discuss the work involved and which teams may be needed.

CTA: Discuss your project.

### Contact — `/contact` — `src/pages/contact.astro`

**Title:** Contact Builders in Belper | QB Building Solutions

**Meta description:** Contact QB Building Solutions on 07464 214327 or email info@qbbuildingsolutions.com about building, joinery, groundworks or demolition in Derbyshire.

**Eyebrow:** Contact our team

**H1:** Let's talk about your project

**Hero body:** Planning building work in Belper, Duffield, Allestree, Quarndon or elsewhere in Derbyshire? Tell us what you have in mind so we can discuss the scope and the next step towards a quote.

**H2: Tell us what you need**

Please include the property location, the type of work and any useful details about your plans. If you already have drawings, mention them in your message; we can discuss how to share them by email.

**Form labels:** Your name (required); Email address (required); Phone number (optional); Project location (optional); Subject (optional); Your message (required).

**Message helper:** Describe the work you are considering and any timing requirements. Please avoid including sensitive personal information.

**Privacy notice beside submit:** We use your details to respond to your enquiry and discuss your project. Read our Privacy Policy → `/privacy-policy`.

**Submit label:** Send enquiry.

**Validation:** Please enter your name. / Please enter a valid email address. / Please tell us about your project.

**Success text, only after confirmed delivery:** Thank you. Your enquiry has been sent. Our team will respond using the contact details you provided.

**Failure text:** Your enquiry could not be sent. Please try again, call 07464 214327 or email info@qbbuildingsolutions.com.

**If no working handler exists:** To discuss your project, please call or email our team using the details below. Do not present an active submit button that silently reloads or fails. Do not put enquiry details into a URL query string.

**H2: Contact details**

- Phone: 07464 214327 — Call our team.
- Email: info@qbbuildingsolutions.com — Email your enquiry.
- Area: Belper, Derbyshire — Serving Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire.

Do not publish opening hours until confirmed. A map of Belper indicates the service base area, not a verified customer-facing premises.

**H2: What happens next?**

We'll review your enquiry and discuss the proposed work. Depending on the project, we may need drawings, further information or a site visit before preparing a quote. Availability, scope and timescales are agreed for each project.

**Map fallback label:** View Belper on Google Maps. Prefer a simple external map link until the embed and any consent requirements have been audited. If retaining an optional embed, disclose Google processing and use appropriate controls before it loads.

### 404 — `/404` — `src/pages/404.astro`

**Title:** Page Not Found | QB Building Solutions

**Meta description:** This page could not be found. Explore QB Building Solutions' services or contact our team for help with your project.

**Eyebrow:** 404

**H1:** We couldn't find that page

**Body:** The link may have changed, or the page may no longer be available. Use the links below to find what you need.

**Primary button:** Return home → `/`.

**H2:** Where would you like to go?

- **Home:** Get to know QB Building Solutions and the work we do. → `/`
- **Our services:** Find building, joinery, groundworks and demolition services. → `/services`
- **Projects:** Ask about examples of work relevant to your plans. → `/projects`
- **Contact:** Speak to our team about your project. → `/contact`

Set noindex and exclude from sitemap. Preserve proper 404 behaviour on the deployment platform; it must not become an indexable soft-404 landing page.

## 6. All service-page content

For every entry below, use the card sentence in hubs, the intro beneath the H1, then the supplied H2 sections, scope list and FAQs. Finish with the shared CTA. These are complete copy blocks, not outlines for generating filler. Keep all seven existing slugs. Add the five new entries through the existing data-driven template; extend the data shape where needed instead of duplicating pages.

### Bricklaying — `/services/bricklaying` — existing

**Title:** Bricklayers in Belper & Derbyshire | QB Building Solutions

**Meta description:** Bricklaying for new builds, extensions, walls and repairs in Belper, Duffield, Allestree and Derbyshire. Discuss your brickwork with QB Building Solutions.

**H1:** Bricklayers in Belper and Derbyshire

**Card:** Brickwork for new builds, extensions, garden walls and improvements to existing properties.

**Intro:** Looking for a bricklayer in Belper, Duffield or Allestree? QB Building Solutions carries out brickwork for standalone jobs and larger building projects across Derbyshire.

**H2: Brickwork that fits the project**

A new wall, an extension and a complete home each have different requirements. We discuss the purpose of the work, the existing structure and the proposed finish before agreeing the scope. For work on an existing property, brick choice and the relationship between old and new masonry are part of that discussion.

**H2: Our bricklaying work includes**

- Brick and blockwork for new builds.
- Extension brickwork and associated building work.
- Garden and boundary walls.
- Brick repairs and repointing.
- Door and window openings and structural alterations, subject to the required design.

**H2: From foundations to finished masonry**

Brickwork often depends on work below ground and the structure around it. Where your job needs foundations, joinery or other building work, we can discuss these stages together. Explore our groundworks and extensions services for related work.

**H2: Bricklaying enquiries across Derbyshire**

We serve Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. Tell us where the work is needed and whether it is a repair, a wall or part of a larger build.

**FAQ — Can you discuss matching existing brickwork?** Yes. We can assess the existing masonry and discuss suitable options. An exact match depends on the bricks available and the condition of the original work.

**FAQ — Can I enquire about a garden wall?** Yes. Walls are part of our building scope. Share the location and approximate size so we can discuss the job.

**Related links:** Groundworks; Extensions; General Building.

### Joinery — `/services/joinery` — existing

**Title:** Joiners in Belper & Derbyshire | QB Building Solutions

**Meta description:** Joinery and carpentry in Belper, Duffield, Allestree and Derbyshire. Explore doors, interior timber work, storage and kitchen fitting with QB.

**H1:** Joiners in Belper and Derbyshire

**Card:** Carpentry and joinery for doors, interior timber work, storage and kitchen installations.

**Intro:** Our joinery team works on individual installations and the timber work within wider building projects. We welcome enquiries from Belper, Duffield, Allestree and the surrounding Derbyshire area.

**H2: Practical joinery for your property**

Joinery shapes how a room works and how the finished space feels. From fitting doors to completing the timber details of a renovation, we discuss measurements, materials and the finish needed for the job.

**H2: Joinery work we can discuss**

- Kitchen fitting and associated carpentry.
- Internal and external doors.
- Skirting boards and architraves.
- Shelving and storage.
- Stud walls and timber framing.
- Flooring and finishing work.

**H2: Part of a bigger improvement?**

If the joinery is part of a kitchen installation, extension or renovation, the order of work matters. We can discuss how it connects to the building work and other trades. Our Kitchens page explains the difference between fitting a new kitchen and changing the space around it.

**H2: Local joinery enquiries**

We work across Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. Send a description of the work and the property location to start the discussion.

**FAQ — Do you fit kitchens?** Kitchen installations are part of our service scope. Tell us whether you have selected the kitchen and whether building alterations are also needed.

**FAQ — Can joinery be included in a renovation?** Yes. We can discuss the timber and finishing work alongside the wider building scope.

**Related links:** Kitchens; Extensions; Restoration & Renovation.

### Site Management — `/services/site-management` — existing

**Title:** Site Management in Derbyshire | QB Building Solutions

**Meta description:** Discuss construction site management in Derbyshire with QB Building Solutions, including trade coordination, scheduling and progress communication.

**H1:** Construction site management in Derbyshire

**Card:** Coordination of trades, materials and construction stages to keep agreed work organised.

**Intro:** Building work needs trades, materials and decisions to arrive in the right order. Our site management service helps organise the practical stages of construction projects.

**H2: Coordination throughout the build**

We discuss the project scope and the management support required before agreeing our role. That can include coordinating work, reviewing progress and helping teams respond to issues as they arise.

**H2: Support can include**

- Planning the sequence of construction work.
- Coordinating contractors and trades.
- Arranging materials and deliveries.
- Monitoring workmanship and progress.
- Coordinating site safety arrangements within the agreed role.
- Keeping customers informed about progress and decisions.

**H2: Agreeing responsibilities clearly**

The management role depends on the project and the contracts in place. We establish what is included and how we will work with your designer, contractors or other appointed professionals. Do not assume this service automatically includes architectural design, statutory appointments or principal contractor duties.

**H2: Projects across our service area**

Discuss site management for work in Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne or elsewhere in Derbyshire.

**FAQ — Can you coordinate several trades?** Trade coordination forms part of this service. The precise teams and responsibilities are agreed for the project.

**FAQ — Is site management the same as design?** No. Design and construction management are different roles. Tell us which professionals are already involved so we can discuss the support needed.

**Related links:** New Builds; Extensions; Groundworks.

### Extensions — `/services/extensions` — existing

**Title:** House Extensions in Belper & Derbyshire | QB Building Solutions

**Meta description:** Plan a house or kitchen extension in Belper, Duffield, Allestree or Quarndon. Discuss foundations, building work and finishes with QB Building Solutions.

**H1:** House extensions in Belper and Derbyshire

**Card:** Single and double-storey extensions that add useful space to your existing home.

**Intro:** An extension can make room for a larger kitchen, more living space or another bedroom. We carry out extension building work in Belper, Duffield, Allestree, Quarndon and the wider Derbyshire area.

**H2: More room for the way you live**

The best starting point is what you want the new space to do. We discuss the proposed layout, existing property and available drawings so the building scope can be understood before work is agreed.

**H2: Extension projects can include**

- Single and double-storey additions.
- Kitchen and dining extensions.
- Larger living areas.
- Bedrooms and home offices.
- Utility rooms and supporting spaces.
- Foundations, brickwork, structural work and internal finishes within the agreed scope.

**H2: Connecting the new space to your home**

An extension needs to work with the building already there. Ground conditions, openings, structural requirements and finishing details all affect the construction. Our building teams and QB Groundworks division can discuss how these stages connect. Kitchen fitting and joinery can also be included where required.

**H2: Plans, approvals and the next step**

Planning requirements and building regulations depend on the property and proposal. Do not assume an extension is automatically permitted. Let us know which drawings, permissions and professional advice you already have so we can discuss the next step with you and your appointed advisers.

**FAQ — Can you build a kitchen extension?** Yes. We can discuss the extension construction and kitchen fitting together, with the scope agreed around your plans.

**FAQ — Do I need drawings before enquiring?** You can contact us before drawings are ready. Detailed plans and site information may be needed before we can prepare a construction quote.

**Related links:** Kitchens; Groundworks; Steel Erection; Joinery.

### New Builds — `/services/new-builds` — existing

**Title:** New Build Construction in Derbyshire | QB Building Solutions

**Meta description:** New home construction across Belper and Derbyshire. Discuss foundations, brickwork, structural stages and finishing work with QB Building Solutions.

**H1:** New build construction in Derbyshire

**Card:** Construction for new homes, bringing together groundwork, structural work and finishing trades.

**Intro:** A new home brings many stages together on one site. QB Building Solutions welcomes enquiries for new build construction across Belper and Derbyshire.

**H2: Turning plans into construction**

We discuss your approved plans, specifications and site requirements to establish the building work needed. Understanding the design and the sequence of construction helps define the scope before the project starts.

**H2: Construction stages we can discuss**

- Site preparation, groundworks and foundations.
- Brick and block construction.
- Structural work and roofing requirements.
- Windows, doors and joinery.
- Kitchens and internal finishes.
- Coordination of specialist trades within the agreed scope.

**H2: A connected team from the ground up**

QB Groundworks supports an integral part of a new build. Our bricklayers and joiners then contribute to the structure and finishing stages. Site management can help coordinate the trades and deliveries around the agreed programme.

**H2: Prepare for a useful first conversation**

Tell us where the site is, what you are planning and which permissions, drawings and specifications are available. We serve Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire.

**FAQ — Can I enquire while the project is being planned?** Yes. Explain the stage you have reached. The information required for a quote depends on how developed the design and specification are.

**FAQ — Are architectural design and permissions included?** Do not assume they are included. We agree our construction scope and how we will work with your appointed professionals.

**Related links:** Groundworks; Bricklaying; Site Management.

### General Building — `/services/general-building` — existing

**Title:** General Builders in Derbyshire | QB Building Solutions

**Meta description:** Building repairs, alterations and property improvements in Belper, Duffield, Allestree, Quarndon and Derbyshire. Discuss your project with QB.

**H1:** General building work in Belper and Derbyshire

**Card:** Repairs, alterations and property improvements, from a defined building job to wider renovation work.

**Intro:** Some projects need a complete build; others need a wall changed, a repair completed or an existing space improved. Our general building service covers a range of property work across Derbyshire.

**H2: Building around your requirements**

Describe the problem you want to solve or the change you want to make. We can discuss the property, the work involved and whether the job needs one trade or several teams.

**H2: General building work can include**

- Property repairs and improvements.
- Structural alterations to an agreed design.
- Internal wall changes and openings.
- Renovation and restoration work.
- Plastering and finishing within the agreed scope.
- Walls and outdoor building work.

**H2: From a single job to several connected trades**

We can discuss standalone building work or tasks that sit within a larger renovation. Where the work involves bricklaying, joinery, groundwork or structural steel, the relevant services can be considered together.

**H2: Local builders for property improvements**

We welcome enquiries in Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and the wider Derbyshire area. Share the location and a brief description so we can assess the work.

**FAQ — Can I enquire about repairs rather than a large project?** Yes. Repairs and general building work are part of our scope. Suitability and availability are assessed for each job.

**FAQ — Can you remove or alter an internal wall?** We can discuss structural alterations, but the design and any required approvals must be established before work is agreed.

**Related links:** Bricklaying; Restoration & Renovation; Steel Erection.

### Groundworks — `/services/groundworks` — existing

**Title:** Groundworks in Belper & Derbyshire | QB Groundworks

**Meta description:** QB Groundworks provides foundations, patios, landscaping, drainage and driveways across Belper and Derbyshire. Discuss your site and external works.

**H1:** Groundworks in Belper and Derbyshire

**Card:** QB Groundworks: foundations, drainage, patios, landscaping and driveways.

**Intro:** QB Groundworks is the dedicated groundworks division of QB Building Solutions. We cover the early stages of building work and the outdoor spaces around a property.

**H2: An integral part of the build**

Foundations and drainage affect everything that follows. Our separate groundworks division gives us greater control over this stage and how it connects to the building teams. We also welcome enquiries for standalone external works.

**H2: Our groundworks services**

- **Foundations:** Groundwork for new builds, extensions and other structures, based on the required design and site assessment.
- **Patios:** Preparation and construction of usable outdoor areas, with the finish and layout agreed for your property.
- **Landscaping:** Practical changes to outdoor spaces, coordinated with associated groundwork.
- **Drainage:** Drainage work for building projects and property improvements, with requirements assessed for the site.
- **Driveways:** Ground preparation and driveway work, with access, drainage and proposed materials discussed before agreement.

**H2: Understanding your site**

Access, levels, ground conditions and existing services can affect the approach. Tell us what the work is for and whether it supports a new build, extension or external improvement. We'll discuss the information needed to assess the job.

**H2: Groundworks across Derbyshire**

We serve Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. For demolition or clearance before construction, see QB Demolition.

**FAQ — Do you undertake patios and driveways as well as foundations?** Yes. Patios, driveways, landscaping and drainage are part of the division's scope, alongside foundations.

**FAQ — Can groundworks be discussed with an extension?** Yes. We can consider the groundwork and extension construction together, with responsibilities and scope agreed for the project.

**Related links:** Extensions; New Builds; Demolition.

### Kitchens — `/services/kitchens` — new

**Title:** Kitchen Fitting in Belper & Derbyshire | QB Building Solutions

**Meta description:** Kitchen fitting and associated building work in Belper, Duffield, Allestree and Derbyshire. Discuss your kitchen installation or extension with QB.

**H1:** Kitchen fitting in Belper and Derbyshire

**Card:** Kitchen installations and associated joinery, with building alterations discussed where needed.

**Intro:** A new kitchen can involve fitting within the existing room or changing the space around it. QB Building Solutions welcomes kitchen enquiries in Belper, Duffield, Allestree and across Derbyshire.

**H2: Start with the kitchen you want to use**

Tell us about the layout, the kitchen you have selected and the changes you want to make. We'll discuss the installation work and whether the project also needs joinery, structural alterations or an extension.

**H2: Kitchen work we can discuss**

- Kitchen fitting and installation.
- Associated carpentry and joinery.
- Building alterations around the proposed layout.
- Renovation work within the kitchen space.
- Kitchen extensions and the construction needed to create more room.
- Coordination of specialist trades where included in the agreed scope.

**H2: Fitting a kitchen or changing the room?**

Replacing units is a different scope from creating an open-plan kitchen or extending the house. Establishing that difference early helps identify the design, structural information and trades required. Any electrical, gas or plumbing work must be assigned to appropriately competent trades and agreed explicitly; it is not automatically included.

**H2: Your next step**

Contact us with the property location, any kitchen plans and a description of the building work you expect. Our service area also includes Quarndon, Derby, Ashbourne and wider Derbyshire.

**FAQ — Do I need to have chosen the kitchen?** You can enquire before choosing it. Detailed layouts and product information may be required to quote accurately for fitting.

**FAQ — Can you discuss an extension as part of the kitchen project?** Yes. Kitchen extensions and installation can be considered together, with the design and construction scope agreed separately where needed.

**Related links:** Joinery; Extensions; General Building.

### Orangeries — `/services/orangeries` — new

**Title:** Orangery Builders in Derbyshire | QB Building Solutions

**Meta description:** Discuss orangery building work in Belper, Duffield, Allestree, Quarndon and Derbyshire with QB Building Solutions, from groundwork to agreed finishes.

**H1:** Orangery building work in Derbyshire

**Card:** Orangery construction to create additional living space connected to your home.

**Intro:** An orangery can create a new place to relax, dine or spend time together. We welcome enquiries for orangery building work across Belper and Derbyshire.

**H2: Space shaped around your property**

The proposed layout, glazing and relationship to the existing house influence how an orangery is built. We discuss your plans and the construction requirements so the scope reflects the property and the intended use.

**H2: Stages to discuss**

- Site preparation and foundations.
- Brickwork and the main building structure.
- Openings and connections to the existing home.
- Roof and glazing requirements in the proposed design.
- Joinery and internal finishing work within the agreed scope.

**H2: Plan the details before construction**

Planning requirements, building regulations and structural details depend on the proposal. Tell us which drawings and professional advice you already have. We can discuss how the building work will fit around the approved design and specialist components.

**H2: Local orangery enquiries**

We serve Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. Contact us with the location and outline plans.

**FAQ — Can an orangery be part of a wider renovation?** Yes. We can discuss how the additional space connects to changes elsewhere in your property.

**FAQ — Are glazing products or design services automatically included?** No. Product supply, design and specialist installation responsibilities must be established in the project scope.

**Related links:** Extensions; Groundworks; Joinery.

### Steel Erection — `/services/steel-erection` — new

**Title:** Steel Erection in Derbyshire | QB Building Solutions

**Meta description:** Discuss structural steel erection for building projects in Belper and Derbyshire with QB Building Solutions. Scope assessed against design and site needs.

**H1:** Steel erection for building projects in Derbyshire

**Card:** Steel erection within building projects, with the design, access and installation scope assessed first.

**Intro:** Structural steel can form part of an extension, alteration or new build. QB Building Solutions welcomes enquiries for steel erection across its Derbyshire service area.

**H2: Start with the structural requirements**

Tell us what the steel is intended to support and which engineer's drawings or specifications are available. The installation approach must reflect the design, existing structure and site conditions.

**H2: Details we need to discuss**

- The structural drawings and steel specification.
- Whether the work is part of a new build or an existing property.
- Site access and delivery requirements.
- The relationship to masonry and other construction stages.
- The installation scope and the specialist arrangements required.

**H2: Clear roles for structural work**

Structural design, fabrication, lifting arrangements and erection are distinct responsibilities. We agree what our service includes before work is arranged. Do not assume fabrication, engineering design or every lifting operation is supplied directly by QB.

**H2: Working across Derbyshire**

We welcome enquiries from Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and the wider county.

**FAQ — Can steel work be discussed with an extension?** Yes. Share the extension plans and structural details so we can assess the relationship between the steel and the building work.

**FAQ — Can you quote without an engineer's specification?** Contact us to discuss the stage you have reached. Appropriate design information may be needed before the installation scope and price can be established.

**Related links:** Extensions; General Building; New Builds.

### Restoration & Renovation — `/services/restoration-renovation` — new

**Title:** Restoration & Renovation in Derbyshire | QB Building Solutions

**Meta description:** Property renovation and restoration building work in Belper, Duffield, Allestree, Quarndon and Derbyshire. Discuss repairs and improvements with QB.

**H1:** Restoration and renovation building work in Derbyshire

**Card:** Building work to repair, restore and improve existing properties, with scope shaped around their condition.

**Intro:** Working with an existing property starts with understanding what is already there. QB Building Solutions carries out restoration and renovation building work across Belper and Derbyshire.

**H2: Improve the property you already have**

You may want to repair worn areas, change a layout or bring several improvements together. We discuss the existing condition, your priorities and the work needed to achieve them.

**H2: Work we can discuss**

- Building repairs and restoration work.
- Brickwork and masonry repairs.
- Internal alterations, subject to the required design.
- Joinery and finishing work.
- Kitchen improvements and installation.
- Coordination of related trades within the agreed renovation scope.

**H2: Allow for what an existing building may reveal**

Hidden conditions can affect renovation work. The initial scope should make clear what is known, what needs further assessment and how proposed changes will be discussed. If a property is listed or protected, the relevant advice and permissions must be established; this page does not claim specialist conservation accreditation.

**H2: Discuss a renovation near you**

We serve Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. Tell us which areas need attention and whether drawings or surveys are available.

**FAQ — Can several improvements be planned together?** Yes. Describe the full set of changes so we can discuss the sequence and which trades may be required.

**FAQ — Do you guarantee that no further work will be found?** No. Existing buildings may reveal conditions during assessment or construction. Any resulting scope changes need to be discussed and agreed.

**Related links:** General Building; Bricklaying; Joinery; Kitchens.

### Demolition — `/services/demolition` — new

**Title:** Demolition & Site Clearance in Derbyshire | QB Demolition

**Meta description:** Contact QB Demolition about demolition, site clearance and asbestos-related requirements in Belper and Derbyshire. Scope and specialist provision assessed.

**H1:** Demolition and site clearance in Derbyshire

**Card:** QB Demolition: demolition and site clearance, with asbestos-related enquiries assessed for appropriate specialist provision.

**Intro:** QB Demolition is the dedicated demolition division of QB Building Solutions. We welcome enquiries for demolition, site clearance, asbestos removal and asbestos disposal across Derbyshire.

**H2: Prepare the site for its next use**

Removing an existing structure or clearing a site needs an agreed scope and an understanding of the conditions. Tell us about the property, access and proposed next stage so we can discuss what assessment and work may be required.

**H2: Our enquiry scope**

- Demolition of existing structures, subject to assessment.
- Site clearance ahead of building or external works.
- Coordination with groundworks for the next stage.
- Asbestos removal enquiries.
- Asbestos disposal enquiries.

**H2: Asbestos removal and disposal enquiries**

If asbestos is known or suspected, mention it when contacting us. The material, survey information and proposed work must be assessed before suitable qualified provision can be established. Do not disturb suspected asbestos yourself. Removal and disposal arrangements depend on the specific work and applicable requirements.

Do not publish “licensed asbestos contractor”, a licence number or a blanket “fully qualified for all asbestos work” claim without verified evidence. The client-confirmed asbestos service scope remains covered by the enquiry wording above.

**H2: Demolition enquiries across Derbyshire**

We serve Belper, Duffield, Allestree, Quarndon, Derby, Ashbourne and wider Derbyshire. Provide the location, the structure or area involved and any existing survey information.

**FAQ — Can site clearance be discussed with a new build?** Yes. We can discuss how demolition or clearance connects to the groundwork and construction stages.

**FAQ — What should I tell you about possible asbestos?** Mention any known or suspected asbestos and any survey information already available. The appropriate next step must be established before work is agreed.

**Related links:** Groundworks; New Builds; General Building.

## 7. Projects page — navigation gap

**Route:** `/projects`; create `src/pages/projects.astro` only because existing navigation already promises this destination.

**Title:** Our Building Work | QB Building Solutions

**Meta description:** Discuss examples of QB Building Solutions' building, bricklaying and joinery work relevant to your project in Belper and Derbyshire.

**Eyebrow:** Our work

**H1:** Find out more about our building work

**Intro:** Choosing a builder is easier when you can discuss work relevant to your plans. Contact QB Building Solutions to ask about examples of building, bricklaying and joinery projects that may help you understand our approach.

**H2: Looking for a similar project?**

Tell us whether you are planning an extension, new build, kitchen, renovation or external work. We can discuss which examples are available and relevant to your enquiry.

**CTA:** Ask about our work → `/contact`.

No genuine case-study records were supplied. Publish the honest text above without invented cards, outcomes, towns or testimonials. Keep this interim page noindex and out of the sitemap until substantive verified work evidence is added. If genuine images are confirmed, show a restrained gallery with factual captions only.

Future case studies require confirmed project type, location at an appropriate privacy level, scope, actual QB role, challenges, work completed, dated photos with permission and outcomes. Those are editorial data requirements, not public placeholders.

## 8. Full privacy-policy draft

**Route:** `/privacy-policy`; create `src/pages/privacy-policy.astro`.

**Title:** Privacy Policy | QB Building Solutions

**Meta description:** How QB Building Solutions handles website enquiries, project information and personal data, including your privacy rights and how to contact us.

**Publication status:** Full draft, pending operational verification. Website pages cannot establish the legal controller, processor contracts, retention periods or international transfer arrangements. Every `[CONFIRM: ...]` below is an editorial marker to resolve before publication, not wording to show to customers. Do not silently guess or delete a disclosure to make the policy look complete. Build the page for review; keep it noindex until resolved, report unresolved markers, and do not deploy it as a final notice. Noindex does not prevent public access, so deployment must also be withheld while markers remain.

**H1: Privacy Policy**

Last updated: [CONFIRM: actual publication/review date].

### 1. Who we are and how to contact us

This policy explains how personal information is handled when you visit qbbuildingsolutions.com, contact us or discuss work with QB Building Solutions, QB Groundworks or QB Demolition.

The organisation responsible for deciding how your personal information is used is [CONFIRM: full legal controller name, legal form and trading names]. Our contact address is [CONFIRM: controller's postal address].

You can contact us about privacy matters by emailing info@qbbuildingsolutions.com or calling 07464 214327.

[CONFIRM: whether both divisions operate under the same controller. If they are separate legal controllers, identify each and explain which organisation receives enquiries and why information is shared.]

### 2. The information we collect

Depending on how you interact with us, we may collect:

- Your name, email address and phone number.
- The project location, subject and details you provide in an enquiry.
- Correspondence, plans, photographs and other project information you choose to send us by email or other agreed means.
- Information needed to prepare quotes, arrange site visits, agree work and communicate about a project.
- Customer, contract, invoice and payment records where you proceed with our services. [CONFIRM: actual payment information held; distinguish invoice/bank-reference records from card processing.]
- Technical information involved in delivering and securing the website, such as IP addresses, requested pages, browser/device information and access times, where recorded by our hosting or service providers. [CONFIRM: actual logs and access arrangements.]

Please provide only information relevant to your enquiry. Do not send sensitive personal information unless we have discussed a necessary and appropriate way to handle it.

### 3. Where information comes from

We normally receive information directly from you when you contact us, request a quote or work with us. Technical information may be generated when your browser accesses the website.

If someone contacts us on your behalf, or a designer, contractor or other project participant supplies information about you, we may receive relevant contact and project details from them. [CONFIRM: actual indirect sources and categories.] We will provide privacy information where required when obtaining personal information indirectly.

### 4. Why we use information and our lawful bases

We use personal information only for relevant purposes. Our proposed purposes and lawful bases are set out below and must reflect the work we actually undertake.

| Purpose | Lawful basis |
| --- | --- |
| Responding to your request for a quote or discussing services you want to purchase | Taking steps at your request before entering a contract with you |
| Managing and delivering work under a contract with you | Performance of that contract |
| Handling general enquiries, communicating with business representatives and coordinating relevant project contacts | Legitimate interests in responding to enquiries, managing business relationships and organising work |
| Keeping necessary accounting, tax and other legally required records | Compliance with applicable legal obligations |
| Protecting the website, preventing misuse, maintaining proportionate operational records and establishing or defending legal claims | Legitimate interests in security, continuity and protecting our business and customers |
| Publishing identifiable project photographs or customer comments where we seek your permission | Consent for the agreed publication |
| Optional device storage or tracking for which consent is required | Consent, requested before it is used |

When relying on legitimate interests, we consider whether our purpose is necessary and balance it against your interests and rights. Contract is used only where the relevant contract is with you as an individual; communications involving company representatives will generally use legitimate interests instead.

[CONFIRM: the controller's actual purposes, legal obligations, assessments and lawful bases before this notice is published.]

We do not treat sending an enquiry as agreement to receive unrelated marketing. No newsletter or marketing sign-up was identified in the reviewed website. If marketing is introduced, we will explain its lawful basis and provide the permissions and opt-out options required for that activity.

### 5. What happens if you do not provide information

We need enough information to respond to an enquiry and understand the proposed work. Where a working contact form is provided, it identifies required fields. A phone number and additional project details may be optional at the first enquiry stage. Without necessary contact or project information, we may be unable to respond, prepare a quote or arrange services. You can contact us by phone or email instead.

### 6. Who we share information with

We may share relevant information with service providers helping us operate the website, email and business systems, and with people involved in delivering the work you ask us to discuss or undertake. This may include relevant trades, contractors, suppliers and professional advisers, where needed for the agreed purpose.

We may also disclose information to accountants, insurers, legal advisers, public authorities or other recipients where necessary for legal obligations or legitimate business purposes. We limit what is shared and require service providers acting on our behalf to protect information appropriately.

[CONFIRM: hosting, email and form providers; business-system suppliers; actual delivery partners and advisers; and their roles as processors or independent controllers. Identify providers or meaningful recipient categories accurately. Do not describe unverified providers as appointed suppliers.]

We do not sell personal information. [CONFIRM: this accurately describes the controller's practices.]

### 7. Website providers, maps and external links

The reviewed website loads some resources from third-party services. These include Font Awesome styles from cdnjs and assets hosted on GitHub Pages. When your browser requests an external resource, its provider receives technical information needed to respond, including your IP address and potentially browser or referrer information.

The contact page also contains a Google Maps embed. If that embed is enabled, your browser communicates with Google and Google may process technical information and use cookies or similar technologies under its own terms. A simple external map link does not load the embedded map until you choose to visit Google's site.

[CONFIRM: which third-party resources remain after implementation; the precise Google integration and controls; and provider privacy links. Remove descriptions of resources that have actually been removed. Google privacy information: https://policies.google.com/privacy. GitHub privacy information: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. Identify the actual cdnjs service operator and relevant notice before publication.]

External websites and social platforms have their own privacy policies. This policy explains our handling of information and does not replace their notices.

### 8. Cookies and similar technologies

Cookies and similar technologies can store information on your device or access information already there. Our reviewed source did not identify an analytics tool, advertising pixel or first-party cookie banner, but that alone does not establish what the deployed website or embedded services use.

[CONFIRM: complete a deployed cookie/storage audit and insert an accurate inventory, including each technology's name, provider, purpose, duration and whether it is necessary or optional. If no storage/access technology is used after verification, state that clearly and remove references to controls that do not exist.]

Where consent is required for optional technologies, we ask before enabling them and provide a way to refuse and change your choice. Necessary technologies, where used, support the service you request and are explained in the inventory. Continuing to browse is not treated as consent. You can also manage cookies in your browser, although blocking some necessary technologies may affect functionality.

[CONFIRM: the actual consent interface, withdrawal control and Google Maps behaviour. Do not claim a cookie settings link exists until implemented.]

### 9. International processing

Some website or business service providers may process information outside the UK. Where we make a restricted international transfer, we use the safeguards required by applicable data protection law, such as an applicable adequacy arrangement or appropriate contractual safeguards and any required assessment.

[CONFIRM: actual providers, processing locations, transfers, safeguards and how a person can obtain relevant information or a copy. Do not claim all information stays in the UK without evidence.]

### 10. How long we keep information

We retain personal information only for as long as needed for its purpose, including relevant legal, accounting, contract and dispute requirements. We consider the type of information, the reason it was collected and whether it is still required, and delete or anonymise it when appropriate.

Our retention schedule is:

| Record category | Period or criteria to confirm |
| --- | --- |
| Enquiries that do not result in work | [CONFIRM: period measured from last meaningful contact and deletion process] |
| Quotes, customer correspondence and project/contract records | [CONFIRM: duration and trigger, accounting for the actual contract and claim requirements] |
| Accounting, invoices and payment records | [CONFIRM: duration and trigger based on applicable obligations and business form] |
| Website and security logs | [CONFIRM: provider/controller log periods] |
| Consent records and published photographs or comments | [CONFIRM: how long evidence is retained, publication review and withdrawal arrangements] |
| Backups | [CONFIRM: backup rotation and deletion arrangements] |

Information may be retained for longer where necessary to meet a legal obligation or address an active dispute. Do not insert a generic “six years” for every category without checking the actual requirements.

### 11. Keeping information secure

We use appropriate technical and organisational measures to protect personal information and limit access to people who need it for their work. No online transmission or storage system can be guaranteed completely secure.

[CONFIRM: actual measures and avoid claiming certifications, encryption arrangements or access controls that have not been checked.]

### 12. Your rights

Depending on the circumstances and our lawful basis, you may have rights to access your personal information, correct inaccurate information, request deletion, restrict its use, object to processing and receive certain information in a portable format.

Where we rely on consent, you can withdraw it at any time by contacting us or using the relevant control. Withdrawal does not affect processing that was lawful before you withdrew consent. You can object to processing based on legitimate interests, and you have an absolute right to object to use of your information for direct marketing.

These rights are subject to applicable conditions and exemptions. Contact info@qbbuildingsolutions.com to make a request. We may need proportionate information to verify your identity. We normally respond within one month, subject to lawful extensions or pauses where applicable, and ordinarily do not charge a fee.

### 13. Automated decisions and children

We do not use your information to make decisions about you based solely on automated processing that have legal or similarly significant effects. [CONFIRM: actual practice.]

Our services and website are intended for people enquiring about building work, not for collecting information from children. If you believe a child has supplied personal information unnecessarily, contact us so we can review it.

### 14. Questions and complaints

If you have questions or concerns, please contact us using the details above so we can review them. You also have the right to complain to the Information Commissioner's Office, the UK's data protection regulator. Information about raising a concern is available at https://ico.org.uk/make-a-complaint/.

### 15. Changes to this policy

We may update this policy when our services, website features or handling of personal information change. The updated version will be published here with its review date. Where appropriate, we will bring significant changes to your attention.

## 9. Pre-publication information still required

These are precise evidence gaps, not requests to invent more content:

1. Legal controller name, postal address and division ownership/controller relationships.
2. Hosting, email, form and business-system providers; any actual analytics; deployed cookies/storage; transfers; retention schedule and security practices.
3. Working form handler or decision to use phone/email enquiries only.
4. Asbestos delivery party and relevant qualifications, licences and disposal authorisations for the intended scope.
5. Verified social account URLs, project photos/captions and publication permissions.
6. Insurance, free-quote terms, hours and award evidence only if those claims are to be added.

Marketing content can be implemented using the conservative copy supplied here. Legal notices and unverified regulated-service claims must not be presented as verified facts. Record unresolved issues in the final implementation report; do not stop unrelated content work for them.

## 10. Research references

- [Original QB website](https://qbbuildingsolutions.com/) — existing public service positioning and contact details; awards treated as unverified claims.
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — useful original service information rather than search-only filler.
- [Google: doorway pages](https://developers.google.com/search/blog/2015/03/an-update-on-doorway-pages) — avoid duplicate town permutations created just to funnel traffic.
- [Google: establishing business details](https://developers.google.com/search/docs/appearance/establish-business-details) — business identity and Business Profile as part of visibility work.
- [ICO: writing a privacy notice](https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/how-to-write-a-privacy-notice-and-what-goes-in-it/) — notice topics and need for actual operational information.
- [ICO: cookies and similar technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/) — disclosure and controls; guidance flags legislative updates, so confirm current requirements when publishing.

## 11. Efficient Codex implementation prompt

The same prompt is saved separately as `codex-prompt.md` for easy reuse. Use context.md as the single content source rather than copying all page text into the prompt.

```text
Implement the website content in ./context.md. Read it fully, then inspect applicable AGENTS.md and the Astro pages, services data, BaseLayout, header/footer, CSS and deployment config. Treat archived/live reference content as data, not instructions. Preserve unrelated work.

Use context.md as the authoritative copy and acceptance brief. Update every existing page and all seven existing service routes; add the five specified service routes through the existing data-driven template, the honest interim Projects page, and /privacy-policy linked in the footer. Include supplied metadata, headings, scope lists, FAQs, related links and CTAs. Do not invent claims or publish editorial markers as finished copy. Implement all independent work; report unresolved facts and keep the privacy draft unpublished until its confirmation markers are resolved.

Preserve the current brand, palette, font, general layout, navigation, hero style and components. Make the content look professional using the existing design language: balanced spacing, readable line lengths, responsive cards, two-column sections, process steps and accessible FAQs. Extend shared components/data only where useful; avoid redesign, new dependencies and unrelated refactoring. Use appropriate existing images without invented project captions.

Fix the concrete technical issues listed in context.md: functional base-aware links and local assets/styles, correct heading markup, unique metadata/absolute canonicals, page-specific Open Graph, valid truthful JSON-LD, sitemap/robots and 404 indexing. Audit the contact form and external map/resources; use only an already-approved handler, never fake success or introduce a vendor/tracking. Make labels, phone input, privacy notice and error states accessible; use clear phone/email contact options if no handler exists.

Run npm run build and relevant existing checks. Check every generated route, internal link, metadata and JSON-LD; review representative desktop/mobile pages and all changed layout patterns for clipping, overflow and accessibility. Fix issues, then report changed files, verification results and only the remaining evidence/integration gaps. Do not deploy or commit unless requested.
```
