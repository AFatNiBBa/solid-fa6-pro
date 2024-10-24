
import { Icon } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=sharp-light mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 64l16 0 16 0 0 160 0 32 0 96-320 0 0-288 288 0zm64 288l0-96 48 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0-32 0-16 0-16 0L128 32 96 32l0 32 0 288 0 32 32 0 320 0 32 0 0-32zm48-128l-48 0 0-160 48 0c44.2 0 80 35.8 80 80s-35.8 80-80 80zM16 448L0 448l0 32 16 0 544 0 16 0 0-32-16 0L16 448z" />
    </Icon>
);

export default MugSaucer;