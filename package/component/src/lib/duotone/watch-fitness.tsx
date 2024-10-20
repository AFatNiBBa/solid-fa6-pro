
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-fitness` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-fitness?s=duotone watch-fitness}
 * @preview ![watch-fitness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/watch-fitness.svg)
 */
const WatchFitness: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144c0-38.7 27.5-71 64-78.4c5.2-1 10.5-1.6 16-1.6l224 0c5.5 0 10.8 .6 16 1.6c36.5 7.4 64 39.7 64 78.4l0 224c0 38.7-27.5 71-64 78.4c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6C27.5 439 0 406.7 0 368L0 144zm80 77.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9C107.4 160 80 187.4 80 221.3z" />
        <path d="M112.3 0L271.7 0C298.4 0 320 21.6 320 48.3l0 17.3c-5.2-1-10.5-1.6-16-1.6L80 64c-5.5 0-10.8 .6-16 1.6l0-17.3C64 21.6 85.6 0 112.3 0zM64 464l0-17.6c5.2 1 10.5 1.6 16 1.6l224 0c5.5 0 10.8-.6 16-1.6l0 17.6c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48zM80 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0L97.9 264.6C86.5 253.1 80 237.5 80 221.3z" />
    </Icon>
);

export default WatchFitness;