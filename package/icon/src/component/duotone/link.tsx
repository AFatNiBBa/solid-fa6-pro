
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link?s=duotone link}
 * @preview ![link](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/link.svg)
 */
const Link: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M247.6 193.7C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6z" />
        <path d="M60.2 448.8c-56.5-56.5-56.5-148 0-204.5L172.5 132c56.5-56.5 148-56.5 204.5 0c50 50 56.5 128.8 15.4 186.3l-1.1 1.6c-10.3 14.4-30.3 17.7-44.6 7.4s-17.7-30.3-7.4-44.6l1.1-1.6c22.9-32.1 19.3-76-8.6-103.9c-31.5-31.5-82.5-31.5-114 0L105.5 289.5C74 321 74 372 105.5 403.5c27.9 27.9 71.8 31.5 103.8 8.6l1.6-1.1c14.4-10.3 34.4-6.9 44.6 7.4s6.9 34.4-7.4 44.6l-1.6 1.1C189 505.3 110.2 498.7 60.2 448.8z" />
    </Icon>
);

export default Link;