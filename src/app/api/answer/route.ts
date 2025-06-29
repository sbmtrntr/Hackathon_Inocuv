// app/api/answer/route.ts
import { Client } from '@gradio/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { input } = await req.json()

  const client = await Client.connect(process.env.GRADIO_APP_URL!)

  const response = await client.predict('/chat', {
    message: {
      text: input,
      files: []
    }
  })

  return NextResponse.json({ output: response.data || '返答がありませんでした' })
}
