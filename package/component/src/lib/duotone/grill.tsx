
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grill` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=duotone grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M106.1 352.8L129.2 299c14.4 6.7 29.7 12 45.6 15.6L151.8 368l144.3 0-22.9-53.4c15.9-3.6 31.1-8.8 45.6-15.6l63.2 147.5c1.3 3.1 1.9 6.3 1.9 9.4c0 9.3-5.5 18.2-14.6 22.1c-3.1 1.3-6.3 1.9-9.4 1.9c-9.3 0-18.2-5.5-22.1-14.6L316.7 416 160 416c0-1 0-2-.1-3s-.1-2-.2-3c-.2-1.9-.4-3.9-.8-5.8c-.7-3.8-1.7-7.5-3.1-11c-2.7-7-6.5-13.5-11.4-19.1s-10.6-10.4-17.1-14c-3.2-1.8-6.6-3.4-10.2-4.6c-1.8-.6-3.6-1.2-5.5-1.6c-.9-.2-1.8-.4-2.8-.7c-.9-.2-1.7-.3-2.8-.5z" />
        <path d="M40 32C17.9 32 0 49.9 0 72L0 96C0 219.7 100.3 320 224 320s224-100.3 224-224l0-24c0-22.1-17.9-40-40-40L40 32zM72 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0A64 64 0 1 0 32 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Grill;