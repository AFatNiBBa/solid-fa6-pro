
import { Icon } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=thin circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM349.1 153.9c3.4 2.8 3.8 7.9 1 11.3l-77.5 92.3 47.4 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 45.6 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 41c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-41-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-45.6-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l47.4 0-77.6-92.3c-2.8-3.4-2.4-8.4 1-11.3s8.4-2.4 11.3 1L256 252.3l81.9-97.4c2.8-3.4 7.9-3.8 11.3-1z" />
    </Icon>
);

export default CircleYen;