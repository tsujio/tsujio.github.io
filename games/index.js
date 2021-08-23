(() => {
  const games = [
    {
      title: "Birdman Challenge",
      link: "https://www.tsujio.org/games/game.html?title=birdman",
      image: "https://github.com/tsujio/game-birdman/blob/main/image.gif?raw=true",
      description: "鳥人間コンテストを題材にしたゲームです。",
    },
    {
      title: "Maxwell's Demon",
      link: "https://www.tsujio.org/games/game.html?title=maxwells-demon",
      image: "https://github.com/tsujio/game-maxwells-demon/blob/main/image.gif?raw=true",
      description: "マクスウェルの悪魔を題材にしたゲームです。",
    },
    {
      title: "Spotted Garden Eel",
      link: "https://www.tsujio.org/games/game.html?title=spotted-garden-eel",
      image: "https://github.com/tsujio/spotted-garden-eel/blob/main/image.gif?raw=true",
      description: "チンアナゴを題材にしたゲームです。",
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
