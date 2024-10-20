
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=regular square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 32l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 80c-22.1 0-40 17.9-40 40l0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16C0 71.4 39.4 32 88 32zM24 192c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24zm400 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24zm0-32c-13.3 0-24-10.7-24-24l0-16c0-22.1-17.9-40-40-40l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0c48.6 0 88 39.4 88 88l0 16c0 13.3-10.7 24-24 24zm24 216l0 16c0 48.6-39.4 88-88 88l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0c22.1 0 40-17.9 40-40l0-16c0-13.3 10.7-24 24-24s24 10.7 24 24zM48 376l0 16c0 22.1 17.9 40 40 40l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-48.6 0-88-39.4-88-88l0-16c0-13.3 10.7-24 24-24s24 10.7 24 24zM184 480c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0zM160 56c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default SquareDashed;