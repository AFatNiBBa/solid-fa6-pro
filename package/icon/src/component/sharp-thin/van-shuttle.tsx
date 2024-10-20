
import { Icon } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=sharp-thin van-shuttle}
 * @preview ![van-shuttle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/van-shuttle.svg)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 32L0 32l0 8L0 376l0 8 8 0 56 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l56 0 8 0 0-8 0-176 0-3.2-2.2-2.3-152-160L483.4 32 480 32 376 32 168 32 8 32zM480 288c-47.6 0-87.1 34.6-94.7 80l-130.7 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80L16 368l0-160 152 0 208 0 248 0 0 160-49.3 0c-7.6-45.4-47.1-80-94.7-80zM16 192L16 48l144 0 0 144L16 192zm160 0l0-144 192 0 0 144-192 0zm208 0l0-144 92.6 0L613.4 192 384 192zm16 192a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM160 304a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default VanShuttle;