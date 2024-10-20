
import { Icon } from "../../index";

/**
 * A component that renders the `child` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=light child}
 * @preview ![child](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/child.svg)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M128 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM73.9 240.2c1.9-3.1 3.9-6 6.1-8.9L80 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112 96 0 0 112c0 8.8 7.2 16 16 16s16-7.2 16-16l0-264.7c2.2 2.8 4.2 5.8 6.1 8.9l44.3 72.2c4.6 7.5 14.5 9.9 22 5.3s9.9-14.5 5.3-22l-44.3-72.2C249.2 184 206.3 160 160 160s-89.2 24-113.4 63.5L2.4 295.6c-4.6 7.5-2.3 17.4 5.3 22s17.4 2.3 22-5.3l44.3-72.2zM208 352l-96 0 0-147.9c14.5-7.8 31-12.1 48-12.1s33.5 4.3 48 12.1L208 352z" />
    </Icon>
);

export default Child;