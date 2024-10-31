
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=light circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM189 134.7c-4-5.7-11.3-8.1-17.9-5.9S160 137 160 144l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-174.1L323 377.3c4 5.7 11.3 8.1 17.9 5.9s11.1-8.3 11.1-15.2l0-224c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 174.1L189 134.7z" />
    </Icon>
);

export default CircleN;