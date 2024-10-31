
import { Icon } from "../../index";

/**
 * A component that renders the `basketball` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basketball?s=regular basketball}
 * @preview ![basketball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/basketball.svg)
 */
const Basketball: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 458.4c0-.8 0-1.6 0-2.4c0-33.3 10.7-64.1 28.9-89.2l52.2 52.2c-23.5 18.6-51 32.2-81.1 39.4zM256.2 464l-.2 0c-48.8 0-93.7-16.8-129.1-44.9L256 289.9l42.6 42.6C271.9 366.6 256 409.4 256 456c0 2.7 .1 5.3 .2 8zm76.4-165.4L289.9 256 419.1 126.9C447.2 162.3 464 207.2 464 256l0 .2c-2.7-.1-5.3-.2-8-.2c-46.6 0-89.4 15.9-123.4 42.6zM458.4 304c-7.1 30.1-20.8 57.7-39.4 81.1l-52.2-52.2c25-18.2 55.9-28.9 89.2-28.9c.8 0 1.6 0 2.4 0zM256 222.1l-42.6-42.6C240.1 145.4 256 102.6 256 56c0-2.7-.1-5.3-.2-8l.2 0c48.8 0 93.7 16.8 129.1 44.9L256 222.1zm-76.9-76.9L126.9 92.9c23.5-18.6 51-32.2 81.1-39.4c0 .8 0 1.6 0 2.4c0 33.3-10.7 64.1-28.9 89.2zm-33.9 33.9C120.1 197.3 89.3 208 56 208c-.8 0-1.6 0-2.4 0c7.1-30.1 20.8-57.7 39.4-81.1l52.2 52.2zM48 255.8c2.7 .1 5.3 .2 8 .2c46.6 0 89.4-15.9 123.4-42.6L222.1 256 92.9 385.1C64.8 349.7 48 304.8 48 256l0-.2zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default Basketball;