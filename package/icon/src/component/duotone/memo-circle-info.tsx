
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memo-circle-info` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-circle-info?s=duotone memo-circle-info}
 * @preview ![memo-circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/memo-circle-info.svg)
 */
const MemoCircleInfo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c3.3 0 6.6-.3 9.7-.7C285.1 479.3 256 427.1 256 368c0-80.6 54.1-148.5 128-169.4L384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm64 80c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 256c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm168-72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-40 56c-8.8 0-16 7.2-16 16s7.2 16 16 16c0 0 0 0 0 0l0 48s0 0 0 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l0-64c0-8.8-7.2-16-16-16l-16 0z" />
    </Icon>
);

export default MemoCircleInfo;