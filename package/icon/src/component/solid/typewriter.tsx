
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=solid typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C64 28.7 92.7 0 128 0L354.7 0c17 0 33.3 6.7 45.3 18.7L429.3 48c12 12 18.7 28.3 18.7 45.3l0 98.7 32 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l0 160c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l32 0L64 64zm320 64l-32 0c-17.7 0-32-14.3-32-32l0-32L128 64l0 128 18.7 0c8.5 0 16.6 3.4 22.6 9.4l13.3 13.3c6 6 14.1 9.4 22.6 9.4l101.5 0c8.5 0 16.6-3.4 22.6-9.4l13.3-13.3c6-6 14.1-9.4 22.6-9.4l18.7 0 0-64zM160 288a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm64 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm64 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm64 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm64 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM96 288a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm64 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0zm-32-32a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm64 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Typewriter;