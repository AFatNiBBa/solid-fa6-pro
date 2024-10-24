
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-parking-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking-slash?s=duotone square-parking-slash}
 * @preview ![square-parking-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-parking-slash.svg)
 */
const SquareParkingSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 171.6L96 416c0 35.3 28.7 64 64 64l320 0c2.3 0 4.6-.1 6.9-.4L288 322.9l0 29.1c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64 0-15.5L96 171.6zM107.7 59.1c39.8 31.2 79.6 62.4 119.4 93.5c6-14.5 20.3-24.7 37-24.7l72 0c53 0 96 43 96 96c0 26.3-10.6 50.2-27.8 67.5c46.6 36.5 93.2 73 139.8 109.5L544 96c0-35.3-28.7-64-64-64L160 32c-21.6 0-40.7 10.7-52.3 27.1zM288 192l0 8.4c21.6 16.9 43.2 33.9 64.8 50.8c9.1-5.6 15.2-15.7 15.2-27.2c0-17.7-14.3-32-32-32l-48 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default SquareParkingSlash;