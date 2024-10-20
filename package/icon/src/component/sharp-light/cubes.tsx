
import { Icon } from "../../index";

/**
 * A component that renders the `cubes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cubes?s=sharp-light cubes}
 * @preview ![cubes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cubes.svg)
 */
const Cubes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 4.9l5.4 1.9 136 48.5L440 59.2l0 11.3 0 142.4 125.4 44.7 10.6 3.8 0 11.3 0 162.1 0 10.7-9.9 4.1-136 56.3-6.1 2.5-6.1-2.5L288 452.1 158.1 505.8l-6.1 2.5-6.1-2.5L9.9 449.6 0 445.5l0-10.7L0 272.6l0-11.3 10.6-3.8L136 212.8l0-142.4 0-11.3 10.6-3.8 136-48.5L288 4.9zM408 106.3L304 146.2l0 103.8 104-37.1 0-106.5zM272 146.2L168 106.3l0 106.5 104 37.1 0-103.8zm32 277.9l112 46.3 0-121.8L304 308.2l0 115.9zm144 39.7l96-39.7 0-115.2-96 39.2 0 115.7zM272 308.2L160 348.6l0 121.8 112-46.3 0-115.9zM32 424.1l96 39.7 0-115.7L32 308.9l0 115.2zM288 38.9L181.1 77 288 118 394.9 77 288 38.9zM152 241.1L44.6 279.4l99.8 40.8 114.1-41.1L152 241.1zm379.4 38.3L424 241.1l-106.5 38 114.1 41.1 99.8-40.8z" />
    </Icon>
);

export default Cubes;