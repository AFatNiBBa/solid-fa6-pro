
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radio` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=duotone radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c0-21.4 10.5-40.3 26.7-52c10.5-7.6 23.4-12 37.3-12c51.5 0 103 0 154.5 0c76.5 0 153 0 229.5 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192zM64 320c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 304c-8.8 0-16 7.2-16 16zm16-64c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm0 128c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
        <path d="M511 17.3c3.7 12.7-3.6 26.1-16.3 29.8L218.5 128 64 128c-13.9 0-26.9 4.5-37.4 12c7.3-5.9 15.7-10.4 25.1-13.2L481.3 1C494-2.8 507.3 4.5 511 17.3zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Radio;