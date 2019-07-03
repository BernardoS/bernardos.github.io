
const delay = (time: number) => new Promise<void>(resolve => {
  if (time <= 0) return resolve()
  setTimeout(() => resolve(), time)
})

export interface PMinDelayOptions {
  delayRejection?: boolean
}

const defaultOptions: PMinDelayOptions = {delayRejection: true}

const pMinDelay = async <V>(promise: Promise<V>, minimumDelay = 0, options = defaultOptions) => {
  if (minimumDelay <= 0) return promise
  const {delayRejection} = {...defaultOptions, ...options}
  let promiseHasError = false
	if (delayRejection) {
		promise = promise.catch(error => {
      promiseHasError = true
      return error
		})
	}
  const [value] = await Promise.all([promise, delay(minimumDelay)])
	return promiseHasError ? Promise.reject(value) : value
}

export default pMinDelay
