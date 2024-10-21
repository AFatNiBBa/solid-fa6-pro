
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-slash?s=light laptop-slash}
 * @preview ![laptop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/laptop-slash.svg)
 */
const LaptopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM500.3 480l-40.5-32L76.8 448c-20.3 0-37.4-13.5-42.9-32l385.3 0-40.5-32L19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l423.5 0zM544 351.5l.7 .5 31.3 0 0-256c0-35.3-28.7-64-64-64L139.4 32l40.5 32L512 64c17.7 0 32 14.3 32 32l0 255.5zM64 135.6L64 352l32 0 0-191.2L64 135.6z" />
    </Icon>
);

export default LaptopSlash;