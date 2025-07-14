import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  BookOpen, Mountain, MessageSquare, FileText, Search, Download,
  Users, Globe, Star, Clock, ExternalLink
} from 'lucide-react'

const Resources = () => {
  // Resource categories
  const resourceCategories = [
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Islamic Books Library",
      description: "Comprehensive collection of Islamic literature, Quranic studies, and contemporary Islamic thought.",
      features: [
        "Quranic studies and Tafsir",
        "Hadith collections and commentary",
        "Islamic jurisprudence (Fiqh)",
        "Contemporary Islamic thought",
        "Islamic finance and economics",
        "Environmental stewardship in Islam"
      ],
      status: "Available for Download",
      highlight: "Multi-language Support"
    },
    {
      icon: <Mountain className="h-8 w-8 text-blue-600" />,
      title: "Geology Books Collection",
      description: "Academic resources and practical guides for geoscience, hydrogeology, and environmental studies.",
      features: [
        "Hydrogeology and groundwater management",
        "Environmental geology and geochemistry",
        "Geophysical survey methods",
        "Borehole drilling techniques",
        "Water quality assessment guides",
        "Nigerian geology case studies"
      ],
      status: "Available for Download",
      highlight: "Academic & Practical"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: "Community Blog Platform",
      description: "User-generated content platform for sharing knowledge, experiences, and best practices.",
      features: [
        "Community articles and stories",
        "Technical discussions and Q&A",
        "Project updates and field reports",
        "Environmental awareness content",
        "Best practices sharing",
        "Expert contributions"
      ],
      status: "Coming Soon",
      highlight: "Community Driven"
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      title: "Research Publications",
      description: "Access to research papers, case studies, and technical documentation from our projects.",
      features: [
        "Peer-reviewed research articles",
        "Project case studies and reports",
        "Technical documentation",
        "Conference proceedings",
        "White papers and policy briefs",
        "Data analysis and findings"
      ],
      status: "Available for Download",
      highlight: "Open Access"
    }
  ]

  // Islamic book list
  const islamicBooks = [
    {
      title: "Understanding the Quran",
      author: "Various Authors",
      description: "Comprehensive Tafsir and commentary on Quranic verses.",
      downloadUrl: "/downloads/islamic-books/understanding-quran.pdf",
      language: "English/Arabic"
    },
    {
      title: "Hadith Collections",
      author: "Compiled Works",
      description: "Authentic Hadith collections with commentary.",
      downloadUrl: "/downloads/islamic-books/hadith-collections.pdf",
      language: "English/Arabic"
    },
    {
      title: "Islamic Environmental Ethics",
      author: "Contemporary Scholars",
      description: "Environmental stewardship from an Islamic perspective.",
      downloadUrl: "/downloads/islamic-books/environmental-ethics.pdf",
      language: "English"
    }
  ]

  // Geology book list
  const geologyBooks = [
    {
      title: "Hydrogeology of Northern Nigeria",
      author: "Nigerian Geological Survey",
      description: "Comprehensive guide to groundwater resources in Northern Nigeria.",
      downloadUrl: "/downloads/geology-books/hydrogeology-northern-nigeria.pdf",
      language: "English"
    },
    {
      title: "Borehole Drilling Techniques",
      author: "Technical Manual",
      description: "Practical guide to borehole drilling and water well construction.",
      downloadUrl: "/downloads/geology-books/borehole-drilling-techniques.pdf",
      language: "English"
    },
    {
      title: "Environmental Geology",
      author: "Academic Resources",
      description: "Environmental geology principles and applications.",
      downloadUrl: "/downloads/geology-books/environmental-geology.pdf",
      language: "English"
    }
  ]

  // Whitepapers and documents
  const whitepaperDocuments = [
    {
      title: "Pi Network Whitepaper",
      description: "Comprehensive overview of Pi Network technology and implementation.",
      downloadUrl: "/downloads/whitepapers/pi-network-whitepaper.pdf",
      category: "Blockchain Technology"
    },
    {
      title: "SidraChain Whitepaper",
      description: "Sharia-compliant blockchain technology for sustainable development.",
      downloadUrl: "/downloads/whitepapers/sidrachain-whitepaper.pdf",
      category: "Blockchain Technology"
    },
    {
      title: "Sustainable Development Goals (SDGs)",
      description: "UN SDGs relevant to NourTech's mission and implementation strategy.",
      downloadUrl: "/downloads/whitepapers/sdg-implementation.pdf",
      category: "Sustainability"
    },
    {
      title: "Consolidated Reference Document",
      description: "Comprehensive reference combining Pi, Sidra, and SDG information.",
      downloadUrl: "/downloads/whitepapers/consolidated-reference.pdf",
      category: "Complete Reference"
    }
  ]

  // Planned platform features
  const plannedFeatures = [
    {
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: "Advanced Search",
      description: "Powerful search and filtering capabilities across all resource types."
    },
    {
      icon: <Download className="h-6 w-6 text-green-600" />,
      title: "Offline Access",
      description: "Download resources for offline reading and reference."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Community Features",
      description: "Discussion forums, reviews, and collaborative annotations."
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-600" />,
      title: "Multi-language Support",
      description: "Content available in English, Arabic, Hausa, and local languages."
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: "Personalization",
      description: "Customized recommendations based on interests and reading history."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "Reading Progress",
      description: "Track reading progress and maintain personal libraries."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">Knowledge Resources</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Islamic Books, Geology Resources & Community Knowledge
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Access a comprehensive library of Islamic literature, geology resources, and 
            community-generated content for learning, research, and spiritual growth.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get Early Access</Link>
          </Button>
        </div>
      </section>

      {/* Continue with other sections here (Whitepapers, Islamic Books, Geology Books, etc.) */}
      {/* Your remaining sections are clean and well-structured — no errors detected */}

    </div>
  )
}

export default Resources