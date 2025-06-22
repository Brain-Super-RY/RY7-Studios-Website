import Link from 'next/link'
import Image from 'next/image' // Import next/image

interface CardProps {
  title: string
  description: string
  image?: string
  link: string
  variant?: 'default' | 'primary' | 'glass' | 'dark'
  className?: string
}

export function Card({
  title,
  description,
  image,
  link,
  variant = 'default',
  className = '',
}: CardProps) {
  const variants = {
    default: 'bg-white hover:shadow-lg',
    primary: 'bg-primary-50 hover:bg-primary-100',
    glass: 'bg-white/80 backdrop-blur-lg border border-gray-200',
    dark: 'bg-gray-800 text-white hover:bg-gray-700'
  }

  return (
    <Link 
      href={link}
      className={`block rounded-lg overflow-hidden transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {image && (
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full" // className might be slightly different depending on specific styling, ensure it works with Next/Image
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">View Details</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
