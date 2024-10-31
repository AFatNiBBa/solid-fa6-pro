
import { Icon } from "../../index";

/**
 * A component that renders the `globe` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe?s=regular globe}
 * @preview ![globe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/globe.svg)
 */
const Globe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464c7.4 0 27-7.2 47.6-48.4c8.8-17.7 16.4-39.2 22-63.6l-139.2 0c5.6 24.4 13.2 45.9 22 63.6C229 456.8 248.6 464 256 464zM178.5 304l155 0c1.6-15.3 2.5-31.4 2.5-48s-.9-32.7-2.5-48l-155 0c-1.6 15.3-2.5 31.4-2.5 48s.9 32.7 2.5 48zm7.9-144l139.2 0c-5.6-24.4-13.2-45.9-22-63.6C283 55.2 263.4 48 256 48s-27 7.2-47.6 48.4c-8.8 17.7-16.4 39.2-22 63.6zm195.3 48c1.5 15.5 2.2 31.6 2.2 48s-.8 32.5-2.2 48l76.7 0c3.6-15.4 5.6-31.5 5.6-48s-1.9-32.6-5.6-48l-76.7 0zm58.8-48c-21.4-41.1-56.1-74.1-98.4-93.4c14.1 25.6 25.3 57.5 32.6 93.4l65.9 0zm-303.3 0c7.3-35.9 18.5-67.7 32.6-93.4c-42.3 19.3-77 52.3-98.4 93.4l65.9 0zM53.6 208c-3.6 15.4-5.6 31.5-5.6 48s1.9 32.6 5.6 48l76.7 0c-1.5-15.5-2.2-31.6-2.2-48s.8-32.5 2.2-48l-76.7 0zM342.1 445.4c42.3-19.3 77-52.3 98.4-93.4l-65.9 0c-7.3 35.9-18.5 67.7-32.6 93.4zm-172.2 0c-14.1-25.6-25.3-57.5-32.6-93.4l-65.9 0c21.4 41.1 56.1 74.1 98.4 93.4zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z" />
    </Icon>
);

export default Globe;