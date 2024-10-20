
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=regular box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M261.3 80l81.1 0c6.3 0 12.1 3.7 14.6 9.5L388.4 160 288 160 261.3 80zm-74.7 0L160 160 59.6 160 91 89.5c2.6-5.8 8.3-9.5 14.6-9.5l81.1 0zM160 208l0 48c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-48 112 0 0 208c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-208 112 0zM400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70z" />
    </Icon>
);

export default BoxTaped;