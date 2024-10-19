
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `q` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=thin q}
 * @preview ![q](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzcuMDMzIDQxOS4xMTdDNDIwLjU5NiAzNzguMjI3IDQ0OCAzMjAuMzEyIDQ0OCAyNTZDNDQ4IDEzMi41IDM0Ny41MTYgMzIgMjI0IDMyUzAgMTMyLjUgMCAyNTZTMTAwLjQ4NCA0ODAgMjI0IDQ4MEMyNzcuNDQzIDQ4MCAzMjYuNTI5IDQ2MS4xMjkgMzY1LjA3NiA0MjkuNzczTDQzMy45NTMgNTA5LjI1QzQzNS41MzEgNTExLjA2MiA0MzcuNzY2IDUxMiA0NDAgNTEyQzQ0MS44NTkgNTEyIDQ0My43MTkgNTExLjM0NCA0NDUuMjM0IDUxMC4wMzFDNDQ4LjU3OCA1MDcuMTU2IDQ0OC45MzggNTAyLjA5NCA0NDYuMDQ3IDQ5OC43NUwzNzcuMDMzIDQxOS4xMTdaTTIyNCA0NjRDMTA5LjMxMiA0NjQgMTYgMzcwLjY4OCAxNiAyNTZTMTA5LjMxMiA0OCAyMjQgNDhTNDMyIDE0MS4zMTIgNDMyIDI1NkM0MzIgMzE1LjUgNDA2Ljc1MiAzNjkuMDk0IDM2Ni41NjggNDA3LjA0M0wyMzguMDQ3IDI1OC43NUMyMzUuMTcyIDI1NS40MzggMjMwLjEwOSAyNTUuMDYyIDIyNi43NjYgMjU3Ljk2OUMyMjMuNDIyIDI2MC44NDQgMjIzLjA2MiAyNjUuOTA2IDIyNS45NTMgMjY5LjI1TDM1NC41ODYgNDE3LjY3MkMzMTguODU0IDQ0Ni41OSAyNzMuNDM5IDQ2NCAyMjQgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Q(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M377.033 419.117C420.596 378.227 448 320.312 448 256C448 132.5 347.516 32 224 32S0 132.5 0 256S100.484 480 224 480C277.443 480 326.529 461.129 365.076 429.773L433.953 509.25C435.531 511.062 437.766 512 440 512C441.859 512 443.719 511.344 445.234 510.031C448.578 507.156 448.938 502.094 446.047 498.75L377.033 419.117ZM224 464C109.312 464 16 370.688 16 256S109.312 48 224 48S432 141.312 432 256C432 315.5 406.752 369.094 366.568 407.043L238.047 258.75C235.172 255.438 230.109 255.062 226.766 257.969C223.422 260.844 223.062 265.906 225.953 269.25L354.586 417.672C318.854 446.59 273.439 464 224 464Z" />
        </Icon>
    </>
}