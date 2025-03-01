import { getToken } from './users-service'

export default async function sendRequest(url, method = 'GET', payload = null) {
	// Fetch accepts an options object as the 2nd argument
	// used to include a data payload, set headers, etc.
	const options = { method }
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' }
		options.body = JSON.stringify(payload)
	}
	const token = getToken()
	if (token) {
		// Ensure that headers object exists
		options.headers = options.headers || {}
		options.headers.Authorization = `Bearer ${token}`
	}
	const res = await fetch(url, options)
    console.log(res)
	// res.ok will be false if the status code set to 4xx in the controller action
	if (res.ok) 
        {
        return res.json()}
        
	else if (!res.ok) console.log(res.error)
	// throw new Error('Bad Request')
}