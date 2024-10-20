
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sterling` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sterling?s=thin circle-sterling}
 * @preview ![circle-sterling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-sterling.svg)
 */
const CircleSterling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM267.6 136c-24.7 0-44.6 20.1-44.4 44.7l.4 59.3 56.5 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56.4 0 0 2.7c.2 34.6-12.8 68-36.2 93.3L344 352c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-3.3 0-6.2-2-7.4-5s-.5-6.5 1.8-8.7l8.8-8.6c23.4-22.8 36.6-54.1 36.4-86.8l0-2.8L168 256c-4.4 0-8-3.6-8-8s3.6-8 8-8l39.5 0-.4-59.2c-.2-33.5 26.9-60.8 60.4-60.8c9.4 0 18.6 2.2 27 6.4l20.9 10.5c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6l-20.9-10.5c-6.2-3.1-13-4.7-19.9-4.7z" />
    </Icon>
);

export default CircleSterling;