
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=thin landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 16l0 64-96 0 0-40 0-24 96 0zM256 96l96 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L256 0c-8.8 0-16 7.2-16 16l0 40 0 24 0 16 0 48L40 144c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-216 0 0-48zM80 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 176c0 4.4 3.6 8 8 8l368 0c4.4 0 8-3.6 8-8l0-176c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168-104 0 0-168c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168-112 0 0-168c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168L80 368l0-168zM40 432c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L40 432zM8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l496 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 496z" />
    </Icon>
);

export default LandmarkFlag;