
import { Icon, generic } from "../../index";

/**
 * A component that renders the `leafy-green` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leafy-green?s=sharp-duotone-solid leafy-green}
 * @preview ![leafy-green](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/leafy-green.svg)
 */
const LeafyGreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M17.9 206.3l0 72.6L72.1 333l0 86.2 19.7 19.7L128 402.7l0-98.7 48-48 0-96 64.4-64.4c.1-1.2 .2-2.4 .4-3.6s.3-2.4 .5-3.6c.4-2.4 .9-4.7 1.4-7l-.4-.1c-1.8-20.2-10.4-39.8-25.8-55.3C199 8.7 176.2 0 153.3 0s-45.7 8.7-63.2 26.2c-15.4 15.4-24 35.1-25.8 55.3C49 83.9 34.3 91.1 22.4 102.9c-28.3 28.3-29.8 73.3-4.5 103.4zM217.4 336L240 358.6l11.3-11.3 48-48L358.6 240l89.4 0 16 0 0-32-16 0-57.4 0 84.7-84.7L486.6 112 464 89.4l-11.3 11.3-112 112L304 249.4l0-57.4 0-16-32 0 0 16 0 89.4-43.3 43.3L217.4 336z" />
        <path d="M576 112c0 27.4-9.8 52.4-26.1 71.9C561.3 199.7 568 219 568 240c0 50.2-38.5 91.4-87.6 95.6L416 400l-96 0-48 48-98.7 0-38.6 38.6L112 509.3 66.7 464l22.6-22.6L128 402.7l0-98.7 48-48 0-96 64.4-64.4C244.6 46.5 285.8 8 336 8c21 0 40.3 6.7 56.1 18.1C411.6 9.8 436.6 0 464 0c61.9 0 112 50.1 112 112zM475.3 123.3L486.6 112 464 89.4l-11.3 11.3-112 112L304 249.4l0-57.4 0-16-32 0 0 16 0 89.4-43.3 43.3L217.4 336 240 358.6l11.3-11.3 48-48L358.6 240l89.4 0 16 0 0-32-16 0-57.4 0 84.7-84.7z" />
    </Icon>
);

export default LeafyGreen;