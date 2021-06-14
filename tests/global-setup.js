const {
  CIRCLECI: isCircle,
} = process.env
const stage = isCircle ? 'ci' : 'local'

module.exports = () => {
  try {
    process.env.Partition = `domain-${stage}-app`
    process.env.stage = stage
    // process.env.region = 'eu-west-2'
    // process.env.apiKey = await get('domain-app-apikey-dev')
  } catch (err) {
    console.error(err)
  }
}
