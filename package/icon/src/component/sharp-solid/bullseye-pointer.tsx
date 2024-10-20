
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-pointer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-pointer?s=sharp-solid bullseye-pointer}
 * @preview ![bullseye-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bullseye-pointer.svg)
 */
const BullseyePointer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448c106 0 192-86 192-192s-86-192-192-192S64 150 64 256c0 3.9 .1 7.8 .4 11.7L1.8 286.1C.6 276.2 0 266.2 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256c-10.2 0-20.2-.6-30.1-1.8l18.4-62.6c3.9 .2 7.8 .4 11.7 .4zm2.3-48l19.7-67c33.5-9.6 58-40.4 58-76.9c0-44.2-35.8-80-80-80c-36.5 0-67.4 24.5-76.9 58L112 253.7C113.2 175.2 177.2 112 256 112c79.5 0 144 64.5 144 144c0 78.8-63.2 142.8-141.7 144zM0 320l272-80L192 512l-48-96-1.4-1.4-96 96L1.4 465.4l96-96L96 368 0 320z" />
    </Icon>
);

export default BullseyePointer;