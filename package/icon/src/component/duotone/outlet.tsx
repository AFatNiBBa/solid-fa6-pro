
import { Icon, generic } from "../../index";

/**
 * A component that renders the `outlet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=duotone outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 61.1 30.8 99 49.7 116.6c8.8 8.2 20.7 11.4 32.6 11.4l155.3 0c12 0 23.9-3.3 32.6-11.4C353.2 355 384 317.1 384 256s-30.8-99.1-49.7-116.6c-8.8-8.2-20.7-11.4-32.6-11.4l-155.3 0c-12 0-23.9 3.3-32.6 11.4C94.8 156.9 64 194.9 64 256zm80-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48zm56 104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 16c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-16zm72-104c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48z" />
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm0 224c0-61.1 30.8-99.1 49.7-116.6c8.8-8.2 20.7-11.4 32.6-11.4l155.3 0c12 0 23.9 3.3 32.6 11.4C353.2 156.9 384 194.9 384 256s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4l-155.3 0c-12 0-23.9-3.3-32.6-11.4C94.8 355 64 317.1 64 256z" />
    </Icon>
);

export default Outlet;