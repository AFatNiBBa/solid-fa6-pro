
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-upside-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-upside-down?s=regular face-smile-upside-down}
 * @preview ![face-smile-upside-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-smile-upside-down.svg)
 */
const FaceSmileUpsideDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM177.6 193.9C192.8 177.5 218.8 160 256 160s63.2 17.5 78.4 33.9c9 9.7 24.2 10.4 33.9 1.4s10.4-24.2 1.4-33.9c-22-23.8-60-49.4-113.6-49.4s-91.7 25.5-113.6 49.4c-9 9.7-8.4 24.9 1.4 33.9s24.9 8.4 33.9-1.4zM208.4 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default FaceSmileUpsideDown;