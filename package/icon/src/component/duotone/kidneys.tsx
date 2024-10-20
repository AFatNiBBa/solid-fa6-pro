
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kidneys` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kidneys?s=duotone kidneys}
 * @preview ![kidneys](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/kidneys.svg)
 */
const Kidneys: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M196.3 233c-1.4-16.8 3.2-33.5 12.8-47.3l64 32c19 9.5 31 28.9 31 50.1L304 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-220.2c0-3-1.7-5.8-4.4-7.2L196.3 233zM336 267.8c0-21.2 12-40.6 31-50.1l64-32c8.5 12.1 13 26.6 13 41.4c0 2-.1 3.9-.2 5.9l-55.3 27.7c-2.7 1.4-4.4 4.1-4.4 7.2L384 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-220.2z" />
        <path d="M87.7 23.8C106.5 6.3 130.5 0 152 0l3.2 0c19.9 0 39.4 5.9 55.9 16.9l3.4 2.3C240.4 36.5 256 65.6 256 96.7c0 22.8-8.4 44.8-23.5 61.9l-18.2 20.5c-13.4 15.1-19.9 35.1-17.9 55.1l4.1 41.2c5.8 58.1-39.8 108.5-98.2 108.5c-46.5 0-88.2-32.9-95.3-80.9C3.5 278.7 0 248.9 0 224C0 119.6 56.4 52.8 87.7 23.8zm464.6 0C583.6 52.8 640 119.6 640 224c0 24.9-3.5 54.7-7.1 79.1c-7.1 48-48.8 80.9-95.3 80.9c-58.4 0-104-50.4-98.2-108.5l4.1-41.2c2-20.1-4.5-40.1-17.9-55.1l-18.2-20.5C392.4 141.6 384 119.6 384 96.7c0-31.2 15.6-60.2 41.5-77.5l3.4-2.3C445.5 5.9 464.9 0 484.8 0L488 0c21.5 0 45.5 6.3 64.3 23.8z" />
    </Icon>
);

export default Kidneys;