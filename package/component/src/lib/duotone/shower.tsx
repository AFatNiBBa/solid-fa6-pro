
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shower` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shower?s=duotone shower}
 * @preview ![shower](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shower.svg)
 */
const Shower: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 320a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32-160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32-160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M99.9 96C80.1 96 64 112.1 64 131.9L64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 131.9C0 76.7 44.7 32 99.9 32c26.5 0 51.9 10.5 70.6 29.3l16.2 16.2c38.9-21 87.5-17.4 123 10.9L311 87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L185 281c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l1.3-1.3c-28.3-35.5-31.9-84.2-10.9-123l-16.2-16.2C118.5 99.8 109.4 96 99.9 96z" />
    </Icon>
);

export default Shower;