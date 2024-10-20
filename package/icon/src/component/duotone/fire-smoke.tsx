
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-smoke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-smoke?s=duotone fire-smoke}
 * @preview ![fire-smoke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fire-smoke.svg)
 */
const FireSmoke: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 192c0 36 11.9 69.3 32 96c16.5-22 38.6-39.6 64.1-50.7c1.9-35.5 37.4-70.6 54.7-85.5c5.4-4.7 13.1-4.7 18.5 0c17.3 15 52.8 50 54.7 85.5C409.4 248.4 431.5 266 448 288c20.1-26.7 32-60 32-96c0-31.8-15.5-84-74.4-142.4c-11.8-11.7-30.6-10.7-42.3 1L352 61.9l-46-46c-6.1-6.1-14.1-9.3-22-9.2c-5.9 .1-11.8 1.9-16.8 5.8C222.5 47.3 160 115.3 160 192z" />
        <path d="M112 512C50.1 512 0 461.9 0 400s50.1-112 112-112c37 0 69.9 18 90.3 45.7C221.8 288 267.2 256 320 256s98.2 32 117.7 77.7C458.1 306 491 288 528 288c61.9 0 112 50.1 112 112s-50.1 112-112 112l-208 0-208 0z" />
    </Icon>
);

export default FireSmoke;