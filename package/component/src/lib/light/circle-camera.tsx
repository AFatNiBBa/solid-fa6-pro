
import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=light circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.2 142.5L191.7 160l-7.7 0c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l144 0c30.9 0 56-25.1 56-56l0-80c0-30.9-25.1-56-56-56l-7.7 0-7.5-17.5c-3.8-8.8-12.5-14.5-22.1-14.5l-69.4 0c-9.6 0-18.3 5.7-22.1 14.5zM226.6 160l58.9 0 9.6 22.3c2.5 5.9 8.3 9.7 14.7 9.7l18.3 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24l18.3 0c6.4 0 12.2-3.8 14.7-9.7l9.6-22.3zM256 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CircleCamera;