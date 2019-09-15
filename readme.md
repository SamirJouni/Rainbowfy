[![npm version](https://badge.fury.io/js/react-rainbowfy.svg)](https://badge.fury.io/js/react-rainbowfy)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](paypal.me/SamirJouni)

# RAINBOWFY

A React component that plays a rainbow animation for any text that you enter.

**How To Use:**

```
import Rainbowfy from 'react-rainbowfy';

	const MyApp = () => {
		<ContainerComponent>
			<div>Some usual stupid stuff,
			follow by a super awesome animation !</div>
			<Rainbowfy>Show me the power of NPM.</Rainbowfy>
		</ContainerComponent>
	}
```

**You may also use the following options:**

* fontWeight: The font-weight css property. Specify any font you like as long as it is valid css. (Value is a string)
* fontSize: The size of the font. Please specify unit: px, em, rem, vw, vh...(Value is a string)
* font: choose any font you like. Specify a font as such: 'sans-serif'. (value must be a string)

**All those options should be passed as props. If none are specified, you will get a default of:**

* 400 fontWeight
* 1rem fontSize
* sans-serif font

**How To Build From Source:**

*For Development:*
```
	npm run no-defaults
```

*For Production:*
```
	npm run build
```
_You may also just use the react component by copying Rainbowfy.jsx into your project and importing it from the directory you put it in._

**Get it on NPM:**

https://www.npmjs.com/package/react-rainbowfy
