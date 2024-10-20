
import { Icon } from "../../index";

/**
 * A component that renders the `toothbrush` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toothbrush?s=solid toothbrush}
 * @preview ![toothbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/toothbrush.svg)
 */
const Toothbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 224c-35.3 0-64-28.7-64-64s28.7-64 64-64l224 0c31.2 0 38.2-22.7 39.6-48c.5-8.8 7.6-16.1 16.4-15.2c52.4 5.3 104 36.7 104 95.2c0 53-43 96-96 96L64 224zm-8 32c13.3 0 24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 32 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136 144 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Toothbrush;