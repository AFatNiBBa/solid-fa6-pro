
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grill` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=sharp-duotone-solid grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M106.1 352.8c1.9 .3 3.8 .7 5.7 1.2s3.7 1 5.4 1.6c3.6 1.2 7 2.8 10.2 4.6c6.5 3.7 12.3 8.4 17.1 14s8.7 12.1 11.4 19.1c1.3 3.5 2.4 7.2 3.1 11c.3 1.9 .6 3.8 .8 5.8c.1 1 .2 2 .2 2.9s.1 1.9 .1 3l156.7 0 13.2 30.8 4 9.3 9.5 22.1 44.1-18.9-9.5-22.1-4-9.3L318.8 299c-14.4 6.7-29.7 12-45.6 15.6L296.2 368l-144.3 0 22.9-53.4c-15.9-3.6-31.1-8.8-45.6-15.6l-23.1 53.8z" />
        <path d="M448 32L0 32 0 96C0 219.7 100.3 320 224 320s224-100.3 224-224l0-64zM72 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0A64 64 0 1 0 32 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Grill;