
import { Icon } from "../../index";

/**
 * A component that renders the `truck-monster` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-monster?s=sharp-thin truck-monster}
 * @preview ![truck-monster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/truck-monster.svg)
 */
const TruckMonster: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0l8 0L384 0l3.8 0 2.4 3L491.8 128 600 128l8 0 0 8 0 115.8c2 1.9 3.9 3.9 5.8 5.9l5.5 5.8-11.6 11-5.5-5.8C571.5 236.2 528.1 216 480 216c-59 0-110.8 30.4-140.8 76.4l-2.4 3.6-4.3 0-24.9 0-4.3 0-2.4-3.6C270.8 246.4 219 216 160 216c-48.1 0-91.5 20.2-122.2 52.7l-5.5 5.8-11.6-11 5.5-5.8c1.9-2 3.8-4 5.8-5.9L32 136l0-8 8 0 184 0L224 8l0-8zM48 238c31-23.8 69.9-38 112-38c63 0 118.7 31.7 151.8 80l16.4 0c33.1-48.3 88.8-80 151.8-80c42.1 0 81 14.2 112 38l0-94-103.9 0-.1 0L232 144 48 144l0 94zM380.2 16L240 16l0 112 231.2 0-91-112zM122 248l8 0 60 0 8 0 0 8 0 13.6c3.6 1.3 7 2.7 10.4 4.3l9.6-9.6 5.7-5.7 5.7 5.7 42.4 42.4 5.7 5.7-5.7 5.7-9.6 9.6c1.6 3.4 3 6.8 4.3 10.4l13.6 0 8 0 0 8 0 60 0 8-8 0-13.6 0c-1.3 3.6-2.7 7-4.3 10.4l9.6 9.6 5.7 5.7-5.7 5.7-42.4 42.4-5.7 5.7-5.7-5.7-9.6-9.6c-3.4 1.6-6.8 3-10.4 4.3l0 13.6 0 8-8 0-60 0-8 0 0-8 0-13.6c-3.6-1.3-7-2.7-10.4-4.3l-9.6 9.6-5.7 5.7-5.7-5.7L48.3 445.3l-5.7-5.7 5.7-5.7 9.6-9.6c-1.6-3.4-3-6.8-4.3-10.4L40 414l-8 0 0-8 0-60 0-8 8 0 13.6 0c1.3-3.6 2.7-7 4.3-10.4L48.3 318l-5.7-5.7 5.7-5.7 42.4-42.4 5.7-5.7 5.7 5.7 9.6 9.6c3.4-1.6 6.8-3 10.4-4.3l0-13.6 0-8zm16 16l0 11.3 0 6-5.7 1.7c-6.4 1.9-12.6 4.5-18.4 7.6l-5.2 2.8-4.2-4.2-8-8L65.2 312.4l8 8 4.2 4.2-2.8 5.2c-3.1 5.8-5.7 12-7.6 18.4L65.3 354l-6 0L48 354l0 44 11.3 0 6 0 1.7 5.7c1.9 6.4 4.5 12.6 7.6 18.4l2.8 5.2-4.2 4.2-8 8 31.1 31.1 8-8 4.2-4.2 5.2 2.8c5.8 3.1 12 5.7 18.4 7.6l5.7 1.7 0 6 0 11.3 44 0 0-11.3 0-6 5.7-1.7c6.4-1.9 12.6-4.5 18.4-7.6l5.2-2.8 4.2 4.2 8 8 31.1-31.1-8-8-4.2-4.2 2.8-5.2c3.1-5.8 5.7-12 7.6-18.4l1.7-5.7 6 0 11.3 0 0-44-11.3 0-6 0-1.7-5.7c-1.9-6.4-4.5-12.6-7.6-18.4l-2.8-5.2 4.2-4.2 8-8-31.1-31.1-8 8-4.2 4.2-5.2-2.8c-5.8-3.1-12-5.7-18.4-7.6l-5.7-1.7 0-6 0-11.3-44 0zm22 72a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm56 40a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zM450 248l60 0 8 0 0 8 0 13.6c3.6 1.3 7 2.7 10.4 4.3l9.6-9.6 5.7-5.7 5.7 5.7 42.4 42.4 5.7 5.7-5.7 5.7-9.6 9.6c1.6 3.4 3 6.8 4.3 10.4l13.5 0 8 0 0 8 0 60 0 8-8 0-13.5 0c-1.3 3.6-2.7 7-4.3 10.4l9.6 9.6 5.7 5.7-5.7 5.7-42.4 42.4-5.7 5.7-5.7-5.7-9.6-9.6c-3.4 1.6-6.8 3-10.4 4.3l0 13.6 0 8-8 0-60 0-8 0 0-8 0-13.6c-3.6-1.3-7-2.7-10.4-4.3l-9.6 9.6-5.7 5.7-5.7-5.7-42.4-42.4-5.7-5.7 5.7-5.7 9.6-9.6c-1.6-3.4-3-6.8-4.3-10.4L360 414l-8 0 0-8 0-60 0-8 8 0 13.6 0c1.3-3.6 2.7-7 4.3-10.4l-9.6-9.6-5.7-5.7 5.7-5.7 42.4-42.4 5.7-5.7 5.7 5.7 9.6 9.6c3.4-1.6 6.8-3 10.4-4.3l0-13.6 0-8 8 0zm8 27.3l0 6-5.7 1.7c-6.4 1.9-12.6 4.5-18.4 7.6l-5.2 2.8-4.2-4.2-8-8-31.1 31.1 8 8 4.2 4.2-2.8 5.2c-3.1 5.8-5.7 12-7.6 18.4l-1.7 5.7-6 0L368 354l0 44 11.3 0 6 0 1.7 5.7c1.9 6.4 4.5 12.6 7.6 18.4l2.8 5.2-4.2 4.2-8 8 31.1 31.1 8-8 4.2-4.2 5.2 2.8c5.8 3.1 12 5.7 18.4 7.6l5.7 1.7 0 6 0 11.3 44 0 0-11.3 0-6 5.7-1.7c6.4-1.9 12.6-4.5 18.4-7.6l5.2-2.8 4.2 4.2 8 8 31.1-31.1-8-8-4.2-4.2 2.8-5.2c3.1-5.8 5.7-12 7.6-18.4l1.7-5.7 6 0 11.3 0 0-44-11.3 0-6 0-1.7-5.7c-1.9-6.4-4.5-12.6-7.6-18.4l-2.8-5.2 4.2-4.2 8-8-31.1-31.1-8 8-4.2 4.2-5.2-2.8c-5.8-3.1-12-5.7-18.4-7.6l-5.7-1.7 0-6 0-11.3-44 0 0 11.3zM440 376a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm40 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112z" />
    </Icon>
);

export default TruckMonster;