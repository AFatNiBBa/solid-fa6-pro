
import { Icon } from "../../index";

/**
 * A component that renders the `children` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/children?s=regular children}
 * @preview ![children](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/children.svg)
 */
const Children: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 96A72 72 0 1 0 160 0a72 72 0 1 0 0 144zm0 16c-34.6 0-67.3 16.2-88.2 43.8L12.9 281.5c-8 10.6-5.9 25.6 4.6 33.6s25.6 5.9 33.6-4.6l45.3-59.8L57.2 368.4c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10l16 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 32 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 16 0c7.7 0 15-3.7 19.5-10s5.7-14.3 3.3-21.6L223.5 250.7l45.3 59.8c8 10.6 23.1 12.6 33.6 4.6s12.6-23.1 4.6-33.6l-58.9-77.7C227.3 176.2 194.7 160 160 160zM113.3 352L160 211.9 206.7 352l-93.4 0zM456 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm96 0A72 72 0 1 0 408 72a72 72 0 1 0 144 0zM480 208c5.5 0 10.9 .9 16 2.6L496 336l-32 0 0-125.4c5.1-1.7 10.5-2.6 16-2.6zM464 488l0-104 32 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-223.2 27.7 44c7.1 11.2 21.9 14.6 33.1 7.5s14.6-21.9 7.5-33.1l-48.4-76.9C545.8 177.5 514.1 160 480 160s-65.8 17.5-83.9 46.3l-48.4 76.9c-7.1 11.2-3.7 26 7.5 33.1s26 3.7 33.1-7.5l27.7-44L416 488c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default Children;