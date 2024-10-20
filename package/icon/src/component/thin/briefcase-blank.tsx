
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=thin briefcase-blank}
 * @preview ![briefcase-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/briefcase-blank.svg)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 40l0 56 224 0 0-56c0-13.3-10.7-24-24-24L168 16c-13.3 0-24 10.7-24 24zM128 96l0-56c0-22.1 17.9-40 40-40L344 0c22.1 0 40 17.9 40 40l0 56 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l64 0zm248 16l-240 0-72 0c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-72 0z" />
    </Icon>
);

export default BriefcaseBlank;