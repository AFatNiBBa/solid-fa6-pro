
import { Icon } from "../../index";

/**
 * A component that renders the `glasses` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glasses?s=sharp-thin glasses}
 * @preview ![glasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/glasses.svg)
 */
const Glasses: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M66.4 33.2l7 1.2 80 13.8 7.9 1.4-2.7 15.8-7.9-1.4-73-12.6L16.4 256 240 256l16 0 0 16 0 16 64 0 0-16 0-16 16 0 223.6 0L498.4 51.3l-73 12.6-7.9 1.4-2.7-15.8 7.9-1.4 80-13.8 7-1.2 2 6.8 64 213.8 .3 1.1 0 1.2 0 16 0 24 0 8 0 160 0 16-16 0-224 0-16 0 0-16 0-160-64 0 0 160 0 16-16 0L16 480 0 480l0-16L0 304l0-8 0-24 0-16 0-1.2 .3-1.1 64-213.8 2-6.8zM560 304l0-8 0-24-224 0 0 24 0 168 224 0 0-160zM16 296l0 8 0 160 224 0 0-168 0-24L16 272l0 24z" />
    </Icon>
);

export default Glasses;