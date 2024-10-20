
import { Icon } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=light mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 64l16 0 16 0 0 160 0 32 0 32c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224 288 0zm64 224l0-32 48 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-80 0-16 0-16 0L128 32c-17.7 0-32 14.3-32 32l0 224c0 53 43 96 96 96l192 0c53 0 96-43 96-96zm48-64l-48 0 0-160 48 0c44.2 0 80 35.8 80 80s-35.8 80-80 80zM16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l544 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 448z" />
    </Icon>
);

export default MugSaucer;