
import { Icon } from "../../index";

/**
 * A component that renders the `memory` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memory?s=sharp-light memory}
 * @preview ![memory](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/memory.svg)
 */
const Memory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96L0 64l32 0 512 0 32 0 0 32 0 50.7c-18.6 6.6-32 24.4-32 45.3s13.4 38.7 32 45.3l0 66.7 0 112 0 32-32 0L32 448 0 448l0-32L0 304l0-66.7c18.6-6.6 32-24.4 32-45.3s-13.4-38.7-32-45.3L0 96zM544 256c-19.4-14.6-32-37.8-32-64s12.6-49.4 32-64l0-32L32 96l0 32c19.4 14.6 32 37.8 32 64s-12.6 49.4-32 64l0 32 512 0 0-32zm0 64L32 320l0 96 64 0 0-16 0-16 32 0 0 16 0 16 56 0 0-16 0-16 32 0 0 16 0 16 56 0 0-16 0-16 32 0 0 16 0 16 56 0 0-16 0-16 32 0 0 16 0 16 56 0 0-16 0-16 32 0 0 16 0 16 64 0 0-96zM176 144l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm128 0l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm128 0l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16z" />
    </Icon>
);

export default Memory;