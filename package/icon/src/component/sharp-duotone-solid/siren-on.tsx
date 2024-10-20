
import { Icon, generic } from "../../index";

/**
 * A component that renders the `siren-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren-on?s=sharp-duotone-solid siren-on}
 * @preview ![siren-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/siren-on.svg)
 */
const SirenOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M144 352L176 96l288 0 32 256-261.9 0 21.8-174 2.2-18-32.2 0-1.8 14L201.9 352 144 352z" />
        <path d="M69.3 36l-20-13.3L22.7 62.7 42.7 76l48 32 20 13.3 26.6-39.9L117.3 68l-48-32zM597.3 76l20-13.3L590.7 22.7 570.7 36l-48 32-20 13.3 26.6 39.9 20-13.3 48-32zM24 192L0 192l0 48 24 0 64 0 24 0 0-48-24 0-64 0zm528 0l-24 0 0 48 24 0 64 0 24 0 0-48-24 0-64 0zm-8 160L96 352l0 128 448 0 0-128z" />
    </Icon>
);

export default SirenOn;