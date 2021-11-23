const dev = {
  SERVICE_URL: 'https://wholesale-test.hd123.com/',
  TENANT: 'ldjtest',
  APP_ID: 'wholesaleweb',
  SHOP: '8888888'
}
const uat = {
  SERVICE_URL: 'https://wholesale-uat.hd123.com/',
  TENANT: 'ldjuat',
  APP_ID: 'wholesaleweb',
  SHOP: '8888888'
}

const production = {
  SERVICE_URL: '',
  TENANT: '',
  APP_ID: '',
  SHOP: ''
}

let config = dev

if (process.env.NODE_ENV === 'uat') {
  config = uat
}

if (process.env.NODE_ENV === 'production') {
  config = production
}

export default config
