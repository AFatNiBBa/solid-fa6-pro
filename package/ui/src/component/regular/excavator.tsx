
import { Icon } from "../../index";

/**
 * A component that renders the `excavator` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/excavator?s=regular excavator}
 * @preview ![excavator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/excavator.svg)
 */
const Excavator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 48l102.9 0c2.7 0 5.2 1.3 6.7 3.6L325.8 160 144 160l0-112zM384 224l0-16 0-25.5c0-14.2-4.2-28.1-12.1-39.9L293.5 24.9C283.1 9.4 265.6 0 246.9 0L136 0C113.9 0 96 17.9 96 40l0 120-48 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-48zm-48-16l0 16 0 48L48 272l0-64 288 0zM80 400l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 464c-17.7 0-32-14.3-32-32s14.3-32 32-32zM0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L80 352c-44.2 0-80 35.8-80 80zm457.9 22.1c-6.4 6.4-9.9 15-9.9 24c0 18.7 15.2 33.9 33.9 33.9l78.1 0c44.2 0 80-35.8 80-80l0-48 0-48 0-16 0-176 0-97.4c0-2.7-.2-5.3-.7-7.8c-3.7-22-22.9-38.8-46-38.8c-11.2 0-22.1 4-30.5 11.4L416 138.7l0 63.5L592 49.7l0 30.6-31.6 27.7L416 234.2l0 63.8L544 186l48-42 0 63.8L592 320 457.9 454.1z" />
    </Icon>
);

export default Excavator;