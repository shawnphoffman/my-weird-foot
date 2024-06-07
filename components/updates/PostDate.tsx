import { format, parseISO } from 'date-fns'

export default function PostDate({ dateString }: { dateString: string }) {
	if (!dateString) return null

	const date = parseISO(dateString)
	return (
		<time dateTime={dateString} className="text-xs text-hp2">
			{format(date, 'LLLL	d, yyyy')}
		</time>
	)
}
