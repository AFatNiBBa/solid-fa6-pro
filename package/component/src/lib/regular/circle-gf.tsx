
import { Icon } from "../../index";

/**
 * A component that renders the `circle-gf` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-gf?s=regular circle-gf}
 * @preview ![circle-gf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-gf.svg)
 */
const CircleGf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM184 128c39.8 0 72 32.2 72 72c0 13.3-10.7 24-24 24s-24-10.7-24-24s-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0c13.3 0 24 10.7 24 24l0 32c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-112c0-39.8 32.2-72 72-72zm104 24c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112z" />
    </Icon>
);

export default CircleGf;