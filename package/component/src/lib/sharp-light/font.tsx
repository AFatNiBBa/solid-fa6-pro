
import { Icon } from "../../index";

/**
 * A component that renders the `font` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=sharp-light font}
 * @preview ![font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/font.svg)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M209.3 41.8l4.1-9.8 21.2 0 4.1 9.8L410.6 448l21.4 0 16 0 0 32-16 0-80 0-16 0 0-32 16 0 23.9 0-40.6-96-222.5 0L72.1 448 96 448l16 0 0 32-16 0-80 0L0 480l0-32 16 0 21.4 0L209.3 41.8zM126.3 320l195.4 0L224 89.1 126.3 320z" />
    </Icon>
);

export default Font;