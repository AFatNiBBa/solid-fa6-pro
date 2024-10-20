
import { Icon } from "../../index";

/**
 * A component that renders the `lamp` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=sharp-regular lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M51.3 256L0 256l18-48L96 0 352 0l78 208 18 48-51.3 0L51.3 256zm18-48l309.5 0-60-160L129.3 48l-60 160zM144 320l0-32 48 0 0 32 0 19.9-13.9 13.9s0 0 0 0c-.1 .1-.4 .4-.7 .8c-.8 .9-2.1 2.3-3.7 4.3c-3.3 4.1-7.9 10.2-12.5 17.8C151.7 392.4 144 411.8 144 432c0 12.2 3.8 23.2 8.5 32l143.1 0c4.7-8.8 8.5-19.8 8.5-32c0-18.8-7.6-38.1-17.3-54.7c-4.7-7.9-9.4-14.4-12.8-18.7c-1.7-2.2-3.1-3.8-3.9-4.7c-.4-.5-.7-.8-.8-.9c0 0 0 0 0 0s0 0 0 0c0 0 0 0-.1-.1l0 0L256 339.2l0-19.2 0-32 48 0 0 32s48 50.5 48 112c0 48-32 80-32 80l-192 0s-32-32-32-80c0-64 48-112 48-112z" />
    </Icon>
);

export default Lamp;