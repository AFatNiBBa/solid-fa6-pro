
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-slash?s=light location-slash}
 * @preview ![location-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTkuOTk5IDMyQzQwOC4yMjQgMzIgNDc5Ljk5OSAxMDMuNzc3IDQ3OS45OTkgMTkyQzQ3OS45OTkgMjIzLjYzMSA0NzUuMTc3IDI0My4yODEgNDUzLjI5OCAyNzkuNjg0TDQ3OC42MTEgMjk5LjY2NkM1MDQuODQzIDI1Ni42MzEgNTExLjk5OSAyMzEuNTI5IDUxMS45OTkgMTkyQzUxMS45OTkgODUuOTY5IDQyNi4wMzEgMCAzMTkuOTk5IDBDMjYzLjg2MyAwIDIxMy41MTEgMjQuMjQ2IDE3OC40MDIgNjIuNjZMMjAzLjc5IDgyLjcwM0MyMzIuOTk0IDUxLjY2OCAyNzQuMTI0IDMyIDMxOS45OTkgMzJaTTYzMy45MjIgNDgzLjQzOEwyNS45MjEgMy40MzZDMTguOTk5IC0yLjAzMyA4LjkyMSAtMC44NDYgMy40MzcgNi4wOTJDLTIuMDMyIDEzLjAyOSAtMC44NDUgMjMuMDkyIDYuMDc3IDI4LjU2MUw2MTQuMDc4IDUwOC41NjJDNjE3LjAxNiA1MTAuODc1IDYyMC41MTYgNTEyIDYyMy45ODQgNTEyQzYyOC43MTkgNTEyIDYzMy40MDYgNTA5LjkwNiA2MzYuNTYyIDUwNS45MDZDNjQyLjAzMSA0OTguOTY5IDY0MC44NDQgNDg4LjkwNiA2MzMuOTIyIDQ4My40MzhaTTMxOS45OTkgNDczLjkxOEMxOTUuNjUgMjk0LjEwOSAxNjYuMDQ0IDI2MS43MzQgMTYwLjk1MyAyMTEuOTg2TDEyOC4yOTIgMTg2LjIwM0MxMjguMjM0IDE4OC4xNDYgMTI3Ljk5OSAxOTAuMDQzIDEyNy45OTkgMTkyQzEyNy45OTkgMjY5LjQxIDE1NC45NjggMjkxLjAzNSAzMDAuMjgxIDUwMS42NzZDMzA1LjA0NiA1MDguNTU5IDMxMi41MjMgNTEyIDMxOS45OTkgNTEyUzMzNC45NTMgNTA4LjU1OSAzMzkuNzE4IDUwMS42NzZDMzY1LjYyOCA0NjQuMTE3IDM4Ny42MjQgNDMyLjc4OSA0MDYuNTI3IDQwNS44NjFMMzgxLjMxOCAzODUuOTU5QzM2My45NDkgNDEwLjc0OCAzNDMuODQzIDQzOS40NDMgMzE5Ljk5OSA0NzMuOTE4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M319.999 32C408.224 32 479.999 103.777 479.999 192C479.999 223.631 475.177 243.281 453.298 279.684L478.611 299.666C504.843 256.631 511.999 231.529 511.999 192C511.999 85.969 426.031 0 319.999 0C263.863 0 213.511 24.246 178.402 62.66L203.79 82.703C232.994 51.668 274.124 32 319.999 32ZM633.922 483.438L25.921 3.436C18.999 -2.033 8.921 -0.846 3.437 6.092C-2.032 13.029 -0.845 23.092 6.077 28.561L614.078 508.562C617.016 510.875 620.516 512 623.984 512C628.719 512 633.406 509.906 636.562 505.906C642.031 498.969 640.844 488.906 633.922 483.438ZM319.999 473.918C195.65 294.109 166.044 261.734 160.953 211.986L128.292 186.203C128.234 188.146 127.999 190.043 127.999 192C127.999 269.41 154.968 291.035 300.281 501.676C305.046 508.559 312.523 512 319.999 512S334.953 508.559 339.718 501.676C365.628 464.117 387.624 432.789 406.527 405.861L381.318 385.959C363.949 410.748 343.843 439.443 319.999 473.918Z" />
        </Icon>
    </>
}