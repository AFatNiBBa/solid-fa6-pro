
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-circle-check?s=thin pipe-circle-check}
 * @preview ![pipe-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pipe-circle-check.svg)
 */
const PipeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 384c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16s16 7.2 16 16l0 256zM32 96C14.3 96 0 110.3 0 128L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l256.7 0c-.5-5.3-.7-10.6-.7-16L64 368l0-224 384 0 0 54.6c5.2-1.5 10.6-2.7 16-3.7l0-66.9c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c5.4 0 10.7 .2 16 .7l0-64.7c0-17.7-14.3-32-32-32s-32 14.3-32 32L64 128c0-17.7-14.3-32-32-32zM496 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z" />
    </Icon>
);

export default PipeCircleCheck;