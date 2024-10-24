
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-question?s=sharp-duotone-solid location-question}
 * @preview ![location-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-question.svg)
 */
const LocationQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm104.3-45.7c.2-1.9 .5-3.7 .8-5.5c.7-3.6 1.8-7.2 3.3-10.5c2.8-6.7 6.9-12.7 12-17.8C130.5 102.3 144.5 96 160 96l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8c-10.8 6.2-21.5 12.3-32.3 18.5c0 2.5 0 5 0 7.6c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-7.2 0-14.3 0-21.5c0-4.6 0-9.3 0-13.9c4-2.3 8-4.6 12.1-6.9c14.8-8.5 29.6-17 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1L160 144c-2.2 0-4.2 .9-5.7 2.3c-.7 .7-1.3 1.6-1.7 2.5c-.2 .5-.4 1-.5 1.5c-.1 .3-.1 .5-.1 .8c0 .2 0 .4 0 .8c0 2.2 0 4.4 0 6.5l-48 0c0-2.2 0-4.4 0-6.5l0-.4c0-.6 0-1.6 .1-2.5s.1-1.9 .2-2.8zM168 304l48 0c0 16 0 32 0 48l-48 0c0-16 0-32 0-48z" />
        <path d="M160 96c-30.9 0-56 25.1-56 56l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L168 204.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L160 96zm56 208l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default LocationQuestion;