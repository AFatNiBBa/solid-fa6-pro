
import { Icon } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=regular computer-speaker}
 * @preview ![computer-speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/computer-speaker.svg)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M312.4 480c-11.8-13.2-20.1-29.7-23.1-48L120 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l192.4 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l224 0 0-48L64 336c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l225.3 0c3.1-18.3 11.3-34.8 23.1-48L64 32zM576 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l192 0zM384 32c-35.3 0-64 28.7-64 64l0 320c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L384 32zm96 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM448 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default ComputerSpeaker;