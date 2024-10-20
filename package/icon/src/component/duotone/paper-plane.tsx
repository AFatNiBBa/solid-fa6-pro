
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=duotone paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0 .7 0 1.3 .1 2c.8 12.2 8.4 22.9 19.6 27.6l112 46.7L160 376l0-8c0-4.2 1.7-8.3 4.7-11.3l13-13c59.6-59.6 119.2-119.2 178.8-178.7c.1-.1 .2-.2 .2-.3c3-3 6.8-4.5 10.7-4.7s7.9 1.1 11 3.9c3.7 3.3 5.6 7.7 5.6 12.1c0 3.4-1.1 6.8-3.3 9.7L224 389.4l0 13.2c20 8.3 40 16.7 60 25c39.9 16.6 79.8 33.2 119.7 49.9c9.1 3.8 19.4 3.2 28-1.6s14.5-13.3 16-23l64-416c1.9-12.1-3.4-24.3-13.5-31.2C492.7 1.9 486.4 0 480 0c-5.5 0-10.9 1.4-15.9 4.2l-448 256C6.1 265.9 0 276.6 0 288z" />
        <path d="M380.7 185.8c5.1-6.7 4.2-16.2-2.1-21.8s-15.9-5.3-21.9 .7l-179 179-13 13c-3 3-4.7 7.1-4.7 11.3l0 8 0 56 0 48c0 13.2 8.1 25 20.3 29.8s26.2 1.6 35.2-8.1L284 427.7l-60-25 0-13.2L380.7 185.8z" />
    </Icon>
);

export default PaperPlane;