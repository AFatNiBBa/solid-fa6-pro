
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dolly` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=duotone dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M351.9 416A96 96 0 1 1 160 416a96 96 0 1 1 191.9 0zM244.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3c15.2-4.9 30.4-9.9 45.7-14.8l19.8 60.9c20.3-6.6 40.6-13.2 60.9-19.8c-6.6-20.3-13.2-40.6-19.8-60.9l45.7-14.8c3.3-1.1 6.6-1.6 9.9-1.6c13.5 0 26 8.6 30.4 22.1l49.4 152.2c1.1 3.3 1.6 6.6 1.6 9.9c0 13.5-8.6 26-22.1 30.4L334.5 307.2c-16.8 5.5-34.9-3.7-40.3-20.5L244.8 134.5z" />
        <path d="M0 32C0 14.3 14.3 0 32 0l72.9 0c27.5 0 52 17.6 60.7 43.8L257.7 320c-.6 0-1.2 0-1.7 0c-22.2 0-42.7 7.6-59 20.2L104.9 64 32 64C14.3 64 0 49.7 0 32zM352 416c0-22.2-7.6-42.7-20.2-59l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L352 417.7c0-.6 0-1.2 0-1.7zM371.8 59.6l19.8 60.9-60.9 19.8L311 79.4l60.9-19.8z" />
    </Icon>
);

export default Dolly;