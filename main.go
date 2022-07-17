package main

import (
  "jeremiahlangner.me/game/server"
  "jeremiahlangner.me/game/webview"
)

func main() {
  w := webview.New(false)
  defer w.Destroy()
  w.SetTitle("Pixi.js Game")
  w.SetSize(640, 480, webview.HintNone)
  w.Navigate("http://localhost:8080/")
  w.FullScreen()

  go server.Serve()
  w.Run()
}
