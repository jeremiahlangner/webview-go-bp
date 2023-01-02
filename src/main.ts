import { Application, Loader } from "pixi.js";
import { Config } from "./config";

export class Main {
  app: Application;
  // Probably don't need loader, so can export a version of PIXI without it.
  loader: Loader.shared;
  config: typeof Config;

  constructor() {
    this.init();
    this.load();
  }

  load() {
    console.log("loading");
    this.loader.add(this.config.images);
    this.loader.load();
  }

  init() {
    this.config = Config;
    this.app = new Application(this.config.pixi);
    this.loader = Loader.shared;

    // These may be default styles for the app; Can also be configured using CSS to avoid
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";

    // Add the app component (Canvas, etc) to the body. Adopted from standard WebGL tactics.
    document.body.appendChild(this.app.view);
  }
}

new Main();
