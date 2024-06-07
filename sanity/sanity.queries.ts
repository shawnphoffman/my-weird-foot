import { groq } from 'next-sanity'

const podId = '6c03379a-0584-4e22-9fd2-12525f75e6af'

// =======================
// POST QUERIES
// =======================
const postFields = groq`
  _id,
  _updatedAt,
  title,
  date,
	publishedAt,
  excerpt,
  mainImage,
  "slug": slug.current,
  "author": author->{name, image},
	"categories": categories[]->title,
`

export const postsListQuery =
	process.env.VERCEL_ENV === 'production'
		? groq`
*[_type == "post" && "${podId}" in categories[]._ref] | order(publishedAt desc) {
  ${postFields}
}`
		: groq`
*[_type == "post"] | order(publishedAt desc) {
  ${postFields}
}`

export const postSlugsQuery = groq`
*[_type == "post" && "${podId}" in categories[]._ref][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
	body,
  ${postFields}
}
`

// =======================
// AWARD QUERIES
// =======================
export const AWARDS_QUERY =
	process.env.VERCEL_ENV === 'production'
		? groq`*[_type == "award" && category._ref == "${podId}" && active==true]`
		: groq`*[_type == "award" && category._ref == "${podId}"]`
