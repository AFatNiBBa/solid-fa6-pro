
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=light circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l128.9 0L163 358.7c-3.5 4.9-3.9 11.3-1.2 16.6s8.2 8.7 14.2 8.7l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128.9 0L349 153.3c3.5-4.9 3.9-11.3 1.2-16.6s-8.2-8.7-14.2-8.7l-160 0z" />
    </Icon>
);

export default CircleZ;