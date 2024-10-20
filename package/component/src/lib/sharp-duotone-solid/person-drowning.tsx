
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-drowning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-drowning?s=sharp-duotone-solid person-drowning}
 * @preview ![person-drowning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-drowning.svg)
 */
const PersonDrowning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 423.3l0 64c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9l0-64c-19.3 0-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1z" />
        <path d="M192 32l0 32 0 120.6 145.4 46.3 167.5-38.1 31.2-7.1 14.2 62.4-31.2 7.1L381.9 286.4l-17.1 94c-7.3-1.8-14.6-4.5-21.5-7.7c-12-5.5-21.7-12.5-35.5-22.5c0 0 0 0 0 0L288 336l-18.6 13.4-1.1 .8s0 0 0 0c-13.9 10-23.6 17-35.5 22.5C219.6 378.7 205 383 192 383c-7.2 0-14.9-1.3-22.5-3.5l18.4-129-37.6-12L128 231.4l0-23.4 0-144 0-32 64 0zm64 96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default PersonDrowning;