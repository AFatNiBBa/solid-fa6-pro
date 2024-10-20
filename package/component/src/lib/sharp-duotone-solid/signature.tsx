
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signature` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=sharp-duotone-solid signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 368l24 0 40 0 0 39.5c0 2.9 .1 5.7 .3 8.5L24 416 0 416l0-48zm283.5 48c8.2-15.7 15.6-31.7 22.3-48L616 368l24 0 0 48-24 0-332.5 0z" />
        <path d="M224 96c-17.7 0-32 14.3-32 32l0 32 0 32-64 0 0-32 0-32c0-53 43-96 96-96s96 43 96 96l0 7.8c0 20.8-1.2 41.6-3.6 62.3l122.4-36.7 59-17.7-19.5 58.5-18 53.9 83.6 0 32 0 0 64-32 0-128 0-44.4 0 14-42.1 12.5-37.5-94.4 28.3c-11.9 52.8-31.6 103.5-58.4 150.5l-25.5 44.7L210.6 480 192 480l-64 0-32 0 0-32 0-160 0-23.8 22.8-6.8 130-39c4.8-27.2 7.1-54.9 7.1-82.5l0-7.8c0-17.7-14.3-32-32-32zm7.8 194.3L160 311.8 160 416l13.4 0 16.3-28.6c17.6-30.8 31.7-63.4 42.1-97.2z" />
    </Icon>
);

export default Signature;