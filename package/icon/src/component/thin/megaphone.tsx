
import { Icon } from "../../index";

/**
 * A component that renders the `megaphone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=thin megaphone}
 * @preview ![megaphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/megaphone.svg)
 */
const Megaphone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 64l0 384c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-384c0-8.8 7.2-16 16-16s16 7.2 16 16zm-48 0l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-32 1.8L16 181.8 16 168c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 17.8L0 192 0 320l0 6.2L0 344c0 4.4 3.6 8 8 8s8-3.6 8-8l0-13.8 145.6 36.4c-1 5.6-1.6 11.4-1.6 17.4c0 53 43 96 96 96c42.9 0 79.1-28.1 91.5-66.8l-1.7-.5L480 446.2l0-16.5L16 313.8l0-115.5 464-116 0-16.5zM176 384c0-4.6 .4-9.1 1.1-13.5l154.8 38.7C321.4 441 291.4 464 256 464c-44.2 0-80-35.8-80-80zm80-96l-.4 0 .7 0-.4 0z" />
    </Icon>
);

export default Megaphone;