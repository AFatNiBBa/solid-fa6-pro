
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=duotone briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288z" />
        <path d="M384 96l80 0c25.6 0 48 22.4 48 48l0 144L0 288 0 144c0-25.6 22.4-48 48-48l80 0 0-40 0-8c0-25.6 22.4-48 48-48l8 0L328 0l8 0c25.6 0 48 22.4 48 48l0 8 0 40zm-48 0l0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8l0 40 160 0z" />
    </Icon>
);

export default Briefcase;