
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garlic` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garlic?s=duotone garlic}
 * @preview ![garlic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/garlic.svg)
 */
const Garlic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288C0 392.6 85.5 411.7 116.7 415.2C85 390.5 64 352.6 64 304c0-27.8 4.3-48.7 11-66.5c5.9-15.6 13.6-28.6 20.7-40.5c.8-1.4 1.7-2.8 2.5-4.2c7.8-13.2 15.1-26.2 20.5-43.3c1.2-3.7 2.3-7.7 3.3-11.9c-11.7 10.9-25.1 21.1-38.7 31.5C42.3 200.5 0 232.7 0 288zm96 16c0 69.3 54.9 112 120 112s120-42.7 120-112c0-42.1-15-62.5-33.5-87.7c-1.1-1.6-2.3-3.1-3.5-4.7c-10.2-13.9-21.2-29.8-29.5-50.9C261.3 139.5 256 113.8 256 80l0-80L208 0c-26.5 0-48 21.5-48 48l0 16 0 16c0 33.4-4.2 58.5-10.8 79.2c-6.6 20.7-15.3 36.2-23.5 49.9l-2.5 4.2c-7.2 12.1-13.5 22.6-18.3 35.5c-5.3 13.9-9 31-9 55.2zM288 0l0 80c0 30.2 4.7 51.9 11.4 69c6.7 17.1 15.7 30.3 25.5 43.8c1.2 1.6 2.4 3.3 3.6 5c19 25.8 39.4 53.6 39.4 106.3c0 49.2-21.5 87.3-53.7 112l69.7 0s128 0 128-128c0-55.3-42.3-87.5-83.4-118.9C389.8 139.5 352 110.6 352 64l0-16c0-26.5-21.5-48-48-48L288 0z" />
        <path d="M136 488l0-40 48 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24zm64 0l0-40 48 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24zm64 0l0-40 48 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24zm64 0l0-40 48 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default Garlic;