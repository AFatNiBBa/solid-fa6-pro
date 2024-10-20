
import { Icon } from "../../index";

/**
 * A component that renders the `person-through-window` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-through-window?s=regular person-through-window}
 * @preview ![person-through-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-through-window.svg)
 */
const PersonThroughWindow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 48l0 18.4c0 46.1-28.9 87.3-72.2 103.1C169.5 192.1 128 251.3 128 317.6l0 82.4-80 0L48 48l256 0zm48 0l240 0 0 352-81.7 0L499 385.4l-75.2-97.8c-7.6-9.8-19.3-15.6-31.7-15.6L333 272l-49.4-75.7c42.1-28.9 68.4-77.2 68.4-130L352 48zm97.7 352l-83.8 0 32 48L592 448c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 400c0 26.5 21.5 48 48 48l255.9 0 36.2 53.5c7.4 11 22.4 13.8 33.3 6.4s13.8-22.4 6.4-33.3L297.2 352.5 343.6 320l44.6 0 61.5 80zm-178.3 0L176 400l0-82.4c0-15.7 3.3-30.8 9.4-44.5l86 126.9zm-1.1-87.3l-54.1-79.9c7.3-6 15.4-11 24.2-15l51.9 79.6-22 15.4zM192 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default PersonThroughWindow;