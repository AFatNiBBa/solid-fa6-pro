
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-bounty-hunter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-bounty-hunter?s=sharp-duotone-solid user-bounty-hunter}
 * @preview ![user-bounty-hunter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-bounty-hunter.svg)
 */
const UserBountyHunter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 0l0 16 0 240 0 15.2 0-.8 8.3-128.2c.1-1.7 .2-3.3 .4-5s.3-3.3 .6-4.9c.4-3.3 .9-6.5 1.6-9.7c1.2-6.4 2.9-12.6 4.9-18.6c4-12.1 9.5-23.5 16.3-34l0-38 16 0 0-32L96 0 80 0 64 0zm49.3 252.1l76.8 13.5c-8.4-48.3-43-79.4-71.5-95.4c-1.8 27.3-3.5 54.6-5.3 81.9zM160 464l0 48 128 0 0-48-64-48-64 48zm97.9-198.4l76.8-13.5-5.3-81.9c-28.5 16-63.1 47.1-71.5 95.4z" />
        <path d="M224 48c46 0 85.4 30 99 72L125 120c13.6-42 52.9-72 99-72zm24 123.5l80.5-15.1 6.2 95.7L248 267.4l0-95.9zm-48 0l0 95.9-86.7-15.3 6.2-95.7L200 171.5zM224 0C143.9 0 77.5 62.2 72.3 142.2L64 270.5l-1.4 21.4 21.2 3.7 136 24c2.8 .5 5.6 .5 8.3 0l136-24 21.2-3.7-1.4-21.4-8.3-128.2C370.5 62.2 304.1 0 224 0zM448 512L400 352 48 352 0 512l160 0 0-48 64-48 64 48 0 48 160 0z" />
    </Icon>
);

export default UserBountyHunter;