
import { Icon, generic } from "../../index";

/**
 * A component that renders the `synagogue` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/synagogue?s=duotone synagogue}
 * @preview ![synagogue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/synagogue.svg)
 */
const Synagogue: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 309.3L0 448c0 35.3 28.7 64 64 64l96 0 0-16 0-222.6L99.3 212.7c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7L14.1 275.3c-9 9-14.1 21.2-14.1 33.9zm480-35.9L480 496l0 16 112 0c26.5 0 48-21.5 48-48l0-154.7c0-12.7-5.1-24.9-14.1-33.9l-62.6-62.6c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7L480 273.4z" />
        <path d="M330.2 3.7c-5.9-4.9-14.6-4.9-20.5 0l-121 100.8C170.5 119.7 160 142.2 160 166l0 330 0 16 16 0 80 0 0-128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 128 80 0 16 0 0-16 0-330c0-23.7-10.5-46.3-28.8-61.5L330.2 3.7zM313 124.3c3.1-5.4 10.9-5.4 13.9 0l15.9 28.1 32.3-.3c6.2-.1 10.1 6.7 7 12.1L365.7 192l16.4 27.8c3.2 5.4-.7 12.1-7 12.1l-32.3-.3L327 259.7c-3.1 5.4-10.9 5.4-13.9 0l-15.9-28.1-32.3 .3c-6.2 .1-10.1-6.7-7-12.1L274.3 192l-16.4-27.8c-3.2-5.4 .7-12.1 7-12.1l32.3 .3L313 124.3z" />
    </Icon>
);

export default Synagogue;