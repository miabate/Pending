import PDFUpload from '@/components/PDFUpload'

export default function SplitPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Split to New Pages
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
          Upload a PDF file and split it into individual pages
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <PDFUpload />
        </div>
      </div>
    </main>
  )
}
