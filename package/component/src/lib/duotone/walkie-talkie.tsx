
import { Icon, generic } from "../../index";

/**
 * A component that renders the `walkie-talkie` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walkie-talkie?s=duotone walkie-talkie}
 * @preview ![walkie-talkie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/walkie-talkie.svg)
 */
const WalkieTalkie: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144L0 300.1c0 12.7 5.1 24.9 14.1 33.9l3.9 3.9c9 9 14.1 21.2 14.1 33.9L32 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-92.1c0-12.7 5.1-24.9 14.1-33.9l3.9-3.9c9-9 14.1-21.2 14.1-33.9L384 144c0-26.5-21.5-48-48-48l-16 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-48 0L64 96 48 96C21.5 96 0 117.5 0 144zm96 32c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16z" />
        <path d="M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72 48 0 0-72zm0 136c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" />
    </Icon>
);

export default WalkieTalkie;