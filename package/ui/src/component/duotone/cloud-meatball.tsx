
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-meatball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-meatball?s=duotone cloud-meatball}
 * @preview ![cloud-meatball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-meatball.svg)
 */
const CloudMeatball: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 400a48 48 0 1 0 96 0A48 48 0 1 0 0 400zm144 0c0 17.7 14.3 32 32 32c1 0 2.1-.1 3.1-.1c-.8 .7-1.6 1.3-2.3 2.1c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0c.7-.7 1.4-1.5 2.1-2.3c-.1 1-.1 2.1-.1 3.1c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1-.1-2.1-.1-3.1c.7 .8 1.3 1.6 2.1 2.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3c-.7-.7-1.5-1.4-2.3-2.1c1 .1 2.1 .1 3.1 .1c17.7 0 32-14.3 32-32s-14.3-32-32-32c-1 0-2.1 .1-3.1 .1c.8-.7 1.6-1.3 2.3-2.1c12.5-12.5 12.5-32.8 0-45.3c-12.2-12.2-31.9-12.5-44.4-.8l-2.8 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-2.8 0c-12.5-11.7-32.2-11.4-44.4 .8c-12.5 12.5-12.5 32.8 0 45.3c.7 .7 1.5 1.4 2.3 2.1c-1-.1-2.1-.1-3.1-.1c-17.7 0-32 14.3-32 32zm272 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96l-44.7 0c-9.5-23.5-32.5-40-59.3-40c-2 0-3.9 .1-5.8 .3C294.4 265.5 276.3 256 256 256s-38.4 9.5-50.2 24.3c-1.9-.2-3.9-.3-5.8-.3c-26.9 0-49.9 16.5-59.3 40L96 320z" />
    </Icon>
);

export default CloudMeatball;