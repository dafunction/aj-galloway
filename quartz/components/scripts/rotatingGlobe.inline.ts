function initRotatingGlobe() {
  const globeElement = document.getElementById("rotating-globe")
  if (globeElement) {
    const emojis = JSON.parse(globeElement.dataset.globeEmoji || "[]")
    let index = 0
    setInterval(() => {
      globeElement.textContent = emojis[index]
      index = (index + 1) % emojis.length
    }, 500)
  }
}

document.addEventListener("nav", initRotatingGlobe)
initRotatingGlobe()
