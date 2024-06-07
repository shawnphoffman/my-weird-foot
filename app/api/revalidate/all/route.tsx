import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const type = searchParams.get('type')
	const path = searchParams.get('path')

	console.log(`Revalidating "${type}" tag`)
	if (type) {
		revalidateTag(type)
	}

	if (path) {
		console.log(`Revalidating /${path}"`)
		revalidatePath(`/${path}`)
	}

	return Response.json({ success: true, path, type })
}
