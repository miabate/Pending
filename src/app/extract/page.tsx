import PDFTextExtractor from '@/components/PDFTextExtractor'

export default function ExtractPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Extract Text from PDFs
        </h1>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <PDFTextExtractor />
        </div>
      </div>
    </main>
  )
}
