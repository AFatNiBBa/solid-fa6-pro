
import { Icon } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=regular unlock-keyhole}
 * @preview ![unlock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/unlock-keyhole.svg)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c-44.2 0-80 35.8-80 80l0 64 240 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l32 0 0-64C96 57.3 153.3 0 224 0c57 0 105.2 37.2 121.8 88.6c4.1 12.6-2.8 26.1-15.5 30.2s-26.1-2.8-30.2-15.5C289.8 71.2 259.6 48 224 48zM64 240c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16L64 240zM256 376l-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
    </Icon>
);

export default UnlockKeyhole;