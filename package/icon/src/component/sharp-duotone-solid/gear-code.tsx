
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gear-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear-code?s=sharp-duotone-solid gear-code}
 * @preview ![gear-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gear-code.svg)
 */
const GearCode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M6.3 176.5l59.4 54.1C64.6 238.9 64 247.4 64 256s.6 17.1 1.7 25.4L6.3 335.5l56 97 76.5-24.4c13.4 10.3 28.2 18.9 44 25.4L200 512l112 0 17.2-78.4c15.8-6.5 30.6-15.1 44-25.4l76.5 24.4 56-97-59.4-54.1c1.1-8.3 1.7-16.8 1.7-25.4s-.6-17.1-1.7-25.4l59.4-54.1-56-97-76.5 24.4C359.8 93.6 345 85 329.2 78.4L312 0 200 0 182.8 78.4c-15.8 6.5-30.6 15.1-44 25.4L62.3 79.5l-56 97zM113.4 256l11.3-11.3 40-40c3.8-3.8 7.5-7.5 11.3-11.3c7.5 7.5 15.1 15.1 22.6 22.6c-3.8 3.8-7.5 7.5-11.3 11.3c-9.6 9.6-19.1 19.1-28.7 28.7c9.6 9.6 19.1 19.1 28.7 28.7c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6c-3.8-3.8-7.5-7.5-11.3-11.3c-13.3-13.3-26.7-26.7-40-40c-3.8-3.8-7.5-7.5-11.3-11.3zM221.6 365.2l2.6-15.8 32-192c.9-5.3 1.8-10.5 2.6-15.8c10.5 1.8 21 3.5 31.6 5.3c-.9 5.3-1.8 10.5-2.6 15.8c-10.7 64-21.3 128-32 192c-.9 5.3-1.8 10.5-2.6 15.8c-10.5-1.8-21-3.5-31.6-5.3zM313.4 216c7.5-7.5 15.1-15.1 22.6-22.6c3.8 3.8 7.5 7.5 11.3 11.3c13.3 13.3 26.7 26.7 40 40c3.8 3.8 7.5 7.5 11.3 11.3c-3.8 3.8-7.5 7.5-11.3 11.3c-13.3 13.3-26.7 26.7-40 40c-3.8 3.8-7.5 7.5-11.3 11.3L313.4 296c3.8-3.8 7.5-7.5 11.3-11.3c9.6-9.6 19.1-19.1 28.7-28.7c-9.6-9.6-19.1-19.1-28.7-28.7c-3.8-3.8-7.5-7.5-11.3-11.3z" />
        <path d="M290.4 146.8l-2.6 15.8-32 192-2.6 15.8-31.6-5.3 2.6-15.8 32-192 2.6-15.8 31.6 5.3zM198.6 216l-11.3 11.3L158.6 256l28.7 28.7L198.6 296 176 318.6l-11.3-11.3-40-40L113.4 256l11.3-11.3 40-40L176 193.4 198.6 216zM336 193.4l11.3 11.3 40 40L398.6 256l-11.3 11.3-40 40L336 318.6 313.4 296l11.3-11.3L353.4 256l-28.7-28.7L313.4 216 336 193.4z" />
    </Icon>
);

export default GearCode;