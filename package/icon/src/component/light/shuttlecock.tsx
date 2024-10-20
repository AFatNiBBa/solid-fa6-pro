
import { Icon } from "../../index";

/**
 * A component that renders the `shuttlecock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttlecock?s=light shuttlecock}
 * @preview ![shuttlecock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shuttlecock.svg)
 */
const Shuttlecock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M241.9 0c-12.1 0-23.2 6.8-28.6 17.7L92.2 259.8 73.4 278.6 33.1 318.9C11.9 340.1 0 368.9 0 398.9C0 461.3 50.7 512 113.1 512c30 0 58.8-11.9 80-33.1l40.2-40.2 18.9-18.9 242.1-121c10.8-5.4 17.7-16.5 17.7-28.6l0-46.1c0-17.7-14.3-32-32-32l-56 0 0-72c0-17.7-14.3-32-32-32l-72 0 0-56c0-17.7-14.3-32-32-32L241.9 0zm67.2 355.6l-75.7 37.8c0 0 0 0 0 0l-46.1-46.1 77.2-77.2 103-32.5-58.4 118zm47.5-23.7l53.3-107.6 .6-.2 69.5 0 0 46.1L356.5 331.8zM288 101.5l-.2 .6L180.2 155.5 241.9 32 288 32l0 69.5zm-13.6 43l-32.5 103-77.2 77.2-46.1-46.1c0 0 0 0 0 0l37.8-75.7 118-58.4zm6.1 87L315.7 120l76.3 0 0 76.3L280.5 231.5zM61.9 335.3L96 301.3 210.7 416l-34.1 34.1L61.9 335.3zm89.7 135c-11.7 6.3-24.9 9.7-38.5 9.7C68.3 480 32 443.7 32 398.9c0-13.6 3.4-26.8 9.7-38.5L151.6 470.3z" />
    </Icon>
);

export default Shuttlecock;