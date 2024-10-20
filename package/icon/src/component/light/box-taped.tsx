
import { Icon } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=light box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M264 32l-80 0-78.4 0C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38L264 32zm24 128L270 64l72.4 0c12.6 0 24.1 7.4 29.2 19l34.2 77L304 160l-16 0zm-32.6 0l-62.9 0 18-96 26.9 0 18 96zm.6 32l0 64-64 0 0-64 64 0zm-96 0l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64 16 0 112 0 0 224c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-224 112 0 16 0zm0-32l-16 0L42.1 160 76.3 83c5.1-11.6 16.6-19 29.2-19L178 64l-18 96z" />
    </Icon>
);

export default BoxTaped;