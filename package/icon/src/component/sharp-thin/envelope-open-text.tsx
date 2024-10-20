
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=sharp-thin envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 396.6L16 231.6 16 200l48-36 0 61.7 16 11L80 80l352 0 0 156.7 16-11 0-61.7 48 36 0 31.6-240 165zM64 80l0 64L0 192l0 48L0 496l0 16 16 0 480 0 16 0 0-16 0-256 0-48-64-48 0-64 0-16-16 0-90.7 0L256 0 170.7 64 80 64 64 64l0 16zM256 20l58.7 44L197.3 64 256 20zm0 396L496 251l0 245L16 496l0-245L256 416zM168 160l-8 0 0 16 8 0 176 0 8 0 0-16-8 0-176 0zm0 80l-8 0 0 16 8 0 176 0 8 0 0-16-8 0-176 0z" />
    </Icon>
);

export default EnvelopeOpenText;