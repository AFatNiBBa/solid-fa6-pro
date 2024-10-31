
import { Icon } from "../../index";

/**
 * A component that renders the `peanuts` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peanuts?s=sharp-light peanuts}
 * @preview ![peanuts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/peanuts.svg)
 */
const Peanuts: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M306.9 139.9c-.9-12.6-4-25.3-9.4-37.5L264.9 29.2 251.9 0 222.6 13 149.4 45.6c-13.9 6.2-25.9 14.8-35.7 25.2c-9.8 10.3-17.8 22.7-23.3 36.9l-.2 .4c-5.4 14.1-7.7 28.6-7.3 42.9c.2 7.8 1.2 15.7 3.1 23.5c4.2 18.4 6.4 37.9-.4 55.5s-21.4 30.6-36.8 41.5c-6.6 4.5-12.7 9.7-18 15.3c-9.9 10.4-17.9 22.8-23.4 37C2 338-.3 352.6 0 366.9c.4 14.3 3.5 28.8 9.7 42.7l32.6 73.2 13 29.2 29.2-13L96 493.9l0-35L71.5 469.8 39 396.6c-4.4-10-6.7-20.3-6.9-30.5c0 0 0 0 0 0c-.3-10.2 1.4-20.6 5.3-30.8c3.9-10.2 9.7-19.1 16.7-26.5c0 0 0 0 0 0c3.8-4 8.1-7.7 12.9-10.9l.2-.1 .2-.1c16.6-11.7 38-29.3 48.3-56.2s6.2-54.2 1.7-74l-.1-.2-.1-.2c-1.4-5.6-2.1-11.2-2.2-16.7c0 0 0 0 0 0c-.3-10.1 1.4-20.5 5.2-30.6c0 0 0 0 0 0l.1-.3c3.9-10.1 9.6-19 16.6-26.3c0 0 0 0 0 0c7-7.4 15.6-13.6 25.5-18l73.2-32.6 32.6 73.2c8.9 20.1 9 41.8 1.7 60.9c0 0 0 0 0 0l-.2 .6s0 0 0 0c-.4 1.1-.9 2.2-1.4 3.3c10.5-3.8 18.9-8.6 25.2-14.8c5.5-5.5 9.7-13.5 13.4-25.6zM596.2 253.1c27-26.8 43.8-64 43.8-105.1l0-116 0-32L608 0 492 0c-20.1 0-39.2 4-56.7 11.2c-17.4 7.2-33.7 17.8-47.8 32c-14.3 14.2-25 30.7-32.3 48.2c-4.6 11.2-7.6 22.9-10.4 34.6c-5.6 22.4-11.1 44.6-28.6 62.1c-17.6 17.6-42.2 25.4-66.7 30.3c-29.5 5.4-56.1 19-78.1 41c-14.2 14.2-24.9 30.5-32.1 48C132 324.8 128 343.9 128 364l0 116 0 32 32 0 116 0c40.5 0 77.1-16.2 103.8-42.5c22.4-22 36.4-49 41.8-78.9c4.8-24.5 12.6-49.1 30.3-66.7c17.6-17.6 39.7-23.1 62.1-28.6c11.7-2.9 23.4-5.8 34.6-10.4c17.3-7.2 33.5-17.7 47.6-31.7zM160 480l0-116c0-15.8 3.1-30.8 8.8-44.4c0 0 0 0 0 0c5.6-13.6 14-26.4 25.2-37.6c17.3-17.3 38-27.9 61.2-32.1l.2 0 .2 0c25.9-5.1 58.5-14.4 83.1-39c19.1-19.1 27.4-41.3 32.6-60c2.2-7.7 3.8-14.1 5.2-19.9c0 0 0 0 0 0s0 0 0 0c2.5-10.1 4.5-18.2 8.2-27.2c0 0 0 0 0 0c5.7-13.7 14.1-26.6 25.3-37.8c11.1-11.1 23.9-19.4 37.5-25.1c0 0 0 0 0 0C461.2 35.1 476.2 32 492 32l116 0 0 116c0 32.2-13.1 61.3-34.3 82.3c0 0 0 0 0 0c-11.1 11-23.8 19.3-37.3 24.9c0 0 0 0 0 0c-9 3.7-17.1 5.7-27.2 8.2c-5.8 1.4-12.2 3-19.9 5.2c-18.7 5.3-40.9 13.6-60 32.6c-24.6 24.6-33.9 57.2-39 83.1l0 .2 0 .2c-4.3 23.4-15.1 44.4-32.7 61.8l20.9 21.3-20.9-21.3c-21 20.7-49.7 33.3-81.4 33.3l-116 0zM544 147.2a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4zm-64 64a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4zm-224 224a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4zM339.2 416a19.2 19.2 0 1 0 -38.4 0 19.2 19.2 0 1 0 38.4 0zM544 211.2a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4zM339.2 352a19.2 19.2 0 1 0 -38.4 0 19.2 19.2 0 1 0 38.4 0z" />
    </Icon>
);

export default Peanuts;