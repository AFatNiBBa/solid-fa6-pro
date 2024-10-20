
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=regular briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/briefcase-arrow-right.svg)
 */
const BriefcaseArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zm24 88l208 0 88 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l88 0zm145 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L152 264c-13.3 0-24 10.7-24 24s10.7 24 24 24l150.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80z" />
    </Icon>
);

export default BriefcaseArrowRight;