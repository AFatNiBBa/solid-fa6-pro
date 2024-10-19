
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `baby` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/baby?s=solid baby}
 * @preview ![baby](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjQuODI0IDQxMS43NUwxNTYuMDQ2IDM4MC41MjlMOTYuMDA5IDMyNy40MzdMNDMuNzIzIDM3OS43MTlDMjkuNjI4IDM5My43OTcgMjguMDY1IDQxNi4wNzggNDAuMDA0IDQzMkw4OC4wMDggNDk2Qzk1Ljg1MyA1MDYuNDg0IDEwNy44ODUgNTEyIDEyMC4wNDMgNTEyQzEyOC4zODcgNTEyIDEzNi44MjUgNTA5LjM5MSAxNDQuMDE0IDUwNEMxNjEuNzAzIDQ5MC43NSAxNjUuMjY1IDQ2NS42NzIgMTUyLjAxNCA0NDhMMTI0LjgyNCA0MTEuNzVaTTE5MS45ODMgMTYwQzIzNi4yMzcgMTYwIDI3MS45OSAxMjQuMjUgMjcxLjk5IDgwUzIzNi4yMzcgMCAxOTEuOTgzIDBTMTExLjk3NSAzNS43NSAxMTEuOTc1IDgwUzE0Ny43MjkgMTYwIDE5MS45ODMgMTYwWk0zNzYuNzUgMTQ1QzM2My45OTkgMTI2Ljg3NSAzMzkuMTIxIDEyMi42MjUgMzIwLjk5NSAxMzUuMjVMMjgwLjM2NiAxNjMuNzVDMjI3LjczNiAyMDAuNzUgMTU2LjIyOSAyMDAuNzUgMTAzLjYgMTYzLjc1TDYyLjk3MSAxMzUuMjVDNDQuODQ0IDEyMi42MjUgMTkuOTY3IDEyNyA3LjIxNiAxNDVDLTUuNDEgMTYzLjEyNSAtMS4wMzUgMTg4IDE2Ljk2NyAyMDAuNzVMNTcuNTk1IDIyOS4yNUM2OS43NDEgMjM3LjczMiA4Mi43MzQgMjQ0LjMzOCA5Ni4wMDkgMjUwLjIwNVYyODhIMjg4LjAyN1YyNTAuMjkxQzMwMS4yNzggMjQ0LjQyNCAzMTQuMjQ4IDIzNy44MDcgMzI2LjM3IDIyOS4yNUwzNjYuOTk5IDIwMC43NUMzODUuMTI2IDE4OCAzODkuMzc2IDE2My4xMjUgMzc2Ljc1IDE0NVpNMjg4LjAyNyAzMjcuNDM4TDIyNy45OSAzODAuNTI5TDI1OS4yMTIgNDExLjc1TDIzMi4wMjIgNDQ4QzIxOC43NyA0NjUuNjcyIDIyMi4zMzMgNDkwLjc1IDI0MC4wMjIgNTA0QzI0Ny4yMTEgNTA5LjM5MSAyNTUuNjQ5IDUxMiAyNjMuOTkzIDUxMkMyNzYuMTUxIDUxMiAyODguMTgzIDUwNi40ODQgMjk2LjAyOCA0OTZMMzQ0LjAzMiA0MzJDMzU1Ljk3MSA0MTYuMDc4IDM1NC40MDggMzkzLjc5NyAzNDAuMzEzIDM3OS43MTlMMjg4LjAyNyAzMjcuNDM4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Baby(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M124.824 411.75L156.046 380.529L96.009 327.437L43.723 379.719C29.628 393.797 28.065 416.078 40.004 432L88.008 496C95.853 506.484 107.885 512 120.043 512C128.387 512 136.825 509.391 144.014 504C161.703 490.75 165.265 465.672 152.014 448L124.824 411.75ZM191.983 160C236.237 160 271.99 124.25 271.99 80S236.237 0 191.983 0S111.975 35.75 111.975 80S147.729 160 191.983 160ZM376.75 145C363.999 126.875 339.121 122.625 320.995 135.25L280.366 163.75C227.736 200.75 156.229 200.75 103.6 163.75L62.971 135.25C44.844 122.625 19.967 127 7.216 145C-5.41 163.125 -1.035 188 16.967 200.75L57.595 229.25C69.741 237.732 82.734 244.338 96.009 250.205V288H288.027V250.291C301.278 244.424 314.248 237.807 326.37 229.25L366.999 200.75C385.126 188 389.376 163.125 376.75 145ZM288.027 327.438L227.99 380.529L259.212 411.75L232.022 448C218.77 465.672 222.333 490.75 240.022 504C247.211 509.391 255.649 512 263.993 512C276.151 512 288.183 506.484 296.028 496L344.032 432C355.971 416.078 354.408 393.797 340.313 379.719L288.027 327.438Z" />
        </Icon>
    </>
}