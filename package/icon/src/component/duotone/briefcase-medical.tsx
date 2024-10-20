
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-medical?s=duotone briefcase-medical}
 * @preview ![briefcase-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/briefcase-medical.svg)
 */
const BriefcaseMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 56l0 40 48 0 0-40c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8l0 40 48 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56z" />
        <path d="M64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 96zM224 208c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" />
    </Icon>
);

export default BriefcaseMedical;