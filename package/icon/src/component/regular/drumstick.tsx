
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `drumstick` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=regular drumstick}
 * @preview ![drumstick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTY1LjQzNUM1MTIgMTI1LjQwOSA0OTcuODQzIDg3Ljc1MiA0NzEuMDM2IDU3LjU3OEM0MjIuNjMyIDIuNTg1IDM2MC44ODggLTAuMDAxIDM0Mi42NzggLTAuMDAxQzI5Ny40OTEgLTAuMDAxIDI1NC4wNjkgMTcuODY0IDIyMS44NTYgNDkuNzA1QzE5NS40MTYgNzYuMTM1IDE2MC4xNzYgMTE5LjI1NCAxNjAgMTg5LjE4NlYyNzcuOTEyTDExOS40NjkgMzE4LjMyMkMxMTMuNDQ2IDMyNC40MjUgMTA1LjU2MSAzMjcuMjQ3IDk3LjM3OSAzMjcuMjQ3QzgzLjYyMiAzMjcuMjQ3IDc5LjEgMzIwLjAwNSA2MC4zMzYgMzIwLjAwNUM0MC41MzUgMzIwLjAwNSAyMS40MTQgMzI5Ljc4NSA5Ljk5MSAzNDcuMTk1QzMuMjcgMzU3LjMwNCAwIDM2OC44MjQgMCAzODAuMjg0QzAgNDAyLjcyNCAxNi44NjUgNDM5Ljg2OSA1OS4xNSA0MzkuODY5QzY0LjA3MyA0MzkuODY5IDY5LjAxMiA0MzkuMjk5IDczLjg1MiA0MzguMTg5QzcyLjc0MyA0NDMuMDMgNzIuMTczIDQ0Ny45NjIgNzIuMTczIDQ1Mi44NzZDNzIuMTczIDQ2Ny44ODUgNzcuNDg4IDQ4Mi43MjkgODguOTc1IDQ5NC4zMTFDMTAwLjYzOCA1MDUuOTc2IDExNi4wNzYgNTEyIDEzMS42NTUgNTEyQzE2NC41MzggNTEyIDE5Mi4wMjIgNDg1LjQyMSAxOTIuMDIyIDQ1MS43MDlDMTkyLjAyMiA0MzIuNjkyIDE4NC43ODEgNDI4LjY5NCAxODQuNzgxIDQxNC42OTNDMTg0Ljc4MSA0MDYuNTM1IDE4Ny42MDIgMzk4LjY3IDE5My43MDQgMzkyLjU2OEwyMzQuMTQxIDM1MkgyNjEuNzc4TDI2MS44NjYgMzUxLjkxMkgzMjMuMDA0QzM2MS43NjIgMzUxLjkxMiAzOTUuNzcgMzQxLjc4NyA0MjcuMDI2IDMyMC43OTFDNDgwLjc3NCAyODQuOTIzIDUxMiAyMjYuMTk0IDUxMiAxNjUuNDM1Wk00NjQuNjI2IDE2NC4yMjdDNDY0LjYyNiAyMjUuNDA0IDQxMi4zMjkgMzAzLjkxOCAzMjMuMDA0IDMwMy45MThIMjM5Ljk3OUMyMjIuMzA2IDMwMy45MTggMjA3Ljk3OSAyODkuNTkxIDIwNy45NzkgMjcxLjkxOFYxODkuNjg0QzIwNy45NzkgMTQ4LjY4OSAyMjIuMjMxIDExNy4wNyAyNTUuNzM5IDgzLjY5OUMyODEuMjYxIDU4LjM1MiAzMTEuNTQzIDQ3Ljg0IDM0MC44MDQgNDcuODRDMzk1LjU4MyA0Ny44NCA0NjQuNjI2IDg5LjczOSA0NjQuNjI2IDE2NC4yMjdaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function Drumstick(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 165.435C512 125.409 497.843 87.752 471.036 57.578C422.632 2.585 360.888 -0.001 342.678 -0.001C297.491 -0.001 254.069 17.864 221.856 49.705C195.416 76.135 160.176 119.254 160 189.186V277.912L119.469 318.322C113.446 324.425 105.561 327.247 97.379 327.247C83.622 327.247 79.1 320.005 60.336 320.005C40.535 320.005 21.414 329.785 9.991 347.195C3.27 357.304 0 368.824 0 380.284C0 402.724 16.865 439.869 59.15 439.869C64.073 439.869 69.012 439.299 73.852 438.189C72.743 443.03 72.173 447.962 72.173 452.876C72.173 467.885 77.488 482.729 88.975 494.311C100.638 505.976 116.076 512 131.655 512C164.538 512 192.022 485.421 192.022 451.709C192.022 432.692 184.781 428.694 184.781 414.693C184.781 406.535 187.602 398.67 193.704 392.568L234.141 352H261.778L261.866 351.912H323.004C361.762 351.912 395.77 341.787 427.026 320.791C480.774 284.923 512 226.194 512 165.435ZM464.626 164.227C464.626 225.404 412.329 303.918 323.004 303.918H239.979C222.306 303.918 207.979 289.591 207.979 271.918V189.684C207.979 148.689 222.231 117.07 255.739 83.699C281.261 58.352 311.543 47.84 340.804 47.84C395.583 47.84 464.626 89.739 464.626 164.227Z " />
        </Icon>
    </>
}