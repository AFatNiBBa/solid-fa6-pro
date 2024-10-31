
import { Icon } from "../../index";

/**
 * A component that renders the `truck-monster` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-monster?s=thin truck-monster}
 * @preview ![truck-monster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/truck-monster.svg)
 */
const TruckMonster: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 16c-8.8 0-16 7.2-16 16l0 96 231.2 0L387.4 24.9C382.8 19.3 376 16 368.8 16L256 16zM88 128l136 0 0-96c0-17.7 14.3-32 32-32L368.8 0c12 0 23.4 5.4 31 14.8l92 113.2 60.2 0c30.9 0 56 25.1 56 56l0 67.8c2 1.9 3.9 3.9 5.8 5.9c3 3.2 2.9 8.3-.3 11.3s-8.3 2.9-11.3-.3C571.5 236.2 528.1 216 480 216c-59 0-110.8 30.4-140.8 76.4c-1.5 2.3-4 3.6-6.7 3.6l-24.9 0c-2.7 0-5.2-1.4-6.7-3.6C270.8 246.4 219 216 160 216c-48.1 0-91.5 20.2-122.2 52.7c-3 3.2-8.1 3.4-11.3 .3s-3.4-8.1-.3-11.3c1.9-2 3.8-4 5.8-5.9L32 184c0-30.9 25.1-56 56-56zM48 238c31-23.8 69.9-38 112-38c63 0 118.7 31.7 151.8 80l16.4 0c33.1-48.3 88.8-80 151.8-80c42.1 0 81 14.2 112 38l0-54c0-22.1-17.9-40-40-40l-63.9 0-.1 0L232 144 88 144c-22.1 0-40 17.9-40 40l0 54zm106 26c-7.7 0-14.2 5.5-15.7 12.8c-.6 2.9-2.7 5.3-5.6 6.1c-6.8 2-13.2 4.7-19.3 8c-2.6 1.4-5.8 1.3-8.3-.3c-6.2-4.1-14.7-3.4-20.1 2L76.6 301c-5.5 5.5-6.2 13.9-2 20.1c1.6 2.5 1.8 5.7 .3 8.3c-3.3 6.1-6 12.5-8 19.3c-.8 2.9-3.2 5-6.1 5.6C53.5 355.8 48 362.3 48 370l0 12c0 7.7 5.5 14.2 12.8 15.7c2.9 .6 5.3 2.7 6.1 5.6c2 6.8 4.7 13.2 8 19.3c1.4 2.6 1.3 5.8-.3 8.3c-4.1 6.2-3.4 14.7 2 20.1l8.5 8.5c5.5 5.5 13.9 6.2 20.1 2c2.5-1.6 5.7-1.8 8.3-.3c6.1 3.3 12.5 6 19.3 8c2.9 .8 5 3.2 5.6 6.1c1.5 7.3 7.9 12.8 15.7 12.8l12 0c7.7 0 14.2-5.5 15.7-12.8c.6-2.9 2.7-5.3 5.6-6.1c6.8-2 13.2-4.7 19.3-8c2.6-1.4 5.8-1.3 8.3 .3c6.2 4.1 14.7 3.4 20.1-2l8.5-8.5c5.5-5.5 6.2-13.9 2-20.1c-1.6-2.5-1.8-5.7-.3-8.3c3.3-6.1 6-12.5 8-19.3c.8-2.9 3.2-5 6.1-5.6c7.3-1.5 12.8-7.9 12.8-15.7l0-12c0-7.7-5.5-14.2-12.8-15.7c-2.9-.6-5.3-2.7-6.1-5.6c-2-6.8-4.7-13.2-8-19.3c-1.4-2.6-1.3-5.8 .3-8.3c4.1-6.2 3.4-14.7-2-20.1l-8.5-8.5c-5.5-5.5-13.9-6.2-20.1-2c-2.5 1.6-5.7 1.8-8.3 .3c-6.1-3.3-12.5-6-19.3-8c-2.9-.8-5-3.2-5.6-6.1c-1.5-7.3-7.9-12.8-15.7-12.8l-12 0zm-30 4.9c4.5-12.2 16.2-20.9 30-20.9l12 0c13.8 0 25.5 8.7 30 20.9c4.9 1.7 9.7 3.6 14.3 5.9c11.8-5.4 26.2-3.3 36 6.5l8.5 8.5c9.7 9.7 11.9 24.2 6.5 36c2.3 4.6 4.3 9.4 5.9 14.3c12.2 4.5 20.9 16.2 20.9 30l0 12c0 13.8-8.7 25.5-20.9 30c-1.7 4.9-3.6 9.7-5.9 14.3c5.4 11.8 3.3 26.2-6.5 36l-8.5 8.5c-9.7 9.7-24.2 11.9-36 6.5c-4.6 2.3-9.4 4.3-14.3 5.9c-4.5 12.2-16.2 20.9-30 20.9l-12 0c-13.8 0-25.5-8.7-30-20.9c-4.9-1.7-9.7-3.6-14.3-5.9c-11.8 5.4-26.2 3.3-36-6.5l-8.5-8.5c-9.7-9.7-11.9-24.2-6.5-36c-2.3-4.6-4.3-9.4-5.9-14.3C40.7 407.5 32 395.8 32 382l0-12c0-13.8 8.7-25.5 20.9-30c1.7-4.9 3.6-9.7 5.9-14.3c-5.4-11.8-3.3-26.2 6.5-36l8.5-8.5c9.7-9.7 24.2-11.9 36-6.5c4.6-2.3 9.4-4.3 14.3-5.9zM160 336a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm56 40a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zm242.3-99.2c-.6 2.9-2.7 5.3-5.6 6.1c-6.8 2-13.2 4.7-19.3 8c-2.6 1.4-5.8 1.3-8.3-.3c-6.2-4.1-14.7-3.4-20.1 2l-8.5 8.5c-5.5 5.5-6.2 13.9-2 20.1c1.6 2.5 1.8 5.7 .3 8.3c-3.3 6.1-6 12.5-8 19.3c-.8 2.9-3.2 5-6.1 5.6c-7.3 1.5-12.8 7.9-12.8 15.7l0 12c0 7.7 5.5 14.2 12.8 15.7c2.9 .6 5.3 2.7 6.1 5.6c2 6.8 4.7 13.2 8 19.3c1.4 2.6 1.3 5.8-.3 8.3c-4.1 6.2-3.4 14.7 2 20.1l8.5 8.5c5.5 5.5 13.9 6.2 20.1 2c2.5-1.6 5.7-1.8 8.3-.3c6.1 3.3 12.5 6 19.3 8c2.9 .8 5 3.2 5.6 6.1c1.5 7.3 7.9 12.8 15.7 12.8l12 0c7.7 0 14.2-5.5 15.7-12.8c.6-2.9 2.7-5.3 5.6-6.1c6.8-2 13.2-4.7 19.3-8c2.6-1.4 5.8-1.3 8.3 .3c6.2 4.1 14.7 3.4 20.1-2l8.5-8.5c5.5-5.5 6.2-13.9 2-20.1c-1.6-2.5-1.8-5.7-.3-8.3c3.3-6.1 6-12.5 8-19.3c.8-2.9 3.2-5 6.1-5.6c7.3-1.5 12.8-7.9 12.8-15.7l0-12c0-7.7-5.5-14.2-12.8-15.7c-2.9-.6-5.3-2.7-6.1-5.6c-2-6.8-4.7-13.2-8-19.3c-1.4-2.6-1.3-5.8 .3-8.3c4.1-6.2 3.4-14.7-2-20.1l-8.5-8.5c-5.5-5.5-13.9-6.2-20.1-2c-2.5 1.6-5.7 1.8-8.3 .3c-6.1-3.3-12.5-6-19.3-8c-2.9-.8-5-3.2-5.6-6.1c-1.5-7.3-7.9-12.8-15.7-12.8l-12 0c-7.7 0-14.2 5.5-15.7 12.8zM474 248l12 0c13.8 0 25.5 8.7 30 20.9c4.9 1.7 9.7 3.6 14.3 5.9c11.8-5.4 26.2-3.3 36 6.5l8.5 8.5c9.7 9.7 11.9 24.2 6.5 36c2.3 4.6 4.3 9.4 5.9 14.3c12.2 4.5 20.9 16.2 20.9 30l0 12c0 13.8-8.7 25.5-20.9 30c-1.7 4.9-3.6 9.7-5.9 14.3c5.4 11.8 3.3 26.2-6.5 36l-8.5 8.5c-9.7 9.7-24.2 11.9-36 6.5c-4.6 2.3-9.4 4.3-14.3 5.9c-4.5 12.2-16.2 20.9-30 20.9l-12 0c-13.8 0-25.5-8.7-30-20.9c-4.9-1.7-9.7-3.6-14.3-5.9c-11.8 5.4-26.2 3.3-36-6.5l-8.5-8.5c-9.7-9.7-11.9-24.2-6.5-36c-2.3-4.6-4.3-9.4-5.9-14.3c-12.2-4.5-20.9-16.2-20.9-30l0-12c0-13.8 8.7-25.5 20.9-30c1.7-4.9 3.6-9.7 5.9-14.3c-5.4-11.8-3.3-26.2 6.5-36l8.5-8.5c9.7-9.7 24.2-11.9 36-6.5c4.6-2.3 9.4-4.3 14.3-5.9c4.5-12.2 16.2-20.9 30-20.9zM440 376a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm40 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112z" />
    </Icon>
);

export default TruckMonster;