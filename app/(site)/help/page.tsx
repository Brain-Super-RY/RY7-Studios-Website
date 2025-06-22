import { Accordion, AccordionItem } from '@/components/Accordion'
import { LifeBuoy, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'Bagaimana cara upgrade ke Pro?',
    answer: 'Anda dapat meng-upgrade akun Anda ke Pro melalui halaman Pricing. Cukup pilih paket Pro dan ikuti langkah-langkah pembayaran yang tersedia. Prosesnya cepat dan mudah.'
  },
  {
    question: 'Apa bedanya buyer dan seller?',
    answer: 'Seorang "Buyer" adalah pengguna yang mencari dan membeli layanan digital. Seorang "Seller" adalah pengguna yang menawarkan dan menjual keahlian atau layanan digital mereka. Anda dapat memilih peran Anda setelah mendaftar.'
  },
  {
    question: 'Bagaimana cara menghubungi support?',
    answer: 'Anda dapat menghubungi tim support kami melalui formulir di halaman Kontak, atau jika Anda adalah pengguna Pro, Anda akan mendapatkan akses ke jalur support prioritas.'
  },
  {
    question: 'Apakah data saya aman?',
    answer: 'Tentu. Kami menggunakan enkripsi standar industri dan praktik terbaik untuk memastikan semua data Anda aman dan terjaga kerahasiaannya. Baca lebih lanjut di Privacy Policy kami.'
  }
]

const HelpPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">Help & Support</h1>
        <p className="text-lg sm:text-xl text-center text-gray-400 mt-4">
          Find answers to frequently asked questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* FAQ Accordion */}
        <div className="lg:col-span-2">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support Card */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <LifeBuoy className="w-16 h-16 text-primary mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Can't Find an Answer?</h2>
            <p className="text-gray-400 mb-6">Our support team is always ready to help. Reach out to us for any specific questions.</p>
            <Link href="/contact" className="mt-auto inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage; 