
import { Icon } from "../../index";

/**
 * A component that renders the `school-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-lock?s=sharp-regular school-lock}
 * @preview ![school-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/school-lock.svg)
 */
const SchoolLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M466.7 144l-11.4-6.8L320 56 184.7 137.2 173.3 144 160 144 48 144l0 320 208 0 0-80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 80 0 48L48 512 0 512l0-48L0 144 0 96l48 0 112 0L320 0 480 96l112 0 48 0 0 48 0 128c0-38.1-19-71.7-48-91.9l0-36.1-112 0-13.3 0zM160 192l0 96-64 0 0-96 64 0zm0 128l0 96-64 0 0-96 64 0zm80-128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm96-48l-32 0 0 16 0 32 0 16 16 0 24 0 16 0 0-32-16 0-8 0 0-16 0-16zm192 96c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default SchoolLock;