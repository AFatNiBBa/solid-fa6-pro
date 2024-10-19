
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-sharp` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=light star-sharp}
 * @preview ![star-sharp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzcuNzkzIDE4MS42NDFIMzYwLjE3MkwzMDUuMjgzIDEyLjU2NkMzMDIuNTY1IDQuMTg5IDI5NS4yODIgMCAyODggMFMyNzMuNDM2IDQuMTg5IDI3MC43MTcgMTIuNTY2TDIxNS44MjggMTgxLjY0MUgzOC4yMDdDMjAuNjA0IDE4MS42NDEgMTMuMjgzIDIwNC4xODYgMjcuNTI2IDIxNC41NDNMMTcxLjIyNSAzMTkuMDM1TDExNi4zMzYgNDg4LjEwOUMxMTIuMTk0IDUwMC44NzMgMTIyLjMyNSA1MTIgMTMzLjY4MiA1MTJDMTM3LjIzNSA1MTIgMTQwLjkwOCA1MTAuOTEgMTQ0LjMwMSA1MDguNDQzTDI4OCA0MDMuOTUxTDQzMS43IDUwOC40NDNDNDM1LjA5NCA1MTAuOTEyIDQzOC43NjYgNTEyIDQ0Mi4zMTkgNTEyQzQ1My42NzYgNTEyIDQ2My44MDcgNTAwLjg3MyA0NTkuNjY0IDQ4OC4xMDlMNDA0Ljc3NiAzMTkuMDM1TDU0OC40NzUgMjE0LjU0M0M1NjIuNzE3IDIwNC4xODYgNTU1LjM5NyAxODEuNjQxIDUzNy43OTMgMTgxLjY0MVpNMzcwLjc1MyAzMTcuODY3TDQxNi4wOTIgNDU3LjUyOUwyOTcuNDEgMzcxLjIyN0MyOTEuOCAzNjcuMTQ4IDI4NC4yIDM2Ny4xNDggMjc4LjU5IDM3MS4yMjdMMTU5LjkwOCA0NTcuNTI5TDIwNS4yNDcgMzE3Ljg2N0MyMDcuMzg2IDMxMS4yNzggMjA1LjA0MiAzMDQuMDYxIDE5OS40MzkgMjk5Ljk4N0w4MC42OTYgMjEzLjY0MUgyMjcuNDU3QzIzNC4zOSAyMTMuNjQxIDI0MC41MzQgMjA5LjE3NSAyNDIuNjc1IDIwMi41ODFMMjg4IDYyLjk2M0wzMzMuMzI2IDIwMi41ODFDMzM1LjQ2NyAyMDkuMTc1IDM0MS42MTEgMjEzLjY0MSAzNDguNTQ0IDIxMy42NDFINDk1LjMwNUwzNzYuNTYyIDI5OS45ODdDMzcwLjk1OSAzMDQuMDYxIDM2OC42MTQgMzExLjI3OCAzNzAuNzUzIDMxNy44NjdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function StarSharp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M537.793 181.641H360.172L305.283 12.566C302.565 4.189 295.282 0 288 0S273.436 4.189 270.717 12.566L215.828 181.641H38.207C20.604 181.641 13.283 204.186 27.526 214.543L171.225 319.035L116.336 488.109C112.194 500.873 122.325 512 133.682 512C137.235 512 140.908 510.91 144.301 508.443L288 403.951L431.7 508.443C435.094 510.912 438.766 512 442.319 512C453.676 512 463.807 500.873 459.664 488.109L404.776 319.035L548.475 214.543C562.717 204.186 555.397 181.641 537.793 181.641ZM370.753 317.867L416.092 457.529L297.41 371.227C291.8 367.148 284.2 367.148 278.59 371.227L159.908 457.529L205.247 317.867C207.386 311.278 205.042 304.061 199.439 299.987L80.696 213.641H227.457C234.39 213.641 240.534 209.175 242.675 202.581L288 62.963L333.326 202.581C335.467 209.175 341.611 213.641 348.544 213.641H495.305L376.562 299.987C370.959 304.061 368.614 311.278 370.753 317.867Z" />
        </Icon>
    </>
}