
import { Icon } from "../../index";

/**
 * A component that renders the `falafel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/falafel?s=thin falafel}
 * @preview ![falafel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/falafel.svg)
 */
const Falafel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M178.3 176c-1-2.3-2.3-4.5-4-6.5c-8.3-10.1-8.3-24.9 0-34.9c5.5-6.7 7.6-15.7 5.4-24.2c-3.2-12.8 3-26.1 14.9-31.5c7.8-3.6 13.5-10.8 15.2-19.4c2.5-13 13.8-22.2 26.8-21.8c8.6 .2 16.8-3.8 21.9-10.8c7.8-10.6 21.9-13.8 33.4-7.8c7.6 4 16.7 4 24.4 0c11.5-6.1 25.6-2.8 33.4 7.8c5.2 7 13.4 11 21.9 10.8c12.9-.4 24.2 8.8 26.8 21.8c1.7 8.6 7.3 15.9 15.2 19.4c11.8 5.4 18.1 18.7 14.9 31.5c-2.1 8.5-.1 17.5 5.4 24.2c8.3 10.1 8.3 24.9 0 34.9c-5.5 6.7-7.6 15.7-5.4 24.2c.1 .3 .2 .6 .2 .9c1.2 .3 2.3 .7 3.5 1.1c4.1-1.4 8.3-2.4 12.5-3c-.2-1-.4-2-.6-3c-.9-3.6 0-7.4 2.2-10.1c13.2-16 13.2-39.3 0-55.3c-2.3-2.7-3.1-6.5-2.2-10.1c5.1-20.1-4.7-41.3-23.7-50c-3.1-1.4-5.4-4.3-6.1-7.9C410 35.9 392 21 371 21.6c-3.3 .1-6.5-1.4-8.6-4.3C350 .5 327.3-4.9 308.7 4.9c-3 1.6-6.5 1.6-9.4 0C280.7-4.9 258 .5 245.6 17.3c-2.1 2.9-5.3 4.4-8.6 4.3C216 21 198 35.9 194 56.3c-.7 3.6-3.1 6.5-6.1 7.9c-19 8.7-28.8 29.9-23.7 50c.9 3.6 0 7.4-2.2 10.1c-12.7 15.4-13.2 37.5-1.5 53.4c5.9-1.3 11.9-1.9 17.9-1.7zM240 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM368 384a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm41-207.9c-7.1-.4-14.3 1.1-21 4.6c-2.5 1.3-5.5 1.3-8 0c-17.9-9.4-39.8-4.2-51.8 12c-1.8 2.4-4.6 3.7-7.3 3.7c-20.2-.6-37.5 13.8-41.4 33.4c-.6 3.1-2.6 5.6-5.2 6.8c-18.3 8.4-27.7 28.8-22.8 48.1c.8 3.1 0 6.3-1.9 8.7c-12.8 15.4-12.8 37.9 0 53.3c1.9 2.3 2.7 5.6 1.9 8.7c-4.9 19.4 4.5 39.7 22.8 48.1c2.6 1.2 4.6 3.7 5.2 6.8c3.8 19.6 21.1 34 41.4 33.4c2.8-.1 5.5 1.2 7.3 3.7c12 16.2 33.8 21.4 51.8 12c2.5-1.3 5.5-1.3 8 0c17.9 9.4 39.8 4.2 51.8-12c1.8-2.4 4.6-3.7 7.3-3.7c20.2 .6 37.5-13.8 41.4-33.4c.6-3.1 2.6-5.6 5.2-6.8c18.3-8.4 27.7-28.8 22.8-48.1c-.8-3.1 0-6.3 1.9-8.7c9.3-11.2 11.8-26.2 7.6-39.4c3.1-10.5 2.4-22.5-.9-34.4c-5.3-19.3-17.7-40.1-35.8-58.2s-38.9-30.5-58.2-35.8c-7.5-2-15-3.1-22.1-2.8zM558.4 376.9c-1 2.7-2.4 5.3-4.3 7.6c-5.2 6.3-7.1 14.8-5.1 22.8c3 12-2.9 24.6-14 29.6c-7.4 3.4-12.7 10.2-14.3 18.3c-2.4 12.2-13 20.9-25.2 20.5c-8.1-.2-15.8 3.6-20.7 10.2c-7.3 9.9-20.6 13-31.4 7.3c-7.2-3.8-15.7-3.8-22.9 0c-10.8 5.7-24.1 2.6-31.4-7.3c-4.9-6.6-12.6-10.4-20.7-10.2c-12.2 .3-22.8-8.3-25.2-20.5c-1.6-8.1-6.9-14.9-14.3-18.3c-11.1-5.1-17-17.6-14-29.6c2-8 .1-16.5-5.1-22.8c-7.9-9.5-7.9-23.4 0-32.9c5.2-6.3 7.1-14.8 5.1-22.8c-3-12 2.9-24.6 14-29.6c7.4-3.4 12.7-10.2 14.3-18.3c2.4-12.2 13-20.9 25.2-20.5c8.1 .2 15.8-3.6 20.7-10.2c7.3-9.9 20.6-13 31.4-7.3c.5 .2 .9 .5 1.4 .7c-7.2 12.2-7.3 28.1-3.1 43.6c5.3 19.3 17.7 40.1 35.8 58.2s38.9 30.5 58.2 35.8c16.4 4.5 33.1 4 45.6-4.3zM268.7 432.5c-.5 .2-.9 .5-1.4 .7c-8 3.6-13.8 10.8-15.5 19.4c-2.6 13-14.2 22.2-27.4 21.8c-8.8-.2-17.2 3.8-22.5 10.8c-8 10.6-22.4 13.8-34.2 7.8c-7.8-4-17.1-4-24.9 0c-11.8 6.1-26.2 2.8-34.2-7.8c-5.3-7-13.7-11-22.5-10.8c-13.2 .4-24.8-8.8-27.4-21.8c-1.7-8.6-7.5-15.8-15.5-19.4c-12.1-5.4-18.5-18.7-15.2-31.5c2.2-8.5 .1-17.5-5.5-24.2c-8.5-10.1-8.5-24.9 0-34.9c5.7-6.7 7.7-15.7 5.5-24.2c-3.3-12.8 3.1-26.1 15.2-31.5c8-3.6 13.8-10.8 15.5-19.4c2.6-13 14.2-22.2 27.4-21.8c8.8 .2 17.2-3.8 22.5-10.8c8-10.6 22.4-13.8 34.2-7.8c7.8 4 17.1 4 24.9 0c11.8-6.1 26.2-2.8 34.2 7.8c5.3 7 13.7 11 22.5 10.8c13.2-.4 24.8 8.8 27.4 21.8c1.7 8.6 7.5 15.9 15.5 19.4c2.3 1 4.3 2.3 6.1 3.8c2.3-4.8 5.1-9.4 8.4-13.7c-2.5-1.8-5.2-3.4-8.1-4.7c-3.3-1.5-5.7-4.4-6.4-8c-4.1-20.6-22.5-35.2-43.5-34.6c-3.6 .1-7.1-1.6-9.2-4.4c-12.7-16.8-35.6-22-54.3-12.4c-3.2 1.7-7.1 1.7-10.3 0c-18.7-9.6-41.6-4.4-54.3 12.4c-2.2 2.9-5.6 4.5-9.2 4.4c-21-.6-39.4 14-43.5 34.6c-.7 3.5-3.1 6.5-6.4 8c-19.2 8.6-29.4 29.7-24.2 50.1c.9 3.5 .1 7.1-2.3 9.9c-13.6 16.1-13.6 39.6 0 55.6c2.3 2.7 3.2 6.4 2.3 9.9c-5.3 20.4 5 41.5 24.2 50.1c3.3 1.5 5.7 4.4 6.4 8c4.1 20.6 22.5 35.2 43.5 34.6c3.6-.1 7.1 1.6 9.2 4.4c12.7 16.8 35.6 22 54.3 12.4c3.2-1.7 7.1-1.7 10.3 0c18.7 9.6 41.6 4.4 54.3-12.4c2.2-2.9 5.6-4.5 9.2-4.4c21 .6 39.4-14 43.5-34.6c.7-3.5 3.1-6.5 6.4-8l.7-.3c-2.5-4.8-4.4-9.8-5.8-15zM96 368a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48-80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM439.2 247.2c7-7 19.3-9.4 35.8-4.9c16.2 4.4 34.6 15.2 51.1 31.7s27.3 34.9 31.7 51.1c4.5 16.5 2.1 28.8-4.9 35.8s-19.3 9.4-35.8 4.9c-16.2-4.4-34.6-15.2-51.1-31.7s-27.3-34.9-31.7-51.1c-4.5-16.5-2.1-28.8 4.9-35.8z" />
    </Icon>
);

export default Falafel;