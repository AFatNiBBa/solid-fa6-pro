
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-percent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-percent?s=duotone droplet-percent}
 * @preview ![droplet-percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/droplet-percent.svg)
 */
const DropletPercent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zm160-56a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM112 384c0-4.1 1.6-8.2 4.7-11.3l128-128c3.1-3.1 7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7s4.7 7.2 4.7 11.3s-1.6 8.2-4.7 11.3l-128 128c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7s-4.7-7.2-4.7-11.3zm160-8a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M267.3 267.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM160 264a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM272 376a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default DropletPercent;