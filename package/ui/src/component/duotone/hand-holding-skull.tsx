
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-skull` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-skull?s=duotone hand-holding-skull}
 * @preview ![hand-holding-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-holding-skull.svg)
 */
const HandHoldingSkull: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c10.6-7.8 16.3-20 16.3-32.2c0-8.2-2.5-16.6-7.8-23.7c-13.1-17.8-38.1-21.6-55.9-8.5L392.6 416 272 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 384 32 384c-17.7 0-32 14.3-32 32z" />
        <path d="M363.6 250c-1.4-7 2-13.9 8-17.7C408.2 209 432 171 432 128C432 57.3 367.5 0 288 0S144 57.3 144 128c0 43 23.8 81 60.4 104.2c6 3.8 9.4 10.8 8 17.7l-4.1 20.6c-.2 .9-.3 1.9-.3 2.9c0 8 6.5 14.6 14.6 14.6l130.9 0c8 0 14.6-6.5 14.6-14.6c0-1-.1-1.9-.3-2.9L363.6 250zM208 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default HandHoldingSkull;