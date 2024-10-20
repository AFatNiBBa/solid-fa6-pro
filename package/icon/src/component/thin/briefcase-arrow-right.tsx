
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=thin briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/briefcase-arrow-right.svg)
 */
const BriefcaseArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 16l176 0c13.3 0 24 10.7 24 24l0 56L144 96l0-56c0-13.3 10.7-24 24-24zM128 40l0 56L64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-64 0 0-56c0-22.1-17.9-40-40-40L168 0c-22.1 0-40 17.9-40 40zm8 72l240 0 72 0c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l72 0zm157.7 82.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L356.7 280 136 280c-4.4 0-8 3.6-8 8s3.6 8 8 8l220.7 0-74.3 74.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88z" />
    </Icon>
);

export default BriefcaseArrowRight;