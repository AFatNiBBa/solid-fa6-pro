
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drum` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drum?s=duotone drum}
 * @preview ![drum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/drum.svg)
 */
const Drum: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M72 344l0 102.7c14.3 6.4 30.5 12 48 16.7L120 344c0-13.3-10.7-24-24-24s-24 10.7-24 24zm160 32l0 103.5c7.9 .3 15.9 .5 24 .5s16.1-.2 24-.5L280 376c0-13.3-10.7-24-24-24s-24 10.7-24 24zm3.9-154.8c7.3 11.1 22.1 14.2 33.2 6.9c37-24.3 74.1-48.5 111.1-72.8l53-34.7c22.6-14.8 45.3-29.7 67.9-44.5c7-4.6 10.8-12.3 10.8-20.1c0-4.5-1.3-9.1-3.9-13.1c-7.3-11.1-22.1-14.2-33.2-6.9C440 58.8 405.1 81.6 370.2 104.5c-20.9 13.7-41.9 27.4-62.8 41.1c-21.5 14.1-43 28.2-64.6 42.3c-11.1 7.3-14.2 22.1-6.9 33.2zM392 344l0 119.4c17.5-4.7 33.7-10.3 48-16.7L440 344c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M370.2 104.5C335.8 98.7 297 96 256 96C114.6 96 0 128 0 208L0 368c0 31.3 27.4 58.8 72 78.7L72 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 119.4c33 8.9 71.1 14.5 112 16.1L232 376c0-13.3 10.7-24 24-24s24 10.7 24 24l0 103.5c40.9-1.6 79-7.2 112-16.1L392 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 102.7c44.6-19.9 72-47.4 72-78.7l0-160c0-41.1-30.2-69.5-78.8-87.4l-53 34.7c14.7 3.2 27.9 7 39.4 11.5C458.4 181.8 464 197.4 464 208c0 .8-2.7 17.2-46 35.9C379.1 260.7 322 272 256 272s-123.1-11.3-162-28.1C50.7 225.2 48 208.8 48 208c0-10.6 5.6-26.2 44.4-41.3C130.6 151.9 187.8 144 256 144c18 0 35.1 .5 51.4 1.6l62.8-41.1z" />
    </Icon>
);

export default Drum;