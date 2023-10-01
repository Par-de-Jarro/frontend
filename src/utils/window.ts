let isDesktop = window.innerWidth > 768 // Define a largura de quebra entre desktop e mobile

window.addEventListener('resize', () => {
  isDesktop = window.innerWidth > 768
})

export { isDesktop }
