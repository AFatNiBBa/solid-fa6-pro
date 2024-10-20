
import { Icon } from "../../index";

/**
 * A component that renders the `microscope` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=sharp-light microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 0L160 0l0 16 0 16-16 0-16 0 0 16 0 256 0 16 16 0 128 0 16 0 0-16 0-144c88.4 0 160 71.6 160 160s-71.6 160-160 160l-80 0L16 480 0 480l0 32 16 0 192 0 80 0 208 0 16 0 0-32-16 0-101.8 0c51.7-34.4 85.8-93.2 85.8-160c0-106-86-192-192-192l0-80 0-16-16 0-16 0 0-16 0-16L240 0 176 0zM160 288l0-224 16 0 16 0 0-16 0-16 32 0 0 16 0 16 16 0 16 0 0 224-96 0zm0 64l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zM96 416l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0z" />
    </Icon>
);

export default Microscope;