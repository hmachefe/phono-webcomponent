# &lt;a-counter&gt;

TODO: This project aims to provide a box on-the-shelf, dedicated to place phone calls, by using SIP, mayering on WebRTC technologies

> Maintained by [Hugo Machefer](https://github.com/hmachefe).

## Demo

> [Check it live](http://hugo.machefer.free.fr//phono-webcomponent/).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="../lib/polymer.js"></script>
	<script src="../lib/Platform.js"></script>	
	```

2. Import Custom Element:

	```html
	<link rel="import" href="src/x-phono.html">
	```

3. Start using it!

	```html
	<x-phono></x-phono>
	```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`sipnumber`    | *int*                     | `0`                 | SIP value to communicate to Phono library (Jquery plugin)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.1 Jan 1, 2014
	* Started project using [polymer](https://github.com/polymer/polymer)

## License

[MIT License](http://opensource.org/licenses/MIT)