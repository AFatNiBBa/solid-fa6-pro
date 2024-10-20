
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=thin square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 32l32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L88 48c-39.8 0-72 32.2-72 72l0 32c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-32C0 71.4 39.4 32 88 32zM8 192c4.4 0 8 3.6 8 8l0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 200c0-4.4 3.6-8 8-8zm432 0c4.4 0 8 3.6 8 8l0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-112c0-4.4 3.6-8 8-8zm0-32c-4.4 0-8-3.6-8-8l0-32c0-39.8-32.2-72-72-72l-32 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l32 0c48.6 0 88 39.4 88 88l0 32c0 4.4-3.6 8-8 8zm8 200l0 32c0 48.6-39.4 88-88 88l-32 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l32 0c39.8 0 72-32.2 72-72l0-32c0-4.4 3.6-8 8-8s8 3.6 8 8zM16 360l0 32c0 39.8 32.2 72 72 72l32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-32 0c-48.6 0-88-39.4-88-88l0-32c0-4.4 3.6-8 8-8s8 3.6 8 8zM168 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112 0zM160 40c0-4.4 3.6-8 8-8l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L168 48c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default SquareDashed;