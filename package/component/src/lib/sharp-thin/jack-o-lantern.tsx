
import { Icon } from "../../index";

/**
 * A component that renders the `jack-o-lantern` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jack-o-lantern?s=sharp-thin jack-o-lantern}
 * @preview ![jack-o-lantern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/jack-o-lantern.svg)
 */
const JackOLantern: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M296 20.1l40 15 0 66.1c5.4 1.2 10.8 2.6 16 4.1L352 24 288 0 238.5 101.5c6.4-1.4 12.9-2.6 19.5-3.5l38-77.9zM169.5 130.4c6.1-3.9 12.4-7.6 19-10.9c-12.8-4.9-26.4-7.5-40.4-7.5c-41.8 0-79 23.3-105.5 59.5S0 257.5 0 312s16.1 104.2 42.5 140.5S106.2 512 148 512c25.5 0 49.3-8.7 70-23.6c20.7 15 44.5 23.6 70 23.6s49.3-8.7 70-23.6c20.7 15 44.5 23.6 70 23.6c41.8 0 79-23.3 105.5-59.5S576 366.5 576 312s-16.1-104.2-42.5-140.5S469.8 112 428 112c-14.1 0-27.6 2.6-40.4 7.5c6.5 3.3 12.9 7 19 10.9c7-1.6 14.2-2.4 21.5-2.4c35.5 0 68.3 19.7 92.5 52.9S560 260.5 560 312s-15.2 97.8-39.5 131c-24.2 33.2-57.1 53-92.5 53c-23.5 0-45.7-8.6-65-24l-5-3.9-5 3.9c-19.4 15.4-41.6 24-65 24s-45.7-8.6-65-24l-5-3.9-5 3.9c-19.4 15.4-41.6 24-65 24c-35.5 0-68.3-19.7-92.5-53C31.2 409.8 16 363.5 16 312s15.2-97.8 39.5-131.1S112.5 128 148 128c7.3 0 14.5 .8 21.5 2.4zM288 144c54.2 0 101.6 24.3 129.7 60.9l4.9 6.3 12.7-9.7-4.9-6.3C399.2 154.4 346.9 128 288 128s-111.2 26.4-142.3 67.1l-4.9 6.3 12.7 9.7 4.9-6.3c28-36.6 75.5-60.9 129.7-60.9zM169.6 272L160 288l18.7 0 58.7 0 18.7 0-9.6-16-29.1-48.5L208 208l-9.3 15.5L169.6 272zm58.1 0l-39.5 0L208 239.1 227.7 272zm101.9 0L320 288l18.7 0 58.7 0 18.7 0-9.6-16-29.1-48.5L368 208l-9.3 15.5L329.6 272zm58.1 0l-39.5 0L368 239.1 387.7 272zM104 320.5l8-.5c-8 .5-8 .5-8 .5s0 0 0 0s0 0 0 0c0 0 0 0 0 .1l0 .2 0 .5c0 .4 .1 1.1 .2 1.8c.2 1.6 .5 3.8 1.1 6.5c1.1 5.4 3 13 6.4 21.7c6.8 17.4 19.5 39.6 43.3 58.3L168 419.8l0-16.5 0-3.3 32 0 0 28.5 0 5.8 5.5 1.8c22.4 7.4 49.6 11.9 82.5 11.9s60.1-4.5 82.5-11.9l5.5-1.8 0-5.8 0-28.5 32 0 0 3.3 0 16.5 12.9-10.2c23.8-18.7 36.5-40.8 43.3-58.3c3.4-8.7 5.3-16.3 6.4-21.7c.5-2.7 .9-4.9 1.1-6.5c.1-.8 .2-1.4 .2-1.8l0-.5 0-.2c0 0 0 0 0-.1c0 0 0 0 0 0s0 0 0 0l-8-.5 8 .5 .2-3.6-2.6-2.6-8-8-4.9-4.9-5.5 4.2s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l-.1 .1-.5 .3c-.4 .3-1.1 .8-2 1.4c-1.8 1.2-4.6 3-8.3 5.2c-7.3 4.3-18.2 10.2-32.3 16C379.8 340.3 338.9 352 288 352l-8 0 0 8 0 24-32 0 0-27.5 0-6.9-6.8-1c-36.8-5.4-66-16.2-86-25.7c-10-4.7-17.7-9.1-22.8-12.3c-2.6-1.6-4.5-2.9-5.8-3.7c-.6-.4-1.1-.8-1.4-1l-.3-.2c0 0 0 0-.1 0c0 0 0 0 0 0s0 0 0 0l-5.5-4.2-4.9 4.9-8 8-2.6 2.6 .2 3.6zm17 6c-.3-1.4-.5-2.6-.6-3.6l.6-.6c.9 .6 1.9 1.2 3 1.9c5.6 3.5 13.8 8.1 24.3 13.2c19.9 9.4 48.3 20.1 83.7 26l0 28.6 0 8 8 0 48 0 8 0 0-8 0-24.1c49.7-1.1 89.9-12.8 118.1-24.5c14.9-6.2 26.4-12.3 34.3-17c2.6-1.5 4.8-2.9 6.6-4l.6 .6c-.2 1-.4 2.2-.6 3.6c-.9 4.7-2.6 11.3-5.6 19c-4.6 11.9-12.4 26.2-25.4 39.8l0-1.3-8 0-48 0-8 0 0 8 0 30.6c-19.6 5.8-43.3 9.4-72 9.4s-52.4-3.6-72-9.4l0-30.6 0-8-8 0-48 0-8 0 0 1.3c-13-13.5-20.7-27.9-25.4-39.8c-3-7.7-4.7-14.3-5.6-19z" />
    </Icon>
);

export default JackOLantern;