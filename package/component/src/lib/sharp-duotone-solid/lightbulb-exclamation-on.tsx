
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-exclamation-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-exclamation-on?s=sharp-duotone-solid lightbulb-exclamation-on}
 * @preview ![lightbulb-exclamation-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb-exclamation-on.svg)
 */
const LightbulbExclamationOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M144 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l160 0c9.6-31.9 29.5-59.1 49.2-86.2c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0S144 78.8 144 176zM296 64l48 0 0 24 0 112 0 24-48 0 0-24 0-112 0-24zm0 192l48 0 0 48-48 0 0-48z" />
        <path d="M87.3 16l6 4 24 16 20 13.3L110.7 89.3 90.7 76l-24-16-6-4-20-13.3L67.3 2.7 87.3 16zM579.3 56l-6 4-24 16-20 13.3L502.7 49.3l20-13.3 24-16 6-4 20-13.3 26.6 39.9L579.3 56zM24 160l50 0 24 0 0 48-24 0-50 0L0 208l0-48 24 0zm542 0l50 0 24 0 0 48-24 0-50 0-24 0 0-48 24 0zM117.3 332l-24 16-6 4-20 13.3L40.7 325.3l20-13.3 6-4 24-16 20-13.3 26.6 39.9-20 13.3zm432-39.9l24 16 6 4 20 13.3-26.6 39.9-20-13.3-6-4-24-16-20-13.3 26.6-39.9 20 13.3zM240 512l0-128 160 0 0 128-160 0z" />
    </Icon>
);

export default LightbulbExclamationOn;