
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garlic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garlic?s=sharp-duotone-solid garlic}
 * @preview ![garlic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/garlic.svg)
 */
const Garlic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 299.7C0 368.4 55.6 424 124.3 424l5.1 0C90.8 400 64 358.8 64 304c0-27.8 4.3-48.7 11-66.5c5.9-15.6 13.6-28.6 20.7-40.5c.8-1.4 1.7-2.8 2.5-4.2c7.8-13.2 15.1-26.2 20.5-43.3c.6-1.9 1.2-3.9 1.8-5.9L46.6 202.7C17.2 226.3 0 262 0 299.7zM96 304c0 69.3 54.9 112 120 112s120-42.7 120-112c0-42.1-15-62.5-33.5-87.7c-1.1-1.6-2.3-3.1-3.5-4.7c-10.2-13.9-21.2-29.8-29.5-50.9C261.3 139.5 256 113.8 256 80l0-80L160 0l0 80 0 32-1.6 1.3c-1.8 17.8-5 32.8-9.2 46c-6.6 20.7-15.3 36.2-23.5 49.9l-2.5 4.2c-7.2 12.1-13.5 22.6-18.3 35.5c-5.3 13.9-9 31-9 55.2zM264 448l0 40 0 24 48 0 0-24 0-40-48 0zM288 0l0 80c0 30.2 4.7 51.9 11.4 69c6.7 17.1 15.7 30.3 25.5 43.8c1.2 1.6 2.4 3.3 3.6 5c19 25.8 39.4 53.6 39.4 106.3c0 54.8-26.8 96-65.3 120l85.1 0C456.4 424 512 368.4 512 299.7c0-37.8-17.2-73.5-46.6-97L352 112 352 0 288 0z" />
        <path d="M136 488v24h48V488H136zm64 0v24h48V488H200zm64 0v24h48V488H264zm64 0v24h48V488H328zM136 448v40h48V448H136zm64 0v40h48V448H200zm64 0v40h48V448H264zm64 0v40h48V448H328z" />
    </Icon>
);

export default Garlic;