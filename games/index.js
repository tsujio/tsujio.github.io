(() => {
  const games = [
    {
      title: "Birdman Challenge",
      link: "https://www.tsujio.org/game-birdman",
      image: "https://github.com/tsujio/game-birdman/blob/main/image.png?raw=true",
      description: "鳥人間コンテストを題材にしたゲームです。",
    },
    {
      title: "Maxwell's Demon",
      link: "https://www.tsujio.org/game-maxwells-demon",
      image: "https://github.com/tsujio/game-maxwells-demon/blob/main/image.png?raw=true",
      description: "マクスウェルの悪魔を題材にしたゲームです。",
    },
  ]

  window.onload = () => {
    const tmpl = document.querySelector("#game-container-template").content
    const gamesContainer = document.querySelector("#games-container")

    for (const game of games) {
      const container = document.importNode(tmpl, true)
      container.querySelector(".game-title").textContent = game.title
      container.querySelector(".game-link").href = game.link
      container.querySelector(".game-image").src = game.image
      container.querySelector(".game-description").textContent = game.description

      gamesContainer.appendChild(container)
    }
  }
})()
