
import { Icon } from "../../index";

/**
 * A component that renders the `r` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=thin r}
 * @preview ![r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/r.svg)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56L0 280 0 472c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184 160 0 6.4 0 2.9 4.4 120 184c2.4 3.7 7.4 4.7 11.1 2.3s4.7-7.4 2.3-11.1l-117.4-180C267.7 282.9 320 227.6 320 160c0-70.7-57.3-128-128-128L24 32zM176 272L16 272 16 56c0-4.4 3.6-8 8-8l168 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-16 0z" />
    </Icon>
);

export default R;