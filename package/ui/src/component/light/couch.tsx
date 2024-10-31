
import { Icon } from "../../index";

/**
 * A component that renders the `couch` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=light couch}
 * @preview ![couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/couch.svg)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 64c53 0 96 43 96 96l0 37.5c10-3.5 20.8-5.5 32-5.5l0-32c0-70.7-57.3-128-128-128L192 32C121.3 32 64 89.3 64 160l0 32c11.2 0 22 1.9 32 5.5L96 160c0-53 43-96 96-96l256 0zM96 320l0 96 0 16c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-144c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32zM80 480c20.9 0 38.7-13.4 45.3-32l389.5 0c6.6 18.6 24.4 32 45.3 32l32 0c26.5 0 48-21.5 48-48l0-144c0-35.3-28.7-64-64-64s-64 28.7-64 64l-384 0c0-35.3-28.7-64-64-64s-64 28.7-64 64L0 432c0 26.5 21.5 48 48 48l32 0zm48-64l0-96 384 0 0 96-384 0zm416 16l0-16 0-96 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 144c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Couch;