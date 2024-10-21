
import { Icon } from "../../index";

/**
 * A component that renders the `computer-speaker` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-speaker?s=thin computer-speaker}
 * @preview ![computer-speaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/computer-speaker.svg)
 */
const ComputerSpeaker: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 96L80 96c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l208 0 0-16L80 336l0-224 208 0 0-16zm0 304L64 400c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l236.8 0c3.3-5.7 7.2-11.1 11.6-16L64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l224 0 0-16zm12.8 64L104 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l208.4 0c-4.4-4.9-8.3-10.3-11.6-16zM576 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-320c0-26.5 21.5-48 48-48l192 0zM384 32c-35.3 0-64 28.7-64 64l0 320c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L384 32zm96 368a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm-96-80a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM496 128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM480 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 240a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default ComputerSpeaker;