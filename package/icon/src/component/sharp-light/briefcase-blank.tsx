
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=sharp-light briefcase-blank}
 * @preview ![briefcase-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/briefcase-blank.svg)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0L128 0l0 16 0 80L32 96 0 96l0 32L0 448l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0-96 0 0-80 0-16L368 0 144 0zM352 96L160 96l0-64 192 0 0 64zM144 128l224 0 112 0 0 320L32 448l0-320 112 0z" />
    </Icon>
);

export default BriefcaseBlank;