import * as React from "react";
import { PiletApi } from "sample-shell";
import { Link } from "react-router-dom";
import "./style.css";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.showNotification("Hello from esbuild (Pilet v2)!!", {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/foo-esb">esbuild</Link>);
  app.registerPage("/foo-esb", Page);
  app.registerTile(
    () => <div className="foo-esb">Welcome to Pilet v2 esbuild!</div>,
    {
      initialColumns: 2,
      initialRows: 2,
    }
  );
}
