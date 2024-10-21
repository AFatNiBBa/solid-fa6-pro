
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-spiral-eyes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-spiral-eyes?s=sharp-duotone-solid face-spiral-eyes}
 * @preview ![face-spiral-eyes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-spiral-eyes.svg)
 */
const FaceSpiralEyes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm52.4-45.5c-5.5-53.8 41.1-108.1 101-110.5c.3 8 .6 16 1 24c-46.9 1.9-82.2 45-78.1 84.3l0 .3 0 .3c2 40.2 40.8 70.7 76.2 66.7l.3 0 .3 0c36.3-2 62.1-35.7 58.4-64.5l0-.3 0-.3c-2.1-29.8-31.3-51-56-47.5l-.3 0-.3 0c-25.7 2.2-42 26.2-38.9 44.5l.1 .4 0 .4c2.1 19.5 21.5 31.3 35.5 28.6l.3-.1 .3 0c15.2-2.1 21.9-16.3 19.9-24l-.1-.4-.1-.4c-.9-4.3-3.4-7.4-6.5-9.2c-.9-.5-1.8-.9-2.6-1.2c1.7 1.9 2.8 4.2 3 6.9c1 11.1-8.8 15.8-14.1 16.4c-6.6 .8-13.4-2.2-17.6-8.5c-5-6.8-4.4-15.6-1.8-21.8c2.9-7 8.9-13.2 17.8-16c9.2-3.3 19.4-1.3 27.5 3.3c8.3 4.9 15.5 13.4 17.9 24.8c5.8 22.8-11.9 49.5-39.5 53.6c-27.7 5.3-59.8-16.2-63.6-49.2c-5.4-33 21.9-68.7 60.3-72.1c38.2-5.2 79.6 25.8 82.9 69.3c5.4 43.3-31.5 88.2-80.6 91.2c-48.8 5.3-99.6-35.1-102.5-89.1zm54.1 166.4l14.3-7.2 32-16 8.3-4.2 7.7 5.2L208 380.8l39.1-26.1 8.9-5.9 8.9 5.9L304 380.8l39.1-26.1 7.7-5.2 8.3 4.2 32 16 14.3 7.2-14.3 28.6-14.3-7.2-23.7-11.8-40.3 26.8-8.9 5.9-8.9-5.9L256 387.2l-39.1 26.1-8.9 5.9-8.9-5.9-40.3-26.8-23.7 11.8-14.3 7.2-14.3-28.6zm170-169.2c-5.4-43.3 31.5-88.2 80.6-91.2c48.8-5.3 99.6 35.2 102.5 89.1c.3 2.9 .4 5.8 .4 8.7c0 50.8-44.8 99.5-101.4 101.8l-1-24c46.9-1.9 82.2-45 78.1-84.3l0-.3 0-.3c-2-40.2-40.8-70.7-76.2-66.7l-.3 0-.3 0c-36.3 2-62.1 35.7-58.4 64.5l0 .3 0 .3c2.1 29.8 31.3 51 56 47.5l.3 0 .3 0c25.7-2.2 42-26.2 38.9-44.5l-.1-.4c0-.1 0-.2 0-.4c-2.1-19.5-21.5-31.3-35.5-28.6l-.3 .1-.3 0c-15.2 2.1-21.9 16.4-19.9 24c0 .1 .1 .2 .1 .4l.1 .4c1 4.4 3.5 7.4 6.5 9.2c.9 .5 1.8 .9 2.6 1.2c-1.7-1.8-2.7-4.2-3-6.9c-1-11.1 8.8-15.8 14.1-16.4c6.6-.8 13.4 2.2 17.6 8.5c5 6.8 4.4 15.6 1.8 21.8c-2.9 7-8.9 13.2-17.8 16c-9.2 3.3-19.4 1.3-27.5-3.3c-8.3-4.9-15.5-13.4-17.9-24.8c-5.8-22.8 11.9-49.5 39.5-53.6c27.7-5.3 59.8 16.2 63.6 49.2c5.4 33-21.9 68.7-60.3 72.1c-38.4 5-79.6-25.9-82.9-69.3z" />
        <path d="M76.3 208.3c-4.2-39.3 31.1-82.4 78.1-84.3l-1-24c-59.9 2.4-106.5 56.7-101 110.5c2.9 53.9 53.7 94.3 102.5 89.1c49.1-3 85.9-47.9 80.6-91.2c-3.3-43.5-44.7-74.4-82.9-69.3c-38.4 3.4-65.7 39.2-60.3 72.1c3.8 33 35.9 54.5 63.6 49.2c27.7-4.1 45.3-30.8 39.5-53.6c-2.4-11.5-9.5-20-17.9-24.8c-8-4.7-18.3-6.6-27.5-3.3c-8.9 2.8-14.9 9-17.8 16c-2.6 6.3-3.2 15 1.8 21.8c4.2 6.3 11.1 9.2 17.6 8.5c5.3-.6 15.1-5.3 14.1-16.4c-.2-2.7-1.3-5.1-3-6.9c.8 .3 1.7 .6 2.6 1.2c3.1 1.8 5.7 4.9 6.5 9.2l.1 .4 .1 .4c2.1 7.7-4.7 21.9-19.9 24l-.3 0-.3 .1c-14 2.8-33.3-9.1-35.5-28.6l0-.4-.1-.4c-3.1-18.3 13.2-42.4 38.9-44.5l.3 0 .3 0c24.7-3.5 53.8 17.7 56 47.5l0 .3 0 .3c3.7 28.8-22.1 62.5-58.4 64.5l-.3 0-.3 0c-35.4 4-74.2-26.5-76.2-66.7l0-.3 0-.3zm359.3-.5c4.2 39.3-31.1 82.4-78.1 84.3l1 24c59.9-2.4 106.5-56.7 101-110.5c-2.9-53.9-53.7-94.3-102.5-89.1c-49.1 3-85.9 47.9-80.6 91.2c3.3 43.5 44.7 74.4 82.9 69.3c38.4-3.4 65.7-39.2 60.3-72.1c-3.8-33-35.9-54.5-63.6-49.2c-27.7 4.1-45.3 30.8-39.5 53.6c2.4 11.5 9.5 20 17.9 24.8c8 4.7 18.3 6.6 27.5 3.3c8.9-2.8 14.9-9 17.8-16c2.6-6.3 3.2-15-1.8-21.8c-4.2-6.3-11.1-9.2-17.6-8.5c-5.3 .6-15.1 5.3-14.1 16.4c.2 2.7 1.3 5.1 3 6.9c-.8-.3-1.7-.6-2.6-1.2c-3.1-1.8-5.7-4.9-6.5-9.2l-.1-.4-.1-.4c-2.1-7.7 4.7-21.9 19.9-24l.3 0 .3-.1c14-2.8 33.3 9.1 35.5 28.6l0 .4 .1 .4c3.1 18.3-13.2 42.4-38.9 44.5l-.3 0-.3 0c-24.7 3.5-53.8-17.7-56-47.5l0-.3 0-.3c-3.7-28.8 22.1-62.5 58.4-64.5l.3 0 .3 0c35.4-4 74.2 26.5 76.2 66.7l0 .3 0 .3z" />
    </Icon>
);

export default FaceSpiralEyes;