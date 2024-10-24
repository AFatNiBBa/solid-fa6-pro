
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=light arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l105.4 0L4.7 452.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L416 86.6 416 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144c0-8.8-7.2-16-16-16L288 32zM27.3 36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L173.1 227.7l22.6-22.6L27.3 36.7zm225 270.2L393.4 448 288 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l144 0c8.8 0 16-7.2 16-16l0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 105.4L274.9 284.3l-22.6 22.6z" />
    </Icon>
);

export default ArrowsCross;