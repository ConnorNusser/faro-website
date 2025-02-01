// app/api/auth/signout/route.ts
import supabaseClient from '@/app/db/client'
import { NextResponse } from 'next/server'

export async function POST() {
  const { error } = await supabaseClient.auth.signOut()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ message: 'Signed out successfully' })
}