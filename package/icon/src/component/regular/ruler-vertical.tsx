
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=regular ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M192 48c8.8 0 16 7.2 16 16l0 32-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l128 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default RulerVertical;