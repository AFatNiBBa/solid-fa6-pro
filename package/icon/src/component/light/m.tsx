
import { Icon } from "../../index";

/**
 * A component that renders the `m` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/m?s=light m}
 * @preview ![m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/m.svg)
 */
const M: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M11.3 32.7c6.7-2.1 14 .5 17.9 6.3L224 323.7 418.8 39c4-5.8 11.2-8.3 17.9-6.3S448 41 448 48l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-364.3L237.2 361c-3 4.4-7.9 7-13.2 7s-10.2-2.6-13.2-7L32 99.7 32 464c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 48c0-7 4.6-13.2 11.3-15.3z" />
    </Icon>
);

export default M;