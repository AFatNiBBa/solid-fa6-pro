
import { Icon } from "../../index";

/**
 * A component that renders the `balloon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloon?s=sharp-thin balloon}
 * @preview ![balloon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/balloon.svg)
 */
const Balloon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.4 427.2s0 0 0 0s0 0 0 0c0 0 0 0 .1 0l.3-.2 1.2-.9c1.1-.9 2.7-2.1 4.8-3.8c4.2-3.4 10.3-8.4 17.6-14.9c14.6-12.9 34.1-31.4 53.5-53.8C331.4 308.1 368 249.9 368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 57.9 36.6 116.1 76.1 161.5c19.4 22.3 38.9 40.8 53.5 53.8c7.3 6.5 13.4 11.5 17.6 14.9c2.1 1.7 3.7 3 4.8 3.8l1.2 .9 .3 .2c0 0 0 0 .1 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0L176 432l32 0 6.4-4.8s0 0 0 0zM210 448L174 448l-21.3 48 78.8 0L210 448zm38.8 48l7.1 16-17.5 0-93 0L128 512l7.1-16L160 440S0 320 0 192C0 86 86 0 192 0S384 86 384 192c0 128-160 248-160 248l24.9 56zM168 96c-39.8 0-72 32.2-72 72l0 8-16 0 0-8c0-48.6 39.4-88 88-88l8 0 0 16-8 0z" />
    </Icon>
);

export default Balloon;