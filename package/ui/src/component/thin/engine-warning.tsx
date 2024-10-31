
import { Icon } from "../../index";

/**
 * A component that renders the `engine-warning` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=thin engine-warning}
 * @preview ![engine-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/engine-warning.svg)
 */
const EngineWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M408 80c4.4 0 8-3.6 8-8s-3.6-8-8-8L304 64 200 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0 0 48-136 0-48 0c-26.5 0-48 21.5-48 48l0 72-48 0 0-80c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 344c0 4.4 3.6 8 8 8s8-3.6 8-8l0-80 48 0 0 72c0 26.5 21.5 48 48 48l67.2 0 59 49.2c11.5 9.6 26 14.8 41 14.8L448 448c35.3 0 64-28.7 64-64l0-157.7c0-21.4-10.7-41.4-28.5-53.3l-51.4-34.3c-10.5-7-22.9-10.7-35.5-10.7L336 128l-24 0 0-48 96 0zM80 264l0-16 0-72c0-17.7 14.3-32 32-32l48 0 144 0 32 0 60.6 0c9.5 0 18.7 2.8 26.6 8.1l51.4 34.3c13.4 8.9 21.4 23.9 21.4 39.9L496 384c0 26.5-21.5 48-48 48l-168.8 0c-11.2 0-22.1-3.9-30.7-11.1l-59-49.2c-2.9-2.4-6.5-3.7-10.2-3.7L112 368c-17.7 0-32-14.3-32-32l0-72zm496-56l32 0c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16zm-32 16l0 192c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zM320 352a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-8-168c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 120c0 4.4 3.6 8 8 8s8-3.6 8-8l0-120z" />
    </Icon>
);

export default EngineWarning;