
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-wink` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-wink?s=sharp-regular face-smile-wink}
 * @preview ![face-smile-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-smile-wink.svg)
 */
const FaceSmileWink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm124 77.3L164 306.7C176 324.8 211.9 352 256 352s80-27.2 92-45.3L388 333.3C368 363.2 317.9 400 256 400s-112-36.8-132-66.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm151.3 26.3l-32.2-23.8c36-48.7 108.2-48.7 144.2 0l-32.2 23.8c-20-27.1-59.8-27.1-79.8 0z" />
    </Icon>
);

export default FaceSmileWink;