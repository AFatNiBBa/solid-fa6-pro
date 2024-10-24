
import { Icon } from "../../index";

/**
 * A component that renders the `kazoo` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kazoo?s=sharp-thin kazoo}
 * @preview ![kazoo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/kazoo.svg)
 */
const Kazoo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272c23.8 0 46.3-5.8 66-16l110 0 16 0 0-16 0-224 0-16-16 0-110 0c-19.8-10.2-42.2-16-66-16s-46.3 5.8-66 16l-162.5 0L0 192 0 320l219.4 64L382 384c19.8 10.2 42.2 16 66 16zm176-32l-85.5 0c32.6-26.4 53.5-66.8 53.5-112s-20.9-85.6-53.5-112l85.5 0 0 224zM221.7 144l135.8 0C324.9 170.4 304 210.8 304 256s20.9 85.6 53.5 112l-135.8 0L16 308l0-104 205.7-60zm191.9 66.3l-5.7-5.7L396.7 216l5.7 5.7L436.7 256l-34.3 34.3-5.7 5.7L408 307.3l5.7-5.7L448 267.3l34.3 34.3 5.7 5.7L499.3 296l-5.7-5.7L459.3 256l34.3-34.3 5.7-5.7L488 204.7l-5.7 5.7L448 244.7l-34.3-34.3z" />
    </Icon>
);

export default Kazoo;