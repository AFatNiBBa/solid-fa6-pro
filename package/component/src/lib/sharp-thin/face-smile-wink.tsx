
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-wink` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-wink?s=sharp-thin face-smile-wink}
 * @preview ![face-smile-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-smile-wink.svg)
 */
const FaceSmileWink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm137.4 76.6l13.1-9.2C171.4 353.2 206.6 384 256 384s84.6-30.8 105.4-60.6l13.1 9.2C352.1 364.6 312.7 400 256 400s-96.1-35.4-118.6-67.4zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm134.2 19.9l-3.9 7-13.9-7.8 3.9-7c13.1-23.4 33.6-36.1 55-36.1s41.8 12.7 55 36.1l3.9 7-13.9 7.8-3.9-7c-10.9-19.3-26.4-27.9-41-27.9s-30.2 8.6-41 27.9z" />
    </Icon>
);

export default FaceSmileWink;