
import { Icon } from "../../index";

/**
 * A component that renders the `square-c` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=light square-c}
 * @preview ![square-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-c.svg)
 */
const SquareC: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm156.1 92.1c-37.5 37.5-37.5 98.3 0 135.8s98.3 37.5 135.8 0c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0c-37.5-37.5-98.3-37.5-135.8 0z" />
    </Icon>
);

export default SquareC;