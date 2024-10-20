
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=duotone briefcase-blank}
 * @preview ![briefcase-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/briefcase-blank.svg)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 56l0 40 48 0 0-40c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8l0 40 48 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56z" />
        <path d="M64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 96z" />
    </Icon>
);

export default BriefcaseBlank;