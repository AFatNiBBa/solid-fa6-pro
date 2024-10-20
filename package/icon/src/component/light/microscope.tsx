
import { Icon } from "../../index";

/**
 * A component that renders the `microscope` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=light microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0c-17.7 0-32 14.3-32 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-128c88.4 0 160 71.6 160 160s-71.6 160-160 160l-80 0L16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0 80 0 208 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-101.8 0c51.7-34.4 85.8-93.2 85.8-160c0-106-86-192-192-192l0-64c0-17.7-14.3-32-32-32c0-17.7-14.3-32-32-32L192 0zm0 32l32 0 0 16c0 8.8 7.2 16 16 16l16 0 0 224-96 0 0-224 16 0c8.8 0 16-7.2 16-16l0-16zM160 368c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM96 432c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Microscope;