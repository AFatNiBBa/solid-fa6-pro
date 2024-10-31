
import { Icon } from "../../index";

/**
 * A component that renders the `m` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/m?s=thin m}
 * @preview ![m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/m.svg)
 */
const M: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M5.6 32.4c3.3-1.1 6.9 .1 9 3L224 330.2 433.5 35.4c2-2.8 5.6-4 9-3s5.6 4.1 5.6 7.6l0 424c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-398.9L230.5 348.6c-1.5 2.1-3.9 3.4-6.5 3.4s-5-1.3-6.5-3.4L16 65.1 16 472c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 40c0-3.5 2.3-6.6 5.6-7.6z" />
    </Icon>
);

export default M;