
import { Icon } from "../../index";

/**
 * A component that renders the `globe` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe?s=sharp-light globe}
 * @preview ![globe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/globe.svg)
 */
const Globe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M215.1 476.3c-25-26.4-55.5-67.6-72.9-124.3l-88.6 0c30.3 63.8 90 111.1 161.5 124.3zm2.4-46.5c14 18.5 27.9 32.4 38.5 41.6c10.5-9.3 24.5-23.1 38.5-41.6c15.4-20.3 30.7-46.1 41.7-77.7l-160.3 0c11 31.6 26.3 57.4 41.7 77.7zM160 256c0 23.1 2.5 44.5 6.8 64l178.4 0c4.3-19.5 6.8-40.9 6.8-64s-2.5-44.5-6.8-64l-178.4 0c-4.3 19.5-6.8 40.9-6.8 64zm-25.9-64l-92.8 0c-6 20.3-9.3 41.8-9.3 64s3.2 43.7 9.3 64l92.8 0c-3.9-19.8-6.1-41.1-6.1-64s2.2-44.2 6.1-64zm41.7-32l160.3 0c-11-31.6-26.3-57.4-41.7-77.7c-14-18.5-27.9-32.4-38.5-41.6c-10.5 9.3-24.5 23.1-38.5 41.6c-15.4 20.3-30.7 46.1-41.7 77.7zm202.1 32c3.9 19.8 6.1 41.1 6.1 64s-2.2 44.2-6.1 64l92.8 0c6-20.3 9.3-41.8 9.3-64s-3.2-43.7-9.3-64l-92.8 0zm80.6-32c-30.3-63.8-90-111.1-161.5-124.3c25 26.4 55.5 67.6 72.9 124.3l88.6 0zm-316.3 0c17.5-56.6 47.9-97.9 72.9-124.3C143.5 48.9 83.9 96.2 53.6 160l88.6 0zM296.9 476.3c71.6-13.2 131.2-60.4 161.5-124.3l-88.6 0c-17.5 56.6-47.9 97.9-72.9 124.3zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z" />
    </Icon>
);

export default Globe;