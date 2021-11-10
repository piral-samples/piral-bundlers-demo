[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> Showcasing a variation of different bundlers with import maps

:zap: This sample demonstrates the use of an import map in the *package.json* to allow implicit dependency sharing between the pilets. This works across different bundlers. In the given codebase `esbuild`, `parcel` (v1), `webpack` (v4), and `webpack` (v5) are used.

## Getting Started

Each directory represents a standalone part, which may even be its own repository. In each directory run:

```sh
npm install
```

More explicitly:

```sh
cd sample-shell
npm install
cd ..

cd pilet-esbuild
npm install
cd ..

cd pilet-parcel
npm install
cd ..

# etc. (same for pilet-webpack4 and pilet-webpack5)
```

If you use Linux or MacOS you can also run the convenience script from the root (i.e., *this*) directory:

```sh
./setup.sh
```

You can now run

```sh
npm start
```

in any of these directories. The shell will use the pilets from a feed, while each pilet would run standalone in the empty shell.

## More Information

The sharing is also explained on the [Piral documentation](https://docs.piral.io/guidelines/tutorials/15-share-dependencies#sharing-from-pilets). Note that import maps may also work with a standalone file such as *importmap.json*.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
