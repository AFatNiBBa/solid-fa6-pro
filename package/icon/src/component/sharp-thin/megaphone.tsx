
import { Icon } from "../../index";

/**
 * A component that renders the `megaphone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=sharp-thin megaphone}
 * @preview ![megaphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/megaphone.svg)
 */
const Megaphone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 48l32 0 0 416-32 0 0-416zM512 32l0 16 0 416 0 16 16 0 32 0 16 0 0-16 0-416 0-16-16 0-32 0-16 0zM480 65.8L16 181.8 16 168l0-8L0 160l0 8 0 17.8L0 192 0 320l0 6.2L0 344l0 8 16 0 0-8 0-13.8 145.6 36.4c-1 5.6-1.6 11.4-1.6 17.4c0 53 43 96 96 96c42.9 0 79.1-28.1 91.5-66.8l-1.7-.5L480 446.2l0-16.5L16 313.8l0-115.5 464-116 0-16.5zM176 384c0-4.6 .4-9.1 1.1-13.5l154.8 38.7C321.4 441 291.4 464 256 464c-44.2 0-80-35.8-80-80zm80-96l-.4 0 .7 0-.4 0z" />
    </Icon>
);

export default Megaphone;