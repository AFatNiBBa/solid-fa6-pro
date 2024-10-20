
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-smoke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-smoke?s=sharp-duotone-solid fire-smoke}
 * @preview ![fire-smoke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fire-smoke.svg)
 */
const FireSmoke: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 192.1c0 36 11.9 69.2 31.9 95.9c14.3-19.1 32.8-34.9 54.1-46c-3.9-9.4-6-20.2-6-32.1c0-24 15-45 45-82c4 5 62 79 62 79l36-42c3 4 5 8 7 12c11.3 20.7 12.3 44.9 4.2 65.2c21.2 11.1 39.6 26.8 53.9 45.9c20.1-26.7 31.9-59.9 31.9-95.9c0-73.6-96-160-96-160s-13.9 12.5-31 32c-32.3-37.5-65-64-65-64s-128 103.6-128 192z" />
        <path d="M112 512L0 512 0 400c0-61.9 50.1-112 112-112c37 0 69.9 18 90.3 45.7C221.8 288 267.2 256 320 256s98.2 32 117.7 77.7C458.1 306 491 288 528 288c61.9 0 112 50.1 112 112l0 112-112 0-208 0-208 0z" />
    </Icon>
);

export default FireSmoke;