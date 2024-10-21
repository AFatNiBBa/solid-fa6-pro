
import { Icon } from "../../index";

/**
 * A component that renders the `lighthouse` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lighthouse?s=sharp-regular lighthouse}
 * @preview ![lighthouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lighthouse.svg)
 */
const Lighthouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 160l-48 0-96 0-48 0-8 0-24 0 0 48 23.3 0L168.7 464 152 464l-24 0 0 48 24 0 136 0 64 0 136 0 24 0 0-48-24 0-16.7 0L424.7 208l23.3 0 0-48-24 0-8 0zm0-32l0-26.3 0-5.7 16 0 16 0 0-32L416 48 320 0 224 48 192 64l0 32 16 0 16 0 0 5.7 0 26.3 48 0 0-32 0-18.3 48-24 48 24L368 96l0 32 48 0zm-48 80l7.9 0 46.5 256L352 464l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-70.5 0 46.5-256 7.9 0 96 0zM33.5 1.9L14.6 46.1l112 48 22.1 9.5 18.9-44.1-22.1-9.5-112-48zM167.5 196.6l-18.9-44.1-22.1 9.5-112 48 18.9 44.1 112-48 22.1-9.5zm327-146.7l-22.1 9.5 18.9 44.1 22.1-9.5 112-48L606.6 1.9l-112 48zm0 156.1l112 48 18.9-44.1-112-48-22.1-9.5-18.9 44.1 22.1 9.5z" />
    </Icon>
);

export default Lighthouse;