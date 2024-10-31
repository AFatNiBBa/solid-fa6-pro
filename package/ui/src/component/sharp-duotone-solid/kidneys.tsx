
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kidneys` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kidneys?s=sharp-duotone-solid kidneys}
 * @preview ![kidneys](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kidneys.svg)
 */
const Kidneys: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M193.2 202.8l15.4-17.3 82.1 41.1 13.3 6.6 0 14.8 0 240 0 24-48 0 0-24 0-225.2L196.3 233c-1-10.1-2-20.1-3-30.2zM336 233.2l13.3-6.6 82.1-41.1c5.1 5.8 10.2 11.5 15.4 17.3l-3 30.2L384 262.8 384 488l0 24-48 0 0-24 0-240 0-14.8z" />
        <path d="M87.7 23.8C106.5 6.3 130.5 0 152 0l3.2 0c19.9 0 39.4 5.9 55.9 16.9l3.4 2.3C240.4 36.5 256 65.6 256 96.7c0 22.8-8.4 44.8-23.5 61.9l-39.2 44.1 7.3 72.7c5.8 58.1-39.8 108.5-98.2 108.5c-46.5 0-88.2-32.9-95.3-80.9C3.5 278.7 0 248.9 0 224C0 119.6 56.4 52.8 87.7 23.8zm464.6 0C583.6 52.8 640 119.6 640 224c0 24.9-3.5 54.7-7.1 79.1c-7.1 48-48.8 80.9-95.3 80.9c-58.4 0-104-50.4-98.2-108.5l7.3-72.7-39.2-44.1C392.4 141.6 384 119.6 384 96.7c0-31.2 15.6-60.2 41.5-77.5l3.4-2.3C445.5 5.9 464.9 0 484.8 0L488 0c21.5 0 45.5 6.3 64.3 23.8z" />
    </Icon>
);

export default Kidneys;