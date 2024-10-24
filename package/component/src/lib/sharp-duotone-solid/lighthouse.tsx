
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lighthouse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lighthouse?s=sharp-duotone-solid lighthouse}
 * @preview ![lighthouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lighthouse.svg)
 */
const Lighthouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M14.5 46.1L33.5 1.9l112 48 22.1 9.5-18.9 44.1-22.1-9.5-112-48zm0 163.9l112-48 22.1-9.5 18.9 44.1-22.1 9.5-112 48L14.5 209.9zM192 64l32-16L320 0l96 48 32 16 0 48-24 0-8 0 0 7.6c0 13.5 0 27 0 40.4l-64 0 0-48 0-24.4-32-16-32 16 0 24.4 0 48-64 0 0-40.4 0-7.6-8 0-24 0 0-48zm280.5-4.6l22.1-9.5 112-48 18.9 44.1-112 48-22.1 9.5L472.5 59.4zm0 137.2l18.9-44.1 22.1 9.5 112 48-18.9 44.1-112-48-22.1-9.5z" />
        <path d="M212.4 224L171.6 448 160 448l-32 0 0 64 32 0 128 0 0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64 128 0s0 0 0 0l32 0 0-64-32 0-11.6 0L427.6 224l20.4 0 0-64-32 0-192 0s0 0 0 0l-32 0 0 64 20.4 0z" />
    </Icon>
);

export default Lighthouse;