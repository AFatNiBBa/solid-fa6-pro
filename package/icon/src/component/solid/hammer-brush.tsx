
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-brush` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-brush?s=solid hammer-brush}
 * @preview ![hammer-brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hammer-brush.svg)
 */
const HammerBrush: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 0C64.5 0 0 64.5 0 144c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6 .7l51.3-25.6c13.9 17.1 34.8 27.3 57.4 27.3l66.3 0c21.9 0 42-12.4 51.8-32l38.1 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l-38.1 0C240.1 12.4 220 0 198.1 0L144 0zM112 192L99.2 448.1c-1.7 34.8 26 63.9 60.8 63.9s62.5-29.1 60.8-63.9L208 192l-96 0zM418.2 505.4l20.7-62.1c2.9-8.8 15.3-8.8 18.2 0l20.7 62.1c1.3 3.9 5 6.6 9.1 6.6L592 512c26.5 0 48-21.5 48-48l0-144-288 0 0 144c0 26.5 21.5 48 48 48l9.1 0c4.1 0 7.8-2.6 9.1-6.6zM380.5 237c-17.2 11.5-27.7 30.5-28.5 51L640 288c-.7-20.5-11.3-39.5-28.5-51l-65.1-43.4c-.8-.5-1.6-.9-2.4-1.2L544 48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 144.5c-.9 .3-1.7 .7-2.4 1.2L380.5 237zM496 64a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default HammerBrush;