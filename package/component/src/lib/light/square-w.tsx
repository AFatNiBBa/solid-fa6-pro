
import { Icon } from "../../index";

/**
 * A component that renders the `square-w` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=light square-w}
 * @preview ![square-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-w.svg)
 */
const SquareW: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm103.1 58.8l56.3 162.6 49.4-154.2c2.1-6.6 8.3-11.1 15.2-11.1s13.1 4.5 15.2 11.1l49.4 154.2 56.3-162.6c2.9-8.4 12-12.8 20.4-9.9s12.8 12 9.9 20.4l-72 208c-2.3 6.5-8.4 10.8-15.3 10.8s-13-4.6-15.1-11.1L224 220.5 175.2 372.9c-2.1 6.6-8.2 11-15.1 11.1s-13.1-4.3-15.3-10.8l-72-208c-2.9-8.4 1.5-17.5 9.9-20.4s17.5 1.5 20.4 9.9z" />
    </Icon>
);

export default SquareW;