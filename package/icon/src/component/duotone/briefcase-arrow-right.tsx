
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=duotone briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/briefcase-arrow-right.svg)
 */
const BriefcaseArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56l0 40L64 96C28.7 96 0 124.7 0 160zM128 288c0-13.3 10.7-24 24-24l150.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7l80 80c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17l-80 80c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l39-39L152 312c-13.3 0-24-10.7-24-24zM176 56c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40z" />
        <path d="M263 191c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L152 312c-13.3 0-24-10.7-24-24s10.7-24 24-24l150.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default BriefcaseArrowRight;