
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boombox` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=sharp-duotone-solid boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l32 0 48 0 112 0 64 0 32 0 64 0 32 0 64 0 112 0 48 0 32 0 0 352L0 512 0 160zM64 336a112 112 0 1 0 224 0A112 112 0 1 0 64 336zm288 0a112 112 0 1 0 224 0 112 112 0 1 0 -224 0z" />
        <path d="M32 0L56 0 584 0l24 0 0 24 0 136-48 0 0-112L80 48l0 112-48 0L32 24 32 0zM256 160l-64 0 0-32 64 0 0 32zm96 0l-64 0 0-32 64 0 0 32zm96 0l-64 0 0-32 64 0 0 32zM176 416a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM544 336a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-192 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z" />
    </Icon>
);

export default Boombox;