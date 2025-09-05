import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument } from 'pdf-lib'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('pdf') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(bytes)
    
    // Get all pages
    const pageCount = pdfDoc.getPageCount()
    const splitPdfs: { name: string; data: string }[] = []

    // Split each page into separate PDFs
    for (let i = 0; i < pageCount; i++) {
      const newPdf = await PDFDocument.create()
      const [copiedPage] = await newPdf.copyPages(pdfDoc, [i])
      newPdf.addPage(copiedPage)
      
      const pdfBytes = await newPdf.save()
      const base64 = Buffer.from(pdfBytes).toString('base64')
      
      splitPdfs.push({
        name: `page_${i + 1}.pdf`,
        data: `data:application/pdf;base64,${base64}`
      })
    }

    return NextResponse.json({ 
      success: true, 
      pageCount,
      splitPdfs 
    })
  } catch (error) {
    console.error('Error splitting PDF:', error)
    return NextResponse.json({ 
      error: 'Failed to split PDF' 
    }, { status: 500 })
  }
}
