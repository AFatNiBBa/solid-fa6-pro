
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sterling` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sterling?s=sharp-thin circle-sterling}
 * @preview ![circle-sterling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-sterling.svg)
 */
const CircleSterling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM267.6 136c-24.7 0-44.6 20.1-44.4 44.7l.4 59.3 56.5 0 8 0 0 16-8 0-56.4 0 .4 57.3 0 3.4-2.4 2.4L187.7 352 344 352l8 0 0 16-8 0-176 0-19.7 0 14.1-13.7L208 310l-.3-54L168 256l-8 0 0-16 8 0 39.5 0-.4-59.2c-.2-33.5 26.9-60.8 60.4-60.8c9.4 0 18.6 2.2 27 6.4l20.9 10.5 7.2 3.6-7.2 14.3-7.2-3.6-20.9-10.5c-6.2-3.1-13-4.7-19.9-4.7z" />
    </Icon>
);

export default CircleSterling;