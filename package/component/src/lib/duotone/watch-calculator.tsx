
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-calculator` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-calculator?s=duotone watch-calculator}
 * @preview ![watch-calculator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/watch-calculator.svg)
 */
const WatchCalculator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144c0-38.7 27.5-71 64-78.4c5.2-1 10.5-1.6 16-1.6l224 0c5.5 0 10.8 .6 16 1.6c36.5 7.4 64 39.7 64 78.4l0 224c0 38.7-27.5 71-64 78.4c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6C27.5 439 0 406.7 0 368L0 144zm64 0l0 32c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 128c-8.8 0-16 7.2-16 16zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm104-88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm104-88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M112.3 0C85.6 0 64 21.6 64 48.3l0 17.3c5.2-1 10.5-1.6 16-1.6l224 0c5.5 0 10.8 .6 16 1.6l0-17.3C320 21.6 298.4 0 271.7 0L112.3 0zM64 464c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-17.6c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6L64 464zm0-192a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm104 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm128-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM64 360a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm128-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm80 24a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
    </Icon>
);

export default WatchCalculator;