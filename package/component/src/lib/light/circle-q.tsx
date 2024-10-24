
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=light circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 256c0-53 43-96 96-96s96 43 96 96c0 20.7-6.6 39.9-17.7 55.6l-50.9-50.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l50.9 50.9C295.9 345.4 276.7 352 256 352c-53 0-96-43-96-96zm224 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128c29.6 0 56.8-10 78.5-26.9l22.2 22.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-22.2-22.2C374 312.8 384 285.6 384 256z" />
    </Icon>
);

export default CircleQ;