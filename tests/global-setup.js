const {
  CIRCLECI: isCircle,
} = process.env
const stage = isCircle ? 'ci' : 'local'

module.exports = () => {
  try {
    process.env.Partition = `servedup-${stage}-hyperwallet`
    process.env.stage = stage
    // process.env.region = 'eu-west-2'
    // process.env.apiKey = await get('app-apikey-dev')
  } catch (err) {
    console.error(err)
  }
}
