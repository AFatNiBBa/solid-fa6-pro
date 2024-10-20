
import { Icon } from "../../index";

/**
 * A component that renders the `radar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radar?s=sharp-light radar}
 * @preview ![radar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/radar.svg)
 */
const Radar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32c56.1 0 107.4 20.6 146.7 54.7l-34.1 34.1C338.1 95.3 298.8 80 256 80c-72.2 0-134.2 43.5-161.3 105.6L124 198.4c22.2-50.9 73-86.4 132-86.4c34 0 65.2 11.8 89.9 31.5l-34.3 34.3C295.9 166.6 276.7 160 256 160c-53 0-96 43-96 96s43 96 96 96s96-43 96-96l-32 0c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c11.9 0 23 3.2 32.5 8.9l-43.8 43.8L233.4 256 256 278.6l11.3-11.3 224-224L502.6 32 480 9.4 468.7 20.7 425.4 64C380.2 24.2 320.9 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256l-32 0c0 123.7-100.3 224-224 224S32 379.7 32 256zM313.6 388l12.8 29.3C388.5 390.2 432 328.2 432 256l-32 0c0 59-35.5 109.8-86.4 132zM124 313.6L94.7 326.4c17.7 40.6 50.3 73.2 90.9 90.9L198.4 388c-33.2-14.5-59.9-41.2-74.4-74.4zM120 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM256 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Radar;