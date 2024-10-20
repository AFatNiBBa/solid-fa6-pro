
import { Icon } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=solid lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64c44.2 0 80 35.8 80 80l0 48-160 0 0-48c0-44.2 35.8-80 80-80zM80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-16 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144zm49.7 280.8L209.6 265c.8-1.6 1.8-3 3-4.3c1.4-1.5 3.1-2.6 5-3.4c2.1-.9 4.2-1.3 6.4-1.3s4.3 .4 6.4 1.3c1.8 .8 3.5 1.9 5 3.4c1.3 1.3 2.3 2.7 3.1 4.3l79.9 159.9c4 7.9 .7 17.5-7.2 21.5s-17.5 .7-21.5-7.2L270.1 400l-92.2 0-19.6 39.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5zM193.9 368l60.2 0L224 307.8 193.9 368z" />
    </Icon>
);

export default LockA;