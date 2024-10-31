
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mistletoe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mistletoe?s=duotone mistletoe}
 * @preview ![mistletoe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mistletoe.svg)
 */
const Mistletoe: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 341c0 41.4 33.6 75 75 75c50.5 0 94.3-33.5 108.1-81.2c-4.5-6.5-7.1-14.3-7.1-22.8c0-.9 0-1.8 .1-2.6s.1-1.7 .3-2.6c.2-1.7 .6-3.4 1-5c.9-3.3 2.1-6.4 3.7-9.3c3.2-5.8 7.9-10.7 13.4-14.2l5.4-28.2L264 185.9l0 72.4c14.7 13.2 24 32.3 24 53.7c0 39.8-32.2 72-72 72c-7.2 0-14.2-1.1-20.8-3c-2.1 8.4-3.2 17.1-3.2 25.9l0 9.1c0 53 43 96 96 96s96-43 96-96l0-9.1c0-25.1-9-49.4-25.3-68.4L312 284l0-98.1L376.1 250l14.4 74.7C400.6 377.7 447 416 501 416c41.4 0 75-33.6 75-75c0-54-38.3-100.3-91.3-110.5L410 216.1l-98-98L312 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 94.1-98 98L91.3 230.4C38.3 240.6 0 287 0 341z" />
        <path d="M376 112a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM216 352a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Mistletoe;