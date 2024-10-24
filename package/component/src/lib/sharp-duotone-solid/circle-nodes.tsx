
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-nodes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-nodes?s=sharp-duotone-solid circle-nodes}
 * @preview ![circle-nodes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-nodes.svg)
 */
const CircleNodes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M114.1 280.4c20-9.4 35.4-26.9 42.1-48.2L301.9 359.6c-20 9.4-35.4 26.9-42.1 48.2L114.1 280.4zm22.1-129.3L320 77.5c0 .8 0 1.7 0 2.5c0 22.3 9.1 42.4 23.8 56.9L160 210.5c0-.9 0-1.6 0-2.5c0-1.5 0-2.8-.1-4.2c-.1-1.4-.2-2.7-.3-4.1c-.3-2.7-.7-5.4-1.2-8c-.5-2.6-1.2-5.2-2-7.7c-.4-1.2-.8-2.5-1.3-3.7s-.9-2.4-1.5-3.7c-4.1-9.6-10.1-18.3-17.4-25.5zM317.6 354.1l37.8-207.7c6.4 4.3 13.4 7.7 20.9 10c3.7 1.2 7.6 2.1 11.6 2.7c2 .3 4 .5 6 .7c1 .1 2 .1 3.1 .2s2 .1 3.1 .1c6.3 0 12.5-.7 18.4-2.1L380.6 365.6c-6.4-4.3-13.4-7.7-20.9-10c-3.7-1.2-7.6-2.1-11.6-2.7c-2-.3-4-.5-6-.7c-1-.1-2-.1-3.1-.2s-2-.1-3.1-.1c-6.3 0-12.5 .7-18.4 2.1z" />
        <path d="M320 80a80 80 0 1 1 160 0A80 80 0 1 1 320 80zM256 432a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM80 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default CircleNodes;