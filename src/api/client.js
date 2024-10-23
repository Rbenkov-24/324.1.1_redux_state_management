// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

//had l-fonksyon katbda m3a asynk li katkhli l-kod ychouf chi 7aja f l-wakt li kayn (await)
export async function client(endpoint, { body, ...customConfig } = {}) {
  //hna kan7to l-header li ghadi ykoun f l-request
  const headers = { 'Content-Type': 'application/json' }

  //hna katbni l-config li kat7taj l-request (GET wla POST)
  const config = {
    method: body ? 'POST' : 'GET', //ila kan body, ghadi ndir POST, khlasa GET
    ...customConfig, // khassna na3rfu chi options extra
    headers: {
      ...headers, // zido l-headers
      ...customConfig.headers,
    },
  }

  // Ila kan body, khasna ndir JSON.stringify bash n7afdo 3lih
  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    // Hna kat9ra l-response mni l-fetch
    const response = await window.fetch(endpoint, config)
    data = await response.json() // kan7mel JSON li jabna
    if (response.ok) {
      // ila kan l-response ok, radna l-object
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      }
    }
    // ila ma kanch ok, khassna nthrowi error
    throw new Error(response.statusText)
  } catch (err) {
    // ila kan chi error, radna message
    return Promise.reject(err.message ? err.message : data)
  }
}

// Hna khassna l-get method
client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' }) // kat3ti l-endpoint w l-config
}

// Hna khassna l-post method
client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body }) // kat3ti l-endpoint, body w l-config
}