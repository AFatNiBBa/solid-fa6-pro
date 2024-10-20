
import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=sharp-light oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32l0 128 384 0 0-128L32 32zm0 160l0 288 384 0 0-288L32 192zM0 0L32 0 416 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM104 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM264 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 256l0 160 256 0 0-160L96 256zM64 224l32 0 256 0 32 0 0 32 0 160 0 32-32 0L96 448l-32 0 0-32 0-160 0-32zm64 64l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32z" />
    </Icon>
);

export default Oven;