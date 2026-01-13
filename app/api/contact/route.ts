import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL

    if (!GOOGLE_SHEET_URL) {
      return NextResponse.json({ error: "Google Sheet URL not configured" }, { status: 500 })
    }

    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending to Google Sheets:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
