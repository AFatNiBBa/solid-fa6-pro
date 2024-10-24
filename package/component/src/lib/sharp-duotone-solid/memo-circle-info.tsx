
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memo-circle-info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-circle-info?s=sharp-duotone-solid memo-circle-info}
 * @preview ![memo-circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/memo-circle-info.svg)
 */
const MemoCircleInfo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 198.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0zM64 128l0 32 16 0 224 0 16 0 0-32-16 0L80 128l-16 0zm0 96l0 32 16 0 160 0 16 0 0-32-16 0L80 224l-16 0zm0 96l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm127.3-80l0 32 32 0 0-32-32 0zm33.2 80l0-16-16 0L416 352l-16 0 0 32 16 0 .5 0 0 48-.5 0-16 0 0 32 16 0 32 0 .5 0 15.5 0 0-32-15.5 0 0-64z" />
    </Icon>
);

export default MemoCircleInfo;