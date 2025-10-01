export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
	const userAgent = navigator.userAgent.toLowerCase()
	if (/tablet|ipad|playbook|silk/.test(userAgent)) return 'tablet'
	if (/mobi|android|iphone|ipod/.test(userAgent) && !/tablet|ipad/.test(userAgent)) return 'mobile'
	return 'desktop'
}
