
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=thin circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM235 128.6c4.1 1.7 6 6.3 4.4 10.4L171.9 304 304 304l0-104c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56-144 0c-2.7 0-5.2-1.3-6.6-3.5s-1.8-5-.8-7.5l72-176c1.7-4.1 6.3-6 10.4-4.4z" />
    </Icon>
);

export default Circle_4;