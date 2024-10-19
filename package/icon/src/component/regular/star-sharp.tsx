
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-sharp` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=regular star-sharp}
 * @preview ![star-sharp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzcuNzkzIDE4MS42NDFIMzYwLjE3MkwzMDUuMjgzIDEyLjU2NkMzMDIuNTY1IDQuMTg5IDI5NS4yODIgMCAyODggMFMyNzMuNDM2IDQuMTg5IDI3MC43MTcgMTIuNTY2TDIxNS44MjggMTgxLjY0MUgzOC4yMDdDMjAuNjA0IDE4MS42NDEgMTMuMjgzIDIwNC4xODYgMjcuNTI2IDIxNC41NDNMMTcxLjIyNSAzMTkuMDM1TDExNi4zMzYgNDg4LjEwOUMxMTIuMTk0IDUwMC44NzMgMTIyLjMyNSA1MTIgMTMzLjY4MiA1MTJDMTM3LjIzNSA1MTIgMTQwLjkwOCA1MTAuOTEgMTQ0LjMwMSA1MDguNDQzTDI4OCA0MDMuOTUxTDQzMS43IDUwOC40NDNDNDM1LjA5NCA1MTAuOTEyIDQzOC43NjYgNTEyIDQ0Mi4zMTkgNTEyQzQ1My42NzYgNTEyIDQ2My44MDcgNTAwLjg3MyA0NTkuNjY0IDQ4OC4xMDlMNDA0Ljc3NiAzMTkuMDM1TDU0OC40NzUgMjE0LjU0M0M1NjIuNzE3IDIwNC4xODYgNTU1LjM5NyAxODEuNjQxIDUzNy43OTMgMTgxLjY0MVpNMzUxLjk0NyAzMTEuNzZMMzg1LjY2NCA0MTUuNjIxTDI5Ny40MSAzNTEuNDQ0QzI5MS44IDM0Ny4zNjUgMjg0LjIgMzQ3LjM2NSAyNzguNTkgMzUxLjQ0NEwxOTAuMzM2IDQxNS42MjFMMjI0LjA1NCAzMTEuNzZDMjI2LjE5MyAzMDUuMTcxIDIyMy44NDkgMjk3Ljk1MyAyMTguMjQ2IDI5My44NzlMMTI5LjkwNSAyMjkuNjQxSDIzOS4wODRDMjQ2LjAxNyAyMjkuNjQxIDI1Mi4xNjEgMjI1LjE3NSAyNTQuMzAyIDIxOC41ODFMMjg4IDExNC43NzlMMzIxLjY5OSAyMTguNTgxQzMyMy44NCAyMjUuMTc1IDMyOS45ODQgMjI5LjY0MSAzMzYuOTE3IDIyOS42NDFINDQ2LjA5NkwzNTcuNzU1IDI5My44NzlDMzUyLjE1MiAyOTcuOTUzIDM0OS44MDggMzA1LjE3MSAzNTEuOTQ3IDMxMS43NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function StarSharp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M537.793 181.641H360.172L305.283 12.566C302.565 4.189 295.282 0 288 0S273.436 4.189 270.717 12.566L215.828 181.641H38.207C20.604 181.641 13.283 204.186 27.526 214.543L171.225 319.035L116.336 488.109C112.194 500.873 122.325 512 133.682 512C137.235 512 140.908 510.91 144.301 508.443L288 403.951L431.7 508.443C435.094 510.912 438.766 512 442.319 512C453.676 512 463.807 500.873 459.664 488.109L404.776 319.035L548.475 214.543C562.717 204.186 555.397 181.641 537.793 181.641ZM351.947 311.76L385.664 415.621L297.41 351.444C291.8 347.365 284.2 347.365 278.59 351.444L190.336 415.621L224.054 311.76C226.193 305.171 223.849 297.953 218.246 293.879L129.905 229.641H239.084C246.017 229.641 252.161 225.175 254.302 218.581L288 114.779L321.699 218.581C323.84 225.175 329.984 229.641 336.917 229.641H446.096L357.755 293.879C352.152 297.953 349.808 305.171 351.947 311.76Z" />
        </Icon>
    </>
}