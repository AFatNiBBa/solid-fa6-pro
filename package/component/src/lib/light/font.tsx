
import { Icon } from "../../index";

/**
 * A component that renders the `font` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=light font}
 * @preview ![font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/font.svg)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M238.7 41.8c-2.5-5.9-8.3-9.8-14.7-9.8s-12.2 3.8-14.7 9.8L37.4 448 16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-23.9 0 40.6-96 222.5 0 40.6 96L352 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-21.4 0L238.7 41.8zm83 278.2l-195.4 0L224 89.1 321.7 320z" />
    </Icon>
);

export default Font;