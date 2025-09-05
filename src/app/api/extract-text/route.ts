import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('=== EXTRACT TEXT API CALLED ===')
  
  try {
    const formData = await request.formData()
    const file = formData.get('pdf') as File
    
    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' })
    }

    console.log(`Processing file: ${file.name} (${file.size} bytes)`)
    
    // For now, let's return a simple test response to verify the API works
    const extractedTexts = [{
      pageNumber: 1,
      text: `Test extraction from ${file.name}. File size: ${file.size} bytes. API is working correctly. Next step: implement actual text extraction.`
    }]

    return NextResponse.json({
      success: true,
      extractedTexts
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({
      success: false,
      error: `API error: ${error instanceof Error ? error.message : 'Unknown error'}`
    })
  }
}
