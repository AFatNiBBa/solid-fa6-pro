
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-wink` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-wink?s=thin face-smile-wink}
 * @preview ![face-smile-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-smile-wink.svg)
 */
const FaceSmileWink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm150.6 67.4C171.4 353.2 206.6 384 256 384s84.6-30.8 105.4-60.6c2.5-3.6 7.5-4.5 11.1-2s4.5 7.5 2 11.1C352.1 364.6 312.7 400 256 400s-96.1-35.4-118.6-67.4c-2.5-3.6-1.7-8.6 2-11.1s8.6-1.7 11.1 2zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm134.2 19.9c-2.2 3.9-7 5.2-10.9 3.1s-5.2-7-3.1-10.9c13.1-23.4 33.6-36.1 55-36.1s41.8 12.7 55 36.1c2.2 3.9 .8 8.7-3.1 10.9s-8.7 .8-10.9-3.1c-10.9-19.3-26.4-27.9-41-27.9s-30.2 8.6-41 27.9z" />
    </Icon>
);

export default FaceSmileWink;