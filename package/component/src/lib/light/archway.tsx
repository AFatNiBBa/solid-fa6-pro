
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=light archway}
 * @preview ![archway](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/archway.svg)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l32 0 416 0 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 384 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0-40 0-56 0c-8.8 0-16-7.2-16-16l0-112c0-53-43-96-96-96s-96 43-96 96l0 112c0 8.8-7.2 16-16 16l-56 0-40 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0L32 64 16 64C7.2 64 0 56.8 0 48zM64 64l0 64 384 0 0-64L64 64zm0 96l0 288 24 0 40 0 0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96 40 0 24 0 0-288L64 160z" />
    </Icon>
);

export default Archway;