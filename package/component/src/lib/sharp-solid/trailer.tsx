
import { Icon } from "../../index";

/**
 * A component that renders the `trailer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trailer?s=sharp-solid trailer}
 * @preview ![trailer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trailer.svg)
 */
const Trailer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 32L0 32 0 384l65.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96L480 384l32 0 32 0 64 0 32 0 0-64-32 0-64 0 0-288zM480 320l-32 0 0-16 0-192 0-16 32 0 0 16 0 192 0 16zM96 96l0 16 0 131.2c-11.4 5.9-22.2 12.9-32 21L64 112l0-16 32 0zm80 128c-5.4 0-10.7 .2-16 .7L160 112l0-16 32 0 0 16 0 112.7c-5.3-.5-10.6-.7-16-.7zm80 19.2L256 112l0-16 32 0 0 16 0 152.2c-9.8-8.1-20.6-15.2-32-21zM384 96l0 16 0 192 0 16-32 0 0-16 0-192 0-16 32 0zM176 480a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-112a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Trailer;