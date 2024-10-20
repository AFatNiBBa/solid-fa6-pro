
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-circle-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-circle-check?s=regular bridge-circle-check}
 * @preview ![bridge-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bridge-circle-check.svg)
 */
const BridgeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M56 32C42.7 32 32 42.7 32 56s10.7 24 24 24l48 0 0 64-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 128 0 240 0 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-64 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 32zM339.1 288.1c8-15.7 18.3-30 30.4-42.5C359 241.9 347.8 240 336 240l-32 0c-57.4 0-104 46.6-104 104l0 88-48 0 0-96c0-53-43-96-96-96c-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48l0 104c0 22.1 17.9 40 40 40l64 0c22.1 0 40-17.9 40-40l0-96c0-30.9 25.1-56 56-56l32 0c1.1 0 2.1 0 3.1 .1zM488 80l0 64-80 0 0-64 80 0zM360 80l0 64-80 0 0-64 80 0zM232 80l0 64-80 0 0-64 80 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-99.3-43.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7z" />
    </Icon>
);

export default BridgeCircleCheck;