
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signature` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=duotone signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 392c0-13.3 10.7-24 24-24l40 0 0 39.5c0 2.9 .1 5.7 .3 8.5L24 416c-13.3 0-24-10.7-24-24zm283.5 24c8.2-15.7 15.6-31.7 22.3-48L616 368c13.3 0 24 10.7 24 24s-10.7 24-24 24l-332.5 0z" />
        <path d="M224 96c-17.7 0-32 14.3-32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-53 43-96 96-96s96 43 96 96l0 7.8c0 20.8-1.2 41.6-3.6 62.3l122.4-36.7c11.4-3.4 23.8-.2 32.2 8.4s11.2 21.1 7.4 32.4l-18 53.9 83.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l12.5-37.5-94.4 28.3c-11.9 52.8-31.6 103.5-58.4 150.5l-13.9 24.3c-12.9 22.6-36.9 36.5-62.9 36.5c-40 0-72.5-32.5-72.5-72.5l0-71.9c0-42.4 27.8-79.8 68.4-92l84.4-25.3c4.8-27.2 7.1-54.9 7.1-82.5l0-7.8c0-17.7-14.3-32-32-32zm7.8 194.3l-49 14.7C169.3 309 160 321.5 160 335.6l0 71.9c0 4.7 3.8 8.5 8.5 8.5c3 0 5.9-1.6 7.4-4.3l13.9-24.3c17.6-30.8 31.7-63.4 42.1-97.2z" />
    </Icon>
);

export default Signature;