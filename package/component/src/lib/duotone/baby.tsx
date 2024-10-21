
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baby` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baby?s=duotone baby}
 * @preview ![baby](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/baby.svg)
 */
const Baby: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 168c0 12.4 5.7 24.6 16.5 32.4l36.2 26.4c13.6 9.9 28.1 18.2 43.3 25l0 36.3 192 0 0-36.3c15.2-6.7 29.7-15.1 43.3-25l36.2-26.4c17.9-13 21.8-38 8.8-55.9s-38-21.8-55.9-8.8L316.2 162c-26.8 19.5-59.1 30-92.2 30s-65.4-10.5-92.2-30L95.5 135.7c-17.9-13-42.9-9-55.9 8.8C34.5 151.6 32 159.8 32 168zM79.2 401.1C68.1 417 70 438.6 83.7 452.3l48 48c7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7c15.6-15.6 15.6-40.9 0-56.6L164 419.4l26-37.2c-20.2-17.7-40.4-35.3-60.6-53L79.2 401.1zM152 88a72 72 0 1 0 144 0A72 72 0 1 0 152 88zM258 382.3l26 37.2-24.3 24.3c-15.6 15.6-15.6 40.9 0 56.6c7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7l48-48c13.7-13.7 15.6-35.3 4.5-51.2l-50.2-71.8c-20.2 17.7-40.4 35.3-60.6 53z" />
        <path d="M192 384l-64-56V288H320v40l-64 56H192z" />
    </Icon>
);

export default Baby;