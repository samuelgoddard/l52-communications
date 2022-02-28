export const GA_TRACKING_ID = "G-3ZWRM7NYQ7"

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}