
import { Icon } from "../../index";

/**
 * A component that renders the `square-m` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=thin square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm110.5 35.4L224 290.2 337.5 131.4c2-2.8 5.6-4 9-3s5.6 4.1 5.6 7.6l0 240c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-215L230.5 308.6c-1.5 2.1-3.9 3.4-6.5 3.4s-5-1.2-6.5-3.4L112 161l0 215c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-240c0-3.5 2.2-6.6 5.6-7.6s6.9 .1 9 3z" />
    </Icon>
);

export default SquareM;