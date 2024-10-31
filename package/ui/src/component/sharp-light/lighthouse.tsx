
import { Icon } from "../../index";

/**
 * A component that renders the `lighthouse` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lighthouse?s=sharp-light lighthouse}
 * @preview ![lighthouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lighthouse.svg)
 */
const Lighthouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 96l0-28.2 64-32 64 32L384 96l0 32 32 0 0-32 32 0 0-32L320 0 192 64l0 32 32 0 0 32 32 0 0-32zm192 64l-16 0-16 0-32 0-128 0-32 0-16 0-16 0 0 32 16 0 10.2 0L165.8 480 144 480l-16 0 0 32 16 0 16 0 32.5 0 63.5 0 32 0 64 0 32 0 63.5 0 32.5 0 16 0 16 0 0-32-16 0-21.8 0L421.8 192l10.2 0 16 0 0-32zm-64 32l5.3 0 52.4 288L384 480l0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 64-57.7 0 52.4-288 5.3 0 128 0zM352 480l-64 0 0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64zM151.2 65.7l-128-64L8.9 30.3l128 64 14.3 7.2 14.3-28.6-14.3-7.2zm0 124.6l14.3-7.2-14.3-28.6-14.3 7.2-128 64 14.3 28.6 128-64zM616.9 1.7l-128 64-14.3 7.2 14.3 28.6 14.3-7.2 128-64L616.9 1.7zM474.5 183.2l14.3 7.2 128 64 14.3-28.6-128-64-14.3-7.2-14.3 28.6z" />
    </Icon>
);

export default Lighthouse;