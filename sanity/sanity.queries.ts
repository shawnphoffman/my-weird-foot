import {
	buildAwardsQuery,
	buildBannerQuery,
	buildPostSlugsQuery,
	buildPostsListQuery,
	postBySlugQuery,
} from '@shawnphoffman/pod-sites-shared/sanity'

const podId = '33a22e16-f2c4-437d-b5db-47ad708d6442'

export const postsListQuery = buildPostsListQuery(podId)
export const postSlugsQuery = buildPostSlugsQuery(podId)
export { postBySlugQuery }
export const BANNER_QUERY = buildBannerQuery(podId)
export const AWARDS_QUERY = buildAwardsQuery(podId)
