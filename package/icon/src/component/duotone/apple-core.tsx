
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apple-core` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-core?s=duotone apple-core}
 * @preview ![apple-core](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/apple-core.svg)
 */
const AppleCore: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M176 80l0 16c0 8.8 7.2 16 16 16l16 0c44.2 0 80-35.8 80-80l0-16c0-8.8-7.2-16-16-16L256 0c-44.2 0-80 35.8-80 80z" />
        <path d="M29.9 462.4c-6.2-6.8-4.4-17.3 2.7-23.1C71.3 407 96 358.4 96 304c0-55.4-25.6-104.7-65.5-137c-8-6.5-9.3-18.7-.7-24.3C43.9 133.4 60.7 128 80 128c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c19.3 0 36.1 5.4 50.3 14.7c8.6 5.6 7.3 17.9-.7 24.3c-40 32.3-65.5 81.7-65.5 137c0 54.4 24.7 103 63.4 135.3c7 5.9 8.8 16.3 2.7 23.1C325.8 493.7 290.9 512 256 512c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3c-34.9 0-69.8-18.3-98.1-49.6z" />
    </Icon>
);

export default AppleCore;