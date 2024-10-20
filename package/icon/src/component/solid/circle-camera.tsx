
import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=solid circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM196 160l6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6l62.7 0c10 0 19 6.2 22.5 15.6L316 160l36 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l36 0zm108 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CircleCamera;