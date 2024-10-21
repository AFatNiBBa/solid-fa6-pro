
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tower-control` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-control?s=duotone tower-control}
 * @preview ![tower-control](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tower-control.svg)
 */
const TowerControl: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.6 167.9c0 3.6 .5 7.3 1.6 11.1L44.5 320.2C28.5 321.9 16 335.5 16 352c0 17.7 14.3 32 32 32l32 0 288 0 32 0c17.7 0 32-14.3 32-32c0-16.5-12.5-30.1-28.5-31.8L443.9 179c1.1-3.7 1.6-7.4 1.6-11.1c0-21.3-17.3-39.9-40-39.9L320 128l-32 0-40 0-48 0-40 0-32 0-85.4 0c-22.7 0-40 18.6-40 39.9zM74.4 192l53.6 0 0 128-17 0c-.1-.3-.1-.5-.2-.8L74.4 192zM176 192l96 0 0 128-96 0 0-128zm144 0l53.6 0L337.2 319.2c-.1 .3-.1 .5-.2 .8l-17 0 0-128z" />
        <path d="M160 24c0-13.3 10.7-24 24-24l40 0 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0 0 48 40 0c17.7 0 32 14.3 32 32l-32 0-40 0-48 0-40 0-32 0c0-17.7 14.3-32 32-32l40 0 0-48-16 0c-13.3 0-24-10.7-24-24zM368 384l0 96c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32l0-96 288 0z" />
    </Icon>
);

export default TowerControl;