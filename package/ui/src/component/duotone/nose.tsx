
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nose` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nose?s=duotone nose}
 * @preview ![nose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/nose.svg)
 */
const Nose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 401.9c1 61 50.8 110.1 112 110.1l12 0c-.5-.7-.9-1.3-1.4-1.9c-.5-.7-.9-1.3-1.3-2c-.9-1.3-1.6-2.7-2.4-4.1c-1.5-2.8-2.7-5.7-3.8-8.7s-1.8-6.2-2.4-9.4c-.1-.8-.3-1.6-.4-2.4s-.2-1.6-.3-2.4c-.1-.9-.1-1.7-.2-2.5c0-.8 0-1.6-.1-2.2l0-.4c0-2.1 .1-2.6 .1-3.1c.1-1 .1-2 .2-3c.2-2 .5-4 .9-5.9c.8-3.9 2-7.7 3.5-11.3c3-7.2 7.4-13.6 12.9-19.1C140.4 422.7 155.4 416 172 416l4.8 0c19.7 0 38.3 9 50.6 24.3l15.4 19.2c25.8 32.3 64.6 51.4 105.8 52.4c55.2-1.6 99.4-46.8 99.4-102.3c0-28.1-11.4-54.4-30.4-74.1C369.9 286 259.3 163 181.3 12.9C177.2 5 169 0 160 0L88 0C74.7 0 64 10.7 64 24l0 230.5c0 6.6 6.6 11.3 13 9.7c6.7-1.7 13.6-2.9 20.7-3.6l44.7-4.5c8.8-.9 16.6 5.5 17.5 14.3s-5.5 16.6-14.3 17.5l-44.7 4.5C44.3 298 1 345.3 0 401.9z" />
        <path d="M124 512c-7.5-10-12-22.5-12-36c0-33.1 26.9-60 60-60h4.8c19.7 0 38.3 9 50.6 24.3l15.4 19.2c25.8 32.3 64.6 51.4 105.8 52.4L124 512z" />
    </Icon>
);

export default Nose;