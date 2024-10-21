
import { Icon } from "../../index";

/**
 * A component that renders the `cloud` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=sharp-thin cloud}
 * @preview ![cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cloud.svg)
 */
const Cloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M528 240.4l12 3.1c48.3 12.4 84 56.3 84 108.5l0 112-112 0-368 0L16 464l0-128c0-55.7 35.6-103.1 85.3-120.7l10.7-3.8 0-11.3 0-8.2c0-79.5 64.5-144 144-144c53.3 0 99.9 29 124.8 72.2l8.5 14.8 14.2-9.5c12.7-8.5 28-13.5 44.4-13.5c44.2 0 80 35.8 80 80l0 36 0 12.4zM96 200.2C40.1 220 0 273.3 0 336L0 464l0 16 16 0 128 0 368 0 112 0 16 0 0-16 0-112c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-15.2 0-29.5 3.5-42.3 9.8c-3.8 1.9-7.5 4-11 6.4c-2.7-4.6-5.6-9.1-8.7-13.4C357 58.3 309.6 32 256 32C167.6 32 96 103.6 96 192l0 8.2z" />
    </Icon>
);

export default Cloud;