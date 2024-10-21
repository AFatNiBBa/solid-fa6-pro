
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=light starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 112C0 85.5 21.5 64 48 64l160 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-46.8 0 47.6 34.6 60.1-8.2C296.8 114.8 366.5 64 448 64c106 0 192 86 192 192s-86 192-192 192c-81.5 0-151.2-50.8-179-122.4l-60.1-8.2L161.2 352l46.8 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L48 448c-26.5 0-48-21.5-48-48s21.5-48 48-48l58.8 0L163 311.1l-21.5-2.9C115.5 304.6 96 282.3 96 256s19.5-48.6 45.5-52.2l21.5-2.9L106.8 160 48 160c-26.5 0-48-21.5-48-48zM48 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 96zm97.9 139.5C135.6 236.9 128 245.7 128 256s7.6 19.1 17.9 20.5l113.5 15.5c-2.2-11.6-3.4-23.7-3.4-35.9s1.2-24.3 3.4-35.9L145.9 235.5zM32 400c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 384c-8.8 0-16 7.2-16 16zm416 16a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm32-160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Starship;