
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=light square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M88 32l24 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L88 64c-30.9 0-56 25.1-56 56l0 24c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24C0 71.4 39.4 32 88 32zM16 192c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm416 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm0-32c-8.8 0-16-7.2-16-16l0-24c0-30.9-25.1-56-56-56l-24 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l24 0c48.6 0 88 39.4 88 88l0 24c0 8.8-7.2 16-16 16zm16 208l0 24c0 48.6-39.4 88-88 88l-24 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l24 0c30.9 0 56-25.1 56-56l0-24c0-8.8 7.2-16 16-16s16 7.2 16 16zM32 368l0 24c0 30.9 25.1 56 56 56l24 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-24 0c-48.6 0-88-39.4-88-88l0-24c0-8.8 7.2-16 16-16s16 7.2 16 16zM176 480c-8.8 0-16-7.2-16-16s7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0zM160 48c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default SquareDashed;