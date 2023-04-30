# 👋 React Modern Icons
**React Modern Icons** is a lightweight and easy-to-use package that provides a comprehensive collection of modern icons for your React application. The package includes a wide range of icons that are designed with the latest design trends in mind, ensuring that your application looks sleek and up-to-date.
### Installation

    yarn add react-modern-icons

or

    npm i react-modern-icons



### Usage

```jsx
import { NotificationUnread } from 'react-modern-icons'

function MyComponent() {
  return <NotificationUnread />
}
```
or


```jsx
import { NotificationUnread } from 'react-modern-icons'

function MyComponent() {
  return (
      <NotificationUnread
        color='#000000'
        size={30}
        variant='filled'
      />
  )
}
```

The package also provides options to customize the size, color, and other properties of the icons. Refer to the documentation for more information on customization options.
## Features

- Comprehensive collection of modern icons
- asy-to-use and lightweight package
- Customizable size, color, and other properties
- Compatible with React 16.8 or higher




## Props

| Prop  | Type  | Default  |
|----------|---------|----------|
| color  | `string`  | `currentColor`  |
| size  | `(number or string)`  | `1em`  |
| variant  | `light` `regular` `bold` `filled` `duotone` | `regular`  |
| title  | `string`  |   |
| className  | `string`  |   |
| style  | `object`  |   |

## Contributing

Contributions to React Modern Icons are always welcome! If you find a bug or have a suggestion for a new feature, please submit an issue or pull request on our GitHub repository.




## License

React Modern Icons is licensed under the MIT License. See the LICENSE file for more information.


