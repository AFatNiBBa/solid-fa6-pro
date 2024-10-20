
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-circle-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-circle-check?s=light bridge-circle-check}
 * @preview ![bridge-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bridge-circle-check.svg)
 */
const BridgeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 64-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 128 0 128 0 128 0 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-64 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0L384 32 256 32 128 32 48 32zM496 64l0 64-96 0 0-64 96 0zM368 64l0 64-96 0 0-64 96 0zM240 64l0 64-96 0 0-64 96 0zM48 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c35.3 0 64 28.7 64 64l0 96c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-96c0-35.3 28.7-64 64-64c9 0 17.5 1.8 25.2 5.2c5.6-9.3 12.1-18.1 19.3-26.2C351.2 244 336.1 240 320 240c-53 0-96 43-96 96l0 96c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-96c0-53-43-96-96-96l-16 0zm448 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm44.7-187.3L480 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z" />
    </Icon>
);

export default BridgeCircleCheck;