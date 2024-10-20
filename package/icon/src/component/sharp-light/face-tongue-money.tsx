
import { Icon } from "../../index";

/**
 * A component that renders the `face-tongue-money` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tongue-money?s=sharp-light face-tongue-money}
 * @preview ![face-tongue-money](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-tongue-money.svg)
 */
const FaceTongueMoney: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C132.3 32 32 132.3 32 256c0 77.2 39.1 145.3 98.6 185.6c3.6 17.6 10.8 33.9 20.8 48.1C62.1 449.7 0 360.1 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 104.1-62.1 193.7-151.3 233.7c10-14.2 17.2-30.5 20.8-48.1C440.9 401.3 480 333.2 480 256C480 132.3 379.7 32 256 32zm-95.6 81.8l0-17.8 32 0 0 17.7c4.1 .8 8.1 1.7 11.7 2.7l15.5 4.1-8.2 30.9-15.5-4.1c-7.3-1.9-14.1-3.3-20.1-3.4c-4.4-.1-9.6 1-13 2.9c-1.5 .9-2.1 1.6-2.4 2c-.1 .2-.4 .7-.3 2.1c0 .1 0 .2 0 .2c0 0 0 0 0 0c.1 .2 .8 .9 2.6 1.9c4.1 2.3 9.8 4.1 18.3 6.7l.3 .1c7.3 2.2 17.2 5.2 25.1 10.2c8.9 5.6 17.2 15 17.6 29.4c.4 16.1-8 27.3-18.6 33.5c-4.1 2.4-8.5 4.1-12.9 5.2l0 17.8-32 0 0-18.2c-6.5-1.5-12.5-3.6-17.6-5.3c-1.4-.5-2.7-.9-3.9-1.3l-15.2-5.1 10.1-30.4 15.2 5.1c1.7 .6 3.2 1.1 4.7 1.6c9.2 3.1 15.8 5.3 22.7 5.6c4.9 .2 9.8-.9 12.7-2.6c1.3-.8 1.9-1.5 2.2-1.9c.2-.3 .6-1.2 .6-3l0-.1c0-.6 0-1.3-2.6-3c-3.7-2.4-9.3-4.2-17.6-6.7l-1.5-.4c-7-2.1-16.2-4.9-23.6-9.1c-8.7-5-17.7-13.7-18.6-28c-1-16.7 8.3-27.8 18.7-33.8c4.3-2.5 9-4.2 13.6-5.3zM112 288l48 0 32 0 128 0 32 0 48 0 16 0 0 16c0 51.1-24 96.6-61.3 125.9l-4.3 3.4C342.3 478 303.1 512 256 512s-86.3-34-94.4-78.7l-4.3-3.4C120 400.6 96 355.1 96 304l0-16 16 0zm48 32l-31 0c3.3 26.2 14.4 49.9 31 68.7l0-68.7zm160 0l-32 0-64 0-32 0 0 32 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64l0-64 0-32zm32 0l0 68.7c16.6-18.8 27.8-42.5 31-68.7l-31 0zM306.9 119.2c4.2-2.4 8.7-4.1 13.1-5.2L320 96l32 0 0 17.7c4.3 .8 8.3 1.8 12.1 2.8l15.5 4.1-8.2 30.9-15.5-4.1c-7.3-1.9-14.1-3.3-20.1-3.4c-4.4-.1-9.6 1-13 2.9c-1.5 .9-2.1 1.6-2.4 2c-.1 .2-.4 .7-.3 2.1c0 .1 0 .2 0 .2c0 0 0 0 0 0c.1 .2 .8 .9 2.6 1.9c4 2.3 9.8 4.1 18.3 6.7l.3 .1c7.3 2.2 17.2 5.2 25.1 10.2c8.9 5.6 17.2 15 17.5 29.4c.4 16.1-8 27.3-18.6 33.5c-4.3 2.5-8.8 4.2-13.3 5.3l0 17.7-32 0 0-18.2c-6.3-1.5-12.2-3.5-17.1-5.2c-1.4-.5-2.7-.9-3.9-1.3l-15.2-5.1 10.1-30.4 15.2 5.1c1.7 .6 3.2 1.1 4.7 1.6c9.2 3.1 15.8 5.3 22.7 5.6c4.9 .2 9.8-.9 12.7-2.6c1.3-.8 1.9-1.5 2.2-1.9c.2-.3 .6-1.2 .6-3l0-.1c0-.6 0-1.3-2.6-3c-3.7-2.4-9.3-4.2-17.6-6.7l-1.5-.4c-7-2.1-16.2-4.9-23.6-9.1c-8.7-5-17.7-13.7-18.6-28c-1-16.7 8.3-27.8 18.7-33.8zM268.7 344l0 15.6c3.1 .5 6.2 1.2 8.9 1.9l11.6 2.9-5.8 23.3-11.6-2.9c-5.5-1.4-10.7-2.3-15.3-2.4c-3.5-.1-7.5 .7-10.1 2.1c-1.2 .6-1.6 1.2-1.7 1.3c0 0 0 .1 0 .1s0 .1 0 .3c.2 .2 .8 .6 1.7 1.1c3.1 1.7 7.5 2.9 13.9 4.7l.2 .1s0 0 0 0c5.5 1.6 12.9 3.6 18.8 7.1c6.6 3.9 13.2 10.6 13.5 21.4c.3 12.1-6.4 20.1-14.3 24.4c-3.1 1.7-6.4 2.9-9.7 3.6l0 16.6-24 0 0-17c-4.6-1-9-2.4-12.7-3.6c0 0 0 0 0 0s0 0 0 0c-1-.3-2-.7-3-.9l-11.5-3.6 7.1-22.9 11.5 3.6c1.2 .4 2.4 .8 3.5 1.1c0 0 0 0 0 0s0 0 0 0c6.9 2.2 12 3.8 17.3 3.9c3.8 .1 7.6-.6 9.9-1.9c1-.6 1.4-1 1.5-1.2c.1-.1 .3-.4 .2-1.4l0-.1c-.1-.1-.5-.6-1.7-1.3c-2.9-1.7-7.1-3-13.4-4.8l-1.1-.3c-5.3-1.5-12.1-3.4-17.7-6.4c-6.3-3.4-13.6-9.6-14.2-20.4c-.8-12.5 6.7-20.6 14.4-24.7c3.1-1.6 6.4-2.8 9.6-3.6l0-15.8 24 0z" />
    </Icon>
);

export default FaceTongueMoney;