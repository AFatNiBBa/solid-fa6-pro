
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=thin caret-right}
 * @preview ![caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/caret-right.svg)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M233.4 240.6c4.2 4 6.6 9.6 6.6 15.4s-2.4 11.4-6.6 15.4L101.3 396.5c-2.3 2.2-5.4 3.5-8.7 3.5c-7 0-12.6-5.6-12.6-12.6l0-262.8c0-7 5.6-12.6 12.6-12.6c3.2 0 6.3 1.2 8.7 3.5L233.4 240.6zm11-11.6L112.3 103.8C107 98.8 99.9 96 92.6 96C76.8 96 64 108.8 64 124.6l0 262.8C64 403.2 76.8 416 92.6 416c7.3 0 14.4-2.8 19.7-7.8L244.4 283c7.4-7 11.6-16.8 11.6-27s-4.2-20-11.6-27z" />
    </Icon>
);

export default CaretRight;