
import { Icon } from "../../index";

/**
 * A component that renders the `school-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-lock?s=sharp-solid school-lock}
 * @preview ![school-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/school-lock.svg)
 */
const SchoolLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 288l0 64-64 0c-35.3 0-64 28.7-64 64l0 96L0 512 0 96l160 0L320 0 480 96l160 0 0 176c0-61.9-50.1-112-112-112s-112 50.1-112 112l0 16-32 0zM80 192l0 96 64 0 0-96-64 0zm0 128l0 96 64 0 0-96-64 0zm240-56a88 88 0 1 0 0-176 88 88 0 1 0 0 176zm16-120l0 16 16 0 16 0 0 32-16 0-32 0-16 0 0-16 0-32 0-16 32 0 0 16zm192 96c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default SchoolLock;