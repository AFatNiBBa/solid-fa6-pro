
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lira-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lira-sign?s=duotone lira-sign}
 * @preview ![lira-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lira-sign.svg)
 */
const LiraSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 224c0-17.7 14.3-32 32-32l16 0 0 64-16 0c-17.7 0-32-14.3-32-32zm0 96c0-17.7 14.3-32 32-32l16 0 0 44.5c0 6.6-.7 13.1-2 19.5l-14 0c-17.7 0-32-14.3-32-32zm110.8 32c.4-3.2 .7-6.4 .9-9.7c.1-1.6 .2-3.2 .2-4.9s.1-3.3 .1-4.9l0-44.5 112 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-113.2 0zM112 192l112 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-112 0 0-64z" />
        <path d="M176.4 96c-35.5 0-64.4 28.8-64.4 64.4l0 172.2c0 29-7.9 57.5-22.8 82.3l-.7 1.1L288 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3 .4-32.2l29.8-49.6c9-14.9 13.7-32 13.7-49.4l0-172.2C48 89.5 105.5 32 176.4 32c13.8 0 27.5 2.2 40.6 6.6l81.2 27.1c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2L196.7 99.3c-6.6-2.2-13.4-3.3-20.4-3.3z" />
    </Icon>
);

export default LiraSign;