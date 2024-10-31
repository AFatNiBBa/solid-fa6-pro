
import { Icon } from "../../index";

/**
 * A component that renders the `signal-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-slash?s=solid signal-slash}
 * @preview ![signal-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/signal-slash.svg)
 */
const SignalSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L608 451.2 608 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 369.1-64-50.2L480 128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 172.8-64-50.2 0-26.6c0-17.7-14.3-32-32-32c-10.7 0-20.1 5.2-25.9 13.2L38.8 5.1zM576 512l-.3 0 .6 0-.3 0zm-96-32l0-5.8-64-50.4 0 56.2c0 17.7 14.3 32 32 32s32-14.3 32-32zM352 373.3l-64-50.4L288 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-106.7zM192 288c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32zM96 416c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64z" />
    </Icon>
);

export default SignalSlash;