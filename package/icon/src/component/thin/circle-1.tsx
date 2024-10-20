
import { Icon } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=thin circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM260 129.1c2.5 1.4 4 4.1 4 6.9l0 232 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0-64 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-218.2-44 25.2c-3.8 2.2-8.7 .9-10.9-3s-.9-8.7 3-10.9l56-32c2.5-1.4 5.5-1.4 8 0z" />
    </Icon>
);

export default Circle_1;