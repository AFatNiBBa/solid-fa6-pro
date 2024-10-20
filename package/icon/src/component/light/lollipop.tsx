
import { Icon } from "../../index";

/**
 * A component that renders the `lollipop` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lollipop?s=light lollipop}
 * @preview ![lollipop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lollipop.svg)
 */
const Lollipop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 352c-27 0-52.4-6.7-74.7-18.5c8.7 1.6 17.6 2.5 26.7 2.5l16 0c75.1 0 136-60.9 136-136l0-8c0-57.4-46.6-104-104-104S88 134.6 88 192c0 35.3 28.7 64 64 64s64-28.7 64-64l0-8c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 8c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-39.8 32.2-72 72-72s72 32.2 72 72l0 8c0 57.4-46.6 104-104 104l-16 0C82.1 304 32 253.9 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160s-71.6 160-160 160zM0 192C0 298 86 384 192 384c47.3 0 90.5-17.1 124-45.4L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L338.6 316c28.3-33.5 45.4-76.7 45.4-124C384 86 298 0 192 0S0 86 0 192z" />
    </Icon>
);

export default Lollipop;