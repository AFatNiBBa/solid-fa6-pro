
import { Icon } from "../../index";

/**
 * A component that renders the `bath` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bath?s=regular bath}
 * @preview ![bath](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bath.svg)
 */
const Bath: typeof Icon = x => (
    <Icon {...x}>
        <path d="M101.3 48C89.5 48 80 57.5 80 69.3L80 256l352 0 48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0-48 0L80 304l-48 0-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0L32 69.3C32 31 63 0 101.3 0c18.4 0 36 7.3 49 20.3l4.8 4.8c11.1-5.8 23.7-9.1 37-9.1c23.9 0 45.4 10.5 60.1 27.2c9.2-5.3 21.1-4 28.9 3.9c9.4 9.4 9.4 24.6 0 33.9L177 185c-9.4 9.4-24.6 9.4-33.9 0c-7.8-7.8-9.1-19.7-3.9-28.9C122.5 141.4 112 119.9 112 96c0-13.4 3.3-25.9 9.1-37l-4.8-4.8c-4-4-9.4-6.2-15-6.2zM32 336l48 0 0 32c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-32 48 0 0 32c0 28.4-12.4 54-32 71.6l0 48.4c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-25.3c-5.2 .9-10.5 1.3-16 1.3l-256 0c-5.5 0-10.8-.5-16-1.3l0 25.3c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48.4C44.4 422 32 396.4 32 368l0-32zM192 64c-17.7 0-32 14.3-32 32c0 10.4 4.9 19.6 12.6 25.5l44.8-44.8C211.6 68.9 202.4 64 192 64z" />
    </Icon>
);

export default Bath;