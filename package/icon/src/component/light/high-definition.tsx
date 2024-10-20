
import { Icon } from "../../index";

/**
 * A component that renders the `high-definition` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/high-definition?s=light high-definition}
 * @preview ![high-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/high-definition.svg)
 */
const HighDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM320 176l0 160c0 8.8 7.2 16 16 16l48 0c53 0 96-43 96-96s-43-96-96-96l-48 0c-8.8 0-16 7.2-16 16zm64 16c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128 32 0zM144 176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 96 0 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64-96 0 0-64z" />
    </Icon>
);

export default HighDefinition;