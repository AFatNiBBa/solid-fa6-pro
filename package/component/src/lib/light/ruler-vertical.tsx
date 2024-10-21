
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=light ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M192 32c17.7 0 32 14.3 32 32l0 32-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 64-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 64-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 64-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 32c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default RulerVertical;