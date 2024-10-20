
import { Icon, generic } from "../../index";

/**
 * A component that renders the `podcast` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podcast?s=duotone podcast}
 * @preview ![podcast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/podcast.svg)
 */
const Podcast: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 92.5 56 171.8 136 206c-.1-.3-.1-.6-.2-1c-3.1-19.2-6-39.8-7.2-57.1C80.1 340.6 48 286.1 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176c0 62.1-32.1 116.6-80.6 148c-1.2 17.2-4 37.9-7.2 57c-.1 .4-.1 .7-.2 1.1C392 395.9 448 316.5 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224zm80 0c0 44 19.8 83.5 50.9 109.9c1.6-5.7 3.9-11.1 7-16.2c5.8-9.7 13.5-17 21.9-22.4c-19.5-17.6-31.8-43-31.8-71.3c0-53 43-96 96-96s96 43 96 96c0 28.3-12.3 53.8-31.8 71.3c8.4 5.4 16.1 12.7 21.9 22.4c3.1 5.1 5.4 10.5 7 16.2C348.2 307.5 368 268 368 224c0-79.5-64.5-144-144-144S80 144.5 80 224z" />
        <path d="M224 168a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM160 355.8c0-35.1 31.1-43.8 64-43.8s64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8z" />
    </Icon>
);

export default Podcast;