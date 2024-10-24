
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-mask` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-mask?s=duotone hockey-mask}
 * @preview ![hockey-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hockey-mask.svg)
 */
const HockeyMask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 240C0 111 64 0 224 0S448 111 448 240c0 192-48 272-224 272S0 432 0 240zm64-32c0 35.3 28.7 64 64 64s64-28.7 64-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zM136 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm16 240a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48-320a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm48 192a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm8-240c0 35.3 28.7 64 64 64s64-28.7 64-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm8-128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M136 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM152 320a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm0 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM288 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM248 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default HockeyMask;