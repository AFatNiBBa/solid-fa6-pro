
import { Icon, generic } from "../../index";

/**
 * A component that renders the `earth-oceania` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-oceania?s=duotone earth-oceania}
 * @preview ![earth-oceania](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/earth-oceania.svg)
 */
const EarthOceania: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm83.4 66.7c-10.6-20.1-2.3-45 18.2-54.7l35.3-16.8c2.3-1.1 4.4-2.8 5.9-4.8l5.3-7c7.2-9.6 18.6-15.3 30.6-15.3s23.4 5.7 30.6 15.3l4.6 6.1c2 2.6 4.9 4.5 8.1 5.1c7.8 1.6 15.7-1.5 20.4-7.9c3.5-4.7 6.9-9.5 10.4-14.2c2-2.8 5.2-4.4 8.7-4.4c4.4 0 8.4 2.7 10 6.8c3.4 8.6 6.7 17.3 10.1 25.9c2.8 7.2 6.7 14 11.5 20.2l18 22.9c2.9 3.7 5.1 7.9 6.7 12.2c.8 2.2 1.3 4.5 1.7 6.8c.2 1.2 .3 2.4 .4 3.6c0 .6 .1 1.1 .1 1.6c0 .5 0 1 0 1.2l0 .5 0 .5c0 .3 0 .8 0 1.5c0 .5-.1 1-.1 1.5c-.1 1.1-.2 2.3-.4 3.5c-.4 2.3-1 4.5-1.7 6.7c-1.5 4.4-3.8 8.5-6.7 12.3c-4 5.1-8 10.3-12.1 15.4c-8.3 10.6-21 16.8-34.4 16.8c-8.4 0-16.6-2.4-23.7-7c-8.5-5.5-16.9-10.9-25.4-16.4c-2.2-1.4-4.5-2.5-6.9-3.4c-13-4.5-26-9-39-13.5c-6.5-2.2-13.6-2.3-20.1-.3c-5.1 1.6-10.2 3.2-15.3 4.9c-18.5 5.9-38.5-2.4-47.5-19.5c-1.1-2.1-2.2-4.2-3.3-6.2zM195.7 169.5c-14.3-6.3-11.9-27.2 3.4-30.3l38.5-7.7c13.1-2.6 26.7 1.5 36.1 10.9L296 164.7c10.1 10.1 2.9 27.3-11.3 27.3c-10 0-19.9 0-29.9 0c-5.6 0-11.1-1.2-16.2-3.4c-14.3-6.3-28.5-12.7-42.8-19zM248 432c0-8.8 7.2-16 16-16l16 0c4.4 0 8.4 1.8 11.3 4.7c1.4 1.4 2.6 3.2 3.4 5.1c.4 1 .7 2 .9 3c.1 .5 .2 1.1 .2 1.6s.1 1 .1 1.8c0 .5 0 1-.1 1.5c-.1 .5-.1 1-.2 1.6c-.2 1-.5 2-.9 3c-.8 1.9-2 3.6-3.4 5.1c-2.9 2.9-6.9 4.7-11.3 4.7l-16 0c-8.8 0-16-7.2-16-16zm108.7-43.3l32-32c6.2-6.2 16.4-6.2 22.6 0c6.2 6.3 6.2 16.4 0 22.6c-10.7 10.7-21.3 21.3-32 32c-6.2 6.2-16.4 6.2-22.6 0c-6.2-6.4-6.2-16.4 0-22.6zm44.1-79.6c-2.8-8.4 1.7-17.4 10.1-20.2s17.4 1.7 20.2 10.1c2.7 8 5.3 16 8 24c.3 .8 .5 1.7 .6 2.5c.1 .6 .2 1.2 .1 1.2l.1 1.3c0 .8 0 1-.1 1.3c0 .4-.1 .8-.1 1.2c-.1 .8-.3 1.6-.6 2.4c-.5 1.6-1.2 3-2.2 4.4c-1.9 2.7-4.6 4.8-8 5.9c-8.4 2.8-17.4-1.7-20.2-10.1c-2.7-8-5.3-16-8-24z" />
        <path d="M273.8 142.5c-9.5-9.5-23-13.6-36.1-10.9l-38.5 7.7c-15.3 3.1-17.6 24-3.4 30.3l42.8 19c5.1 2.3 10.6 3.4 16.2 3.4l29.9 0c14.3 0 21.4-17.2 11.3-27.3l-22.2-22.2zM169.6 343.8l39 13.5c2.4 .8 4.7 2 6.9 3.4L240.9 377c7.1 4.6 15.3 7 23.7 7c13.4 0 26.1-6.2 34.4-16.8L311 351.8c5.8-7.4 9-16.6 9-26s-3.2-18.6-9-26l-17.9-22.9c-4.8-6.1-8.7-12.9-11.5-20.2l-10.1-25.9c-1.6-4.1-5.6-6.8-10-6.8c-3.4 0-6.7 1.6-8.7 4.4l-10.4 14.2c-4.7 6.4-12.7 9.5-20.4 7.9c-3.2-.7-6.1-2.5-8.1-5.1l-4.6-6.1c-7.2-9.6-18.6-15.3-30.6-15.3s-23.4 5.7-30.6 15.3l-5.3 7c-1.6 2.1-3.6 3.7-5.9 4.8l-35.3 16.8c-20.5 9.8-28.8 34.6-18.2 54.7l3.3 6.2c9 17.1 29 25.4 47.5 19.5l15.3-4.9c6.6-2.1 13.6-2 20.1 .3zM248 432c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16zM431.2 298.9c-2.8-8.4-11.9-12.9-20.2-10.1s-12.9 11.9-10.1 20.2l8 24c2.8 8.4 11.9 12.9 20.2 10.1s12.9-11.9 10.1-20.2l-8-24zm-19.9 80.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32z" />
    </Icon>
);

export default EarthOceania;