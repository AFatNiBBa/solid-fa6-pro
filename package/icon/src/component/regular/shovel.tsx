
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=regular shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M375 7c9.4-9.4 24.6-9.4 33.9 0l96 96c9.4 9.4 9.4 24.6 0 33.9l-44.1 44.1c-17.2 17.2-40.6 26.9-65 26.9c-16.7 0-32.3-4.4-45.8-12.2L241 305l56.4 56.4c12.5 12.5 12.5 32.8 0 45.3l-58.5 58.5c-30 30-70.7 46.9-113.1 46.9L32 512c-17.7 0-32-14.3-32-32l0-93.7c0-42.4 16.9-83.1 46.9-113.1l58.5-58.5c12.5-12.5 32.8-12.5 45.3 0L207 271 316.2 161.9c-7.8-13.5-12.2-29.1-12.2-45.8c0-24.4 9.7-47.7 26.9-65L375 7zm17 50.9L364.9 85.1c-8.2 8.2-12.9 19.4-12.9 31c0 24.2 19.6 43.9 43.9 43.9c11.6 0 22.8-4.6 31-12.9L454.1 120 392 57.9zM125.7 464c29.7 0 58.2-11.8 79.2-32.8L252.1 384 128 259.9 80.8 307.1c-21 21-32.8 49.5-32.8 79.2L48 464l77.7 0z" />
    </Icon>
);

export default Shovel;