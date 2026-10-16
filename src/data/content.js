// ============================================================
// Daana Paani Foundation — site content
//
// NOTE ON NUMBERS & QUOTES
// Values marked "PLACEHOLDER" are illustrative stand-ins that need
// verifying with the foundation before launch. Real facts (contact
// details, services, values, mission) have been preserved.
// ============================================================

export const site = {
  name: 'Daana Paani Foundation',
  shortName: 'Daana Paani',
  tagline: 'Grain & water for every table',
  description:
    'Daana Paani Foundation fights hunger and restores dignity — one shared meal, one child, one community at a time.',
  email: 'hello@danapaani.org',
  phone: '+91 93993 45989',
  phoneHref: 'tel:+919399345989',
  address: {
    line1: 'Khandwekar Villa, near Lendra Park',
    line2: 'Ramdaspeth, Nagpur, Maharashtra',
    country: 'India',
  },
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM IST' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM IST' },
    { day: 'Sunday', time: 'Closed' },
  ],
  founded: 2020,
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export const heroSlides = [
  {
    src: '/assets/hero-Duk6ddeL.jpg',
    alt: 'Volunteers serving a community meal',
    caption: 'Community kitchen, Nagpur',
  },
  {
    src: '/assets/IndependenceDay-CeorYN88.jpg',
    alt: 'Ration kits being handed out on Independence Day',
    caption: 'Independence Day food drive',
  },
  {
    src: '/assets/IndependenceDay2.jpg-BfiyppNh.jpg',
    alt: 'Volunteers distributing packed meals',
    caption: 'Ration kits for 400 families',
  },
  {
    src: '/assets/IndependenceDay3.jpg-DcO9m1RH.jpg',
    alt: 'Smiling children receiving food packets',
    caption: 'Meals shared with dignity',
  },
  {
    src: '/assets/IndependenceDay4-6yiXfLLF.jpg',
    alt: 'A line of volunteers at a distribution drive',
    caption: 'Neighbours helping neighbours',
  },
]

// PLACEHOLDER figures — verify against the foundation's records.
export const impactStats = [
  {
    to: 25000,
    suffix: '+',
    label: 'Meals served',
    detail: 'Cooked meals and ration kits shared since 2020.',
  },
  { to: 1200, suffix: '+', label: 'Active donors', detail: 'Supporters who give time or money.' },
  { to: 50, suffix: '', label: 'Projects completed', detail: 'Community drives delivered end to end.' },
  { to: 12, suffix: '', label: 'Cities reached', detail: 'Across Maharashtra and beyond.' },
]

export const fundUses = [
  {
    icon: 'bowl',
    title: 'Give Happiness',
    text: 'Giving happiness to those who need it also makes our own hearts happy, every single day.',
  },
  {
    icon: 'hand-heart',
    title: 'Share Love',
    text: 'When you share love with those around you, you share a better world.',
  },
  {
    icon: 'users',
    title: 'Build Society',
    text: 'Building a solid, respectful and compassionate caring society for all of us.',
  },
]

// PLACEHOLDER amounts — confirm the real cost-per-impact with the team.
export const journeySteps = [
  {
    amount: '₹100',
    title: 'One warm meal',
    text: 'A freshly cooked, nutritious plate for someone who would otherwise go without.',
  },
  {
    amount: '₹500',
    title: 'A family eats tonight',
    text: 'Groceries and cooked meals for a household of four, with ration to spare.',
  },
  {
    amount: '₹1,500',
    title: 'A school kit',
    text: 'Books, stationery, a uniform and a week of midday meals for one child.',
  },
  {
    amount: '₹5,000',
    title: 'A community kitchen day',
    text: 'Ingredients, fuel and volunteers to feed an entire neighbourhood for a day.',
  },
]

export const programs = [
  {
    id: 'hunger',
    title: 'Hunger Relief & Meals',
    icon: 'bowl',
    text: 'Community kitchens, ration kits and daily meal drives that make sure no one in our neighbourhood sleeps hungry.',
    outcomes: ['Cooked meal drives', 'Monthly ration kits', 'Festival food distribution'],
    stat: { to: 25000, suffix: '+', label: 'meals served' },
    image: '/assets/IndependenceDay2.jpg-BfiyppNh.jpg',
    imageAlt: 'Volunteers packing meals for a distribution drive',
  },
  {
    id: 'education',
    title: 'Education for All',
    icon: 'book',
    text: 'Community schools, learning kits and scholarships that keep underprivileged children in the classroom and dreaming bigger.',
    outcomes: ['School kits & uniforms', 'Scholarships', 'After-school tutoring'],
    stat: { to: 800, suffix: '+', label: 'children supported' },
    image:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Children reading together at a learning camp',
  },
  {
    id: 'health',
    title: 'Healthcare Outreach',
    icon: 'heart-pulse',
    text: 'Medical camps, health awareness drives and free consultations for families in rural and underserved areas.',
    outcomes: ['Free health camps', 'Immunisation drives', 'Blood donation camps'],
    stat: { to: 40, suffix: '+', label: 'health camps held' },
    image:
      'https://thecsrjournal.in/wp-content/uploads/2024/04/SNEHA-NGO-organizes-immunisation-camps-in-Mumbai-slums-to-raise-awareness.jpg',
    imageAlt: 'A community health and immunisation camp',
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    icon: 'users',
    text: 'Training programs and self-help groups that give women skills, income and financial independence.',
    outcomes: ['Vocational training', 'Self-help groups', 'Micro-enterprise support'],
    stat: { to: 300, suffix: '+', label: 'women trained' },
    image: 'https://3.imimg.com/data3/FF/PB/MY-5047481/capture-500x500.jpg',
    imageAlt: 'Women at a skills training session',
  },
  {
    id: 'environment',
    title: 'Environment & Sustainability',
    icon: 'leaf',
    text: 'Tree plantation, clean energy and plastic-free campaigns that protect the places our communities call home.',
    outcomes: ['Tree plantation', 'Clean-up drives', 'Plastic-free campaigns'],
    stat: { to: 5000, suffix: '+', label: 'saplings planted' },
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Volunteers planting saplings together',
  },
  {
    id: 'children',
    title: 'Child Welfare',
    icon: 'child',
    text: 'Shelter, nutrition and education for orphans and abandoned children, so every child has somewhere to grow.',
    outcomes: ['Nutrition support', 'Shelter assistance', 'Mentorship & care'],
    stat: { to: 150, suffix: '+', label: 'children cared for' },
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Children at a community care centre',
  },
]

export const coreValues = [
  { title: 'Compassion', text: 'Every effort we make begins with empathy and love for others.' },
  { title: 'Transparency', text: 'Your contributions are visible, trackable, and impactful.' },
  { title: 'Community', text: 'We thrive by bringing people together with a shared purpose.' },
  { title: 'Impact', text: 'We focus on results that truly change lives.' },
  { title: 'Global Reach', text: 'Connecting hearts across borders and cultures.' },
  {
    title: 'Excellence',
    text: 'We are committed to the highest standards in everything we do.',
  },
]

// PLACEHOLDER timeline — confirm dates and milestones with the team.
export const timeline = [
  {
    year: '2020',
    title: 'A single kitchen',
    text: 'Daana Paani begins as a handful of volunteers cooking and sharing meals in Nagpur.',
  },
  {
    year: '2021',
    title: 'Beyond one neighbourhood',
    text: 'Ration kits and school supplies reach families across the city during a hard year.',
  },
  {
    year: '2023',
    title: 'Programs take shape',
    text: 'Education, health and women\u2019s empowerment join hunger relief as full programs.',
  },
  {
    year: '2025',
    title: 'A growing movement',
    text: 'Over a thousand donors and volunteers now power work in a dozen cities.',
  },
]

export const galleryItems = [
  {
    id: 1,
    title: 'Slum Food Distribution Drive',
    description: 'Hot meals served to over 300 people in a single afternoon.',
    category: 'Hunger Relief',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Health Support for the Underprivileged',
    description: 'Free consultations and immunisation at a community health camp.',
    category: 'Healthcare',
    image:
      'https://thecsrjournal.in/wp-content/uploads/2024/04/SNEHA-NGO-organizes-immunisation-camps-in-Mumbai-slums-to-raise-awareness.jpg',
  },
  {
    id: 3,
    title: 'Empowering Women Through Ration Kits',
    description: 'Ration kits delivered with dignity to women-led households.',
    category: 'Women',
    image: 'https://3.imimg.com/data3/FF/PB/MY-5047481/capture-500x500.jpg',
  },
  {
    id: 4,
    title: 'Winter Blanket Distribution',
    description: 'Warm blankets for families through the coldest nights of the year.',
    category: 'Hunger Relief',
    image:
      'https://static.wixstatic.com/media/d5fc3f_e2ef1f5c27bf4572ab409e4e5a45845b.jpg/v1/fill/w_930,h_419,al_c,q_85,enc_avif,quality_auto/d5fc3f_e2ef1f5c27bf4572ab409e4e5a45845b.jpg',
  },
  {
    id: 5,
    title: 'School Kit Distribution',
    description: 'Books, bags and uniforms handed to children starting a new term.',
    category: 'Education',
    image:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Blood Donation Camp',
    description: 'Volunteers and donors coming together to save lives.',
    category: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Community Hygiene Awareness',
    description: 'Clean habits for healthy lives, taught door to door.',
    category: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Food Distribution on Independence Day',
    description: 'Celebrating freedom by sharing it — meal kits for the whole street.',
    category: 'Hunger Relief',
    image: '/assets/IndependenceDay-CeorYN88.jpg',
  },
  {
    id: 9,
    title: 'Ration Kits Across Nagpur',
    description: 'Hundreds of households supplied for the month ahead.',
    category: 'Hunger Relief',
    image: '/assets/IndependenceDay2.jpg-BfiyppNh.jpg',
  },
  {
    id: 10,
    title: 'Meals Shared With Dignity',
    description: 'Every plate handed over with a smile and a welcome.',
    category: 'Hunger Relief',
    image: '/assets/IndependenceDay3.jpg-DcO9m1RH.jpg',
  },
  {
    id: 11,
    title: 'Neighbours Helping Neighbours',
    description: 'Volunteers who show up, week after week.',
    category: 'Community',
    image: '/assets/IndependenceDay4-6yiXfLLF.jpg',
  },
  {
    id: 12,
    title: 'Our Team in the Field',
    description: 'The people behind every drive and every meal.',
    category: 'Community',
    image: '/assets/Team-BDOzWGe7.jpg',
  },
]

// PLACEHOLDER quotes — replace with real, consented beneficiary stories.
export const stories = [
  {
    quote:
      'The ration kit meant my children did not miss a single meal that month. I could breathe again.',
    name: 'Sunita W.',
    role: 'Mother of three',
    place: 'Ramdaspeth, Nagpur',
    image: '/assets/IndependenceDay3.jpg-DcO9m1RH.jpg',
  },
  {
    quote:
      'They gave me books and a uniform. Nobody at school could tell I had nothing before.',
    name: 'Rahul K.',
    role: 'School student, 12',
    place: 'Nagpur',
    image:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&auto=format&fit=crop',
  },
  {
    quote:
      'After the tailoring training I earned my first income. My family treats me differently now.',
    name: 'Meena P.',
    role: 'Tailor & group leader',
    place: 'Nagpur',
    image: 'https://3.imimg.com/data3/FF/PB/MY-5047481/capture-500x500.jpg',
  },
]

export const waysToGive = [
  {
    icon: 'calendar',
    title: 'Give monthly',
    text: 'A steady gift keeps our kitchens cooking all year — the most powerful way to help.',
    cta: 'Start giving',
    to: '/get-involved',
  },
  {
    icon: 'sparkle',
    title: 'Fundraise for us',
    text: 'Birthdays, marathons, weddings — turn any moment into meals for a community.',
    cta: 'Start a fundraiser',
    to: '/contact',
  },
  {
    icon: 'hand-heart',
    title: 'Volunteer',
    text: 'Cook, drive, teach or pack. Give your time and work shoulder to shoulder with us.',
    cta: 'Join the team',
    to: '/contact',
  },
  {
    icon: 'shield',
    title: 'Partner with us',
    text: 'Businesses and institutions can fund a program or sponsor a full meal drive.',
    cta: 'Become a partner',
    to: '/contact',
  },
]

// Answers kept general. Verify any tax-exemption claim before publishing.
export const faqs = [
  {
    q: 'Where does my donation actually go?',
    a: 'Your gift funds meals, ration kits, school supplies and health camps directly. We share regular updates on every drive so you can see the impact of what you gave.',
  },
  {
    q: 'Can I choose what my money supports?',
    a: 'Yes. You can direct your gift towards hunger relief, education, healthcare, women\u2019s empowerment or wherever the need is greatest that month.',
  },
  {
    q: 'How do I volunteer or start a fundraiser?',
    a: 'Reach out through the contact page and tell us how you would like to help. We will match you with a drive, a role or a fundraising toolkit within a few days.',
  },
  {
    q: 'Will I receive a receipt for my gift?',
    a: 'Every donation is acknowledged with a receipt. For specific documentation needs, write to us and our team will help.',
  },
  {
    q: 'Where does Daana Paani work?',
    a: 'We started in Nagpur, Maharashtra, and now run drives across twelve cities — partnering with local volunteers wherever the need is greatest.',
  },
]

export const givingAmounts = [500, 1000, 2500, 5000]

// PLACEHOLDER equivalences — align with the real cost-per-impact figures.
export const giftEquivalences = {
  500: 'about 5 warm meals',
  1000: 'a family\u2019s groceries for a week',
  2500: 'a full school kit for one child',
  5000: 'a community kitchen day',
}
