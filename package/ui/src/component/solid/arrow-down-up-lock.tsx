
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-up-lock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-up-lock?s=solid arrow-down-up-lock}
 * @preview ![arrow-down-up-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-up-lock.svg)
 */
const ArrowDownUpLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M150.6 502.6l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 160 288l256 0 0-16c0-17.2 3.9-33.5 10.8-48L352 224l0-114.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-6-6-14.1-9.4-22.6-9.4s-16.6 3.4-22.6 9.4l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 109.3 288 224l-128 0-64 0-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 114.7L54.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0zM160 192l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128 64 0zM288 320l0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128-64 0zm240-80c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default ArrowDownUpLock;