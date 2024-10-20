
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d10` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d10?s=duotone dice-d10}
 * @preview ![dice-d10](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dice-d10.svg)
 */
const DiceD10: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 243.8c0 7 6.4 12.1 13.2 10.6l117.6-26.1c5.5-1.2 9.9-5.2 11.7-10.6L209.7 16.3C212.4 8.3 206.4 0 198 0c-3.8 0-7.3 1.7-9.7 4.6L2.4 237C.8 238.9 0 241.3 0 243.8zm174.8-21.5c-2.2 6.7 .2 14.2 6.1 18.2l66.1 45.7c2.7 1.9 5.9 2.8 9.1 2.8s6.4-.9 9.1-2.8l66.1-45.7c5.8-4 8.3-11.5 6.1-18.2L265.4 6.8C264 2.7 260.3 0 256 0s-8 2.7-9.4 6.8L174.8 222.3zm127.5-206l67.2 201.5c1.8 5.3 6.2 9.3 11.7 10.6l117.6 26.1c6.8 1.5 13.2-3.7 13.2-10.6c0-2.5-.8-4.9-2.4-6.8L323.7 4.6C321.4 1.7 317.8 0 314 0c-8.5 0-14.4 8.3-11.7 16.3z" />
        <path d="M0 299.1c0-5.2 3.6-9.8 8.7-10.9l133.1-29.6c4.4-1 8.9-.1 12.6 2.5l78.7 54.5c4.3 3 6.9 7.9 6.9 13.2l0 171.7c0 6.3-5.1 11.5-11.5 11.5c-2.9 0-5.7-1.1-7.8-3.1L3.6 307.3c-2.3-2.1-3.6-5.1-3.6-8.2zM283.5 512c-6.3 0-11.5-5.1-11.5-11.5l0-171.7c0-5.3 2.6-10.2 6.9-13.2l78.7-54.5c3.7-2.5 8.2-3.4 12.6-2.5l133.1 29.6c5.1 1.1 8.7 5.7 8.7 10.9c0 3.1-1.3 6.1-3.6 8.2L291.3 508.9c-2.1 2-4.9 3.1-7.8 3.1z" />
    </Icon>
);

export default DiceD10;