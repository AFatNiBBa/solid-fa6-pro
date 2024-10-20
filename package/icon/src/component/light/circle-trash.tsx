
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=light circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM160 144l32.1 0 9.3 0 11.3-11.3c3-3 7.1-4.7 11.3-4.7l64 0c4.2 0 8.3 1.7 11.3 4.7L310.6 144l9.3 0 32.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-2.1 0L338 354.1c-1.1 16.8-15.1 29.9-31.9 29.9l-100.1 0c-16.8 0-30.8-13.1-31.9-29.9L162.1 176l-2.1 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm157.8 32l-123.6 0 11.7 176 100.1 0 11.7-176z" />
    </Icon>
);

export default CircleTrash;