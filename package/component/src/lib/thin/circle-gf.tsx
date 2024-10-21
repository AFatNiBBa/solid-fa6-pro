
import { Icon } from "../../index";

/**
 * A component that renders the `circle-gf` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-gf?s=thin circle-gf}
 * @preview ![circle-gf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-gf.svg)
 */
const CircleGf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 144c35.3 0 64 28.7 64 64l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48s48-21.5 48-48l0-16-40 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l48 0c4.4 0 8 3.6 8 8l0 24c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-96c0-35.3 28.7-64 64-64zm96 8c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-72 0 0 96 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-96 0-112z" />
    </Icon>
);

export default CircleGf;