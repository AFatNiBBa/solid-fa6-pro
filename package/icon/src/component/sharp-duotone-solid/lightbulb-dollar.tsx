
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-dollar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-dollar?s=sharp-duotone-solid lightbulb-dollar}
 * @preview ![lightbulb-dollar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb-dollar.svg)
 */
const LightbulbDollar: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l160 0c9.6-31.9 29.5-59.1 49.2-86.2c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176zm102.7 88.7l12.6-38 19 6.3c2 .7 4.2 1.4 6.4 2.1c9.5 3.2 20.2 6.9 26.2 7.9c12.8 2 22.7 .7 28.8-1.9c5.5-2.3 7.4-5.3 8-8.8c.7-4 .1-5.9-.2-6.7c-.4-.9-1.3-2.2-3.7-4c-5.9-4.3-15.3-7.5-29.3-11.7l-2.2-.7c-11.7-3.5-27-8.1-38.6-16c-6.6-4.5-13.2-10.7-17.3-19.5c-4.2-9-5.2-18.8-3.4-29c3.2-18.3 16.2-30.9 31.1-37.7c5-2.3 10.4-4 16-5.1l0-6 0-20 40 0 0 20 0 6.3c6.6 1.2 16.7 3.2 21.1 4.4l19.3 5.1-10.3 38.7-19.3-5.1c-3.8-1-17.4-3.7-21.7-4.3c-12.2-1.9-22.2-.3-28.6 2.6c-6.3 2.9-7.9 6.2-8.2 8.1c-.6 3.4 0 4.7 .1 5c.3 .5 1 1.8 3.6 3.5c6.1 4.2 15.7 7.2 29.9 11.4l.8 .2c12.1 3.7 28.3 8.5 40.4 17.4c6.7 4.9 13 11.4 16.9 20.5c4 9.1 4.8 19.1 3 29.4c-3.3 19-15.9 32-31.6 38.7c-4.9 2.1-10.1 3.6-15.4 4.6l0 5.5 0 20-40 0 0-20 0-6.4c-9.5-2.2-22-6.4-29.9-9.1c-1.7-.6-3.2-1.1-4.4-1.5l-19-6.3z" />
        <path d="M112 384V512H272V384H112z" />
    </Icon>
);

export default LightbulbDollar;