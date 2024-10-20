
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pig` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pig?s=duotone pig}
 * @preview ![pig](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pig.svg)
 */
const Pig: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 240c0-11 1.1-21.7 3.2-32C98 135 162.6 80 240 80l122.4 0c14.5 0 28.8 1.3 42.7 3.9c8.1-19.5 25.4-34.4 47-39.1l58.4-12.5c1-.2 2-.3 3-.3c8 0 14.5 6.5 14.5 14.5L528 78c0 19.7-9 37.8-23.6 49.7c6.4 4.9 12.7 10.1 18.6 15.7c17.6-15.9 28.5-38.6 29-63.3l40 0c8.8 0 16 7.2 16 16l0 16c0 32.8-24.6 59.8-56.3 63.5l6.8 9C570 200 585 212.5 602.2 221.1L608 224l8 0c13.3 0 24 10.7 24 24l0 96c0 13.3-10.7 24-24 24l-43.5 0c-22.2 21.2-49.7 36.2-79.8 43.3l-13 45.5C475.8 470.5 463.3 480 449 480l-33 0c-17.7 0-32-14.3-32-32l0-32-64 0-48 0 0 32c0 17.7-14.3 32-32 32l-33 0c-14.3 0-26.8-9.5-30.8-23.2L155 382.4C110.3 358 80 310.5 80 256l0-16zm376-4a20 20 0 1 0 40 0 20 20 0 1 0 -40 0z" />
        <path d="M80 240c0-11 1.1-21.7 3.2-32l-35.8 0c-8.5 0-15.4-6.9-15.4-15.4c0-7.1 4.8-13.3 11.7-15l8.2-2c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6l-8.2 2C14.8 151.8 0 170.8 0 192.6C0 218.8 21.2 240 47.4 240L80 240zm396 16a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default Pig;