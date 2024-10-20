
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt?s=duotone shirt}
 * @preview ![shirt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shirt.svg)
 */
const Shirt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M.1 149.5c-.7 8.6 2.1 17.1 7.8 23.6l56 64c11.4 13.1 31.2 14.6 44.6 3.5L160 197.7 160 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-250.3 51.5 42.9c13.3 11.1 33.1 9.6 44.6-3.5l56-64c5.7-6.5 8.5-15 7.8-23.6s-4.8-16.6-11.4-22.1L502.3 22.3C485 7.9 463.3 0 440.8 0L432 0c0 61.9-50.1 112-112 112S208 61.9 208 0l-8.8 0C176.7 0 155 7.9 137.7 22.3L11.5 127.4C4.9 132.9 .8 140.9 .1 149.5z" />
        <path d="M208 0c0 61.9 50.1 112 112 112s112-50.1 112-112L400 0c0 44.2-35.8 80-80 80s-80-35.8-80-80L208 0z" />
    </Icon>
);

export default Shirt;