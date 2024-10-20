
import { Icon, generic } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=duotone typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64C64 28.7 92.7 0 128 0L352 0l0 64c0 17.7 14.3 32 32 32l64 0 0 96-82.7 0c-8.5 0-16.6 3.4-22.6 9.4l-13.3 13.3c-6 6-14.1 9.4-22.6 9.4l-101.5 0c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4L64 192 64 64z" />
        <path d="M448 93.3l0 2.7-64 0c-17.7 0-32-14.3-32-32l0-64 2.7 0c17 0 33.3 6.7 45.3 18.7L429.3 48c12 12 18.7 28.3 18.7 45.3zM0 256l0-32c0-17.7 14.3-32 32-32l114.7 0c8.5 0 16.6 3.4 22.6 9.4l13.3 13.3c6 6 14.1 9.4 22.6 9.4l101.5 0c8.5 0 16.6-3.4 22.6-9.4l13.3-13.3c6-6 14.1-9.4 22.6-9.4L480 192c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l0 160c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-160c-17.7 0-32-14.3-32-32zm176 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM80 304a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 128c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0c-8.8 0-16 7.2-16 16zm0-64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm64 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Typewriter;