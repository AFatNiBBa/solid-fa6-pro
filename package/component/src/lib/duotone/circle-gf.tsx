
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-gf` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-gf?s=duotone circle-gf}
 * @preview ![circle-gf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-gf.svg)
 */
const CircleGf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112-56c0-39.8 32.2-72 72-72s72 32.2 72 72c0 13.3-10.7 24-24 24s-24-10.7-24-24s-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0c13.3 0 24 10.7 24 24l0 32c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-112zm176-48c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112z" />
        <path d="M112 200c0-39.8 32.2-72 72-72s72 32.2 72 72c0 13.3-10.7 24-24 24s-24-10.7-24-24s-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0c13.3 0 24 10.7 24 24l0 32c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-112zm176-48c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112z" />
    </Icon>
);

export default CircleGf;