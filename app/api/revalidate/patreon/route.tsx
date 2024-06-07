'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	console.log('Revalidating "patreon" tag')
	revalidateTag('patreon')

	const searchParams = request.nextUrl.searchParams
	const force = searchParams.get('force')
	if (!!force) {
		console.log('Revalidating /patreon-preview forcefully')
		revalidatePath('/patreon-preview')
	}

	return Response.json({ success: true, force: !!force })
}
