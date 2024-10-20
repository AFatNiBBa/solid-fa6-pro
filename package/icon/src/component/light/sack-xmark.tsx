
import { Icon } from "../../index";

/**
 * A component that renders the `sack-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-xmark?s=light sack-xmark}
 * @preview ![sack-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sack-xmark.svg)
 */
const SackXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M310.5 144l-109 0-5.3 3.4C141.4 182.5 32 268.3 32 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64c0-147.7-109.4-233.5-164.3-268.6l-5.3-3.4zm-3.8-41.8L355.1 32 156.9 32l48.4 70.2 6.7 9.8 87.8 0 6.7-9.8zM0 416C0 273.4 91.2 183.7 152.6 138.5c9.7-7.1 18.6-13.2 26.4-18.1L160.8 94 121.9 37.6C111 21.7 122.4 0 141.7 0L370.3 0c19.3 0 30.7 21.7 19.8 37.6L351.2 94 333 120.4c7.7 4.9 16.7 11 26.4 18.1C420.8 183.7 512 273.4 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96zM256 297.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 320l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 342.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 320l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 297.4z" />
    </Icon>
);

export default SackXmark;