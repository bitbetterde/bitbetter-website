// A caption that consists solely of a URL is rendered as a "Quelle: …" link
const isUrl = (value: string) => {
  try {
    const { protocol } = new URL(value.trim())
    return protocol === 'http:' || protocol === 'https:'
  } catch {
    return false
  }
}

const stripProtocol = (value: string) => value.trim().replace(/^https?:\/\//, '')

export { isUrl, stripProtocol }
