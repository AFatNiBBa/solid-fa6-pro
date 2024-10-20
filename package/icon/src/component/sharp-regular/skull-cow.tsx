
import { Icon } from "../../index";

/**
 * A component that renders the `skull-cow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=sharp-regular skull-cow}
 * @preview ![skull-cow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/skull-cow.svg)
 */
const SkullCow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 95.5C0 166.1 57.2 224 128 224l16 0 0 112 0 48 48 0 25.6 0L256 512l128 0 38.4-128 25.6 0 48 0 0-48 0-112 16 0c70.8 0 128-57.9 128-128.5C640 61 621 26.2 600 0L576 16c1 3.1 2.2 6.4 3.4 9.9c0 0 0 0 0 0c5.8 16.4 12.7 35.8 11.1 51.8C587.7 106.3 563.7 128 535 128l-39 0 0-32-48 0L192 96l-48 0 0 32-39 0c-28.7 0-52.7-21.7-55.6-50.3c-1.6-16 5.3-35.5 11.1-51.8C61.8 22.4 63 19.1 64 16L40 0C19 26.2 0 61 0 95.5zM253.3 336l-35.7 0L192 336l0-192 256 0 0 192-25.6 0-35.7 0-10.3 34.2L348.3 464l-56.6 0-28.1-93.8L253.3 336zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default SkullCow;