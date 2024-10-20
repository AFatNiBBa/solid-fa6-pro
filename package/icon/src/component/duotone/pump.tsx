
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pump` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump?s=duotone pump}
 * @preview ![pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pump.svg)
 */
const Pump: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l96 0 0-160 160 0 0 160 32 0 0 160L64 384l0-160z" />
        <path d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 0zM64 208c0-17.7-14.3-32-32-32s-32 14.3-32 32L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-176zM431.9 106.7L380.5 141c-17.8 11.9-28.5 31.9-28.5 53.3l0 219.5c0 21.4 10.7 41.4 28.5 53.3l51.4 34.3c10.5 7 22.9 10.7 35.5 10.7L576 512c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L467.4 96c-12.6 0-25 3.7-35.5 10.7zM448 208c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Pump;