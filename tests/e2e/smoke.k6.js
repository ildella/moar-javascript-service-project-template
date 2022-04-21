/* eslint-disable node/no-missing-require */
const http = require('k6/http')
const {sleep, check} = require('k6')

// eslint-disable-next-line no-undef
const {CI: isCi} = __ENV

module.exports.options = {
  vus: 10,
  duration: '2s',
}

const appName = 'something'
const port = 5010
const baseUrl = isCi ? `cluster.${appName}.aws.com` : `http://localhost:${port}/`

module.exports.default = () => {
  const response = http.get(baseUrl)
  check(response, {
    'is status 200': r => r.status === 200,
    [`GET ${baseUrl} -> 200`]: r => r.status === 200,
  })
  sleep(1)
}
